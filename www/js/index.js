function bookDbInsert(){
    //$('#bookDbInsert').css({"background-color":"rgb(80,80,80)"});
    console.log("clicked");
};



//main function---------------------------------------------------------
$(document).ready(function(){
    //var booksDb = openDatabase('booksDb','1.0','booksDb',1024*1024*1024);
    console.log("success");
    $('#bookDbInsert').click(bookDbInsert);
})