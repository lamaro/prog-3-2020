import React from 'react'
import Layout from '../containers/Layout'
import MainHome from '../components/MainHome'

const Home = () => {
    return (
        <div className="App">
            <Layout>
                <MainHome />
            </Layout>
        </div>
    )
}

export default Home