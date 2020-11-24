const IMG_URL = "https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/";
const champs = champions.data;
const header = $(`<tr><th width=25%>IMG</th><th width=25%>Stats</th><th width=25%>Tags</th><th width=25%>Story</th></tr>`);

for (ch in champs) {
    $("#buba").append($(`<img src="${IMG_URL+String(ch)+".png"}" />`))
}


function listChampions() {
    let search = $("#search").val().toLowerCase();
    if (search != "") {
        $("#search-results").show();
        $("#search-results").empty();
        $("#search-results").append(header);
        // DEBUG
        // console.log(search);

        let results = Object.keys(champs).filter(str => str.toLowerCase().startsWith(search));

        console.log(results);

        for (ch of results) {
            $("#search-results").append($(`<tr><td><img width=50px height=50px src="${IMG_URL+String(ch)+".png"}"></td><td></td><td></td><td><a class="read-more" href="">Read more...</a></td></tr>`))
        }
    } else {
        $("#search-results").hide();
        $("#search-results").empty();
    }
}