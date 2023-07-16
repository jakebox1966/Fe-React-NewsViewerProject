import NewsList from './components/NewsList'
import Categories from './components/Categories'
// import { useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewsPage'

function App() {
    /**
     * 라우터로 변경
     */
    // const [category, setCategory] = useState('all')
    // const onSelect = useCallback((category) => {
    //     setCategory(category)
    // }, [])

    return (
        // <>
        //     <Categories category={category} onSelect={onSelect} />
        //     <NewsList category={category} />
        // </>
        <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    )
}

export default App
