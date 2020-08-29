alert("statistiques loaded");

// Display statistiques
function displayStats(stats) {
    let html = "";
    for (let stat of stats) {
        html += "<tr>";
        for (let field in stat)
            html += `<td>${stat[field]}</td>`;
        html += "</tr>";
    }

    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = html;

    console.log(table.innerHTML);
}

// Load statistique from 
function loadContent() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let stats = JSON.parse(httpRequest.responseText);
                displayStats(stats);
            } else {
                alert("Une erreur est survenue");
            }
        }
    };

    httpRequest.open('GET', 'statistique.json', true);
    httpRequest.send();
}
loadContent();