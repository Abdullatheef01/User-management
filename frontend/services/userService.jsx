const API_URL='http://localhost:3000/'
export const createUser = async (name, email) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email })
  });
  
  const data = await res.json();
 
  return data;
};

//get route

export const getUser=async()=>{
  const res= await fetch(API_URL)
  const data=await res.json()
  return data
}

// update user 

