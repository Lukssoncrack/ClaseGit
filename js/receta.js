let queryString = location.search;

let queryStringObjeto = new URLSearchParams(queryString);

let id = queryStringObjeto.get('id'); 

    fetch(`https://dummyjson.com/recipes/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            let nombre = document.querySelector('#receta-titulo');
            nombre.innerText += data.name;
            let instrucciones =document.querySelector(' #receta-instrucciones');
            instrucciones.innerText += data.instructions
            ;
            let tiempo = document.querySelector(" #receta-tiempo");
            tiempo.innerText += data.
            prepTimeMinutes;
            let imagen = document.querySelector('#receta-imagen');
            imagen.src = data.image
        })
        .catch(function (error) {
            console.error("Error, no obtuvimos los datos de la receta", error);
        });


