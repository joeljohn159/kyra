import axios from 'axios';
import { getToken } from '../utils/authToken';

const URL = 'http://127.0.0.1:3000'

export async function signup(userData){
    await axios.post(`${URL}/signup`, userData).then(res =>{
        console.log(res);
        return Promise.resolve(res)
    }).catch(err =>{
        console.log(err);

        return err
    })
}


export const getProducts = () => {
try{
    const  myProducts = async () => {
        const token = JSON.parse(getToken());
        const response = await axios.get(`${URL}/shopProducts`, {headers : {"Authorization" : `Bearer ${token.token}`}})
        console.log(response)
        return response;
    }
    const res = myProducts();
    return res
}catch(err){
    console.log(err);
    return err
}}