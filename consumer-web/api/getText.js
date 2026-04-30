export async function getMovie(file = '/movie/100') {
    const json = await fetch(file).then(async function(response) {
        const movies = await response.json();
        return movies[0];
    });
    return json;
}