let irkForm = document.getElementById('irk-form')

const irkSubmitUrl = 'http://localhost:3000/irk-submissions'

irkForm.addEventListener('submit', (event) => {
    event.preventDefault()

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
        window.location.replace('../irk-submissions.html')
    })
})

