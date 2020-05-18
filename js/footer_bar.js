jQuery.ajax({ 
     url: "footer.html", dataType: "html" 
}).done(function( responseHtml ) {
     $("#footer").html(responseHtml);
});
