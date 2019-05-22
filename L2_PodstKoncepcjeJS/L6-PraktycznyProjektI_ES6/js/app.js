import $ from "jquery"; //zostalo wczesniej zainstalowane na stale za pomoca konsoli npm install jquery --save-dev
import Person from "./Person.js"; //importujemy to co jest w pliku person dane do export

var jan = new Person("Jan", "Kowalski");

//document.querySelector("h1").innerHTML = jan.sayHello();
$("h1").html(jan.sayHello() + "Ale to pieknie dziala!");