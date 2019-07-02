import React from 'react';
import './head.css';


class Head extends React.Component{
    render(){
        return (
            <div className='head'>
               <img src={Image.jpg} className='profile-image' />
               <h1>Hi! I'm Saheed Oladosu</h1>
               <h2>FrontEnd Developer</h2>
            </div>
        )
    }
}
export default Head;