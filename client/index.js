 const fetchApi = async() => {
   const response =  await fetch("http://localhost:8088/", 
    {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: 'query {greeting}'
    })
    }
    )
    const body = response.json();
    console.log('Body', body)
}

fetchApi();