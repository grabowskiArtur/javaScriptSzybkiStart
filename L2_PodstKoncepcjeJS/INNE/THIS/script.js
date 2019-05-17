//https://motorolasolutions.udemy.com/understand-javascript/learn/v4/t/lecture/2566054?start=0
console.log(this); //zwroci window! bo to globalne

function a(){
    console.log(this);
    this.newVariable = "hello";
}

a(); //zwroci window! bo to globalne
console.log(newVariable); // mimo ze mowi iz takiej zmiennej nie ma to jest to niestety NIE PRAWDA BO JEST!!


var b = function () {
    console.log(this);
};

b(); //zwroci window! bo to globalne

var c = {
    name: "the c object",
    log: function () {
        var self = this;
        console.log("this w c wskazuje na (" + self.name + ")"); //this w c wskazuje na the c object
        console.log(self);
        self.name = "Ala";
        console.log(self); //{name: "the c object", log: ƒ} caly obiekt wydrukuje

        var setName = function (newName) {
            console.log("w setname na this mamy : ");
            console.log(self);
            self.name = newName; //tu zmieniam name WINDOWa!
        }
        setName("Nowe imie czyli Janusz!");
        console.log(self);

    }

};

c.log();
