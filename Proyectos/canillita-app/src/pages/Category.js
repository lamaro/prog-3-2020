import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Layout from '../containers/Layout'
import FullWidthGrid from '../components/FullWidthGrid'
import GridSkeleton from '../components/GridSkeleton'
import axios from 'axios';

const Category = (props) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    let { slug } = useParams();
    //Crean un objetito categoriesId
    const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5',
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
                const data = response.data.slice(0, 90)
                setNews(data)
                setLoading(false)
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, [location, categoriesId, slug])

    return (
        <Layout loading={loading}>
            {!loading ? <FullWidthGrid data={news} /> : <GridSkeleton />}
        </Layout>
    )
}
export default Category