


const API_BASE="http://localhost:8080";

export async function login({userName , password})
{
    const response=await fetch(`${API_BASE}/public/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
        },
        body:JSON.stringify({userName,password}),
    });



    const data= await response.json();
    if(data.flag)
    {
        localStorage.setItem("token",data.data);
    }

    return data;
}