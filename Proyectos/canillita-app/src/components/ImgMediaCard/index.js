import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
    },
});

export default function ImgMediaCard(props) {
    const { img_url, source_name, title, url,} = props.data
    const { height } = props
    const classes = useStyles();
    const img = img_url ? img_url : '/warningeva.jpg'
    return (
        <Card className={classes.root}>
            <a target="_blank" rel="noopener noreferrer" href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height={height}
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {source_name}
                        </Typography>
                        
                        <Typography variant="body2" color="textSecondary" component="p" style={{ 'min-height': '80px' }}>
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
            <CardActions>
                <Button size="small" color="primary">
                    <a target="_blank" rel="noopener noreferrer" href={`http://twitter.com/share?text=${title}&url=${url}`}><TwitterIcon/></a>
                    
                </Button>
                    <Button size="small" color="primary">
                        <a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?text=${url}`}><WhatsAppIcon/></a>
                    </Button>
            </CardActions>
        </Card>
    );
}