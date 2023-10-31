function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançahomem.jpg')
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'adolecentehomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade <10) {
                //
                img.setAttribute('src', 'criançamulher.jpg')
            } else if (idade < 21){
                //adolecente
                img.setAttribute('src', 'adolecentemulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultamulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}