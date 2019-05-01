(function () {

    function Validator(form) {
        this.form = form;
        this.emailField = form.querySelector("input[name='email']");
        this.nameField = form.querySelector("input[name='name']");
        //this.sendButton = form.querySelector("input[name='send']");
        // jak widac powyzej nie trzeba najpierw deklarowac tych zmiennych
        // tylko od razu przypisujemy(do this) i on od razu ogarnia ze to jest jego
        // wlasciwosc

        this.form.addEventListener("submit", this.validate.bind(this), false);
        //this.sendButton.addEventListener("click" , this.press.bind(this), false);
        /*        this.sendButton.addEventListener('click', function (clickEvent) {
            const domEvent = document.createEvent('Event');
            domEvent.initEvent('submit', false, true)
            clickEvent.target.closest('form').dispatchEvent(domEvent);
        })*/
    }

/*    Validator.prototype.press = function (clickEvent){
        const domEvent = document.createEvent('Event');
        domEvent.initEvent('submit', false, true)
        clickEvent.target.closest('form').dispatchEvent(domEvent);
    }*/

    Validator.prototype.isEmail = function(text) {
        return (text.indexOf("@") !== -1);
    };

    Validator.prototype.isNotEmpty = function(text) {
        return (text !== "");
    };

    Validator.prototype.displayErrors = function() {

        let p = this.form.querySelector(".uwaga_12");

        if (!p) { // p IS null so exist!
            p = document.createElement("p");
        }

        p.className = "uwaga_12";
        p.innerHTML = this.errors.join("<br>");  //biere tablice i pomiedzy jej
        // elementy wstawiam join w tym przypadku nowa linie

        this.form.insertBefore(p, this.form.children[0]); //wstawienie przed 1 dziecko forma
        // elementu p. rozdzielonego <br>
    };

    Validator.prototype.validate = function (e) {
        e.preventDefault(); //strona sie NIE przeladuje!

        console.log("I am in event listener");
        this.errors = [];

        if (!this.isEmail(this.emailField.value)) { //email
            //not valid
            this.errors.push("Email address is not valid");
            console.log("Email address is not valid");
            this.emailField.classList.add("invalid-value");
        } else {
            this.emailField.classList.remove("invalid-value");
            console.log("Email address is valid");
        }

        if (!this.isNotEmpty(this.nameField.value)) { //name
            //not valid
            this.errors.push("You didn't put your name");
            this.nameField.classList.add("invalid-value");
        } else {
            this.nameField.classList.remove("invalid-value");
            console.log("Name is put");
        }

        if (this.errors.length) {
            this.displayErrors();
        } else {
            this.form.submit(); //wysylamy do serewera powinno pojawic sie w adresie
        }
    };

    new Validator(document.querySelector("#form"));
    new Validator(document.querySelector("#form2"));

})();