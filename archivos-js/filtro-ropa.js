let searchBar = () => {

    var searchValue = document.getElementById('search-bar-01');
    var items = document.getElementsByClassName('product-name');

    for(var i = 0; i < items.length; i++){

        items[i].parentNode.style.display = 'block'

        if(!(items[i].innerHTML.toLowerCase().includes(searchValue.value.toLowerCase()))){

            items[i].parentNode.style.display = 'none'; 

        };

    }

}