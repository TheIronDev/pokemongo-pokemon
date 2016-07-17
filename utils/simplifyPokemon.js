/**
 * This is a helper script that simplifies the parsed JSON of PokemonGo into a smaller list.
 * Original Source: https://gist.github.com/ryankane/3b3d8c537bc898dae1e65b61d0d7efe9
 */

// Given data === the raw data from that gist...

let pokemon = data.Items.filter(item => {
  return item.Pokemon;
});

let parsedPokemon = pokemon.map(pkmn => {
  const {CandyToEvolve, Encounter, UniqueId, Stats, FamilyId, ParentId} = pkmn.Pokemon;
  const [id, type, name] = UniqueId.split('_');
  const {BaseCaptureRate, BaseFleeRate} = Encounter;
  const {BaseAttack, BaseDefense, BaseStamina} = Stats;
  return {
    name: name.toLowerCase(),
    id: parseInt(String(id).substr(1), 10),
    familyId: parseInt(String(FamilyId).substr(1), 10),
    parentId: parseInt(String(ParentId).substr(1), 10) || null,
    candy: CandyToEvolve || 0,
    captureRate: BaseCaptureRate,
    fleeRate: BaseFleeRate,
    attack: BaseAttack,
    defense: BaseDefense,
    stamina: BaseStamina
  };
});