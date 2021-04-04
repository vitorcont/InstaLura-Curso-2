const LogIn = async (user, password) =>{
    const headerHTTP={
        method:"POST",
        body:JSON.stringify({
            userName: user,
            password: password,
        }),
        headers:{
            "Content-type": "application/json"
        }
    }
    const response = await fetch("http://10.0.2.2:3030/users/login", headerHTTP)
    if(response.ok){
        return response.headers.get("x-access-token")
    }else{
        throw new Error("Erro no LogIn")
    }
}

export default LogIn