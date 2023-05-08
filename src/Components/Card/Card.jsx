import "./Card.css";

const Card = ({ image, price, change, name,color }) => {
  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt="IMAGE"
              style={{ width: "70px", height: "70px" }}
              className="Image"
            />
          </span>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:(color)
            }}
          >
            {name}
          </div>
          <div style={{color:"whitesmoke"}}>Bit Coin Price : {price}</div>
          <div style={{color:"whitesmoke"}}>Changing Rate : {change}</div>
          <div style={{color:"whitesmoke"}}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
