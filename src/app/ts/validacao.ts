import { Componente } from "./Componente";

export function validar(input: Componente): string {

    let valido = true;

    let msg = "erro!";

    if (input.nome.trim() == "") {

        valido = false
        msg += " campo nome vazio;"

    }
    if (input.desc.trim() == "") {

        valido = false
        msg += " campo descrição vazio;"

    }
    if (input.tipo < 1 || input.tipo > 9) {

        valido = false;
        msg += " campo tipo invalido;"

    }
    if (input.url == "") {

        valido = false;
        msg += " url vazia;"

    }
    if (input.valor <= 0) {

        msg += " valor invalido;"

    }

    if (!valido) {

        return msg;

    }

    return "validado"

}