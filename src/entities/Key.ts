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

    get getUfEmitente() { return this.ufEmitente}
    get getYear() { return this.year}
    get getMonth() { return this.month}
    get getCnpj() { return this.cnpj}
    get getNoteModel() { return this.noteModel}
    get getNoteSerie() { return this.noteSerie}
    get getNoteNumberF() { return this.noteNumberF}
    get getEmissionType() { return this.emissionType}
    get getNumericCode() { return this.numericCode}
    get getVerifierDigit() { return this.verifierDigit}
    get getFullKey() { return this.ufEmitente+this.year+this.month+this.cnpj+this.noteModel+this.noteSerie+this.noteNumberF+this.emissionType+this.numericCode+this.verifierDigit}

    set setUfEmitente(ufEmitente: string) {this.ufEmitente = ufEmitente}
    set setYear(year: string) {this.year = year}
    set setMonth(month: string) {this.month = month}
    set setCnpj(cnpj: string) {this.cnpj = cnpj}
    set setNoteModel(noteModel: string) {this.noteModel = noteModel}
    set setNoteSerie(noteSerie: string) {this.noteSerie = noteSerie}
    set setNoteNumberF(noteNumberF: string) {this.noteNumberF = noteNumberF}
    set setEmissionType(emissionType: string) {this.emissionType = emissionType}
    set setNumericCode(numericCode: string) {this.numericCode = numericCode}
    set setVerifierDigit(verifierDigit: string) {this.verifierDigit = verifierDigit}
}
