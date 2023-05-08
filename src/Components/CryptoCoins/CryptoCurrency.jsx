import "./CryptoCurrency.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { GridLoader } from "react-spinners";

const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ViewCrypto = async () => {
    await axios
      .get("https://api.coinranking.com/v2/coins?limit=200")
      .then((res) => {
        console.log(res.data);
        setCrypto(res.data.data.coins);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      ViewCrypto();
    }, 3500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="Loading">
          <GridLoader color="#6e36d6" />
        </div>
      ) : (
        <div className="Card_container">
          {crypto.map((CryptoCoins, index) => {
            return (
              <div key={index} >
                <Card
                  image={CryptoCoins.iconUrl}
                  price={Math.round(CryptoCoins.price)}
                  change={CryptoCoins.change}
                  name={CryptoCoins.name}
                  color={CryptoCoins.color}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CryptoCurrency;
