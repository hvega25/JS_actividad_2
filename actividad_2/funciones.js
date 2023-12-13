let pokemons = [], municipios = [], peliculas = [], meteoritos = [], dades, todos = [];
let poke = [];

// POKEMONS
fetch("data/pokemon.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data.pokemon;

//	console.log(dades)
        for (let f = 0; f < dades.length; f++) {
            pokemons.push(dades[f].name);


        }

        poke.push(dades[0].img);
        console.log(poke);
        todos.push(pokemons);
    });


// MUNICIPIS
fetch("data/municipis.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data.elements;

        //console.log(dades)
        for (let f = 0; f < dades.length; f++) {
            municipios.push(dades[f].municipi_nom);
        }
        todos.push(municipios);
    });

// METEORITS
fetch("data/earthMeteorites.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data;

        //console.log(dades)
        for (let u = 0; u < dades.length; u++) {
            meteoritos.push(dades[u].name);
        }
        todos.push(meteoritos);
    });


// MOVIES
fetch("data/movies.json")
    .then((response) => response.json())
    .then((data) => {
        dades = data.movies;

        //console.log(dades)
        for (let a = 0; a < dades.length; a++) {
            peliculas.push(dades[a].title);
        }
        todos.push(peliculas);
    });

function reload() {
    location.reload();
}


function orderList(opcion) {
    if (opcion == "asc") {
        ordenar_ascendente();
    } else {
        if (opcion == "des") {
            ordenar_descendente();
        }
    }
}

function ordenar_ascendente() {


    console.log("Ordenado ascendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }
}


function ordenar_descendente() {

    console.log("Ordenado descendente");
    for (let a = 0; a < todos.length; a++) {
        todos[a].sort();
        todos[a].reverse();
    }

    for (let d = 0; d < todos.length; d++) {
        console.log(todos[d]);
    }
}


function searchList() {
    let buscar = prompt("Ingrese lo que desea buscar");


}

function printList() {

    let columna = `<Table>`;
    columna += `<tr>
        <th> # </th>
        <th> Imagen </th>
        <th> Nombre </th>
        <th> Peso </th>
    </tr>`;
    columna += ` <tr> 
 
    <td> id </td>
    <td> nombre</td>
  <td><img src="${poke[0]}" ></td>
    <td> peso </td>
 </tr>`;
    columna += `</table>`;

    document.write(`${columna}`);

}

printList();