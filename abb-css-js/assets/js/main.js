let search = document.getElementById('search-click')
let close = document.getElementById('close-icon')
let search_sec = document.getElementById('search-section')

search.onclick = function() {
    if(search.className==='none-active'){
        search_sec.style.display = 'inline'
        search.classList.remove('none-active')
        search.classList.add('active')
    }
    else{
        search_sec.style.display = 'none'
        search.classList.remove('active')
        search.classList.add('none-active')
    }
}
close.onclick = function() {
    search_sec.style.display = 'none'
}