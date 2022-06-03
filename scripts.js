function num (x, y){
    // let x = Number(prompt('Digite um valor: '));
    // let y = Number(prompt('Digite um valor: '));
    const cont = x + y;

    function igual (){
        if (x === y){
        return(`Os números ${x} e ${y} são iguais.`)
        } else{
            return(`Os números ${x} e ${y} não são iguais.`)
        }
    } 

    function soma(){
        if (x + y > 10 && x + y < 20){
            return(` Sua soma é ${cont}, que é maior que 10 e menor que 20.`)
        }else if (x + y > 10){
            return(` Sua soma é ${cont}, que é maior que 10 e maior que 20.`)
        }else{
            return(` Sua soma é ${cont}, que é menor que 10 e menor que 20.`)
        }
       
    }

    return `${igual()}${soma()}`;

} 

console.log(num(1,1));


