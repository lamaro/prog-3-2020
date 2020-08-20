import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";

const MainArtist = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                const artistFiltered = data.find(artist => artist._id === id)
                setArtist(artistFiltered)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, [])

    return (
        <div className="main">
            <h1>Listado de artistas</h1>
            <h2>{artist.name}</h2>
            <img src={artist.avatar} alt={artist.name} />
            <p>{artist.genre}</p>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default MainArtist