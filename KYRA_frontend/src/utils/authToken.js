export const getToken = () =>{
    const token = localStorage.getItem('token');
    return token;
}

export const setToken = (token) => {
    localStorage.setItem('token',JSON.stringify(token));
}