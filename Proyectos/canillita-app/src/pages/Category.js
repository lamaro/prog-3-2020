import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../containers/Layout'

const Category = () => {
    let { slug } = useParams();
    return(
        <Layout>
            {`Categoria: ${slug}`}
        </Layout>
    )
}
export default Category