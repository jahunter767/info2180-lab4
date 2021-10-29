"use strict";

window.onload = function(){
    let searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", event =>
        fetch(`${window.location.href}superheroes.php`)
        .then(res => res.text())
        .then(resTxt => alert(resTxt))
        .catch(err => console.log(err))
    );
};
