import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Studentedit = (props) => {

var [inputs,setInputs]=useState(props.data)
const inputHandler=(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}
const addHandler =() =>{
  if (props.method==='put'){
console.log("Clicked")
console.log(inputs._id)
axios.put("http://localhost:3005/edit/"+ inputs._id,inputs)
.then((response) =>{
alert("Record updated")
window.location.reload(false)
})
.catch(err=>console.log(err))
}}
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
export default Studentedit
