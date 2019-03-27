import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>this is :{props.Info}</p>
    </div>
)


const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
          {props.isAdmin && <p>this is private massage!</p>}  
            <WrappedComponent {...props}/>     
        </div>

    )
}


const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? 
            <WrappedComponent {...props}/> : 
            <p> please login to view info</p>}
        </div>

    )
}
// const AdminInfo=withAdminWarning(Info);

const AuthInfo=requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} Info='badari'/>,document.getElementById('app'))
