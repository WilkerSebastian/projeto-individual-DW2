const spin = document.getElementById('spin')

const certo = document.getElementById('certo')
certo.style.display = "none"

setTimeout(()=>{

    spin.style.display = "none"

    certo.style.display = "block"

    setTimeout(()=>{

        window,location.href = "/xablau.com/home"

    }, 3 * 1000)

}, 6 * 1000)