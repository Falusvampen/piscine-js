// Instructions
// Create two functions which accept a string, and return a string:

// RNA: that converts a DNA strand into its compliment RNA strand.
// DNA: that converts an RNA strand into its compliment DNA strand.
// Compliments:

// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U
// Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.


function RNA(RNAStrand){
    let dnastrand = ""
        for (let i = 0; i < RNAStrand.length; i++){
        if (RNAStrand[i] === "C"){
            dnastrand += "G"
        }
        if (RNAStrand[i] === "G"){
            dnastrand += "C"
        }
        if (RNAStrand[i] === "A"){
            dnastrand += "T"
        }
        if (RNAStrand[i] === "U"){
            dnastrand += "A"
        }
    }
}

function DNA(DNAstrand){
    let rnastrand = ""
        for (let i = 0; i < DNAstrand.length; i++){
        if (DNAstrand[i] === "C"){
            rnastrand += "G"
        }
        if (DNAstrand[i] === "G"){
            rnastrand += "C"
        }
        if (DNAstrand[i] === "T"){
            rnastrand += "A"
        }
        if (DNAstrand[i] === "A"){
            rnastrand += "U"
        }
    }
}