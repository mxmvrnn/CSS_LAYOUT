var createBook = document.getElementsByClassName('form-create-book');
var addAuthorName = document.getElementsByClassName('form-author-name');
var addBookName = document.getElementsByClassName('form-book-name');
var filterResults = document.getElementsByClassName('filter-results');
var bookContent = document.getElementsByClassName('book-content');
var b = document.getElementById('add-form');
var currentDate = new Date();
function getId(){
    for ( var i = 0 ; i < bookContent.length  ; i ++ ){
        var createId = "book_" + i;
        bookContent[i].id = createId;
    }
}
   
getId()

function include(url) { 
    var script = document.createElement('script'); 
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script); 
}

(function () { /* Всплывающее окошко при на нажатии на 'Add a Book' */
    // в этой задаче неважно, как именно прятать элемент
        // например через style.display:

    var a = document.getElementById('add-book');
    var b = document.getElementById('add-form');
    a.onclick = function() {
        b.style.display = 'flex';
    };


}());


(function () { /* добавление книг */
    createBook[0].onclick = function(){

        var dateCreation = new Date();

        var bookCover = document.createElement('div');
        bookCover.className = 'book-cover';        

        var bookName = document.createElement('div');
        bookName.className = 'book-name';
        bookName.innerHTML = addBookName[0].value;

        var bookAuthorName = document.createElement('div');
        bookAuthorName.className = 'book-author';
        bookAuthorName.innerHTML = addAuthorName[0].value;

        var bookRating = document.createElement('div');
        bookRating.className = 'book-rating';
        
        var book = document.createElement('div');
        book.className = 'book-content';
        book.appendChild(bookCover);
        book.appendChild(bookName);
        book.appendChild(bookAuthorName);
        book.appendChild(bookRating);

        filterResults[0].appendChild(book);
        
        b.style.display = 'none';

        /* addAuthorName[0].setAttribute(placeholder, "Add author name");
        addBookName[0].setAttribute(placeholder, "Add book name"); */

        console.log(dateCreation + " дата создания");
        var diff = currentDate - dateCreation;
        console.log(Math.round(diff / 1000) + " разница дат");

        include('js/createStarRating.js');
        getId();
    }  

    
}())


