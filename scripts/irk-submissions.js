let outputList = document.getElementById('irk-submission-list')

const irkSubmitUrl = 'http://localhost:3000/irk-submissions-list'


function studiesTypeToDisplayString(studiesType) {
    if (studiesType === 'full-time-studies')
        return 'studia stacjonarne'
    if (studiesType === 'part-time-studies')
        return 'studia zaoczne'
    return 'nieznany'
}

function genderToDisplayString(gender) {
    if (gender === 'male')
        return 'mężczyzna'
    if (gender === 'female')
        return 'kobieta'
    if (gender === 'other')
        return 'inna'
}


fetch(irkSubmitUrl)
.then(response => response.json())
.then(data => {
    
    for (let submission of data) {
        let item = document.createElement('DIV')
        item.style.display = 'flex'
        item.style.flexDirection = 'column'

        let fieldOfStudy = document.createElement('SPAN')
        fieldOfStudy.textContent = 'Kierunek: ' + submission.fieldOfStudy
        fieldOfStudy.style.fontSize = '1.2em'
        fieldOfStudy.style.fontWeight = 'bold'
        item.appendChild(fieldOfStudy)

        let name = document.createElement('SPAN')
        name.textContent = 'Imię: ' + submission.name[0] + '***'
        item.appendChild(name)

        let surname = document.createElement('SPAN')
        surname.textContent = 'Nazwisko: ' + submission.surname[0] + '***'
        item.appendChild(surname)

        let gender = document.createElement('SPAN')
        gender.textContent = 'Płeć: ' + genderToDisplayString(submission.gender)
        item.appendChild(gender)

        let studiesType = document.createElement('SPAN')
        studiesType.textContent = 'Rodzaj studiów: ' + studiesTypeToDisplayString(submission.studiesType)
        item.appendChild(studiesType)

        item.appendChild(document.createElement('HR'))

        outputList.appendChild(item)
    }

})
.catch(error => {
    console.log(error)

    outputList.textContent = 'Wystąpił błąd przy pobieraniu danych!'
})
