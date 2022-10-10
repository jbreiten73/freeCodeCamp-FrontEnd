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
     }];
     let colors=['#e6ac00',"#ff704d",'#0099ff','#33cc00','#aa80ff','#ffa31a'];
     let randQuote = quotes[Math.floor(Math.random()*(quotes.length))];
     let randColor = colors[Math.floor(Math.random()*(colors.length))];
     $("#text").html(randQuote.text);
     $("#text").css("color",randColor);
     $("#text").css("font-size","96px");
     $("#author").html(randQuote.source);
     $("#author").css("color",randColor);
     $("#author").css("font-size","32px");
   //  $("body").css("background-color",randColor);
}
