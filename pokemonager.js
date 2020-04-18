(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      //console.log("@@@@@@ HELLO WORLD!");
      const url =`https://pokeapi.co/api/v2/pokemon?limit=${n}`;    
      return fetch(url)
      .then((response) => 
        response.json())
      .then(function(pokemon){
        //console.log(pokemon)
        let pokeNames = pokemon.results.map(poke => poke.name);
        //console.log(pokeNames)
        return pokeNames;
      })
      .catch((err) => {
        //console.error("Error", err);
      })
        //return hello;
    }

    // This should return an array of all the Pokemon that are under a particular weight.
  async findUnderWeight(weight) {
    //console.log("#### HELLO WORLD 2!");
    let pokemonPromise = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    let resultsData = await pokemonPromise.json()
    resultsData = resultsData.results
    //console.log("resultsData",resultsData)
    let urlArray = resultsData.map(pokeUrl => pokeUrl.url)
    //console.log(urlArray)
    let resultArray = [];

    for(let url of urlArray){
      let pokePromise2 = await fetch(url);
      let resultsData2 = await pokePromise2.json()
      //console.log(resultsData2)
      if(resultsData2.weight < weight){
        resultArray.push(resultsData2)
      }
      }

      console.log(resultArray)
      return(resultArray)

    // let pokeArray = [];
    // const url ='https://pokeapi.co/api/v2/pokemon?limit=10';
    // return fetch(url)
    // .then((response) =>
    //   response.json())
    // .then((pokemon) => {
    //   let pokeURLs = pokemon.results.map(pokeURL => pokeURL.url);
    //   console.log("PokeURL",pokeURLs)
    //   //return pokeNames;
    //   console.log(pokeURLs[0])
    //   for(let i = 1; i<=10; i++){
    //     console.log("pokeurl[i]",pokeURLs[i])
    //     return fetch(pokeURLs[i])
    //     .then((response) =>
    //     response.json())
    //     .then((pokeWeight) => {
    //       console.log("pokeWeight",pokeWeight)
    //       pokeArray.push(pokeWeight)
    //     }) 
    //   }
    //   console.log("Pokearray", pokeArray)
    // })
    // .then((URL) => {
    //   URL.json()}
    // .then((poke1) => {
    //   let pokeWeight = poke1.weight;
    //   console.log("Weight is ", weight, pokeWeight)
    // }) 
    // .catch((err) => {
    //   console.log("Error", err);
    // })
    }
  }

// let g = new Pokemonager;
// console.log("TESTTTTTT", g.findUnderWeight(140))

  window.Pokemonager = Pokemonager;
})();


//module.exports = Pokemonager;