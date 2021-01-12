import React from 'react';
import { Link } from "react-router-dom";



export const Welcome = () => {
  return(
    <h1>Welcome to your website, <Link to="/admin/products">Admin</Link> :)</h1>
  )
}
