const textarea = document.getElementById('texto')
const button = document.getElementById('btn')

button.addEventListener('click', function(){

    window.speechSynthesis.cancel()// Parar qualquer fala em andamento antes de iniciar uma nova.

    const text = textarea.value
    const speaks = new SpeechSynthesisUtterance(text)
    speaks.lang = 'pt-BR' // Define o idioma para português do Brasil
    window.speechSynthesis.speak(speaks) // Inicia a fala do texto
})
