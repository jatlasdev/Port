import "./ACard.css";

const ACard = ({ item }) => {
  return (
    <div className="a-card-wrap">
      <span className="icon">
        {item.img}
      </span>
      <div className="title">{item.title}</div>
      <div className="description">{item.text}</div>
    </div>
  );
};

export default ACard;
