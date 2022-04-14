export class Key {
    private ufEmitente: string
    private year: string
    private month: string
    private cnpj: string
    private noteModel: string
    private noteSerie: string
    private noteNumberF: string
    private emissionType: string
    private numericCode: string
    private verifierDigit: string

    constructor(ufEmitente: string, year: string, month: string, cnpj: string, noteModel: string, noteSerie: string, noteNumberF: string, emissionType: string, numericCode: string, verifierDigit: string) {
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

    setUfEmitente(ufEmitente: string) {this.ufEmitente = ufEmitente}
    setYear(year: string) {this.year = year}
    setMonth(month: string) {this.month = month}
    setCnpj(cnpj: string) {this.cnpj = cnpj}
    setNoteModel(noteModel: string) {this.noteModel = noteModel}
    setNoteSerie(noteSerie: string) {this.noteSerie = noteSerie}
    setNoteNumberF(noteNumberF: string) {this.noteNumberF = noteNumberF}
    setEmissionType(emissionType: string) {this.emissionType = emissionType}
    setNumericCode(numericCode: string) {this.numericCode = numericCode}
    setVerifierDigit(verifierDigit: string) {this.verifierDigit = verifierDigit}
}

const chave = new Key('1','1','1','1','1','1','1','1','1','1')
console.log(chave)