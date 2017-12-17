
(function(){
  var bookSearch = document.getElementById('book-search');
  var bookName = document.getElementsByClassName('book-name');
  var bookAuthor = document.getElementsByClassName('book-author');
  var bookContent = document.getElementsByClassName('book-content');
  var a = new Array();
  var n;
     

  bookSearch.addEventListener('input', function(event){
    for (var i = 0; i < bookContent.length; i++){
      n = bookContent[i].getElementsByClassName('book-author');
      a[i] = n[0].innerHTML.toLowerCase();
      if(a[i].indexOf(event.target.value) !== -1){
        bookContent[i].style.display = "block";
      } else{
        bookContent[i].style.display = "none";
      }
    }
  })


    
 /* console.log(a); */

}())

/* for (var i = 0; i < bookContent.length; i++)
    {
      n = bookContent[i].getElementsByClassName('book-author');
      a[i] = n[0].innerHTML;
    } */
      /* inputNode.addEventListener('bookSearch', function (event) {
        const filteredItems = bookName.filter(function (item) {
          return item.indexOf(event.target.value) !== -1
        })
        
        listNode.innerHTML = renderListItems(filteredItems)
      }) */