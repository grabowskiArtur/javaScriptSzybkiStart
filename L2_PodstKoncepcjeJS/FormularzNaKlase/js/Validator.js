class Validator{
    constructor(form) {
        this.form = form;
        this.emailField = form.querySelector("input[name='email']");
        this.nameField = form.querySelector("input[name='name']");
        this.form.addEventListener("submit", this.validate.bind(this), false);
    }


        isEmail(text) {
            console.log("I am in isEmail function");
            return (text.indexOf("@") !== -1);
        }

        isNotEmpty(text) {
            console.log("I am in isNotEmpty function");
            return (text !== "");
        }

        displayErrors() {
            let p = this.form.querySelector(".uwaga_12");

            if (!p) { //not exist!
                p = document.createElement("p");
            }

            p.className = "uwaga_12";
            p.innerHTML = this.errors.join("<br>");

            this.form.insertBefore(p, this.form.children([0]));
        }


        sayHello() {
            console.log("BEJBE BEJBE");
            return("BEJBE BEJBE");
        }

        validate(e)
        {
            e.preventDefault();

            console.log("I am in Validate function");
            this.errors = [];

            if (!this.isEmail(this.emailField.value))
            {
                this.errors.push("Email address is not valid");
                console.log("Email address is not valid");
                this.emailField.classList.add("invalid-value");
            } else {
                this.emailField.classList.remove("invalid-value");
                console.log("Email address is valid!");
            }

            if (!this.isNotEmpty(this.nameField.value))
            {
                this.errors.push("You didn't put your name");
                console.log("You didn't put your name");
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
        }
}

export default Validator;