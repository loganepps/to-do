//Toggle plus to x on click
$("#plus").click(function(){
    $(this).toggleClass("down"); 
});
//Check off specific todos by clicking
//Use .on instead of .click to add event listeners to elements that exist when page loads so we can account for elements that aren't there yet
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    //Use .parent() to retrieve li enclosing the clicked span
    //Pass in callback function to manipulate fadeout duration and run .remove() after that
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //Stops event from bubbling up to other elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //Extract new todo text from input 
        let todoText = ($(this).val());
        //Handle if todo text is too long
        if (todoText.length > 25) {
            todoText = todoText.substring(0, 24) + "...";
        }
        //Clear input
        $(this).val("");
        //Creat new li and add to ul
        //Use .append to take a string of html and append elements to whatever is selected
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$("#plus").click(function() {
    $("input[type='text']").fadeToggle();
    $("input[type='text']").removeClass();
})