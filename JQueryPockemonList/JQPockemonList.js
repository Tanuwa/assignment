$.ajax({
    url: "http://pokeapi.co/api/v1/pokedex/1/",
    method: "GET",
    success: function (data) {
        console.log(data.pokemon);

        var pokemon = data.pokemon;
        for (var i = 0; i < pokemon.length; i++) {
            $("#pokemon").append(`<div class="col-sm-4"><h4>${pokemon[i].name}</h4></div>`);


        }
    }
});
