var hh = 0
var mm = 0
var ss = 0
var tempo = 1000
var cronometro

function iniciar(){
    // Inicia atualização do display a cada segundo
    cronometro = setInterval(() => { timer() }, tempo)
}

function parar(){
    //Para a contagem do display do cronometro
    clearInterval(cronometro)
}

function reiniciar(){
    //Reinicia a contagem do display do cronometro para 00:00:00
    clearInterval(cronometro)
    hh = 0
    mm = 0
    ss = 0
    document.getElementById("tempo").innerText = "00:00:00"
}

function timer(){
    //Obtem o tempo decorrido
    ss++
    if (ss == 60){
        ss = 0
        mm++
        if (mm == 60){
            mm = 0
            hh++
        }
    }

    //Cria uma variavel com o valor de exibição
    var display = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)

    //Insere o valor no elemento
    document.getElementById("tempo").innerText = display

    return display
}
