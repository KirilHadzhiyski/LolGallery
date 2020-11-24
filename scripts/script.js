const IMG_URL = "https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/";
const champs = champions.data;
const header = $(`<tr><th width=25%>IMG</th><th width=25%>Stats</th><th width=25%>Tags</th><th width=25%>Story</th></tr>`);
const stats = {armor: "Armor",
            attackdamage:"Attack Damage",
            attackrange: "Attack Range",
            attackspeed: "Attack Speed",
            hp: "Health",
            movespeed: "Movement Speed"    
        }

for (ch in champs) {
    $("#buba").append($(`<img src="${IMG_URL+String(ch)+".png"}" />`))
}


function listChampions() {
    let search = $("#search").val().toLowerCase().trim();
    let results = Object.keys(champs).filter(str => str.toLowerCase().startsWith(search));
    if (search != "" && results.length > 0) {

        $("#search-results").show();
        $("#search-results").empty();
        $("#search-results").append(header);
        // DEBUG
        // console.log(search);


        console.log(results);

        for (ch of results) {
            let current_champ = champs[ch];


            $("#search-results")
                .append($(`<tr><td><img width=50px height=50px src="${IMG_URL+String(ch)+".png"}"></td><td><ul> ${Object.keys(stats).map(str => `<li>${stats[str]}: ${current_champ.stats[str]} </li>`).join()} </ul> </td><td><ul> ${current_champ.tags.map(str => `<li>${str}</li>`).join()} </ul></td><td><a class="read-more" href="">Read more...</a></td></tr>`))
        }
    } else {
        $("#search-results").hide();
        $("#search-results").empty();
    }
}
function listAllChampions() {
    let results = Object.keys(champs);

    $("#search-results").show();
    $("#search-results").empty();
    $("#search-results").append(header);



    for (ch of results) {
        let current_champ = champs[ch];


        $("#search-results")
            .append($(`<tr><td><img width=50px height=50px src="${IMG_URL+String(ch)+".png"}"></td><td><ul> ${Object.keys(stats).map(str => `<li>${stats[str]}: ${current_champ.stats[str]} </li>`).join()} </ul> </td><td><ul> ${current_champ.tags.map(str => `<li>${str}</li>`).join()} </ul></td><td><a class="read-more" href="">Read more...</a></td></tr>`))
    }
}