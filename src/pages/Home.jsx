import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsStart } from '../redux/action/news.action'
import NewsItem from '../components/NewsItem'

export default function Home() {
    const news = useSelector(state => state.news)

    const dispatch = useDispatch()

    const getNews = useCallback(()=>{
        dispatch(getNewsStart())
    }, [dispatch])

    useEffect(() => {
       getNews()
    }, [news.length, getNews])


    return (
        <>
            <div className="row">
                {
                    news.length > 0 ? news.map((n, i) => (
                        <NewsItem n={n} key={i} />
                    )) : <div className="col-sm-12">
                        <div className="card" >
                            <h1>No News</h1>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}
