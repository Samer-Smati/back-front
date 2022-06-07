import axios from 'axios';

export const addUser = (myData) => async (dispatch) =>{
    try {
       const {data} =  await axios.post("http://localhost:4000/user/addUser",myData);
       
        dispatch({
            type:'ADD_USER',
            payload:data
        })
        localStorage.setItem('token',data.token)
        dispatch(currentUser(data.token))
    } catch (error) {
        console.log(error)
    }
}


export const currentUser = (token,navigate) =>async(dispatch) =>{
    const config = {
        headers:{
            Authorization:token
        }
    }
    try {
        const {data} =  await axios.get("http://localhost:4000/user/current",config);
       
        dispatch({
            type:'CURRENT',
            payload:data.user
        })
        dispatch(roleUser(data.user.role,navigate))
    } catch (error) {
        console.log(error)
    }
}


export const roleUser = (roleId,navigate) =>async(dispatch) =>{
  
    try {
        const {data} =  await axios.get(`http://localhost:4000/role/${roleId}`);
       
        dispatch({
            type:'ROLE',
            payload:data.role.roleName
        })
        if(data.role.roleName == 'user'){
            navigate('/User')
        }else if(data.role.roleName == 'admin'){
            navigate('/Admin')
        }else if(data.role.roleName == 'gestionnaire'){
            navigate('/Gestionnaire')
        }else{
            navigate('/') 
        }
    } catch (error) {
        console.log(error)
    }
}