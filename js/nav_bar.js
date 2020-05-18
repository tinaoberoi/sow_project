jQuery.ajax({ 
     url: "nav.html", dataType: "html" 
}).done(function( responseHtml ) {
     $("#header").html(responseHtml);
});
