import JSBI from "jsbi";
import { Key } from "./entities/Key";

//isntall ts-node globaly => npm install -g ts-node


//*********************************************************************************************//
//---------------------------------------------CODE--------------------------------------------//
//*********************************************************************************************//
const key = JSBI.BigInt('12354615213549212051212000000520050123564895'); // Alter to your key
const qttNewNotes = 10; // Alter to your wanted quantity of new keys

if (String(key).length == 44) {
    const newNotes = generateNewNotes(key, qttNewNotes); // List with all new notes
    console.log("Base note:\n" + String(key));
    console.log("-----------")
    console.log("New notes:")
    for (let i = 0; i < newNotes.length; i++) {
        let aux = newNotes[i];
        console.log(aux.getFullKey);
    }
}
else {
    console.log("Key must have 44 digits.")
}


//*********************************************************************************************//
//------------------------------------------FUNCTIONS------------------------------------------//
//*********************************************************************************************//
// Add all the zeros before the integer number. Requires the number value and
// the number that will be incremented to the value
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

// Get the number of "zeros" before the integer number. Requires the key value
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

// Generate all the new notes. Requires the key and the quantity of new notes
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
            // console.log("opera????o: " + actualDigit + " * " + aux + " = " + actualDigit * aux);
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
        const newKey = new Key(ufEmitente, year, month, cnpj, noteModel, noteSerie, noteNumberF, emissionType, numericCode, String(verifierDigit));
        newNotes.push(newKey);
        // console.log("newNote_withVF = " + newNote_withVF)
    }
    return newNotes;
}