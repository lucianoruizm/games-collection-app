// API key
const apiKey = process.env.API_KEY

// API URL 
const url_api = "https://api.rawg.io/api/";

//Getting date
const getCurrentMonth = function () {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}
const getCurrentDay = function () {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// This is for a list of new games recently released
const new_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// const newGamesGet = () => `${ url_api }${ new_games }`;

export function getNewGames () {
    return fetch(url_api + new_games)
      .then(result => result.json())
      .catch(err => console.log(err))
}