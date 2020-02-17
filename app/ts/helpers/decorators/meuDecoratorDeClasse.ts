export function meuDecoratorDeClasse(){

    return function (constructor: any){

        //Guarda o constructor original, pois iremos definir um novo
        const original = constructor;

        //cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novo: any = function(...args: any[]){

            console.log("Criando uma instância dom New: "+ original.name);
            
            //cria a instância da classe quando for chamado
            return new original(...original);

        }
        //Importante! I prototype do novo construtor deve ser o mesmo do original
        novo.prototype = original.prototype;

        //Retorna o novo constructor
        return novo;

    }

}