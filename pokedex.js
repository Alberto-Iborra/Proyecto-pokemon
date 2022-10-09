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
        divBoxGalery$$.classList.add('b-body__main__poke-galery__box', 'b-body__main__poke-galery__box--size')
        divBoxGalery$$.setAttribute('data-aos',"flip-down")
        const ballImg$$ = document.createElement('img')
        ballImg$$.setAttribute('src','/assets/pokeball2.png')
        ballImg$$.classList.add('b-body__main__poke-galery__box__ball', pokemon.name)
        const divImg$$ = document.createElement('div')
        const img$$ = document.createElement('img')
        img$$.setAttribute('src',pokemon.sprites.versions['generation-v']['black-white'].animated.front_default)
        img$$.classList.add(pokemon.name)
        divImg$$.classList.add('b-body__main__poke-galery__box__divImg', pokemon.name,'b-body__main__poke-galery__box__divImg--size')
        const divP$$ = document.createElement('div')
        divP$$.classList.add('b-body__main__poke-galery__box__divP', pokemon.name,'b-body__main__poke-galery__box__divP--color')
        const p$$ = document.createElement('p')
        p$$.classList.add('b-body__main__poke-galery__box__p', pokemon.name,'b-body__main__poke-galery__box__p--size')
        p$$.textContent = pokemon.name.toUpperCase()
        const figthBtn$$ = document.createElement('button')
        figthBtn$$.textContent ='Figth'
        figthBtn$$.classList.add('b-body__main__poke-galery__box__btn',pokemon.name,'b-body__main__poke-galery__box__btn-size')
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
        divImg$$.appendChild(ballImg$$)
        divBoxGalery$$.appendChild(divImg$$)
        divBoxGalery$$.appendChild(divP$$)
        divBoxGalery$$.appendChild(p$$)
        divBoxGalery$$.appendChild(figthBtn$$)
        divGalery$$.appendChild(divBoxGalery$$)
        const img$$Name = img$$.className
        figthBtn$$.addEventListener('click',()=>figth(img$$Name))
        ballImg$$.addEventListener('click',()=>hunt(img$$Name)) 
  }
function reload() {
    filterPokemons.splice(0,151)
    pokemonBHP=0
    pokemonAHP=0
    myfilterNewPokemons.splice(0,2);
    figthers.splice(0,2);
    divGalery$$.innerHTML='';
    init()  
  }  
let pokemonBHP = 0
const attacks = (a,b)=>{let attack = Math.floor(Math.random()*(a.stats[1].base_stat))+1;
  let result = pokemonBHP + b.stats[0].base_stat - attack
  if(result<0){
    const winnerDiv$$ = document.createElement('div')
    winnerDiv$$.classList.add('b-winner-box')
    const winnerPokImg$$ = document.createElement('img')
    winnerPokImg$$.setAttribute('src',a.sprites.versions['generation-v']['black-white'].animated.front_default)
    winnerPokImg$$.classList.add('b-winner-box__pokemon')
    const winnerImg$$ = document.createElement('img')
    winnerImg$$.setAttribute('src','/assets/Pokemon_champions (1).png')
    winnerImg$$.classList.add('b-winner-box__champion')
    const winnerP$$ = document.createElement('p')
    winnerP$$.classList.add('b-winner-box__p')
    winnerP$$.textContent=a.name
    const btnReload$$ =document.createElement('button')
    btnReload$$.textContent='Reload'
    btnReload$$.classList.add('b-winner-box__btn')
    winnerDiv$$.appendChild(winnerPokImg$$)
    winnerDiv$$.appendChild(winnerImg$$)
    winnerDiv$$.appendChild(winnerP$$)
    winnerDiv$$.appendChild(btnReload$$)
    divGalery$$.appendChild(winnerDiv$$)
    btnReload$$.addEventListener('click',()=>reload())
    //console.log(a.name + 'winner')
  }
      else {pokemonBHP = result - b.stats[0].base_stat;
        attacks2(b,a)
        }
      }
