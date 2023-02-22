/**
 * rule: water > fire > grass (type)
 * later one wins the previous one for the same pokemon
 */

const pkmTypeForces = {
  water: 2,
  fire: 1,
  grass: 0,
};

export const getWinner = (ids, pokemonItems) => {
  const firstPkm = pokemonItems.find((item) => item.id === ids[0]);
  const secondPkm = pokemonItems.find((item) => item.id === ids[1]);

  const firstPkmType = firstPkm.types[0]?.type.name;
  const secondPkmType = secondPkm.types[0]?.type.name;

  if (firstPkmType === secondPkmType) {
    return secondPkm;
  }

  return pkmTypeForces[firstPkmType] > pkmTypeForces[secondPkmType]
    ? firstPkm
    : secondPkm;
};
