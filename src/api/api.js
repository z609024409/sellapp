import axios from 'axios'
import qs from 'qs'

let req=axios.create({
    baseURL:'http://localhost:80',
    timeout:8000
})


export function logins(acc,pwd){
   return req.post('/login.php',qs.stringify({acc,pwd}))
}
export function shops(){
   return req.get('/gethouselist.php')
}
