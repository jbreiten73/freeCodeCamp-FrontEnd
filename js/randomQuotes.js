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
       text:"Entwickle dich zu dem einmaligen, unverwechselbaren, unaustauschbaren Menschen, der in dir angelegt ist",
       source:"  -Pindar"
     },
     {
       text:"Am Baum der guten Vorsätze gibt es viele Blüten, aber wenig Früchte.",
       source:"   -Konfuzius"
     },
     {
       text:"Manches können die Menschen besser, und manches die Skunks",
       source:"  -Mephitis"
     }
];
     let colors=["#1953ff","#007e10","#9933cc","#c47600"];
     let randQuote = quotes[Math.floor(Math.random()*(quotes.length))];
     let randColor = colors[Math.floor(Math.random()*(colors.length))];
     
     $("#text").html(randQuote.text);
     $("#text").css("color","#ffffff");
     $("#text").css("font-size","64px");
     $("#text").css("font-family","serif");
     $("#author").html(randQuote.source);
     $("#author").css("color","#ffffff");
     $("#author").css("font-size","40px");
     $("#author").css("font-family","serif");
    
     $("#quote-box").css("background-color",randColor);
}
