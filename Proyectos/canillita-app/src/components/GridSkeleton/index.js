import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../ImgMediaCard'
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GridSkeleton(props) {
    return (
        <div >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Skeleton variant="rect" width={1200} height={250} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Skeleton variant="rect" width={210} height={118} />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Skeleton variant="rect" width={210} height={118} />
                </Grid>
                <Grid  item xs={12} sm={3}><Skeleton variant="rect" width={210} height={118} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton variant="rect" width={210} height={118} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton variant="rect" width={210} height={118} /></Grid>
                <Grid  item xs={12} sm={3}><Skeleton variant="rect" width={210} height={118} /></Grid>
            </Grid>
        </div>
    );
}