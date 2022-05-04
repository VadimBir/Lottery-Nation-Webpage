import { CreditCardOutlined } from "@ant-design/icons";
import { Button, Input, notification } from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
//import AddressInput from "./AddressInput";
// eslint-disable-next-line no-unused-vars
import AssetSelector from "./Wallet/components/AssetSelector";
//import { useERC20Balance } from "../hooks/useERC20Balance";

const styles = {
  card: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  textWrapper: { maxWidth: "80px", width: "100%" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
};

const addrRewardx2 = "0x0000000000000000000000000000000000000001";
const addrRewardx3 = "0x0000000000000000000000000000000000000003";
const addrRewardx10 = "0x0000000000000000000000000000000000000010";

function Transfer() {
  //const { fetchERC20Balance, assets } = useERC20Balance({ chain: "97" });

  function bet1LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("1", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet1LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("1", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet1LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("1", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("5", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("5", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("5", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet10LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("10", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet10LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("10", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet10LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("10", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet50LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("50", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet50LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("50", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet50LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("50", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet100LTx2() {
    console.log("Transaction TTT: ");
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("100", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet100LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("100", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet100LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("100", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet500LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet500LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet500LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet1000LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("1000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet1000LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("1000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet1000LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("1000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2000LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("2000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2000LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("2000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2000LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("2000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2500LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("2500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2500LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("2500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet2500LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("2500", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5000LTx2() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx2,
      amount: Moralis.Units.Token("5000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5000LTx3() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx3,
      amount: Moralis.Units.Token("5000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function bet5000LTx10() {
    Moralis.transfer({
      type: "erc20",
      receiver: addrRewardx10,
      amount: Moralis.Units.Token("5000", "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }

  function betTransactionx2(data) {
    Moralis.transfer({
      type: "erc20",
      receiver: "0x0000000000000000000000000000000000000001",
      amount: Moralis.Units.Token(data, "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function betTransactionx3(data) {
    Moralis.transfer({
      type: "erc20",
      receiver: "0x0000000000000000000000000000000000000003",
      amount: Moralis.Units.Token(data, "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  function betTransactionx10(data) {
    Moralis.transfer({
      type: "erc20",
      receiver: "0x0000000000000000000000000000000000000010",
      amount: Moralis.Units.Token(data, "18"),
      contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
    });
  }
  const { Moralis } = useMoralis();
  const [receiver] = useState();
  const [asset] = useState();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
  }, [asset, amount, receiver]);

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "bottomRight",
      message,
      description,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  async function transfer() {
    const { amount, receiver, asset } = tx;

    let options = {};

    switch (asset.token_address) {
      case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
        options = {
          native: "native",
          amount: Moralis.Units.ETH(amount),
          receiver,
          awaitReceipt: false,
        };
        break;
      default:
        options = {
          type: "erc20",
          amount: Moralis.Units.Token(amount, asset.decimals),
          receiver,
          contractAddress: "0x6e9F21394c65BC540Ed6527DE968800c9C609920",
          awaitReceipt: false,
        };
    }

    setIsPending(true);
    const txStatus = await Moralis.transfer(options);

    txStatus
      .on("transactionHash", (hash) => {
        openNotification({
          message: "🔊 New Transaction",
          description: `${hash}`,
        });
        console.log("🔊 New Transaction", hash);
      })
      .on("receipt", (receipt) => {
        openNotification({
          message: "📃 New Receipt",
          description: `${receipt.transactionHash}`,
        });
        console.log("🔊 New Receipt: ", receipt);
        setIsPending(false);
      })
      .on("error", (error) => {
        openNotification({
          message: "📃 Error",
          description: `${error.message}`,
        });
        console.error(error);
        setIsPending(false);
      });
  }

  // I cant try to use this | onSelect={} | it might be able to help with select menu etc

  return (
    <div style={{ width: "66%" }}>
      <div style={styles.card}>
        <div style={styles.tranfer}>
          <div style={styles.header}>
            <h1>Gambling Zone</h1>
          </div>
          <div>
            <div>
              <b>Quick bets:</b>
            </div>
            <div>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1LTx2()}
              >
                <b>1</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5LTx2()}
              >
                <b>5</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet10LTx2()}
              >
                <b>10</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet50LTx2()}
              >
                <b>50</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet100LTx2()}
              >
                <b>100</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet500LTx2()}
              >
                <b>500</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1000LTx2()}
              >
                <b>1000</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2000LTx2()}
              >
                <b>2000</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2500LTx2()}
              >
                <b>2500</b>
                <i>LN</i> x2 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5000LTx2()}
              >
                <b>5000</b>
                <i>LN</i> x2 Reward
              </button>
            </div>
            <div>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1LTx3()}
              >
                <b>1</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5LTx3()}
              >
                <b>5</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet10LTx3()}
              >
                <b>10</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet50LTx3()}
              >
                <b>50</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet100LTx3()}
              >
                <b>100</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet500LTx3()}
              >
                <b>500</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1000LTx3()}
              >
                <b>1000</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2000LTx3()}
              >
                <b>2000</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2500LTx3()}
              >
                <b>2500</b>
                <i>LN</i> x3 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5000LTx3()}
              >
                <b>5000</b>
                <i>LN</i> x3 Reward
              </button>
            </div>
            <div>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1LTx10()}
              >
                <b>1</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5LTx10()}
              >
                <b>5</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet10LTx10()}
              >
                <b>10</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet50LTx10()}
              >
                <b>50</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet100LTx10()}
              >
                <b>100</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet500LTx10()}
              >
                <b>500</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet1000LTx10()}
              >
                <b>1000</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2000LTx10()}
              >
                <b>2000</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet2500LTx10()}
              >
                <b>2500</b>
                <i>LN</i> x10 Reward
              </button>
              <button
                style={{ width: "10%", height: "50px" }}
                onClick={() => bet5000LTx10()}
              >
                <b>5000</b>
                <i>LN</i> x10 Reward
              </button>
            </div>
          </div>
          <div style={styles.select}>
            <div style={styles.textWrapper}></div>
          </div>
          <div style={styles.select}>
            <div style={styles.textWrapper}>
              <Text strong>Amount:</Text>
            </div>
            <Input
              size="large"
              prefix={<CreditCardOutlined />}
              onChange={(e) => {
                setAmount(`${e.target.value}`);
              }}
            />
          </div>
          <div style={styles.select}>
            <div style={styles.textWrapper}></div>
          </div>
          <br />
          <div>
            <div />
            <button
              style={{ width: "33.3%", height: "100px" }}
              onClick={() => betTransactionx2(amount)}
            >
              Gambling with x2 Reward
            </button>
            <button
              style={{ width: "33.3%", height: "100px" }}
              onClick={() => betTransactionx3(amount)}
            >
              Gambling with x3 Reward
            </button>
            <button
              style={{ width: "33.3%", height: "100px" }}
              onClick={() => betTransactionx10(amount)}
            >
              Gambling with x10 Reward
            </button>
          </div>
          <Button
            type="primary"
            size="large"
            loading={isPending}
            style={{ width: "100%", marginTop: "25px" }}
            onClick={() => transfer()}
            disabled={!tx}
          >
            Transfer💸
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
