document.getElementById('group-name').innerHTML = "Group Name: ATHENA";
document.getElementById('group-name').style = 'color: white'

let word = ["Toba", "Demand", "Mitems", "Shytemi", "Obums", "Jhenna", "Emmanuel", "Korex"]
console.log(word[0])
console.log(word[1])
console.log(word[2])
console.log(word[3])
console.log(word[4])
console.log(word[5])
console.log(word[6])
console.log(word[7])


const athena = {
    firstName: 'John',
    lastName: 'Doe',
    bestMovie: 'wire',
    bestFood: 'indomie',
    state: 'lagos',
    groupName: 'Athena',
    complexion: "black",
    birthMonth: "march"
}
console.log("Best Movie is: " + athena.bestMovie)

let noun = "dog"
let verb = "ran"
let adjective = 'big'

console.log("The " + adjective + " " + noun + " " + verb + " " + "quickly")
console.log("There is a " + adjective + " " + noun + " " + "next door")
console.log("He " + verb + " " + "when the " + adjective + " " + noun + " chased him")
console.log("The " + adjective + " " + noun + " died from food poisoning")
console.log("The " + noun + " just gave birth to some beautiful and " + adjective + " puppies")

function remainder (a, b) {
    console.log(a % b)
}

remainder(7, 4)

let root1
let root2

function myfun(a, b, c) {
    let numerator = b*b - (4 *a *c)
    if (numerator > 0) {
        root1 = (-b + Math.sqrt(numerator)/( 2*a))
        root2 = (-b - Math.sqrt(numerator)/(2*a))
        console.log(root1, root2)
    }

    else {
        console.log("cant be solved numerato equals to " + numerator)
    }
}

myfun(-6, 3, 2)

const myNoun = "dog"
const myVerb = "ran"
const myAdjective = 'big'
const myAdverb = 'quickly'

const wordBlanks = ("The " + myAdjective + " " + myNoun + " " +myVerb + " " + myAdverb)
console.log(wordBlanks)

function areaOfCircle(radius) {
    console.log(Math.PI * (radius ** 2))
}

areaOfCircle(9)


function simpleInterest(x,y, z) {
    console.log((x * y * z) / 100)
}

simpleInterest(8200, 1750, 2)

let x = 10 % 4
console.log(x)


let meritWeight = 78;
let nutjobWeight = 92;

let meritHeighht = 1.69;
let nutjobHeight = 1.95;

function bmi(m1, h1, m2, h2) {
    meritBMI = m1 / h1 ** 2;
    nutjobBMI = m2 / h2 ** 2;
    
    meritHigherBMI = meritBMI > nutjobBMI
    return meritHigherBMI
}

answer = bmi(meritWeight, meritHeighht, nutjobWeight, nutjobHeight)
console.log(answer)


































