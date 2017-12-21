// var booksElement = document.getElementById('books');
var booksElement = document.getElementsByClassName('book-rating');

/* var bookWrapper = document.createElement('div'),
  bookAboutWrapper = document.createElement('div'),
  rightsWrapper = document.createElement('div'); */

/* bookWrapper.className = 'book';
bookAboutWrapper.className = 'book-about';
rightsWrapper.className = 'rights'; */
var ratingWrapperContainer = document.createElement('div');
ratingWrapperContainer.className = 'rating';

var ratingWrapper = document.createElement('div');
ratingWrapper.className = 'rating';



for(var i = 5; i--;){
  var ratingItemWrapper = document.createElement('label');
  ratingItemWrapper.className = 'rating-item fa fa-star';
  ratingItemWrapper.setAttribute('data-rate', i + 1);
  ratingWrapper.appendChild(ratingItemWrapper);
}

/* bookAboutWrapper.appendChild(ratingWrapper);
bookWrapper.appendChild(bookAboutWrapper);
booksElement.appendChild(bookWrapper); */
ratingWrapperContainer.appendChild(ratingWrapper)

Array.prototype.forEach.call(booksElement, function(e) {
  e.innerHTML = ratingWrapperContainer.innerHTML;
});

// booksElement[1].appendChild(ratingWrapper);



setTimeout(function(){
  var rateContainer = document.getElementsByClassName('rating');
  Array.from(rateContainer).forEach(function(mainRating){
    mainRating.addEventListener('click', function(e){
      e.preventDefault();

      if(!e.target.classList.contains('active')){
        Array.from(mainRating.children).forEach(function(item){
          item.classList.remove('active');
        });
        e.target.classList.add('active');
      }
    })
  })
}, 1000)