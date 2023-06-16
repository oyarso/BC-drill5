let url = `https://swapi.dev/api/people/`
fetch(url)
.then(res => {
  if(res.ok){
      console.log('Éxito');
      return res.json()
  }else{
      console.log('Fallo');
  }
})
.then(data =>
tcg(data.results)
);

let stars = [
  `https://swapi.dev/api/people/1`,
  `https://swapi.dev/api/people/2`,
  `https://swapi.dev/api/people/3`,
  `https://swapi.dev/api/people/4`,
  `https://swapi.dev/api/people/5`,
  `https://swapi.dev/api/people/6`,
  `https://swapi.dev/api/people/7`,
  `https://swapi.dev/api/people/8`,
  `https://swapi.dev/api/people/9`,
  `https://swapi.dev/api/people/10`,
  `https://swapi.dev/api/people/11`,
  `https://swapi.dev/api/people/12`,
];



const generador = function* () {
  let i = 0;
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  yield stars[i];
  i++
  return 'terminado';
}

let gen1 = generador();  
let contenido = document.getElementById('contenido');
function tcg(sw) {
  for (let i = 0; i < sw.length; i++) {
    console.log(gen1.next().value);
    contenido.innerHTML += `
    <h4>${sw[i].name}</h4>
`  
    
  }
 
  }
