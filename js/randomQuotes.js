window.onload=go;

function go(){
   $("#new-quote").click(
     function(){
        newRandomQuote();
     });
   newRandomQuote();
}

function newRandomQuote (){
    let quotes=[
     {
       text:"Text 1",
       source:"Source 1"
     },
     {
       text:"Text 2",
       source:"Source 2"
     },
     { 
       text:"Text 3",
       source:"Source 3"
     }
     ];

     let randQuote = quotes[
     Math.floor(Math.rand()*(quotes.length))];
     $("#text").html=randQuote.text;
     $("#author").html=randQuote.source;
}
