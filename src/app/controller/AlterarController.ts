import { Request, Response } from "express";
import { pool } from "../dao/Conexao"
import { Componente } from "../ts/Componente";
import {tipos} from "../ts/tipos";
import { validar } from "../ts/validacao";

const receba = {

    msg:"",
    mostrar: false
  
};

class AlterarController {

    public alterar(req: Request, res: Response) {

        let { id } = req.params;

        if (receba.msg.trim() != "") {

            receba.mostrar = true
      
        }

        pool.query(`SELECT id, nome, to_char("dataEntrada", 'YYYY-MM-DD') as "dataEntrada", tipo, "desc", valor, url
        FROM componentes
        WHERE id = ${id}`)
            .then((comp) => {

                let componente = comp.rows[0]

                let types: string[] = []

                tipos.forEach(t => {

                    if (t != componente.tipo) {

                       types.push(t)

                    }
                    
                });

                return res.render("alterar", { componente  , tipos: types , receba});

            })
            .catch((err) => {

                console.log(err)

            })

    }

    public alteracao(req: Request, res: Response) {

        let { id } = req.params

        let componente = new Componente(req.body.nome, req.body.dataEntrada, req.body.tipo, req.body.desc, req.body.valor, req.body.url)

        receba.msg = validar(componente);

        if (receba.msg == "validado") {

            pool.query(`UPDATE componentes SET
	                nome='${componente.nome}', 
                    "dataEntrada"='${componente.dataEntrada}', 
                    tipo='${componente.tipo}', 
                    "desc"='${componente.desc}', 
                    valor=${componente.valor}, 
                    url='${componente.url}'
	                WHERE id=${id}`)
            .then((ret) => {

                res.redirect("/xablau.com/listar")

            })
            .catch((err) => {

                console.log("erro " + err)

                res.redirect("/xablau.com/alterar/" + id)

            })

        } else {

            res.redirect("/xablau.com/cadastro");

        }

    }

}

export const alterarController = new AlterarController();