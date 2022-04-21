import { Router } from "express";
import { alterarController } from "./app/controller/AlterarController";
import { cadastroComtroller } from "./app/controller/CadastroController";
import { deletarController } from "./app/controller/DeletarController";
import { homeController } from "./app/controller/HomeController";
import { listaComtroller } from "./app/controller/ListaController";


const router: Router = Router()

router.get("/xablau.com/home", homeController.home);

router.get("/xablau.com/cadastro" , cadastroComtroller.cadastro);

router.post("/cadastrando" , cadastroComtroller.realizarCadastro)

router.get("/xablau.com/listar" , listaComtroller.listagem)

router.get("/deletar/:id" , deletarController.deletar)

router.get("/xablau.com/alterar" , alterarController.alterar)

router.post("/alterando" , alterarController.alteracao)

export { router };