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

// This is for a list of popular games recently released
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-metacritic&page_size=12`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-rating&page_size=12`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

export const popularGamesGet = () => `${ url_api }${ popularGames }`;
export const upcomingGamesGet = () => `${ url_api }${ upcomingGames }`;
export const newGamesGet = () => `${ url_api }${ newGames }`;