import "./NavBar.css";
import {TbCoinRupee} from "react-icons/tb"


const NavBar = () => {
  return (
    <div className="Container">
    <div className="MainNavContainer">
      <h1 style={{display:"flex"}}><span style={{ transform:"rotate(-30deg)"}}><TbCoinRupee size={50} style={{color:"gold"}}/></span> Crypto Coins</h1>
      <div className="CryptoContainer">
        <h2 style={{cursor:"pointer"}}>Chart Data</h2>
        <div>
          <input
            type="text"
            placeholder="Crypto Search..."
            style={{
              width: "250px",
              padding: "2.8%",
              borderRadius: "0.5rem",
              outline: "none",
              fontSize:"20px"
            }}
            className="CryptoInput"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
