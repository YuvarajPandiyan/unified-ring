import "./card.scss";

type props = {
  imgPath: string;
  cardTitle: string;
};

export const Card = ({ cardTitle, imgPath }: props) => {
  return (
    <div className="card-container">
      <img src={`image/card/${imgPath}.png`} alt={imgPath} className='card-img'/>
      <p className="title">{cardTitle}</p>
    </div>
  );
};
