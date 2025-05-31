let catalogForm = document.getElementById('libcatalog-form')

const getParams = new URLSearchParams(window.location.search);
const searchphrase = getParams.get('searchphrase');
let searchbar = document.getElementById('searchphrase')
searchbar.value = searchphrase ? searchphrase : ''

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

let booksOutput = document.getElementById('library-books-list')


const booksUrl = 'http://localhost:3000/library-books'

let books = []

let fetchOk = true


catalogForm.addEventListener("submit", (event) => {
    event.preventDefault()

    updateBooksDisplay()
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

    updateBooksDisplay()
})

for (let radio of sortingRadios) {
    radio.addEventListener("change", (event) => {
        updateSortingState()

        updateBooksDisplay()
    })
}

for (let box of categoryCheckboxes) {
    box.addEventListener("click", (event) => {
        updateCategoryState()

        updateBooksDisplay()
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
            books.push(book)

        updateBooksDisplay()
    })
    .catch(error => {
        console.log(error)

        fetchOk = false
        updateBooksDisplay()
    })
}


function filterBooks() {
    let filteredBooks = books.filter((value) => {
        
        if (value.category === 'forests' && forestCategoryButton.checked === true)
            return true
        if (value.category === 'informatics' && informaticsCategoryButton.checked === true)
            return true
        if (value.category === 'maths' && mathsCategoryButton.checked === true)
            return true
        if (value.category === 'architecture' && architectureCategoryButton.checked === true)
            return true
        if (value.category === 'economy' && economyCategoryButton.checked === true)
            return true
        if (value.category === 'philosophy' && philosophyCategoryButton.checked === true)
            return true
        return false

    }).filter((value) => {

        if (searchbar.value === "")
            return true

        return value.title.toLowerCase().includes(searchbar.value.toLowerCase())
    })

    let sortedBooks = filteredBooks.sort((a, b) => {
        if (alphabeticalTitleSortButton.checked === true)
        {
            return a.title.localeCompare(b.title)
        }
        else if (alphabeticalAuthorSortButton.checked === true)
        {
            return a.authors.localeCompare(b.authors)
        }
        else if (countAscendingSortButton.checked === true)
        {
            return a.count - b.count
        }
        else if (countDescendingSortButton.checked === true)
        {
            return b.count - a.count
        }
    })

    return sortedBooks
}

function categoryToDisplayName(category) {
    switch (category)
    {
    case 'forests':
        return 'Leśnictwo'
    case 'informatics':
        return 'Informatyka'
    case 'maths':
        return 'Matematyka'
    case 'architecture':
        return 'Architektura'
    case 'economy':
        return 'Ekonomia'
    case 'philosophy':
        return 'Filozofia'
    default:
        return 'Inna'
    }
}


function updateBooksDisplay() {
    while (booksOutput.firstChild)
        booksOutput.removeChild(booksOutput.firstChild)

    if (!fetchOk)
    {
        let errorMsg = document.createElement("H1")
        errorMsg.textContent = "Nastąpił błąd przy pobieraniu danych!"
        errorMsg.style.color = 'red'
        errorMsg.style.textAlign = 'center'
        booksOutput.appendChild(errorMsg)
        return
    }

    let filteredBooks = filterBooks()

    if (filteredBooks.length === 0) {
        let noBooksMsg = document.createElement("H1")
        noBooksMsg.textContent = 'Nie znaleziono żadnych książek dla danych filtrów!'
        noBooksMsg.style.textAlign = 'center'
        booksOutput.appendChild(noBooksMsg)
    }
    
    for (let book of filteredBooks) {
        let item = document.createElement("DIV")

        let title = document.createElement("H1")
        title.textContent = book.title
        title.classList.add('book-title')
        item.appendChild(title)

        let authors = document.createElement("SPAN")
        if (book.authors.includes(','))
            authors.textContent = 'Autorzy: ' + book.authors
        else
            authors.textContent = 'Autor: ' + book.authors
        item.appendChild(authors)

        item.appendChild(document.createElement('BR'))

        let category = document.createElement("SPAN")
        category.textContent = 'Kategoria: ' + categoryToDisplayName(book.category)
        item.appendChild(category)

        item.appendChild(document.createElement('BR'))

        let count = document.createElement("SPAN")
        count.textContent = 'Liczba egzemplarzy: ' + book.count
        item.appendChild(count)

        item.appendChild(document.createElement("HR"))

        booksOutput.append(item)
    }
}


updateCategoryState()
updateSortingState()

fetchBooks()

