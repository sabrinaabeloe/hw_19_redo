$(document).ready(
    function (){

  



$('.card').hover(
    function(){
        // CHANGES THE BACKGROUND COLOR
        $(this).css('background-color', '#c8b2e4e8')
        // A POINTER CURSOR LETS THE USER KNOW THAT THIS IS A CLICKABLE ELEMENT 
        $(this).css('cursor', 'pointer')
        $(this).addClass("zoom")
    }, function() {
        // RETURNS COLOR BACK TO NORMAL AFTER MOUSE IS NO LONGER HOVERING 
        $(this).css('background-color', '')
        $(this).removeClass("zoom",3000)
    });
    $('#usdaCard').hover(
        function(){
            // CHANGES THE BACKGROUND COLOR
            $(this).css('background-color', '#c8b2e4e8')
            // A POINTER CURSOR LETS THE USER KNOW THAT THIS IS A CLICKABLE ELEMENT 
            $(this).css('cursor', 'pointer')
        }, function() {
            // RETURNS COLOR BACK TO NORMAL AFTER MOUSE IS NO LONGER HOVERING 
            $(this).css('background-color', '')
        });
    })// end document.ready function - all jquery code goes above this line