import { Request, Response } from "express";
import { pool } from "../dao/Conexao"
import { Componente } from "../ts/Componente";

const receba = {

    msg:"",
    mostrar: false
  
};

class AlterarController {

    public alterar(req: Request, res: Response) {

        let { id } = req.params;

        pool.query(`SELECT id, nome, "dataEntrada", tipo, "desc", valor, url
        FROM componentes
        WHERE id = ${id}`)
            .then((comp) => {

                return res.render("alterar", { comp });

            })
            .catch((err) => {

                console.log(err)

            })

    }

    public alteracao(req: Request, res: Response) {

        let { id } = req.params

        let componente = new Componente(req.body.nome, req.body.dataEntrada, req.body.tipo, req.body.desc, req.body.valor, req.body.url)

        pool.query(`UPDATE componentes
	                nome=${componente.nome}, "dataEntrada"=${componente.dataEntrada}, tipo=${componente.tipo}, "desc"=${componente.desc}, valor=${componente.valor}, url=${componente.url}
	                WHERE id = ${id}`)
            .then((ret) => {

                res.redirect("/xablau.com/listar")

            })
            .catch((err) => {

                console.log(err)

                res.redirect("/xablau.com/")

            })

    }

}

export const alterarController = new AlterarController();