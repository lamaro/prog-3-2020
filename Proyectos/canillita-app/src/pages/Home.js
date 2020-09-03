import React, { useEffect, useState } from 'react'
import Layout from '../containers/Layout'
import FullWidthGrid from '../components/FullWidthGrid'
import GridSkeleton from '../components/GridSkeleton'
import axios from 'axios';
import dayjs from 'dayjs'
import 'dayjs/locale/es' // load on demand

const Home = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    
    //Fecha de hoy
    const fecha = new Date();
    const diaDeHoy = dayjs(fecha).locale('es').format('YYYY-MM-DD')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.canillitapp.com/latest/${diaDeHoy}`);
                const data = response.data.slice(0, 30)
                setNews(data)
                setLoading(false)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, [diaDeHoy])

    return(
        <Layout loading={loading}>
            { !loading ? <FullWidthGrid data={news} /> : <GridSkeleton/> }
        </Layout>
    )
}
export default Home