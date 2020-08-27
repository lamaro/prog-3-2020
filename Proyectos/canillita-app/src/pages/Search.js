import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../containers/Layout'

const Search = () => {
    let { query } = useParams();
    return(
        <Layout>
            {`Resultados de búsqueda para: ${query}`}
        </Layout>
    )
}
export default Search