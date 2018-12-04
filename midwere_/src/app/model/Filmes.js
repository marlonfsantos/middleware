var axios = require("axios");

class Filmes{

    constructor(){
    }

    buscaFilme(callback){

        axios.get("http://localhost:3000/").then(function (resultado) {
            console.log(resultado.data)

            let filme = resultado.data

            setTimeout(() => {
                return callback({filme});
            });
        })
    }
}

module.exports = Filmes;