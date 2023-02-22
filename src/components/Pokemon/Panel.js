import Card from "./Card";

const Panel = ({ pokemonItems }) => {
  return (
    <div className="panel">
      Panel
      {pokemonItems.map((item) => (
        <Card {...item} key={`pokemon-${item.id}`} />
      ))}
    </div>
  );
};

export default Panel;
