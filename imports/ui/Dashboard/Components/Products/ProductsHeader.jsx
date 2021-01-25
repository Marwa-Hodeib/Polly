import React from 'react';
import { AppBar, Toolbar, InputBase, Switch } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';






export const ProductsHeader = (props) => {
  return (
    <div>
      <AppBar
      position='fixed'
      color='primary'>
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </div>
  )
}


const styles = {
  searchContainer:{
    display: "flex",
    alignItems: "center",
    borderRadius: "10px"
  },

  searchIcon:{
    paddingLeft: "3%",
    paddingRight: "3%"
  }
}