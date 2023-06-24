let url = `https://swapi.dev/api/people/`
fetch(url)
  .then(res => {
    if (res.ok) {
      console.log('Éxito');
      return res.json()
    } else {
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
  `https://swapi.dev/api/people/10`
];



  function* generador() {
    var i = 0;
    while(i<10)
      yield i++;
  }

let gen1 = generador();
let contenido = document.getElementById('contenido');
let contenido2 = document.getElementById('contenido2');
i=gen1.next().value;
function tcg(sw) {
  for (let i = 0; i < sw.length; i += 10) {
    
    contenido.innerHTML += `
 
        <div class="row">  
        
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
          <span class="dot .bg-danger"></span>
            <h5>En esta sección</h5>
            <p>Encontrarás información sobre los personajes más populares de las peliculas</p>
          </div>
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
           <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
        </div>


        <div class="row">
        ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
        </div>
        `
        contenido2.innerHTML += `
        <div class="row ">
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>En esta sección</h5>
            <p>Encontrarás información sobre los personajes secundarios importantes</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
        </div>
        
        <div class="row">
        ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          ${i++} 
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
        </div>
`
}
}

let url2 = `https://swapi.dev/api/people/?search=a&page=2`
fetch(url2)
  .then(res2 => {
    if (res2.ok) {
      console.log('Éxito');
      return res2.json()
    } else {
      console.log('Fallo');
    }
  })
  .then(data2 =>
    tcg2(data2.results)
  );

let stars2 = [

  `https://swapi.dev/api/people/11?page=2`,
  `https://swapi.dev/api/people/12?page=2`,
  `https://swapi.dev/api/people/13?page=2`,
  `https://swapi.dev/api/people/14?page=2`,
  `https://swapi.dev/api/people/15?page=2`
];


function* generador2() {
  var i = 0;
  while(true)
    yield i++;
}


let gen2 = generador2();
i=gen2.next().value;
let contenido3 = document.getElementById('contenido3');
function tcg2(sw2) {
  for (let i = 0; i < sw2.length; i += 15) {
    contenido3.innerHTML += `
    <div class="row">
      <div class="col shadow-sm p-3 mb-5 bg-white rounded">
        <h5>En esta sección</h5>
        <p>Encontrarás otros personajes significativos</p>
      </div>
      ${i++} 
      <div class="col shadow-sm p-3 mb-5 bg-white rounded">
        <h5>${sw2[i].name}</h5>
        <p>Estatura: ${sw2[i].height} cm. Peso: ${sw2[i].mass} kg.</p>
      </div>
      ${i++} 
      <div class="col shadow-sm p-3 mb-5 bg-white rounded">
        <h5>${sw2[i].name}</h5>
        <p>Estatura: ${sw2[i].height} cm. Peso: ${sw2[i].mass} kg.</p>
      </div>
      <div class="row">
      ${i++} 
        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
          <h5>${sw2[i].name}</h5>
          <p>Estatura: ${sw2[i].height} cm. Peso: ${sw2[i].mass} kg.</p>
        </div>
        ${i++} 
        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
          <h5>${sw2[i].name}</h5>
          <p>Estatura: ${sw2[i].height} cm. Peso: ${sw2[i].mass} kg.</p>
        </div>
        ${i++} 
        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
          <h5>${sw2[i].name}</h5>
          <p>Estatura: ${sw2[i].height} cm. Peso: ${sw2[i].mass} kg.</p>
        </div>
      </div>
    </div>
`}}

function myFunction() {
  document.getElementById("panel").style.display = "block";
}

function myFunction2() {
  document.getElementById("panel2").style.display = "block";
}

function myFunction3() {
  document.getElementById("panel3").style.display = "block";
}