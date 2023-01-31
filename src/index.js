const pokemonCardTemplate = document.querySelector("#pokemon-card");
const fragment = document.createDocumentFragment();

function getPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((result) => result.json())
    .then(({ results }) => results);
}

function render(content) {
  content.forEach(({ name }, index) => {
    const number = index + 1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
    const pokemonCard = pokemonCardTemplate.content.cloneNode(true);
    pokemonCard.querySelector(".pokemon-card__name").textContent = name;
    pokemonCard.querySelector(
      ".pokemon-card__number"
    ).textContent = `#${number}`;
    pokemonCard.querySelector(".pokemon-card__image").alt = name;
    pokemonCard.querySelector(".pokemon-card__image").src = url;
    pokemonCard.querySelector(
      ".pokemon-card__link"
    ).href = `/pokemon?id=${number}`;
    fragment.appendChild(pokemonCard);
  });
  pokemonCardTemplate.parentNode.appendChild(fragment);
}

getPokemons().then((content) => render(content));
