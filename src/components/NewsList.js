/**
 * API 호출 : 컴포넌트가 화면에 보이는 시점에 API 요청 => useEffect 사용
 *
 * ** useEffect에 등록하는 함수에 async를 붙이면 안된다. => useEffect에서 반환해야하는 값은 뒷정리 함수이기 때문이다.
 *    useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해야한다.
 *
 */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;

    @media screen and(max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // async를 사용하는 함수 따로 선언

        const fetchData = async () => {
            setLoading(true)
            try {
                // category 값에 따라 요청할 주소에 쿼리스트링으로 추가된다.
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fd3c663915584bb9a394cd406d50780e`,
                )
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [category])

    // 대기 중일 때

    if (loading) {
        return <NewsListBlock>대기중 ...</NewsListBlock>
    }

    // 아직 article 값이 설정되지 않았을 때
    if (!articles) {
        return null
    }

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList
