const listaSelecaoPokemons =  document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
    
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

    const pokemonAtivo = document.querySelector('.ativo')
    pokemonAtivo.classList.remove('ativo')

    const idPokemonParaAbrir = idPokemonSelecionado
    const pokemonParaAbrir = document.getElementById(idPokemonParaAbrir)
    pokemonParaAbrir.classList.add('ativo')
    })
})