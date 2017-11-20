import React from 'react';

export default class UserDetails extends React.Component{
    render(){
        const userId = this.props.userId
        if(userId == null){
        return(
            <span id = "loginButton" className = "userDetailsName">login</span>
        )
        }else{
            return(
                <span className = "userDetailsName" id = "loggedInUser">{userId}</span>
            )
        }
    }
}