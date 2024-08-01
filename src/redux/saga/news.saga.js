import { put, takeLatest } from "redux-saga/effects";
import { GET_CATEGORY_NEWS_START, GET_NEWS_START } from './../constant/news.constant';
import { getCategoryNewsError, getCategoryNewsSuccess, getNewsError, getNewsSuccess } from './../action/news.action';
import { getNewsByApi } from "../services/news.services";



function* getNews() {
    try {
        let news = yield getNewsByApi();
        yield put(getNewsSuccess(news))
    } catch (error) {
        yield put(getNewsError(error.message))
    }
}


function* getCategoryNews({payload}) {
    try {
        let news = yield getNewsByApi(payload);
        yield put(getCategoryNewsSuccess(news))
    } catch (error) {
        yield put(getCategoryNewsError(error.message))
    }
}


export default function* news() {
    yield takeLatest(GET_NEWS_START, getNews);
    yield takeLatest(GET_CATEGORY_NEWS_START, getCategoryNews)
}