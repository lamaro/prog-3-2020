import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
});

export default function ImgMediaCard(props) {
console.log('data', props)
    const { category, date, img_url, source_id, source_name, title, url,} = props.data
    const classes = useStyles();
    const img = img_url ? img_url : '/warningeva.jpg'
    return (
        <Card className={classes.root}>
            <a target="_blank" href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="250"
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {source_name}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
            </CardActions>
        </Card>
    );
}