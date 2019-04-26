(function ($) { //mowie że w tej anonimowej funkcji używając dolara ma on oznaczać jQuery!

    var tabsNav = $(".tabs-nav__item"), //do paska nawigacyjnego
        tabsItems = $(".tabs__item"), // sam element ktory np bedzie sie zmienial czy hide
        activeClass = "active-class";


    //tabsNav.filter(":first") // to zadzialaloby tak samo jak to nizej
    tabsNav.first().addClass(activeClass);
    //tabsItems.not(":first").hide(); //ze wszystkich elementow ktore maja klase tabs__item oprocz pierwszego -> ukryj

    tabsNav.on("click", function () {
        //console.log("zwykly this" + this); //obiekt ktory kliknalem ale nie jest to obiekt jquery czyli on np ma teraz this.innerHTML(szczegoly ponizej)
        //console.log("dolar this" + $(this)); //teraz to bedzie obiekt jquery! BEZ STRINGU!
        //console.log("click");

        var tabNav = $(this), //raz utworzony obiekt a nie ze za kazdym razem wolasz jakby konstruktor
            index = tabNav.index();

        //console.log(index);
        tabsNav.removeClass(activeClass); // usun wszystkie podswietlenia z "menu"
        tabNav.addClass(activeClass); // dodaj tam gdzie kliknelismy

        tabsItems.hide() //najpierw ukryj wszystkie a potem pokaz tylko ten ktory chce
            .eq(index).fadeIn(700); // w ms ( animacja)
        //    .eq(index).show();
        //.eq(index).show(); // normalne przejscie
    })

})(jQuery);










// do 30 min (to co ponizej) m innymi :
//znajdywanie elementow zapisanych jako ID w html przy pomocy dolara
// wywolywanie na nich jakby htmla z poziomu JSa


//////////////////////////////////////////////////////////////////////////////////////////
/*
//var messi = $("#messi");
//console.log(messi);

//var links = messi.find("a"); // w danym divie(choc niekoniecznie musi to byc on) ktory ma id messi znajdz "a" ten od 'a href'

//links.addClass("Klasa"); //dodanie class do naszego(naszych bo doda do wszystkich ktore beda w messi a. Teraz zatem bedzie :

var links = $("#messi")
    .find("a")
    .addClass("Klasa")
    .css("font-size",30)
    //.html("<p> Witam </p>");
    .html("<a href='#' class='Klasa'>​​ Tekst odnośnika (lub obrazek)​​ xxx </a> "); //ten hashtag to bylo jakby link na te sama strone(ala f5)

//$("#messi a").css("font-size", 30); // oba zadzialaja!
//$("#messi a").css("font-size", "30px");
*/

////////////////////////////////////////////////////////////////////////////////////////
//tu jest sposob bez jquery na to co wyzej czyli dodaniu "klasa" do wszystkich elementow ktore maja id messi
/*var links2 = document.querySelectorAll("#messi a");

// links2.classList.add("klasa"); // tak sie nie da!!

for (var i = 0 ; i < links2.length ; ++i){
    links2[i].classList.add("klasa");

}*/

//document.querySelector("div").innerHTML = "AAA";
/*
var messiDoc = document.querySelector("#messi");
console.log($("#messi"));

console.log(document.querySelector("#messi"));*/
