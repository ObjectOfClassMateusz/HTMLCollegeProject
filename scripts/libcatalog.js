let searchbar = document.getElementById('searchphrase')
let clearButton = document.getElementById('clearbutton')

clearButton.addEventListener("click", (event) => {
    event.preventDefault()
    searchbar.value = ''
    searchbar.focus()
})
