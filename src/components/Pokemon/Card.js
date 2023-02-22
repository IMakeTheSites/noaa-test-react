const Card = ({ name, sprites, types, abilities, height, width }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{height}</div>
    </div>
  );
};

export default Card;
