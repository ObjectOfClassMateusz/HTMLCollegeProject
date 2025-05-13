let open_book_img = document.getElementById('open-book-img');
let library_title = document.getElementById('library-title');

window.addEventListener('scroll', function(){
    let scrollValue = window.scrollY;
    library_title.style.right = scrollValue * 1.5 + 'px';
    library_title.style.top = scrollValue * 0.8 + 'px';
    open_book_img.style.bottom = -scrollValue * 0.3 + 'px';
});
