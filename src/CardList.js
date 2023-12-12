import Card from "./Card";
const CardList = ({ data }) => {
  return (
    <div className="card-component">
      {data.map((robot, i) => {
        return <Card key={i} robot={robot} />;
      })}
    </div>
  );
};
export default CardList;
