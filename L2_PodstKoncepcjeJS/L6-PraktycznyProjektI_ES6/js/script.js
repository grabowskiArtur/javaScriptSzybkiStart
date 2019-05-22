//klasy
//nowy sposob ES6 i ecma script
/*class Person {
    constructor(firstName,lastName){ //tutaj dajesz wszystkie specyficzne rzeczy dla danego obiektu a ponizej ( np.
        // funkcja hello beda dodane jako prototyp)
        this.firstName = firstName;
        this.lastName  = lastName;
    }

    //mielismy nie robic tego typu metod dla obiektow(lepiej w prototypie)aby nie tworzyly sie nowe za kazdym razem
    // (miejsce w pamieci i szybkosc programu) ale tu jest inaczej! lepiej!
    sayHello(){ //syntactic sugar ? :D
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }
    // za pomoca tego sposobu mozna byloby zrobic ten formularz! i pasuje to zrobic!!
}*/

//stary sposob
/*function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.sayHello = function (){
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);

}
*/

var jan = new Person("Jan", "Kowalski");




/*
//funkcje strzałkowe
var sayHello = function () {
    console.log("siema!");
}

sayHello();

var sayHelloWithLambda = () => {
    console.log("siema z lambda !");
    return 3;
}

sayHelloWithLambda();

var square = (x) => {
    console.log(`${x} podniesiony do kwadratu`);
    return x*x;
}

console.log(square(3));

var shortSquare = x => x*x;
console.log(shortSquare(2));

*/

//template String :
/*
const osobaArtur = {
    name: "Artur",
    lastName: "Grabowski",
    age: 26,
    sayHello: function () {
        const self = this;
        console.log("Hi I am" + " " + self.name + " " + "and I am " + self.age + " years old" + (2+2) );
    },
    sayHelloWithTemplateString: function () {
        const self = this;
        console.log(`Hi I am ${self.name} and I am ${self.age} years old ${2+2}`)
    }
};

osobaArtur.sayHello();
osobaArtur.sayHelloWithTemplateString();

var html = `

    <h1>Witaj</h1>

`;

console.log(html);
*/



//const
/*
const osoba = {
    imie:"Artur"
};

osoba.imie = "jasiek";
console.log(osoba);
*/

//let
/*console.log(imieLet);
let imie = "Artur";*/

//var
/*
console.log(imie); // nie ma bledu lecz jest undefined!
var imie = "Piotr";
console.log(imie);*/
