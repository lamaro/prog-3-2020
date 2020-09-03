import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

export default function GridSkeleton(props) {
    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Skeleton animation="wave" variant="rect" width={1200} height={500} style={{ width: '100%' }}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Skeleton animation="wave" variant="rect" width={210} height={300} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Skeleton animation="wave" variant="rect" width={210} height={300} style={{ width: '100%' }} />
                </Grid>
                <Grid  item xs={12} sm={3}><Skeleton animation="wave" variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton animation="wave" variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton animation="wave" variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton animation="wave" variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
            </Grid>
        </div>
    );
}