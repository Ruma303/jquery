//% Sintassi

//, Versione completa
/* $(document).ready(function () {
    $("h1").hide();
}); */

//, Versione ridotta
/* $(function() {
    $("h1").css('color', 'red')
}); */

//, Versione ridotta con arrow function
//$(() => $("h1").css('color', 'blue'));


//% this

/* $(() => $("h1").hover(function() {
    $(this).css('color', 'blue');
})); */


/* $(() => $("h1").hover(()=> //. non funzionerà
    $(this).css('color', 'blue'))); */