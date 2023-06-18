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
  for (let i = 0; i < sw.length; i+=3) {
    console.log(gen1.next().value);
    contenido.innerHTML += `
    <div class="container right">
      <div class="content">
        <div class="row">
          <div class="col">
            <h2>${sw[i].name}</h2>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          <div class="col">
            <h2>${sw[i+1].name}</h2>
            <p>Estatura: ${sw[i+1].height} cm. Peso: ${sw[i+1].mass} kg.</p>
          </div>
          <div class="col">
            <h2>${sw[i+2].name}</h2>
            <p>Estatura: ${sw[i+2].height} cm. Peso: ${sw[i+2].mass} kg.</p>
        </div>
      </div>
    </div>

`      
  }
 
  }
