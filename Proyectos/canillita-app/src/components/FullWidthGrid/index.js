import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../ImgMediaCard'

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

export default function FullWidthGrid(props) {

    const { data } = props
    const [primerNota, segundaNota, tercerNota, ...restoNoticias] = data; //WARNING SUPER IMPORTANT

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ImgMediaCard data={primerNota} height={500} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImgMediaCard data={segundaNota} height={300}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImgMediaCard data={tercerNota} height={300}/>
                </Grid>
                {restoNoticias.map(nota => <Grid key={nota.news_id} item xs={12} sm={3}><ImgMediaCard data={nota} height={250}/></Grid>)}
            </Grid>
        </div>
    );
}