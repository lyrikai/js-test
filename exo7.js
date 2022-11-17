

function adn(string1){
    const target = [];
    let result = [];

    for (
        const array = Array.from(string1);
        array.length;
        target.push(array.splice(0,3).join('')));

        target.forEach(one => { 
            if(one === "UCU" || one === "UCC" || one === "UCA" || one === "UCG" || one === "AGU" || one === "AGC" ){
                result.push("Serine")
            }else if (one === "CCU" || one === "CCC" || one === "CCA" || one === "CCG"  ){
                result.push("Proline")
            }else if (one === "UUA" || one === "UUG"  ){
                result.push("Leucine")
            }else if (one === "UUU" || one === "UUC"  ){
                result.push("Phénylalanine")
            }else if (one === "CGU" || one === "CGC" || one === "CGA" || one === "CGG" || one === "AGA" || one === "AGG"){
                result.push("Arginine")
            }else if (one === "UAU" || one === "UAC" ){
                result.push("Tyrosine")
            }
        });

    good = result.join("-")
    return good
}
console.log(adn("UUACGCAGUAGA"))
console.log(adn("CCGUCGUUGCGCUACAGC"))
console.log(adn("CCUCGCCGGUACUUCUCG"))