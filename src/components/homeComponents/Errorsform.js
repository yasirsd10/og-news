import React from "react";

function Errorform(props) {
    if(props.poster === "") {
        return <div className ="alert alert-danger alert-dismissible fade show" role="alert">Please Provide the Movie Poster URL</div>
        }
    if(props.name === "") {
        return <div className ="alert alert-danger alert-dismissible fade show" role="alert">Please Provide the Movie Name</div>
        }
    if(props.review === ""){
        return <div className ="alert alert-danger alert-dismissible fade show" role="alert">Please Enter the Movie Review</div>
        }  
}

export default Errorform;