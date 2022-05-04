// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "cconsole.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.4.2/access/Ownable.sol";

contract MyTokenTest is ERC20, ERC20Burnable, Ownable {
    uint256 tokenPrice = 10 ; // about 25 cent // 14 zeroes of 18
    uint256 tokenSellCap = 500000 ; 
    uint256 public soldAmount = 1 * cutDecimals;
    uint256 public toSellStock = 500000 * cutDecimals; 

    address private ownerAddr;
    address sender = msg.sender;
    uint256 toFreezeAmount = 0;

    //these addr needs to be converted into array 
    address gamblingWallet_x2 = 0x0000000000000000000000000000000000000001;
    address gamblingWallet_x3 = 0x0000000000000000000000000000000000000003;
    address gamblingWallet_x10 = 0x0000000000000000000000000000000000000010;
    uint256 cutDecimals = 10 ** 18; // mult by this would give full coins
    
    constructor() ERC20("LotoNation", "LOTO") 
    { 
        ownerAddr = msg.sender;
        _mint(msg.sender, 1000000 * cutDecimals); // <= this 10 power 18 gives one single coin, in remix when bet is 1000 it means 0.000..1000// still confused how this works
        _mint(address(this), 5000 * cutDecimals);
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * cutDecimals);
    }
    

    event Sell(address _buyer, uint256 _amount);
    event Mint(address _buyer, uint256 _amount);
    
    function buyTokens() public payable {
        console.log("stock: ", soldAmount * cutDecimals);
        console.log("buyingNow: ", ((msg.value/tokenPrice) * cutDecimals));
        require(msg.value > 0);
        require(msg.value >= tokenPrice);
        require(soldAmount<=500000);
        soldAmount += msg.value/tokenPrice;
        console.log("stock: ", soldAmount * cutDecimals);
        console.log("Token To Gen: ", msg.value/tokenPrice);
        _mint(msg.sender, msg.value/tokenPrice * cutDecimals); // I was trying to make a transfer form but it errors out, 

    }
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, 'Address: insufficient balance');

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{value: amount}('');
        require(success, 'Address: unable to send value, recipient may have reverted');
    }
    function myFunc() external payable {
        require(msg.value == 1 ether, 'Need to send 1 ETH');
    }


// bug is that amount is burning so its zero 

// the bet, rewardSystem and randomiser are the LTS and they do the job, burn and mit
    function bet(address addr, uint256 bamount, uint256 chance ) public { // the way how this func is made it would work only on remix and addr needs to be users, basically this func would need to be modded to make it workable outside of remix
        bool boolean;
        uint256 amount = bamount; // was testing this, need to remove it to save some EG EthGas
        // some burned, then gamble, if win mint back with reward and if lost mint the reward to another address
        _burn(addr, bamount); // this does burn some 
        console.log("some should have burned");

        uint256 winNum = random(100); //40; //randomiser(); // --------------------- here I need to use the rand func to take the rand number 
        if (chance > winNum) {
            boolean = false; // is Lost bool
        } else {
            boolean = true; // is Won bool 
        }
        console.log("Have result");
        rewardSystem(addr, boolean, chance, amount); // here we know if user won or not so we need to do the aftermath, either mint his reward or mint the profit to the system
    }

    // this produces some random number but needs testing 
    function random(uint number) public view returns(uint){
        return uint(keccak256(abi.encodePacked(block.timestamp,block.difficulty,  
        msg.sender))) % number;
    }


    function rewardSystem(address addr ,bool boolean, uint256 chance, uint256 amount) private{ // solidity seems not to have float points ... 
        console.log("tag 1");
        if (boolean == true ){
            console.log("tag true");
            console.log("eQ", (amount/chance)*100 ); // $$$ have to change from 50 to chance to allow other probabilities and other rewards

            
           _mint(addr, (amount/chance)*100 );  // amount+amount*(1/(chance/100)) <= (issue - chance is transformed to float and solidity has no floats, but error that is gives does not say it)this is the formula on how the reward is going to be calc ed
           console.log("tag after mint back");
        } else {
            console.log("tag else ");
            _mint(owner(), amount/20); // div by 20 coz it == to 5% and there are no floats
        }
        console.log("tag");
    }
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        // need to do one big if check for if it is a designated address, this way whne person is not betting there would be only one if check, and if its a gambling address there would be other checks for which one, more as a switch case
        if (recipient==gamblingWallet_x2){
            bet(msg.sender, amount, 50); // here chances are manually entered but this, with addr should be converted to array on top 
            return true;
        }else if (recipient==gamblingWallet_x3){
            bet(msg.sender, amount, 33);
            return true;
        }else{
            _transfer(_msgSender(), recipient, amount);
            return true;
        }
    }
    function LMint( uint256 amount) public  { // this func allows to mint coins to a current address but possible to pass how much to mint, non owner can use it
        
        sender = msg.sender;
        _mint(sender, amount * cutDecimals);
    }
    function LGiveOneK() public  { // this func allows to mint coins to a current address and give 1k, non owner can use it
        uint256 amount = 1000;
        sender = msg.sender;
        console.log("giving 1k");
        _mint(sender, amount * cutDecimals);
    } 
    function balanceOfNowWallet() public view returns (uint256) {  // a finding == when making this working func, it would be yellow, yellow colour of means that it is modifyable, it can do some changes, when there is a pure parameter after public, it makes a func blue, indicating that it is not modifying func
        return balanceOf(msg.sender); 
    } 

}

