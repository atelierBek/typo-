// # INIT

window.onload = vars ();
window.onload = eventsListeners();


////////////////////////////////////////


// # FUNCTION JS

// ## VARS
// definit les variables permet d'être appellé après le chargement du php ou les changements ajax
// pour définir les variables

function vars() {

    // ### NAV
    nav = document.getElementById("nav");
    fontName = document.getElementsByClassName("fontName");
    
    // ### CONTENT
    content = document.getElementById("content");

    // ###

}

// ## EVENTS LISTENERS
// definit les events listeners permet d'être appellé après le chargement du php ou les changements ajax
// pour définir les events listeners

function eventsListeners() {

    for  (i = 0; i < fontName.length; i ++) {
	
	fontName[i].addEventListener("click", specimen);
    } 
}


// ## SPECIMEN
// génère le specimen de base une fois l'input select choisit

function specimen () {

    // clean content of content
    content.innerHTML = "";

    // get font name
    fontName = this.innerHTML;

    // change font style content
    content.style.fontFamily = fontName;

   
    
    // ### 1 : INFORMATIONS
    
    div = document.createElement("div");
    div.id = "informations";
    h1 = document.createElement("h1");
    text = document.createTextNode(fontName);
   
    // xml informations ? TO DO

    h1.appendChild(text); 
    div.appendChild(h1);
    content.appendChild(div);

    
    
    // ### 2 : CORPS
    
    div = document.createElement("div");
    div.id = "corps";
    for (i = 10; i > 0; i --) {
	p = document.createElement("p");
	p.className = "note";
	text = document.createTextNode(i*6+"px");
	p.appendChild(text);
	div.appendChild(p);
	
	p = document.createElement("p");
	text = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");	
	p.appendChild(text);
	p.style.fontSize = i*6;
	div.appendChild(p);
    }
    content.appendChild(div);


    // ### 3 :

}
