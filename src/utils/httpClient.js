// API URL 
const url_api = "https://api.rawg.io/api/";

// API key
const apiKey = process.env.REACT_APP_APIKEY

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
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular and new games recently released
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=12`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-rating&page_size=12`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

export const popularGamesGet = () => `${ url_api }${ popularGames }`;
export const upcomingGamesGet = () => `${ url_api }${ upcomingGames }`;
export const newGamesGet = () => `${ url_api }${ newGames }`;
export const gameDetailsGet = (game_id) => `${ url_api }games/${ game_id }?key=${ apiKey }`;
export const searchGamesGet = (game) => `${ url_api }games?key=${ apiKey }&search=${game}&page_size=21`;