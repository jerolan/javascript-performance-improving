const pokemonCardTemplate = document.querySelector("#pokemon-card");
const fragment = document.createDocumentFragment();
const id = new URL(location.href).searchParams.get("id");

function getPokemons() {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((result) => result.json());
}

function render({ name, id, types, weight, height, sprites: { front_default } }) {
  const pokemonCard = pokemonCardTemplate.content.cloneNode(true);
  const type = types.map((t) => t.type.name).join(", ");
  pokemonCard.querySelector(".pokemon-card__name").textContent = name;
  pokemonCard.querySelector(".pokemon-card__number").textContent = `${id}`;
  pokemonCard.querySelector(".pokemon-card__type").textContent = type;
  pokemonCard.querySelector(".pokemon-card__weight").textContent = `${weight} gr`;
  pokemonCard.querySelector(".pokemon-card__height").textContent = `${height} cm`;
  pokemonCard.querySelector(".pokemon-card__image").alt = name;
  pokemonCard.querySelector(".pokemon-card__image").src = front_default;
  fragment.appendChild(pokemonCard);
  pokemonCardTemplate.parentNode.appendChild(fragment);
}

getPokemons().then((content) => render(content));
