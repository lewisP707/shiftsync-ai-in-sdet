async function getMovie(file = '/movie/100') {
    const json = await fetch(file).then(async function(response) {
        const movies = await response.json();
        return movies[0];
    });
    return json;
}

async function getText(file = '/movie/100') {
    console.log('Fetching movie details from:', file);
    const json = await getMovie(file);
    document.getElementById("film").innerHTML = json.name;
    let dateString = json.date.split('-');
    document.getElementById("date").innerHTML = dateString[0];
}

getText();
