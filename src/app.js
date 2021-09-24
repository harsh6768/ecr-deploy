const express=require('express');
const app=express();
let port=process.env.PORT ||8001;

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
})