import JSBI from 'jsbi'

class Note {
    constructor(ufEmitente, year, month, cnpj, noteModel, noteSerie, noteNumberF, emissionType, numericCode, verifierDigit) {
        this.ufEmitente = ufEmitente;
        this.year = year;
        this.month = month;
        this.cnpj = cnpj;
        this.noteModel = noteModel;
        this.noteSerie = noteSerie;
        this.noteNumberF = noteNumberF;
        this.emissionType = emissionType;
        this.numericCode = numericCode;
        this.verifierDigit = verifierDigit;
    }

    getUfEmitente() { return this.ufEmitente}
    getYear() { return this.year}
    getMonth() { return this.month}
    getCnpj() { return this.cnpj}
    getNoteModel() { return this.noteModel}
    getNoteSerie() { return this.noteSerie}
    getNoteNumberF() { return this.noteNumberF}
    getEmissionType() { return this.emissionType}
    getNumericCode() { return this.numericCode}
    getVerifierDigit() { return this.verifierDigit}

    setUfEmitente(ufEmitente) {this.ufEmitente = ufEmitente}
    setYear(year) {this.year = year}
    setMonth(month) {this.month = month}
    setCnpj(cnpj) {this.cnpj = cnpj}
    setNoteModel(noteModel) {this.noteCode = noteModel}
    setNoteSerie(noteSerie) {this.noteSerie = noteSerie}
    setNoteNumberF(noteNumberF) {this.noteNumberF = noteNumberF}
    setEmissionType(emissionType) {this.emissionType = emissionType}
    setNumericCode(numericCode) {this.numericCode = numericCode}
    setVerifierDigit(verifierDigit) {this.verifierDigit = verifierDigit}

}

let key, keyStr;
let qttNewNotes = 10;
let newNotes = [];



key = JSBI.BigInt('25220426490913000208652060000500541206537238')
// key = JSBI.BigInt('43171207364617000135550000000120141000120146')
newNotes = generateNewNote(key, 5)
for (let i = 0; i < newNotes.length; i++) {
    console.log(newNotes[i])
}


function generateNewNote(key, index) {
    let keyStr = key.toString()
    let newNotes = []
    for (let i = 0; i < index; i++) {
        let ufEmitente, year, month, cnpj, noteModel, noteSerie, noteNumberF, emissionType, numericCode, verifierDigit = 0;
        

        ufEmitente = keyStr.substring(0, 2)
        year = keyStr.substring(2, 4)
        month = keyStr.substring(4, 6)
        cnpj = keyStr.substring(6, 20)
        noteModel = keyStr.substring(20, 22)
        noteSerie = keyStr.substring(22, 25)
        noteNumberF = parseInt(keyStr.substring(25, 34)) + i + 1
        emissionType = keyStr.substring(34, 35)
        numericCode = parseInt(keyStr.substring(35, 43)) + i + 1
        let newKey = ufEmitente + year + month + cnpj + noteModel + noteSerie + noteNumberF + emissionType + numericCode
        
        let keyLen = keyStr.length;
        let reversedFirstKeyDigits = newKey.substring(0, 43).split('').reverse().join('')


        let sum = 0;
        let aux = 2;
        let count = 0;
        
        while (count != keyLen - 1) {
            let digit = parseInt(reversedFirstKeyDigits[count])

            // console.log("operacao: " + digit + " * " + aux + " = " + digit*aux)
            sum += digit * parseInt(aux);
            aux++;
            count++;
    
            if (aux > 9) {
                aux = 2;
            }
        }

        verifierDigit = 0;
        console.log(typeof(verifierDigit))
        if ((sum % 11) != 0) {
            verifierDigit = 11 - (sum % 11);
            console.log(typeof(verifierDigit))
        }
        console.log(typeof(verifierDigit))
    
        let newNote = new Note(ufEmitente, year, month, cnpj, noteModel, noteSerie, noteNumberF, emissionType, numericCode, verifierDigit)
        newNotes.push(newNote);
    }


    return newNotes;
}


// console.log(keyStr)
// console.log(ufEmitente)
// console.log(year)
// console.log(month)
// console.log(cnpj)
// console.log(noteCode)
// console.log(noteSerie)
// console.log(noteNumberF)
// console.log(contigenceOrNormal)
// console.log(variable)
// console.log(verifierDigit)