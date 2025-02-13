import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Student = () => {

var [inputs,setInputs]=useState({"Admno":'',"Sname":'',"Gender":'',"Dob":'' })
const inputHandler=(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}
const addHandler =() =>{
console.log("Clicked")
console.log(inputs)
axios.post("http://localhost:3005/new",inputs)
.then((response) =>{
alert("Record Saved")
})
.catch(err=>console.log(err))
}
return (
<div>
<Typography variant='h5'>Add
Students</Typography><br></br>
<TextField id="outlined-basic" label="ADMISSION NO"
variant="outlined"
name="Admno" value={inputs.Admno}
onChange={inputHandler} />
<br></br>
<br></br>
<TextField id="outlined-basic" label="STUDENT NAME"
variant="outlined"
name="Sname" value={inputs.Sname}
onChange={inputHandler} />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Gender"
variant="outlined"
name="Gender" value={inputs.Gender}
onChange={inputHandler} />
<br></br>
<br></br>
<br></br>
<br></br>
<TextField id="outlined-basic" label="DOB"
variant="outlined" name="Dob" value={inputs.Dob}
onChange={inputHandler} />
<br></br>
<br></br>
<Button variant='contained' color='success'
onClick={addHandler} >SUBMIT</Button>
</div>
)
}
export default Student
