function carregar (){

    var msg = window.document.getElementById('msg')
    var div_foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 &&  hora <= 12) {
        // Bom dia
        img.src = './img/manha.jpg'
        img.alt = 'Manha'
        document.body.style.background = '#eed3b1'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = './img/tarde.jpg'
        img.alt = 'Tarde'
        document.body.style.background = '#f1ae5b'
    } else {
        // Boa noite
        img.src = './img/noite.jpg'
        img.alt = 'Noite'
        document.body.style.background = '#414141'
    }
}