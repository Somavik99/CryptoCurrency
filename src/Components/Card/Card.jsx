import "./Card.css"

const Card = ({image,btcPrice,change}) => {
  return (
    <div>
      <div>
        <div className="Card">
            <img src={image} alt="IMAGE" style={{width:"50px",height:"50px"}}/>
            <div  style={{color:"black"}}>{name}</div>
          <div>Bit Coin Price : {btcPrice}</div>
          <div>Changing Rate : {change}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
