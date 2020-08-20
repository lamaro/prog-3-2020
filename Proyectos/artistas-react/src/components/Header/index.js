import React, { useEffect, useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'

const Header = (props) => {
    const sayHi = 'Hi'
    const name = 'Artists'

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://artists-api.vercel.app/artists');
                const data = response.data
                const cats = data.map(category => category.genre)

                //Crea un nuevo array sin data repetida
                const catsUnrepeated = new Set(cats);
                const catsArray = [...catsUnrepeated];

                setCategories(catsArray)
            } catch (error) {
                console.error('este es mi error',error);
            }
        }
        fetchData()
    }, [])

    const handleCategorySelect = (event)=>{
        props.history.push(`/category/${event.target.value}`)
    }

    return (
        <header className="App-header">
            <div>{`${sayHi} ${name}!`}</div>
            <div>
                <Link to="/">Home</Link>
                <select name="cat"
                onChange={handleCategorySelect}
                >
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
        </header>
    )
}
export default withRouter(Header)
