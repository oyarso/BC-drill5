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
  `https://swapi.dev/api/people/10`,
  `https://swapi.dev/api/people/11?page=2`,
  `https://swapi.dev/api/people/12?page=2`,

  `https://swapi.dev/api/people/13?page=2`,

  `https://swapi.dev/api/people/14?page=2`,

  `https://swapi.dev/api/people/15?page=2`,

  `https://swapi.dev/api/people/16?page=2`,

  `https://swapi.dev/api/people/17?page=2`,

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
  return 'terminado';
}

let gen1 = generador();
let contenido = document.getElementById('contenido');
let contenido2 = document.getElementById('contenido2');
let contenido3 = document.getElementById('contenido3');
function tcg(sw) {
  for (let i = 0; i < sw.length; i += 5) {
    console.log(gen1.next().value);
    contenido.innerHTML += `
    <div class="container right">
      <div class="content">
        <div class="row">
        
        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
        <h5>En esta sección</h5>
        <p>Encontrarás información sobre los personajes más populares de las peliculas</p>
      </div>

          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i].name}</h5>
            <p>Estatura: ${sw[i].height} cm. Peso: ${sw[i].mass} kg.</p>
          </div>
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i + 1].name}</h5>
            <p>Estatura: ${sw[i + 1].height} cm. Peso: ${sw[i + 1].mass} kg.</p>
          </div>
        </div>


        <div class="row">
        
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i + 2].name}</h5>
            <p>Estatura: ${sw[i + 2].height} cm. Peso: ${sw[i + 2].mass} kg.</p>
          </div>
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i + 3].name}</h5>
            <p>Estatura: ${sw[i + 3].height} cm. Peso: ${sw[i + 3].mass} kg.</p>
          </div>
          
          <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i + 4].name}</h5>
            <p>Estatura: ${sw[i + 4].height} cm. Peso: ${sw[i + 4].mass} kg.</p>
          </div>
        </div>
        `
        contenido2.innerHTML += `
        <div class="container right">
          <div class="content">
            <div class="row ">
    
        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
        <h5>En esta sección</h5>
        <p>Encontrarás información sobre los personajes secundarios importantes</p>
      </div>

        <div class="col shadow-sm p-3 mb-5 bg-white rounded">
            <h5>${sw[i + 5].name}</h5>
            <p>Estatura: ${sw[i + 5].height} cm. Peso: ${sw[i + 5].mass} kg.</p>
     </div>
    <div class="col shadow-sm p-3 mb-5 bg-white rounded">
    <h5>${sw[i + 6].name}</h5>
    <p>Estatura: ${sw[i + 6].height} cm. Peso: ${sw[i + 6].mass} kg.</p>
    </div>

    <div class="row">
    <div class="col shadow-sm p-3 mb-5 bg-white rounded">
    <h5>${sw[i + 7].name}</h5>
    <p>Estatura: ${sw[i + 7].height} cm. Peso: ${sw[i + 7].mass} kg.</p>
</div>

<div class="col shadow-sm p-3 mb-5 bg-white rounded">
<h5>${sw[i + 8].name}</h5>
<p>Estatura: ${sw[i + 8].height} cm. Peso: ${sw[i + 8].mass} kg.</p>
</div>

<div class="col shadow-sm p-3 mb-5 bg-white rounded">
<h5>${sw[i + 9].name}</h5>
<p>Estatura: ${sw[i + 9].height} cm. Peso: ${sw[i + 9].mass} kg.</p>
</div>



</div>

`





contenido3.innerHTML += `
    <div class="container right">
      <div class="content">

    <div class="row">
    <div class="col shadow-sm p-3 mb-5 bg-white rounded">
    
     </div>
     <h5>En esta sección</h5>
     <p>Encontrarás otros personajes significativos</p>
   </div>

     <div class="col shadow-sm p-3 mb-5 bg-white rounded">
     <h5>${sw[i + 10].name}</h5>
     <p>Estatura: ${sw[i + 10].height} cm. Peso: ${sw[i + 10].mass} kg.</p>
 </div>
 
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 11].name}</h5>
 <p>Estatura: ${sw[i + 11].height} cm. Peso: ${sw[i + 11].mass} kg.</p>
 </div>
 </div>
 
 <div class="row">
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 12].name}</h5>
 <p>Estatura: ${sw[i + 12].height} cm. Peso: ${sw[i + 12].mass} kg.</p>
 </div>
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 13].name}</h5>
 <p>Estatura: ${sw[i + 13].height} cm. Peso: ${sw[i + 13].mass} kg.</p>
 </div>
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 14].name}</h5>
 <p>Estatura: ${sw[i + 14].height} cm. Peso: ${sw[i + 14].mass} kg.</p>
 </div>
 </div>
 
 
 <div class="row">
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 15].name}</h5>
 <p>Estatura: ${sw[i + 15].height} cm. Peso: ${sw[i + 15].mass} kg.</p>
 </div>
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 16].name}</h5>
 <p>Estatura: ${sw[i + 16].height} cm. Peso: ${sw[i + 16].mass} kg.</p>
 </div>
 <div class="col shadow-sm p-3 mb-5 bg-white rounded">
 <h5>${sw[i + 17].name}</h5>
 <p>Estatura: ${sw[i + 17].height} cm. Peso: ${sw[i + 17].mass} kg.</p>
 </div>
 </div>
   
 

     </div>

`

}

}
