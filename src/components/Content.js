import logements from "../api/logements.json";
import Card from "./Card";
import "../styles/content.css";

const Content = () => {
  return (
    <div className="content">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Content;
