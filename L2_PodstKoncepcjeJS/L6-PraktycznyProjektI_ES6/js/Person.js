//moduly
class Person {
    constructor(firstName,lastName){ //tutaj dajesz wszystkie specyficzne rzeczy dla danego obiektu a ponizej ( np.
        // funkcja hello beda dodane jako prototyp)
        this.firstName = firstName;
        this.lastName  = lastName;
    }

    //mielismy nie robic tego typu metod dla obiektow(lepiej w prototypie)aby nie tworzyly sie nowe za kazdym razem
    // (miejsce w pamieci i szybkosc programu) ale tu jest inaczej! lepiej!
    sayHello(){ //syntactic sugar ? :D
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
        return `Hello, my name is ${this.firstName} ${this.lastName}!`;

    }
    // za pomoca tego sposobu mozna byloby zrobic ten formularz! i pasuje to zrobic!!
}

export default Person;