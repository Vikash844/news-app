import { GET_CATEGORY_NEWS_SUCCESS, GET_NEWS_SUCCESS } from './../constant/news.constant';

const initialstate = {
    news: [],
    categoryNews: [],
    categories: [
        "war",
        "goverment",
        "politics",
        "education",
        "health",
        "enviroment",
        "economy",
        "business",
        "fashion",
        "entertainment",
        "sport"
    ],
}
export const newsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            };

        case GET_CATEGORY_NEWS_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload]
            };

        default:
            return state;
    }
}