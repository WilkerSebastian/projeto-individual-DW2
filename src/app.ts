import express from "express";
import { router } from "./router";
import { engine } from "express-handlebars";

export class App {
    
    public server: express.Application;

    // construtor
    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }

    // configurações do servidor
    private middleware() {

        // configuração do handlebars
        this.server.set('views', __dirname + '/views');
        this.server.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
        this.server.set('view engine', '.hbs');

        // linkagem dos diretorios static
        this.server.use(express.static(__dirname + "/public"));

        // configuração do bodyparse
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
    }

    // definindo rota
    private router() {
        this.server.use(router);
    }
}