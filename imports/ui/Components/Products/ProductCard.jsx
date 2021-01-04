import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import {ProductRemove} from './ProductRemove';




export const ProductCard = (props) => {

  const [alertOpen, setAlertOpen] = useState (false);


  const openAlert = (_id) => {
    setAlertOpen(true)
  }


  const closeAlert = () => {
    setAlertOpen(false)
  }

  

  return(
    <div>
      <ProductRemove
      _id={props._id}
      open={alertOpen}
      onClose={closeAlert}
      />
      <Card style={styles.container} variant='outlined'>
        <CardContent>
        <img src='images/best_online_clothes_shops.jpg' style={styles.image}/>
        <Typography gutterBottom variant="h5" component="h2" style={styles.title}>{props.title}</Typography>
        <Typography variant="caption" color="textSecondary" component="h6">
            {props.details}
          </Typography>
        <Typography variant="body2" component="p">
            {props.description}
          </Typography>
       
          </CardContent>
          <CardActions>
        <Button size="small" color="secondary" style={styles.button} variant="contained" disableElevation onClick={openAlert}>
          Delete
        </Button>
        <Button size="small" color="primary" style={styles.button} variant="contained" disableElevation>
          Edit
        </Button>
      </CardActions>
       
     
      </Card>
    </div>
  )

}

const styles = {
  container:{
    width:"100%",
    
  },

  image:{
    width:"300px",
    height:"150px",
  },

  title:{
    paddingTop: "20px"
  },

}


