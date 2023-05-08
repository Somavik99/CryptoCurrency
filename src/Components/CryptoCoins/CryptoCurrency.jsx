import "./CryptoCurrency.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { GridLoader } from "react-spinners";

const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const ViewCrypto = () => {
    
      setTimeout(async () => {
        await axios.get("https://api.coinranking.com/v2/coins?limit=150").then(
          (res) => {
            console.log(res.data);
            setCrypto(res.data.data.coins);
          },
          [5000]
        );
        setIsLoading(false);
      }).
    catch( (err) =>{
      console.log(err);
    })
  };

  useEffect(() => {
    ViewCrypto();
  }, []);

  return (
    <div>
      {isLoading ? (
        <GridLoader color="#6e36d6" />
      ) : (
        <>
         
          {crypto.map((CryptoCoins, index) => {
            return (
              <div key={index} className="CoinsCard">
                <Card
                  image={CryptoCoins.iconUrl}
                  btcPrice={CryptoCoins.btcPrice}
                  change={CryptoCoins.change}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default CryptoCurrency;
