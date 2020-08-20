import React, { useState, useEffect } from 'react'
import Card from '../Card'
import axios from 'axios'

const MainCategory = ({catId}) => {
    console.log('Estoy en una category')
    const [artists, setArtists] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                const dataFiltered = data.filter(artist => artist.genre === catId)
                setArtists(dataFiltered)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, [catId])

    return (
        <div className="main">
            <h1>Artistas de {catId}</h1>
            {artists.map(artist => <Card key={artist._id} data={artist}/>)}
        </div>
    )
}

export default MainCategory