import { Request, Response } from "express";
import { pool } from "../dao/Conexao";

class HomeController{

  public home(req:Request, res:Response) {
    
    pool.query(`SELECT id, nome, to_char("dataEntrada", 'DD/MM/YYYY') as "dataEntrada", tipo, "desc", valor, url
                FROM componentes ORDER BY ID ASC`)
    .then((array) => {

      let listaComponentes = array.rows

      let vazio = {bool: false}

      if (listaComponentes.length > 0) {
        
        vazio.bool = true

      }

      return res.render("home" , {listaComponentes , vazio});

    })
    .catch((err) => {

      console.log(err.stack)

    })

  }

  public comprando(req:Request, res:Response) {

    res.render("comprando")

  }

}

export const homeController = new HomeController();