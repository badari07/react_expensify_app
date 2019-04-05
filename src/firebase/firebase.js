import * as firebase from 'firebase';


const  config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATEBASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};


firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// dataBase.ref('expenses').on('value',(snapShot)=>{
//     const expenses=[];
//     snapShot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// },(e)=>{console.log('error:',e)})


// dataBase.ref('expenses').on('child_changed',(snapShot)=>{
//     console.log(snapShot.key,snapShot.val())
// })
// dataBase.ref('expenses')
//         .once('value')
//         .then((snapShot)=>{
//             const expenses=[];
//             snapShot.forEach((childSnapshot)=>{
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })
//             console.log(expenses)
//         })

// dataBase.ref('expenses').push({
//     description:'rent',
//     note:'1st month rent',
//     amount:18500,
//     createdAt:1000
//  })

// dataBase.ref('expenses').push({
//     description: 'car',
//         note: 'car servises',
//         amount: 12500,
//         createdAt: 100

// })
// dataBase.ref('expenses').push({
//     description: 'engagement',
//         note: 'sis engagement',
//         amount:100000,
//         createdAt: 125
// })

// dataBase.ref().set({
//     name:'badari',
//     age:25,
//     stressLevel:6,
//     job:{title:'software developer',
//     company:'google'},
//     location:{
//         city:'bangalore',
//         country:'india'
//     }

// }).then(()=>console.log('data saved!'))
//     .catch((error)=> console.log('got error',error));


//  dataBase.ref('location/city')
// .remove()
// .then(()=>console.log('succesfully removed'))
// .catch((e)=>console.log('error:',e));

// dataBase.ref().update({name:'badari narayan',age:26,job:'software engg',isSingle:null})

// dataBase.ref().update({
//     stressLevel:9,
//     'job/company':'amazon',
//     'location/city':'bombay'
// })

// dataBase.ref().once('value').then((snapShot)=>{
//     const val=snapShot.val();
//     console.log(val)
// }).catch((e)=> console.log('error:',e))

// const onValueChange=dataBase.ref().on('value',(snapShot)=>{
//     console.log(snapShot.val())
// },(e)=>{console.log('error:',e)});

// setTimeout(()=>{
//     dataBase.ref('age').set(25)
// },3500)

// setTimeout(() => {
//     dataBase.ref("age").off();
// }, 7000)

// setTimeout(() => {
//     dataBase.ref('age').set(30)
// }, 10500)

// dataBase.ref().on('value',(snapshot)=>{
//     const val=snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// },(e)=>{console.log('error:',e)})

