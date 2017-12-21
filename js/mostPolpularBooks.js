(function () {
    var filterPopularity = document.getElementById('filter-set_3');
    var ratingWrapper = document.getElementsByClassName('rating');
    var bookContent = document.getElementsByClassName('book-content');    

    filterPopularity.onclick = function(){
        for (var i = 0; i < ratingWrapper.length; i++){
            var mostPopLabel = ratingWrapper[i].firstChild;
            mostPopLabel.classList.contains("active") ? bookContent[i].style.display = "block" : bookContent[i].style.display = "none";
        }
    }
}())