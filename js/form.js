/*Submit*/
const submit = document.querySelector("#btn-submit")

/*input-file*/
let inputFile = document.querySelector('#file');
let labelFile = document.querySelector('#label-file');

/*input mail*/
let inputMail = document.querySelector("#mail")
let labelMail = document.querySelector("#mail-label");

let firstName = document.querySelector("#nombre");
let lastName = document.querySelector("#apellido");

const textArea = document.querySelector("#consulta");

// let divPadre;
let span = document.createElement("span");

function agregarError(input, mensaje) {
    span.textContent = mensaje;
    span.classList.add("msj-error");
    input.closest("div").after(span);
    setTimeout(() => {
        span.textContent = "";
        span.classList.remove("msj-error");
    }, 2000)
}

/* Estado de habilitación de los elementos */
let enable = [false, false, false, false];


inputFile.addEventListener('change', () => {
    if (inputFile.files.length > 0) {
        let sizeFileMegas = inputFile.files[0].size / (1024 * 1024)
        if (sizeFileMegas < 3) {
            let nameArchivo = inputFile.files[0].name.slice(0, 10) + "...";
            labelFile.textContent = nameArchivo;
            labelFile.classList.add('checked-file');
            labelFile.classList.remove('error-file');
        } else {
            labelFile.textContent = "El archivo debe pesar menos de 3MB"
            labelFile.classList.add('error-file');
            labelFile.classList.remove("checked-file")
        }
    }
})

inputMail.addEventListener('input', () => {
    let mail = inputMail.value.trim();
    let punto2 = /\.\w{2,}$/;
    let caracteresEspeciales = /[^a-zA-Z0-9\_\-\.]/g;
    let tildes = /[áéíóúÁÉÍÓÚ]/;

    if (mail.length > 6 && mail.indexOf('@') !== -1 && punto2.test(mail)
        && caracteresEspeciales.test(mail) && !tildes.test(mail)) {
        labelMail.style.color = "#eddfa7";
        inputMail.style.borderColor = "#66ff00";
        enable[2] = true
        observar(enable)
    } else {
        enable[2] = false
        agregarError(inputMail, "(El mail es invalido)")
        labelMail.style.color = "red";
        inputMail.style.borderColor = "red";
        observar(enable)
    }
})

firstName.addEventListener('input', () => {
    let name = firstName.value.trim().toLowerCase();
    let labelFirstName = firstName.closest('div').querySelector('label')
    if (name.length >= 3 && name.length <= 30) {
        labelFirstName.style.color = "#eddfa7"
        firstName.style.borderColor = "#66ff00"
        enable[0] = true;
        observar(enable)
    }
    else {
        agregarError(firstName, "(Min 3 caracteres)")
        firstName.style.borderColor = "red"
        labelFirstName.style.color = "red"
        enable[0] = false;
        observar(enable)
    }
})

lastName.addEventListener('input', () => {
    let lastNameValue = lastName.value.trim().toLowerCase();
    let labelName = lastName.closest('div').querySelector('label')
    if (lastNameValue.length >= 3 && lastNameValue.length < 100) {
        labelName.style.color = "#eddfa7"
        lastName.style.borderColor = "#66ff00"
        enable[1] = true;
        observar(enable)
    } else {
        agregarError(lastName, "(Min 3 caracteres)")
        labelName.style.color = 'red'
        lastName.style.borderColor = "red"
        enable[1] = false;
        observar(enable)
    }
})

textArea.addEventListener("input", () => {
    let textAreaValue = textArea.value.trim().toLowerCase();
    let labelArea = textArea.closest('div').querySelector('label')
    if (textAreaValue.length >= 10 && textAreaValue.length < 100) {
        labelArea.style.color = "#eddfa7"
        textArea.style.borderColor = "#66ff00"
        enable[3] = true;
        observar(enable)
    }
    else {
        agregarError(textArea, "(Min 10 caracteres)")
        textArea.style.borderColor = "red"
        labelArea.style.color = 'red'
        enable[3] = false;
        observar(enable)
    }
})

const observar = (array) => {
    if (array.every(value => value === true)) {
        submit.disabled = false;
        submit.classList.remove('disabled');
        submit.classList.add('btn-submit');
        return;
    }
    submit.disabled = true;
    submit.classList.add('disabled');
    submit.classList.remove('btn-submit');
    return;
}