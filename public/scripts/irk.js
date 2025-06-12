let irkForm = document.getElementById('irk-form')

const irkSubmitUrl = 'http://localhost:3000/irk-submissions-list'

irkForm.addEventListener('submit', (event) => {

    event.preventDefault()

    if (!ValidateIrkForm())
        return

    let submissionData = {
        name: irkForm.elements['candidate-name'].value,
        surname: irkForm.elements.surname.value,
        birthplace: irkForm.elements.birthplace.value,
        birthdate: irkForm.elements.birthdate.value,
        gender: irkForm.elements.gender.value,
        email: irkForm.elements.email.value,
        tel: irkForm.elements.phonenum.value,
        documentType: irkForm.elements['document-type'].value,
        documentYear: irkForm.elements['document-year'].value,
        documentId: irkForm.elements['document-id'].value,
        indexNumber: irkForm.elements['index-number'].value,
        fieldOfStudy: irkForm.elements['primary-field-of-study'].value,
        studiesType: irkForm.elements['studies-type'].value
    }

    fetch(irkSubmitUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(submissionData)
    })
    .then(response => response.json())
    .then(data => {
        window.location.replace('./irk-submissions.html')
    }).catch(e => {
        console.log(e)

        let irkErrorOutput = document.getElementById('irk-error-output')
        irkErrorOutput.textContent = "Wystąpił błąd przy przesyłaniu danych formularza!"
    })
})

function ValidateIrkForm()
{
    if (!ValidateCandidateName())
        return false
    if (!ValidateSurname())
        return false
    if (!ValidateBirthplace())
        return false
    if (!ValidateBirthDate())
        return false
    if (!ValidateGender())
        return false
    if (!ValidateEmail())
        return false
    if (!ValidateTelephone())
        return false
    if (!ValidateDocumentType())
        return false
    if (!ValidateDocumentYear())
        return false
    if (!ValidateDocumentID())
        return false
    if (!ValidateIndexNumber())
        return false
    if (!ValidateFieldOfStudy())
        return false
    if (!ValidateStudiesType())
        return false
    if (!ValidateRodoCheckbox())
        return false
    return true
}


function ValidateCandidateName()
{
    let field = irkForm.elements['candidate-name']
    let msgOut = document.getElementById('candidate-name-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź imię w pole powyżej!"
        return false
    }
}

function ValidateSurname()
{
    let field = irkForm.elements.surname
    let msgOut = document.getElementById('surname-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź nazwisko w pole powyżej!"
        return false
    }
}

function ValidateBirthplace()
{
    let field = irkForm.elements.birthplace
    let msgOut = document.getElementById('birthplace-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź miejsce narodzin powyżej!"
        return false
    }
}

function ValidateBirthDate()
{
    let field = irkForm.elements.birthdate
    let msgOut = document.getElementById('birthdate-msg')

    field.setCustomValidity("")

    if (field.validity.valid)
    {
        if (new Date(field.value) > new Date())
        {
            msgOut.textContent = "Wprowadź poprawną datę narodzin; tego dnia jeszcze nie było!"
            field.setCustomValidity('Wprowadź poprawną datę narodzin!')
            return false
        }

        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź datę narodzin powyżej!"
        return false
    }
}

function ValidateGender()
{
    // Nie ma tutaj nic do zrobienia
    return true
}

function ValidateEmail()
{
    let field = irkForm.elements.email
    let msgOut = document.getElementById('email-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź poprawny adres e-mail powyżej!"
        return false
    }
}

function ValidateTelephone()
{
    let field = irkForm.elements.phonenum
    let msgOut = document.getElementById('phonenum-msg')

    field.setCustomValidity("")

    if (field.validity.valid)
    {
        const regularExpression = /^\+?[1-9]\d{1,14}$/;

        if (field.value !== "" && !field.value.match(regularExpression))
        {
            field.setCustomValidity("Wprowadź poprawny numer telefonu (bez spacji i myślników)!")
            msgOut.textContent = "Wprowadź poprawny numer telefonu powyżej (bez spacji i myślników)!"
            return false
        }

        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź poprawny numer telefonu powyżej!"
        return false
    }
}

function ValidateDocumentType()
{
    // Nie ma tutaj nic do zrobienia
    return true
}

function ValidateDocumentYear()
{
    let field = irkForm.elements['document-year']
    let msgOut = document.getElementById('document-year-msg')

    field.setCustomValidity("")

    if (field.validity.valid)
    {
        if (new Date(parseInt(field.value), 0) > new Date())
        {
            msgOut.textContent = "Wprowadź poprawny rok uzyskania dokumentu powyżej; tego roku jeszcze nie było!"
            field.setCustomValidity('Wprowadź poprawny rok uzyskania dokumentu; tego roku jeszcze nie było!')
            return false
        }

        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź poprawny rok uzyskania dokumentu powyżej!"
        return false
    }
}

function ValidateDocumentID()
{
    let field = irkForm.elements['document-id']
    let msgOut = document.getElementById('document-id-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź identyfikator dokumentu powyżej!"
        return false
    }
}

function ValidateIndexNumber()
{
    let field = irkForm.elements['index-number']
    let msgOut = document.getElementById('index-number-msg')

    if (field.validity.valid)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Wprowadź poprawny numer indeksu studenta powyżej!"
        return false
    }
}

function ValidateFieldOfStudy()
{
    // Nie ma tutaj nic do zrobienia
    return true
}

function ValidateStudiesType()
{
    // Nie ma tutaj nic do zrobienia
    return true
}

function ValidateRodoCheckbox()
{
    let field = irkForm.elements['rodo-accepted']
    let msgOut = document.getElementById('rodo-accepted-msg')

    if (field.checked === true)
    {
        msgOut.textContent = ""
        return true
    }
    else
    {
        msgOut.textContent = "Konieczne jest udzielenie powyższej zgody!"
        return false
    }
}


irkForm.elements['candidate-name'].addEventListener("input", (event) => {ValidateCandidateName();})
irkForm.elements.surname.addEventListener("input", (event) => {ValidateSurname();})
irkForm.elements.birthplace.addEventListener("input", (event) => {ValidateBirthplace();})
irkForm.elements.birthdate.addEventListener("input", (event) => {ValidateBirthDate();})
irkForm.elements.gender.addEventListener("keyup", (event) => {ValidateGender();})
irkForm.elements.email.addEventListener("input", (event) => {ValidateEmail();})
irkForm.elements.phonenum.addEventListener("input", (event) => {ValidateTelephone();})
irkForm.elements['document-type'].addEventListener("input", (event) => {ValidateDocumentType();})
irkForm.elements['document-year'].addEventListener("input", (event) => {ValidateDocumentYear();})
irkForm.elements['document-id'].addEventListener("input", (event) => {ValidateDocumentID();})
irkForm.elements['index-number'].addEventListener("input", (event) => {ValidateIndexNumber();})
irkForm.elements['primary-field-of-study'].addEventListener("input", (event) => {ValidateFieldOfStudy();})
irkForm.elements['rodo-accepted'].addEventListener("input", (event) => {ValidateRodoCheckbox();})

