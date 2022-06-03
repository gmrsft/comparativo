function num (){
    let x = Number(prompt('Digite um valor: '));
    let y = Number(prompt('Digite um valor: '));
    let cont = x + y;

    function igual (){
        if (x === y){
        alert(`Os números ${x} e ${y} são iguais.`)
        } else{
            alert(`Os números ${x} e ${y} não são iguais.`)
        }
    } igual()

    function soma(){
        if (x + y > 10 && x + y < 20){
            alert(` Sua soma é ${cont}, que é maior que 10 e menor que 20.`)
        }else if (x + y > 10){
            alert(` Sua soma é ${cont}, que é maior que 10 e maior que 20.`)
        }else{
            alert(` Sua soma é ${cont}, que é menor que 10 e menor que 20.`)
        }
       
    } soma()     


} num()