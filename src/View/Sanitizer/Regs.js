//ALITY == Positionality
//Ivity == Clusivity
//Tality == Quantality


const ALITY = new RegExp("((end|beg|mid)((-|\+|\*|\/)?)((([1-9][0-9]*)?)(bin|nib|b|mb|gb|tb|%))?)(([1-9][0-9]*e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][0-9]*e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((0.[0-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)((e_[1-9][0-9]*((-|\+)[1-9][0-9]*)?)?)(([1-9][1-9]*)?)");
const IVITY = new RegExp("(in|ex):((end|mid|beg)|(([0-9][0-9]*)))((\+|-|\/|\*|bin|nib|mb|gb|tb|eb|%|\.)?)(([0-9][0-9]*)?)((bin|nib|mb|gb|tb|eb|%)?)((e(([1-9][0-9]*(\+|-)?([1-9][0-9]*)?)|((((-|\+)[1-9][0-9]*)?)(\+|-)?([1-9][0-9]*)?)|()))?)");
const TALITY = new RegExp()



exports = {ALITY, IVITY, TALITY}

//formulas:
//Anything between 100% and 199% but nothing else (\b[1][0-9][1-9]%(\b)?)
    //Reasoning: its exremely hard to include anything under 100% (inclusive)
    //but not anything over (especially 101%)
    
//Anything over 100% (inclusive) but nothing else (\b[1-9][0-9][0-9][0-9]*)%
    //Reasoning: adding this with the negation of anything between 101% and 199%
    //grabs anything over 100% non inclusive

//Using negative lookaheads we can combine the two to exclude these two patterns
//on word boundaries without consuming any charachters, while also grabbing anything
//at 100% or less
//(?!\b[1][0-9][1-9]%)(?!(\b[2-9][0-9][0-9][0-9]*)%)\b[1-9][0-9]?[0-9]?%