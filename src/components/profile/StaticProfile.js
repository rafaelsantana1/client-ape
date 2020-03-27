import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import dayjs from 'dayjs'
import {Link} from 'react-router-dom'

//Mui
import MuiLink from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

//Icons
import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'

const styles =  {
    invisibleSeparator: {
      border: 'none',
      margin: 4
    },
    visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20
    },
    paper: {
      padding: 20
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative'
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#00bcd4'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      }
    }
  }

const StaticProfile = (props) => {
    const {classes, profile: { handle, createdAt, imageUrl, bio, website, location}} = props

    return (
        <Paper className={classes.paper}>
              <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={imageUrl} alt="profile" className="profile-image"/>
                    {/* <input type="file" id="imageInput" hidden="hidden" onChange={this.handleImageChange}/>
                    <MyButton tip = "Edit profile picture" onClick={this.handleEditPicture} btnClassName="button">
                      <EditIcon color="primary"/>
                    </MyButton> */}
                </div>
                <hr/>
                <div className="profile-details">
                  <MuiLink component={Link} to={`/user/${handle}`} color="primary" variant="h5">
                      @{handle}
                  </MuiLink>
                  <hr/>
                  {bio && <Typography variant="body2">{bio}</Typography>}
                  <hr/>
                  {location && (
                      <Fragment>
                          <LocationOn color="primary"/> <span>{location}</span>
                      </Fragment>
                  )}
                  <hr/>
                  {website && (
                          <Fragment>
                              <LinkIcon color="primary"/>
                              <a href={website} target="_blank" rel="noopener noreferrer">
                                  {' '}{website}
                              </a>
                              <hr/>
                      </Fragment>                           
                  )}
                  <CalendarToday color="primary"/> {' '}
                  <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                </div>
                {/* <MyButton tip = "Logout" onClick={this.handleLogout}>
                  <KeyboardReturn color="primary"/>
                </MyButton>
                <EditDetails/> */}
              </div>
            </Paper>
    )
}


StaticProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}



  export default withStyles(styles)(StaticProfile)