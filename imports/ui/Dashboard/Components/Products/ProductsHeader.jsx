import React from 'react';
import { AppBar, Toolbar, InputBase, Switch, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import {AlertContext} from '../../Context/AlertContext';






export const ProductsHeader = (props) => {

  const history = useHistory();

  const {setAlertOptions,toggleMessage} = React.useContext(AlertContext)

  const logout = () => {
    Meteor.logout((error) => {
      if (error) {
        setAlertOptions({
          severity: "warning",
          message: "SOMETHING WENT WRONG!!"
        })
        toggleMessage();
      }else{
        history.push('/admin')
      }
    })
   
  }
  return (
    <div>
      <AppBar
      position='fixed'
      color='default'
      elevation= {0}
      variant='outlined'>
        <Toolbar 
         variant='dense'>
          <div style={{...styles.searchContainer,backgroundColor: props.checked? "#fff" :  "#455a64"}}>
            <SearchIcon 
            style={{...styles.searchIcon,color:props.checked? "#000" :  "#fff"}}
            />

            <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
          </div>
            <Switch
            checked={props.checked}
            onChange={props.onChange} 
            />

      <div style={styles.buttons}>
        <Button 
          size='small'
          onClick={props.toggleDialog} 
          color={"secondary"} 
          style={styles.addButton} 
          variant={"contained"} 
          disableElevation={true}>
          Add Product
        </Button>
        <Button 
          size='small'
          onClick={logout} 
          color={"secondary"} 
          style={styles.addButton} 
          variant={"contained"} 
          disableElevation={true}>
          Logout
        </Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}


const styles = {
  searchContainer:{
    display: "flex",
    alignItems: "center",
    borderRadius: "7px"
  },

  searchIcon:{
    paddingLeft: "3%",
    paddingRight: "3%"
  },

  buttons:{
    display: 'flex',
    justifyContent: 'space-around',
    width: '200px'
  }
}