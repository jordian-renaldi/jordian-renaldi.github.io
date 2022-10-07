document.getElementById("chamber-line").addEventListener('mouseover', (event) => {
    document.getElementById("chamber").setAttribute("style","")
    let span_arr = document.getElementById("chamber-line").getElementsByTagName("span")
    console.log(span_arr)
    console.log(document.getElementsByClassName("body"))
    document.body.setAttribute("style", `
        background-color: black;
        cursor: url("/img/baguette.png"), auto;
    `)
});

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/players',
  params: {team: '2', season: '2022'},
  headers: {
    'X-RapidAPI-Key': '${api_key}',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.response);
    let player_index = []
    while (player_index.length<6){
        let random = Math.round(Math.random()*18)
        if (player_index.includes(random) == false){
            player_index.push(random)
        }
    }
    console.log(player_index)
    let cardhtml = ""
    console.log(response.data.response.length)
    for (let p = 0; p < response.data.response.length; p++){
        if (player_index.includes(p)){
            let players = response.data.response[p]
            console.log(players)
            let firstname = players.firstname
            let lastname = players.lastname
            let height = players.height.meters || "minimally 1.9"
            let weight = players.weight.kilograms || "minimally 90"
            let country = players.birth.country || "Some country"
            let birthday = players.birth.date || "Mysterious birth"
            let jersey = players.leagues.standard.jersery || "00 because they havent chosen a number yet"
            let position = players.leagues.standard.pos || "bench player"
            cardhtml+=`
            <div class = "col-lg-2 mb-4">
            <div class="card bg-success text-white rgb tilt-card" >
            <div class="card-body">
            <h5 class="card-title"> ${firstname} ${lastname} </h5>
            <h6 class="card-subtitle mb-2"> ${country} / ${birthday}</h6>
            <p class="card-text">This player is ${height}m tall and weighs ${weight}kg. They play the ${position} position </p>
            </div>
            </div>
            </div>
            `
        }
    }
    document.getElementById("boston").innerHTML = cardhtml
}).catch(function (error) {
	console.error(error);
});

