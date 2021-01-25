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
            <SearchIcon/>

            <InputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
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
 

}