let pokemonAHP=0     
const attacks2 = (b,a)=>{let attack2 = Math.floor(Math.random()*(b.stats[1].base_stat))+1;
  let result2 = pokemonAHP + a.stats[0].base_stat - attack2
  if (result2<0) {
    const winnerDiv$$ = document.createElement('div')
    winnerDiv$$.classList.add('b-winner-box')
    const winnerPokImg$$ = document.createElement('img')
    winnerPokImg$$.setAttribute('src',b.sprites.versions['generation-v']['black-white'].animated.front_default)
    winnerPokImg$$.classList.add('b-winner-box__pokemon')
    const winnerImg$$ = document.createElement('img')
    winnerImg$$.setAttribute('src','/assets/Pokemon_champions (1).png')
    winnerImg$$.classList.add('b-winner-box__champion')
    const winnerP$$ = document.createElement('p')
    winnerP$$.classList.add('b-winner-box__p')
    winnerP$$.textContent=b.name
    const btnReload$$ =document.createElement('button')
    btnReload$$.textContent='Reload'
    btnReload$$.classList.add('b-winner-box__btn')
    winnerDiv$$.appendChild(winnerPokImg$$)
    winnerDiv$$.appendChild(winnerImg$$)
    winnerDiv$$.appendChild(winnerP$$)
    winnerDiv$$.appendChild(btnReload$$)
    divGalery$$.appendChild(winnerDiv$$)
    btnReload$$.addEventListener('click',()=>reload())
    //console.log(b.name + 'winner')
  } else 
  { pokemonAHP = result2 - a.stats[0].base_stat
    attacks(a,b)}
}
let myfilterNewPokemons=[]    
function figth (img$$Name){ 
  myfilterNewPokemons = filterPokemons.filter((filterPokemon)=>filterPokemon.name.toLowerCase().includes(img$$Name.toLowerCase()));
  console.log(myfilterNewPokemons);
  for (let index = 0; index < myfilterNewPokemons.length; index++) {
    const element = myfilterNewPokemons[index];
    if(counter<1){ 
      figthers.push(element); counter++}
      else if(counter === 1){
        figthers.push(element)
        counter--
        divGalery$$.innerHTML=''
        //console.log(counter)
        //console.log(figthers)
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

const catch$$ = document.querySelector('.b-poke-header__pokeball')
catch$$.addEventListener('click',()=>showPokeBall())
function showPokeBall() {const catch1$$ = document.querySelectorAll('.b-body__main__poke-galery__box__ball')
for (let index = 0; index < catch1$$.length; index++) {
  const element = catch1$$[index];
  element.classList.add('b-body__main__poke-galery__box__ball--flex') 
}  
}
let myHuntPokemons=[]
let HuntPokemons=[]
let catchCounter=0
const mycatchCounters$$ = document.querySelector('.b-poke-header__catch')
const mycatchCounter$$ = document.createElement('p')
mycatchCounter$$.classList.add('b-poke-header__pokedex__counter')
mycatchCounters$$.appendChild(mycatchCounter$$)

function hunt(img$$Name) {
  //let classPokemonName = document.querySelectorAll(ballClass$$)
  //console.log(classPokemonName);
  catchCounter++
  mycatchCounter$$.textContent=catchCounter
  myHuntPokemons = filterPokemons.filter((filterPokemon)=>filterPokemon.name.toLowerCase().includes(img$$Name.toLowerCase()));
  for (let index = 0; index < myHuntPokemons.length; index++) {
    const element = myHuntPokemons[index];
    HuntPokemons.push(element)
    console.log(HuntPokemons)
}
}
const pokedex$$ = document.querySelector('.b-poke-header__pokedex')
pokedex$$.addEventListener('click',()=>myPokedex())
const divbtn$$ = document.querySelector('.b-poke-header__div-btn');
function reload2() {
  filterPokemons.splice(0,151)
  pokemonBHP=0
  pokemonAHP=0
  myfilterNewPokemons.splice(0,2);
  figthers.splice(0,2);
  divbtn$$.innerHTML='';
  divGalery$$.innerHTML='';
  init()  
}  
const myPokedex = ()=>{
  divGalery$$.innerHTML=''
  for (let index = 0; index < HuntPokemons.length; index++) {
    const HuntPokemon = HuntPokemons[index];
    printCard(HuntPokemon)}
    const btnReturn$$ =document.createElement('button')
    btnReturn$$.textContent='Return'
    btnReturn$$.classList.add('b-winner-box__btn2')
    //const pokedexHeader$$ = document.querySelector('.b-poke-header__box')
    divbtn$$.appendChild(btnReturn$$)
    btnReturn$$.addEventListener('click',()=>reload2())
}

init()



