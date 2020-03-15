import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'


//Mui stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


var relativeTime = require('dayjs/plugin/relativeTime');


const styles = {
    card: {
        display: 'flex',
        marginBottom: 20
    },
    image:{
        minWidth: 200
        // minWidth: 300,
        // minHeight: 300
    },
    content:{
        padding: 25,
        objectFit: 'cover'
    }
}



export class Scream extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { classes, scream : { body, createdAt ,userImage, userHandle, screamId, likeCount, commentCount } } = this.props
        //const classes = this.props.classes
        return (
            <Card className={classes.card}>
                <CardMedia image={userImage} src="debug" title="Profile Image" className={classes.image}/>
                <CardContent className={classes.content}>
                    <Typography variant="h5" component={Link} to={`/users/${userHandle}`}>{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Scream);
