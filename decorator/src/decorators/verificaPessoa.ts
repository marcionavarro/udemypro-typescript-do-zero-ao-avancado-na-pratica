export function verificaPessoa(idade: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log("Target:: ", target);
        // console.log("Key:: ", key);
        // console.log("DESCRIPTOR:: ", decriptor);

        const metodoOriginal = descriptor.value; // Salvar nosso metodo original

        // Reescrever nosso método.
        descriptor.value = function () {
            if(idade < 18){
                console.log(`Estamos cadastrando como Pessoa menor de idade`);

                // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            } else {
                console.log(`Adulto cadastrado no sistema`);

                 // Agora queremos retornar o metodo original para ele ser executado
                return metodoOriginal.apply(this);
            }
        }
    }
}