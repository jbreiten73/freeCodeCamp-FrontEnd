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
       source:"Sokrates"
     },
     {
       text:"Das Wort der Wahrheit lautet schlicht und ungeschminkt",
       source:"Euripides"
     },
     { 
       text:"Jeder Tag ist ein Wagnis und wird dadurch erst lebenswert",
       source:"Aristoteles"
     },
     { 
       text:"Der Charakter ist das Schicksal des Menschen",
       source:"Heraklit"
     },
     {
       text:"Manches können die Menschen besser, und manches die Skunks",
       source:"Mephitis"
     ];

     let randQuote = quotes[Math.floor(Math.random()*(quotes.length))];
     $("#text").html(randQuote.text);
     $("#author").html(randQuote.source);
}
