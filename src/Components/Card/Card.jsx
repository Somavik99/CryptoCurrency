import "./Card.css";

const Card = ({ image, price, change, name }) => {
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
            }}
          >
            {name}
          </div>
          <div>Bit Coin Price : {price}</div>
          <div>Changing Rate : {change}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
