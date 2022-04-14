import JSBI from "jsbi";
//intall ts-node globaly => npm install -g ts-node

// const key = JSBI.BigInt('43171207364617000135550000000120141000120146');
// const key = JSBI.BigInt('25220426490913000208652060000500541206537238');
const key = JSBI.BigInt('25220426490913000208652060000500541206537238');


console.log("Nota de base:\n" + String(key));
console.log("-----------")
const qttNewNotes = 10;
const newNotes = generateNewNotes(key, qttNewNotes);
console.log("Novas notas:")
for (let i = 0; i < newNotes.length; i++) {
    console.log(newNotes[i])
}


function incrementStringValue(value: string, increment: number) {
    var valueInt = parseInt(value) + increment;
    var leftPadLenght = getLeftPadLength(value);
    var newValue: string = '';
    for (let i = 0; i < leftPadLenght; i++) {
        newValue += '0'
    }
    newValue += valueInt;
    // console.log(newValue);
    return newValue;

}

function getLeftPadLength(value: string) {
    let leftPad: number = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i] == '0') {
            leftPad++;
        }
        if (value[i] != '0') {
            break;
        }
    }
    return leftPad;
}

function generateNewNotes(key: JSBI, index: number) {
    var keyString = key.toString();
    const newNotes = [];
    for (var i = 0; i < index; i++) {
        var ufEmitente: string, year: string, month: string,
        cnpj: string, noteModel: string, noteSerie: string,
        noteNumberF: string, emissionType: string, numericCode: string, verifierDigit: number;
    
        ufEmitente = keyString.substring(0, 2);
        year = keyString.substring(2, 4)
        month = keyString.substring(4, 6)
        cnpj = keyString.substring(6, 20)
        noteModel = keyString.substring(20, 22)
        noteSerie = keyString.substring(22, 25)
        noteNumberF = incrementStringValue(keyString.substring(25, 34), i+1)
        emissionType = keyString.substring(34, 35)
        numericCode = incrementStringValue(keyString.substring(35, 43), i+1)


        let newKey_withoutVF = ufEmitente + year + month + cnpj + noteModel + noteSerie + noteNumberF + emissionType + numericCode
        let reversedNewKey_withoutVF = newKey_withoutVF.substring(0, 43).split('').reverse().join('')
        
        let sum = 0;
        let aux = 2;
        let count = 0;

        while (count != newKey_withoutVF.length) {
            let actualDigit = parseInt(reversedNewKey_withoutVF[count]);
            // console.log("operação: " + actualDigit + " * " + aux + " = " + actualDigit * aux);
            sum += actualDigit * aux;
            aux++;
            count++;

            if (aux > 9) {
                aux = 2;
            }
        }

        // console.log("sum = " + sum);
        verifierDigit = 0;
        if ((11 - (sum % 11)) == 10 || (11 - (sum % 11)) == 11) {
            verifierDigit = 0
        }
        else {
            verifierDigit = 11 - (sum % 11);
        }
        
        // console.log("verifierDigit = " + verifierDigit)
        let newNote_withVF = newKey_withoutVF + verifierDigit;
        newNotes.push(newNote_withVF);
        // console.log("newNote_withVF = " + newNote_withVF)
    }
    return newNotes;
}