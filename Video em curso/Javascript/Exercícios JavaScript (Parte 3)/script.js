function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if ( fAno.value == 0 || Number(fAno.value) > ano) {
        alert('Verifique os seus dados, você vem do futuro por acaso?')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano = Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', './img/menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/jovem_homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/homen.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', './img/menina.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './img/jovem_mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './img/mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}