import React, { useState, useEffect } from 'react'
import Card from '../Card'
import axios from 'axios'

const MainHome = () => {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                setArtists(data)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, [])

    return (
        <div className="main">
            <h1>Listado de artistas</h1>
            {artists.map(artist => <Card key={artist._id} data={artist}/>)}
        </div>
    )
}

export default MainHome