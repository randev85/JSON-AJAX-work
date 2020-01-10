let infoContainer = document.getElementById('info');
let btnFetch = document.getElementById('btn-fetch');
let btnRefresh = document.getElementById('btn-refresh');
let pageIncrem = 1;

btnFetch.addEventListener('click', function(){
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageIncrem + '.json');
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    }
    ourRequest.send();
    pageIncrem ++;
    if (pageIncrem > 3){
        btnFetch.classList.add('hide-me');
        btnRefresh.id = 'btn-refreshed';
    }

})

btnRefresh.addEventListener('click', function(){
    location.reload();
})

function renderHTML(data) {
    let htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += '<p class="text-justify border-bottom">' + data[i].name + ' is a ' + data[i].species + '. He likes eating ';

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            
            if (ii == 0){
                htmlString += data[i].foods.likes[ii];
            }else {
                htmlString += ' and ' + data[i].foods.likes[ii];
            }
        }

        htmlString += '. He doesn\'t like '

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            
            if (ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            }else {
                htmlString += ' and ' + data[i].foods.dislikes[ii];
            }
        }         
        htmlString += '.</p>';
    }

    infoContainer.insertAdjacentHTML('beforeend', htmlString );
}