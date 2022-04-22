export class Componente implements InterComponente{
    
    constructor(nome: string, dataEntrada: any, tipo: string, desc: string, valor: number, url: string){

        this.nome = nome;
        this.dataEntrada = dataEntrada;
        this.tipo = tipo;
        this.desc = desc;
        this.valor = valor;
        this.url = url;

    }

    nome: string;
    dataEntrada: any;
    tipo: string;
    desc: string;
    valor: number;
    url: string;
}

interface InterComponente {

    nome:string;
    dataEntrada:any;
    tipo: string;
    desc: string;
    valor: number;
    url: string;

}