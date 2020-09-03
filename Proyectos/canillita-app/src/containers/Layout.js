import React from 'react'
import SearchAppBar from '../components/SearchAppBar'
import LinearProgress from '@material-ui/core/LinearProgress';

const Layout = ({ children ,loading}) => {

    return (
        <>
            <SearchAppBar />
            {loading && <LinearProgress color="secondary" />}
            <div className="inner">
                {children}
            </div>
        </>
    )
}

export default Layout