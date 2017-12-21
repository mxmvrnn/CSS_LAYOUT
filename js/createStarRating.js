(function name() {
  var bookRating = document.getElementsByClassName('book-rating');

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

ratingWrapperContainer.appendChild(ratingWrapper)

Array.prototype.forEach.call(bookRating, function(e) {
  e.innerHTML = ratingWrapperContainer.innerHTML;
});

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
}())
