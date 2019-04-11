import {firebase,provider} from '../firebase/firebase';


export const login =(uid)=>({
    type:'LOGIN',
    uid
})

export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(provider)

            //   return firebase.auth().signInWithRedirect(provider);
    }
}

export const logout=()=>({
    type:'LOGOUT'
});


export const startLogout=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}