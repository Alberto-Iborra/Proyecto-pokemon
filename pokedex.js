const url = `https://pokeapi.co/api/v2/pokemon/`
const filterPokemons=[]
const getPokemon = async ()=>{
  for (let i = 1; i <= 151; i++){
    fetch(url + i)
      .then((res) => res.json())
      .then((pokemon) => {
        printCard(pokemon)
        filterPokemons.push(pokemon)
      });
  }}
let counter = 0;
let figthers = [];
const divGalery$$ = document.querySelector('.b-body__main__poke-galery');
const printCard = (pokemon) => {
        //console.log(pokemon)
        const divBoxGalery$$ = document.createElement('div')
        divBoxGalery$$.classList.add('b-body__main__poke-galery__box')
        divBoxGalery$$.setAttribute('data-aos',"flip-down")
        const divImg$$ = document.createElement('div')
        const img$$ = document.createElement('img')
        img$$.setAttribute('src',pokemon.sprites.versions['generation-v']['black-white'].animated.front_default)
        img$$.classList.add(pokemon.name)
        divImg$$.classList.add('b-body__main__poke-galery__box__divImg')
        const divP$$ = document.createElement('div')
        divP$$.classList.add('b-body__main__poke-galery__box__divP')
        const p$$ = document.createElement('p')
        p$$.classList.add('b-body__main__poke-galery__box__p')
        p$$.textContent = pokemon.name.toUpperCase()
        const figthBtn$$ = document.createElement('button')
        figthBtn$$.textContent ='Figth'
        figthBtn$$.classList.add('b-body__main__poke-galery__box__btn')
        const pHP$$ = document.createElement('p')
        pHP$$.textContent ='HP'+ pokemon.stats[0].base_stat
        const pPD$$ = document.createElement('p')
        pPD$$.textContent ='DF'+ pokemon.stats[2].base_stat
        const pPA$$ = document.createElement('p')
        pPA$$.textContent ='AT'+ pokemon.stats[1].base_stat
        divImg$$.appendChild(img$$)
        divP$$.appendChild(pHP$$)
        divP$$.appendChild(pPA$$)
        divP$$.appendChild(pPD$$)
        divBoxGalery$$.appendChild(divImg$$)
        divBoxGalery$$.appendChild(divP$$)
        divBoxGalery$$.appendChild(p$$)
        divBoxGalery$$.appendChild(figthBtn$$)
        divGalery$$.appendChild(divBoxGalery$$)
        const img$$Name = img$$.className

        figthBtn$$.addEventListener('click',()=>figth(img$$Name))
           
    
  }


const attacks = (a,b)=>{let attack1 = Math.random()*(a.stats[1].base_stat-1)+1;
  b.stats[0].base_stat = b.stats[0].base_stat + b.stats[2].base_stat - attack1
  if(a.stats[0].base_stat<0||b.stats[0].base_stat<0){if(a.stats[0].base_stat<0){console.log(b.name + 'winner')}else{console.log(a.name + 'winner')}}
      else {attacks(b,a)
      }}
function figth (img$$Name){ 
  const myfilterNewPokemons = filterPokemons.filter((filterPokemon)=>filterPokemon.name.toLowerCase().includes(img$$Name.toLowerCase()));
  console.log(myfilterNewPokemons);
  for (let index = 0; index < myfilterNewPokemons.length; index++) {
    const element = myfilterNewPokemons[index];
    if(counter<1){ 
      figthers.push(element); counter++}
      else if(counter === 1){
        figthers.push(element)
        divGalery$$.innerHTML=''
        console.log(counter)
        console.log(figthers)
        for (let index = 0; index < figthers.length; index++) {
        const figther = figthers[index];
        printCard(figther)}
        attacks(figthers[0],figthers[1])
      }
  }
  }




   
    //for (let index = 0; index < figthers.length; index++) {
    //const figther = figthers[index];
    //printCard(figther)
    //attacks(figthers[0],figthers[1])
 

const searchPokemon = (name,filterPokemons) => { 
    const myfilterPokemons = filterPokemons.filter((filterPokemon)=>filterPokemon.name.toLowerCase().includes(name.toLowerCase()));
    divGalery$$.innerHTML=''
    for (let index = 0; index < myfilterPokemons.length; index++) {
      const element = myfilterPokemons[index];
      printCard(element)
    }
  }
  

const init = async ()=>{
  getPokemon()
  //console.log(filterPokemons);
  const input$$ = document.querySelector(".b-poke-header__box__input")
  const btn$$ = document.querySelector(".b-poke-header__box__button")
  //btn$$.addEventListener('click',()=>searchPokemon(input$$.value,filterPokemons))
  input$$.addEventListener('keyup',()=>searchPokemon(input$$.value,filterPokemons))
  AOS.init();
}  
init()
