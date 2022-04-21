import { Request, Response } from "express";
import { pool } from "../dao/Conexao"

class ListaComtroller{

  public listagem(req:Request, res:Response) {

    pool.query(`SELECT id, nome, "dataEntrada", tipo, "desc", valor, url
                FROM componentes ORDER BY ID ASC`)
    .then((array) => {

      let listaComponentes = array.rows

      let vazio = {bool: false}

      if (listaComponentes.length > 0) {
        
        vazio.bool = true

      }

      return res.render("listagem" , {listaComponentes , vazio});

    })
    .catch((err) => {

      console.log(err.stack)

    })

  }

}

export const listaComtroller = new ListaComtroller();