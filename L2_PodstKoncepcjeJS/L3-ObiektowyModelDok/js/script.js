(function () {

    var tooltip = null;

    function createTooltip(title, options) {
        var div = document.createElement("div"); // utworzenie elementu do HTMLa!

        div.textContent = title; // co ma byc w tym naszym dymku
        div.className = "tooltip"; //czyli format z css
        div.hidden = true; //ukryj go narazie bo w tym momencie mialby zla lokalizacje

        document.querySelector("body").appendChild(div); //dodaj go na stronie (od tego momentu bd widoczny)
        //document.body.appendChild(div); // tu sposob mniej uniwersalny ale krotszy!
        //ustawienie jego pozycji wzgledem lewej sciany
        div.style.left = (options.x + options.width /2 - div.offsetWidth/2 ) + "px";
        // ustawienie jego pozycji wzgledem gornej sciany
        div.style.top  = (options.y - div.offsetHeight) + "px";
        //pokaz dziada skoro ma juz ustawiona pozycje
        div.hidden = false;

        tooltip = div;
    }


    function showSth(e) { // e od event czyli teraz sie odnosimy do tego konkretnego dymka
        console.log(e.target); // tu masz img src itd czyli cala linijke z html pobrana
        console.log(e);
        console.log("Najechalem myszka");
        //console.log("tekst w chmurce dla danego obrazka to  : " + e.target.getAttribute("title"));
        var title = e.target.getAttribute("title"); // pobranie wartosci title tego elementu

        e.target.removeAttribute("title"); //usuniecie tego atrybutu
        createTooltip(title,
            {
                x: e.target.offsetLeft,
                y: e.target.offsetTop,
                width: e.target.offsetWidth
            }); //tu stworzylismy odpowiednie wymiary naszego pseudo dymku na podstawie danego obrazku,
        //naszym celem jest ustawienie go na srodku lekko nad
    }

    function hideSth(e) {
        console.log("Zjechalem mysza");

        //jako ze chcemy na chwile usunac ten htmlowy default to zapiszmy go na boku zeby mozna bylo do niego wrocic
        e.target.setAttribute("title", tooltip.textContent);
        tooltip.parentNode.removeChild(tooltip); //usuniecie dynamicznie utworzonego elementu na stronie

    }

    var titles = document.querySelectorAll("[title]"); //znajdzie kazdy element na stronie ktory ma atrybut title

    for (var i = 0; i < titles.length;++i){ //taka pseudo nieskonczona petla dzieki ktorej przejdziemy do odpowiedniej funkcji
        titles[i].addEventListener("mouseenter", showSth, false);
        titles[i].addEventListener("mouseleave", hideSth, false);
    }
    
    
/*    var container = document.querySelector(".container"); //mozna to zrobic rowniez za pomoca petli

    container.addeListener("click", function () {
        console.log("klik");
    },false);*/
})();