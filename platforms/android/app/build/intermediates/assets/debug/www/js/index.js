function bookDbInsert(){
    console.log("bookDb insert row button clicked");
    $('#bookDbInsertForm').show();
    $('#bookDbInsert').hide();
};

function bookDbInsertSubmit(){
    console.log("bookDb inserting row submit request clicked");
    $('#bookDbInsertForm').hide();
    $('#bookDbInsert').show();
}

//main function---------------------------------------------------------
$(document).ready(function(){
    //var booksDb = openDatabase('booksDb','1.0','booksDb',1024*1024*1024);
    console.log("document ready success");
    $('#bookDbInsert').click(bookDbInsert);
})