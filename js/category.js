fetch('https://dummyjson.com/recipes/tag/Pakistani')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let category = document.querySelector(".category")


})

.catch(function(error){
    console.log(error)
})





