const axios = require('axios').default;
const fetchDogData=()=>{
    
    const prom=new Promise((resolve,reject)=>{
        axios.get('http://localhost:5000/')
        .then(res=>{
           resolve(res.data)
        })
        .catch(err=>{
            reject(err)
        })
    })
    return prom;
}
export {fetchDogData};