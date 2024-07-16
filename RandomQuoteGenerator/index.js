const url = "./quotes.json"
fetch(url).then((res) => res.json()).then((data) => {
    const frases = data.quotes;
    const btnNuevaFrase = document.querySelector('button');
    const pFrase = document.querySelector('.quote');
    const pAutor = document.querySelector('.author');
    const obtenerNumeroAleatorio = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    
    btnNuevaFrase.addEventListener('click', () => {
        let numeroRandom = obtenerNumeroAleatorio(0, frases.length - 1);
        console.log(numeroRandom);
        pFrase.textContent = frases[numeroRandom][0];
        pAutor.textContent = frases[numeroRandom][1];
    }); 
});
