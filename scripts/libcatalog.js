let catalogForm = document.getElementById('libcatalog-form')

let searchbar = document.getElementById('searchphrase')

let alphabeticalTitleSortButton = document.getElementById('alphabetical-title')
let alphabeticalAuthorSortButton = document.getElementById('alphabetical-author')
let countAscendingSortButton = document.getElementById('count-ascending')
let countDescendingSortButton = document.getElementById('count-descending')

let sortingRadios = [alphabeticalTitleSortButton, alphabeticalAuthorSortButton, countAscendingSortButton, countDescendingSortButton]

let forestCategoryButton = document.getElementById('forests')
let informaticsCategoryButton = document.getElementById('informatics')
let mathsCategoryButton = document.getElementById('maths')
let architectureCategoryButton = document.getElementById('architecture')
let economyCategoryButton = document.getElementById('economy')
let philosophyCategoryButton = document.getElementById('philosophy')

let categoryCheckboxes = [forestCategoryButton, informaticsCategoryButton, mathsCategoryButton, architectureCategoryButton, economyCategoryButton, philosophyCategoryButton]

let clearButton = document.getElementById('clearbutton')

let categoryTextOutput = document.getElementById('categories-output')
let sortingTextOutput = document.getElementById('sorting-output')


const booksUrl = '/library-books'


catalogForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

clearButton.addEventListener("click", (event) => {
    event.preventDefault()

    searchbar.value = ''

    alphabeticalTitleSortButton.checked = true

    forestCategoryButton.checked = true
    informaticsCategoryButton.checked = true
    mathsCategoryButton.checked = true
    architectureCategoryButton.checked = true
    economyCategoryButton.checked = true
    philosophyCategoryButton.checked = true

    updateCategoryState()
    updateSortingState()
})

for (let radio of sortingRadios) {
    radio.addEventListener("change", (event) => {
        updateSortingState()
    })
}

for (let box of categoryCheckboxes) {
    box.addEventListener("click", (event) => {
        updateCategoryState()
    })
}


function updateSortingState() {
    if (alphabeticalTitleSortButton.checked === true)
        sortingTextOutput.textContent = "alfabetyczne po tytule"
    if (alphabeticalAuthorSortButton.checked === true)
        sortingTextOutput.textContent = "alfabetyczne po autorze"
    if (countAscendingSortButton.checked === true)
        sortingTextOutput.textContent = "rosnąco ze względu na ilość dostępnych egzemplarzy"
    if (countDescendingSortButton.checked === true)
        sortingTextOutput.textContent = "malejąco ze względu na ilość dostępnych egzemplarzy"
}

function updateCategoryState() {
    let text = ""

    if (forestCategoryButton.checked === true)
        text += "Leśnictwo; "
    if (informaticsCategoryButton.checked === true)
        text += "Informatyka; "
    if (mathsCategoryButton.checked === true)
        text += "Matematyka; "
    if (architectureCategoryButton.checked === true)
        text += "Architektura; "
    if (economyCategoryButton.checked === true)
        text += "Ekonomia; "
    if (philosophyCategoryButton.checked === true)
        text += "Filozofia;"

    if (text === "")
        text = "Brak"

    categoryTextOutput.textContent = text
}


function fetchBooks() {
    fetch(booksUrl)
    .then(response => response.json())
    .then(data => {
        for (let book of data)
            console.log(book)
    })
}


updateCategoryState()
updateSortingState()

fetchBooks()

