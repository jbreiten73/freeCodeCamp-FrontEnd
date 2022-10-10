window.onload=go;

function go(){
   $("#new-quote").click(
     function(){
        newRandomQuote();
     });
   newRandomQuote();
}

function newRandomQuote(){
    let quotes=[
     {
       text:"Essen und Trinken hält Leib und Seele zusammen",
       source:"  -Sokrates"
     },
     {
       text:"Der Schwache kann nicht verzeihen. Verzeihen ist eine Eigenschaft des Starken.",
       source:"  -Mahatma Gandhi"
     },
     {
       text:"Das Wort der Wahrheit lautet schlicht und ungeschminkt",
       source:"  -Euripides"
     },
     { 
       text:"Jeder Tag ist ein Wagnis und wird dadurch erst lebenswert",
       source:"  -Aristoteles"
     },
     { 
       text:"Der Charakter ist das Schicksal des Menschen",
       source:"  -Heraklit"
     },
     {
       text:"Lerne zuhören, und du wirst auch von denjenigen Nutzen ziehen, die nur dummes Zeug reden.",
       source:"  -Platon"
     },
     {
       text:"Manches können die Menschen besser, und manches die Skunks",
       source:"  -Mephitis"
     }
];
     let colors=["#e6ac00","#ff704d","#0099ff","#33cc00","#aa80ff","#ffa31a"];
     let randQuote = quotes[Math.floor(Math.random()*(quotes.length))];
     let randColor = colors[Math.floor(Math.random()*(colors.length))];
     let compColor="#ffffff";
     if(randColor=="#e6ac00"){
        compColor="#1953ff";
     }
     if(randColor=="#ff704d"){
        compColor="#008f22";
     }
     if(randColor=="#0099ff"){
         compColor="#ff6600";
     }
     if(randColor=="#33cc00"){
         compColor="#cc33ff";
     }
     if(randColor=="#aa80ff"){
         compColor="#557f00";
     }
     if(randColor=="#ffa31a"){
         compColor="#005ce5";
     }
     $("#text").html(randQuote.text);
     $("#text").css("color","#ffffff");
     $("#text").css("font-size","72px");
     $("#text").css("font-family","serif");
     $("#author").html(randQuote.source);
     $("#author").css("color","#ffffff");
     $("#author").css("font-size","32px");
     $("#author").css("font-family","serif");
     //$("body").css("background-color",randColor);
     $("#quote-box").css("background-color",compColor);
}
