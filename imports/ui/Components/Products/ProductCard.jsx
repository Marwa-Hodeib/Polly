import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import {ProductRemove} from './ProductRemove';
import { Avatar } from '@material-ui/core';
import { ProductInfo } from './ProductInfo';



export const ProductCard = (props) => {

  const [alertOpen, setAlertOpen] = useState (false);
  const [editOpen, setEditOpen] = useState (false);

  const toggleEdit = () => {
    setEditOpen(!editOpen)
  }

  const toggleAlert = () => {
    setAlertOpen(!alertOpen)
  }

  return(
    <div>
      <ProductRemove
        _id={props.product._id}
        open={alertOpen}
        onClose={toggleAlert}
      />
      <ProductInfo
         product={props.product}
         isOpen={editOpen}
         closeDialog={toggleEdit} 
      />
<div onClick={toggleEdit} style={styles.clickableCard}>
  <Card style={styles.container} variant='outlined'>
    <CardContent>
      <Avatar
        variant="rounded"
        alt="cloths" 
        style={styles.avatar}
        src="https://cdn.pixabay.com/photo/2015/03/03/06/48/fabric-657001_960_720.jpg"
        />

        <Typography
          gutterBottom variant="h5" 
          component="h2" 
          style={styles.title}>{props.product.title}
         </Typography>

        <Typography 
          variant="caption" 
          color="textSecondary" 
          component="h6">
          {props.product.details}
        </Typography>

      </CardContent>
        <CardActions>
          <Button 
            size="small" 
            color="secondary" 
            style={styles.button} 
            variant="contained" 
            disableElevation 
            onClick={toggleAlert}>
            Delete
          </Button>
          <Button 
            size="small" 
            color="primary" 
            style={styles.button} 
            variant="contained" 
            disableElevation 
            onClick={toggleEdit }>
            Edit
          </Button>
      </CardActions>
       </Card>
       </div>
  </div>
  )

}

const styles = {
  container:{
    width:"170px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
    
  },

  title:{
    paddingTop: "20px"
  },

  avatar:{
    height: 'auto', 
    width: '100%',
  },

  clickableCard:{
    cursor: "pointer"
  }

}


