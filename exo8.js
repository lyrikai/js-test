let text = prompt()

let ask = text.slice(-1)

let upp = text.toUpperCase()

let fortniteTest

if (ask == "?"){
    console.log("Ouais Ouais...")
}else if(text == upp && text != ""){
    console.log("Pwa, calme-toi...")
}else if(text.includes("Fortnite") || text.includes("fortnite")){
    console.log("on s'fait une partie soum-soum ?")
}else if(text == ""){
    console.log("t'es en PLS ?")
}else{
    console.log("balek.")
}