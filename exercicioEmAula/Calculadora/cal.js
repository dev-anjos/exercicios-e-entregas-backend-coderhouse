const soma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject('Os valores devem ser diferentes de 0')
        }
        if (num1 < 0|| num2 < 0) {
            reject('Os valores devem ser positivos')
        }   else {
            resolve(num1 + num2)
        }

    })
}


const subtrcao = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 < 0) {
            reject('Os valores devem ser diferentes de 0')
        }
        if (num1 < 0 || num2 < 0) {
            reject('Os valores devem ser positivos')
        }   else {
            resolve(num1 + num2)
        }

    })
}
    
    
