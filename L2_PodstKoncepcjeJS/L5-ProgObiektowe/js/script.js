(function ($) {

    function displayErrors(errors, form) {

        let p = form.querySelector(".uwaga_12");

        if (!p) { // p IS null so exist!
            p = document.createElement("p");
        }

        p.innerHTML = errors.join("<br>")  //biere tablice i pomiedzy jej
        p.className = "uwaga_12";
        // elementy wstawiam join w tym przypadku nowa linie

        form.insertBefore(p, form.children[0]); //wstawienie przed 1 dziecko forma
        // elementu p. rozdzielonego <br>
    }

    function isEmail(text) {
        return (text.indexOf("@") !== -1);
    }

    function isNotEmpty(text) {
        return (text !== "");
    }


    const form = document.querySelector("#form"),
        emailField = form.querySelector("input[name='email']"),
        nameField = form.querySelector("input[name='name']"),
        sendButton = form.querySelector("input[name='send']"),
        numberField = form.querySelector("input[name='number']"), // It works the same so I didn't use it
        messageField = form.querySelector("textarea[name='message']");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); //strona sie NIE przeladuje!

        console.log("I am in event listener");
        var errors = [];

        if (!isEmail(emailField.value)) { //email
            //not valid
            errors.push("Email address is not valid");
            console.log("Email address is not valid");
            emailField.classList.add("invalid-value");
        } else {
            emailField.classList.remove("invalid-value");
            console.log("Email address is valid");
        }

        if (!isNotEmpty(nameField.value)) { //name
            //not valid
            errors.push("You didn't put your name");
            nameField.classList.add("invalid-value");
        } else {
            nameField.classList.remove("invalid-value");
            console.log("Name is put");
        }

        if (errors.length) {
            displayErrors(errors, form);
        } else {
            form.submit(); //wysylamy do serewera powinno pojawic sie w adresie
        }


    }, false);

    sendButton.addEventListener('click', function (clickEvent) {
        const domEvent = document.createEvent('Event');
        domEvent.initEvent('submit', false, true)
        clickEvent.target.closest('form').dispatchEvent(domEvent);
    })
})(jQuery);
/*    $(sendButton).click(function () {
        console.log(emailField.value);
    })

    $("#send").click(function () {
        console.log(emailField.value);
    })*/

/*if (emailField.value ){ //


} */


////////////////////////////////////////////////////////////
/*

//Klasa, instancje  i jej funkcje oraz klasa prototypowa
function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
/!*    this.sayHello = function () { //kiepski sposob bo za kazdym nowym obiektem tworzymy nowa funkcje czyli kolejne i kolejne miejsce w pamieci jest zajmowane
        console.log("Hello! My name is " + this.firstName + " " + this.lastName)
    }*!/

}

Person.prototype.sayHello = function () {
    console.log("Hello! My name is " + this.firstName + " " + this.lastName)
}

/!*function person(firstName, lastName) {

    return {
        firstName : firstName,
        lastName : lastName,
        sayHello: function () {
            console.log("Hello! My name is " + this.firstName + " " + this.lastName)
        }
    }
}*!/

var john = new Person("John", "Smith");

john.sayHello = function(){
    console.log("ELO to sem jo! ");
}

john.sayHello();
//var ann = person("Ann", "Buckingham");

//john.sayHello();*/
