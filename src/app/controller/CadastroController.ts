import { Request, Response } from "express";
import { pool } from "../dao/Conexao"
import { Componente} from "../ts/Componente"
import { validar } from "../ts/validacao";
 
const receba = {

  msg:"",
  mostrar: false

};

class CadastroComtroller{

  public cadastro(req:Request, res:Response) {

    if (receba.msg.trim() != "") {
      
      receba.mostrar = true

    }

    console.log(receba)

    return res.render("cadastro" , {receba : receba});

  }

  public realizarCadastro(req:Request, res:Response){

    console.log("realizando cadastro...");
    
    let componente = new Componente(req.body.nome , req.body.dataEntrada , req.body.tipo , req.body.desc , req.body.valor , req.body.url)

    receba.msg = validar(componente);

    if (receba.msg == "validado") {

    pool.query(`INSERT INTO componentes
    (nome , "dataEntrada" , tipo , "desc" , valor , url)
    VALUES 
    ('${componente.nome}' , '${componente.dataEntrada}' , ${componente.tipo} , '${componente.desc}' , ${componente.valor} , '${componente.url}')`)
    .then((ret) => {

        console.log("cadastro realizado!");

        res.redirect("/xablau.com/listagem");

    })
    .catch((err) => {

        console.log("erro: " + err);

        receba.msg = "erro no cadastro"
        
        res.redirect("/xablau.com/cadastro");

    })

    }else{

      res.redirect("/xablau.com/cadastro");

    }

  }

}

export const cadastroComtroller = new CadastroComtroller();