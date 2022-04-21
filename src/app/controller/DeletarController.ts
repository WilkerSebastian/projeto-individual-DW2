import { Request, Response } from "express";
import { pool } from "../dao/Conexao"

class DeletarController{

  public deletar(req:Request, res:Response) {

    let {id} = req.params
    console.log("delete recebeu " + id);

    pool.query(`DELETE FROM componentes
	WHERE id = ${id}`)
    .then((ret) => {

      res.redirect("/xablau.com/listar")

    })
    .catch((err) => {

      console.log(err)
      res.redirect("/xablau.com/listar")

    })

  }

}

export const deletarController = new DeletarController();