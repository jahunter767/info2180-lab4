"use strict";

window.onload = function(){
    let searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("submit", event => {
        event.preventDefault();

        let url = `${window.location.origin}/superheroes.php`;
        let searchQuery = document.getElementById("heroSearch").value;
        let query = `query=${searchQuery}`;

        fetch(`${url}?${query}`)
        .then(res => res.text())
        .then(resTxt => document.getElementById("result").innerHTML = resTxt)
        .catch(err => console.log(err))
    });
};
