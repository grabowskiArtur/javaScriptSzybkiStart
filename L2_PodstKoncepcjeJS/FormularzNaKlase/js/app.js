import Validator from "./Validator.js";

var form1 = new Validator(document.querySelector("#form"));
var form2 = new Validator(document.querySelector("#form2"));


document.querySelector("h3").innerHTML = form1.sayHello();