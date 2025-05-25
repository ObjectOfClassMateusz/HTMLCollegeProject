let catalogForm = document.getElementById('libcatalog-form')

let searchbar = document.getElementById('searchphrase')

let alphabeticalSortButton = document.getElementById('alphabetical')
let countAscendingSortButton = document.getElementById('count-ascending')
let countDescendingSortButton = document.getElementById('count-descending')

let forestCategoryButton = document.getElementById('forests')
let informaticsCategoryButton = document.getElementById('informatics')
let mathsCategoryButton = document.getElementById('maths')
let architectureCategoryButton = document.getElementById('architecture')
let economyCategoryButton = document.getElementById('economy')
let philosophyCategoryButton = document.getElementById('philosophy')

let clearButton = document.getElementById('clearbutton')



catalogForm.addEventListener("submit", (event) => {
    event.preventDefault()
})

clearButton.addEventListener("click", (event) => {
    event.preventDefault()

    searchbar.value = ''

    alphabeticalSortButton.checked = true

    forestCategoryButton.checked = true
    informaticsCategoryButton.checked = true
    mathsCategoryButton.checked = true
    architectureCategoryButton.checked = true
    economyCategoryButton.checked = true
    philosophyCategoryButton.checked = true
})
