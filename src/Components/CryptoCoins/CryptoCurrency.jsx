import "./CryptoCurrency.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { GridLoader } from "react-spinners";
import LoadingAnimation from "./Loading/LoadingAnimation";


const CryptoCurrency = () => {
  const [crypto, setCrypto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadAnimation, setLoadAnimation]= useState(true);
  const [page, setPage] = useState(1);

  const ViewCrypto = async () => {
    await axios
      .get(`https://api.coinranking.com/v2/coins?limit=20&_page=${page}`)
      .then((res) => {
        console.log(res.data);
        setCrypto((prev) => [...prev, ...res.data.data.coins]);
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
  }, [page]);

  const handleInfiniteScrolling = async () => {

    try {
    
        setTimeout(()=>{
          if (
            window.innerHeight +document.documentElement.scrollTop  + 1 >=
            document.documentElement.scrollHeight 
          ) {
            setPage((prev) => prev + 1);
            setLoadAnimation(false)
          }
          },4000)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScrolling);
    return ()=> window.removeEventListener("scroll",handleInfiniteScrolling)
  }, []);

  return (
    <>
    <div>
      {isLoading ? (
        <div className="Loading">
          <GridLoader color="#6e36d6" />
        </div>
      ) : (
        <div className="Card_container">
          {crypto.map((CryptoCoins, index) => {
            return (
              <div key={index}>
                <Card
                  image={CryptoCoins.iconUrl}
                  price={Math.round(CryptoCoins.price)}
                  change={CryptoCoins.change}
                  name={CryptoCoins.name}
                  color={CryptoCoins.color}
                  coinrankingUrl={CryptoCoins.coinrankingUrl}
                />
                   
              </div>
          
            );
          })}
        </div>
      )}
 
    </div>
    {loadAnimation && <LoadingAnimation className="Load"  />}
</>
  );
};

export default CryptoCurrency;
