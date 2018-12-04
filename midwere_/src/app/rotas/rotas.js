const Jwt_model = require('../model/Jwt');
const Filmes = require('../model/Filmes');


module.exports = (app) =>{

    const jwt = new Jwt_model();
    const filmes = new Filmes;

    // Acesso Middleware.
    app.get('/', function (req, resp) {

        class Usuario {
            retornarDadosUsuario(callback) {
                setTimeout(() => {
                    return callback({
                        id: 1,
                        username: 'admin',
                        email: 'admin@gmail.com'
                    });
                });
            }
        }

        let usuario = new Usuario();
        usuario.retornarDadosUsuario((resultado) => {
            resp.json(resultado);
        });

    });

    // Login do Cliente .
    app.post('/login', (req, resp ) => {

        jwt.login((resultado) => {
            resp.json(resultado);
        });
    });


    // buscar todos os clientes por get.
    app.get('/filmes', function (req, resp) {
        filmes.buscaFilme((resultado) => {
            resp.json(resultado);
        });
    })


}
