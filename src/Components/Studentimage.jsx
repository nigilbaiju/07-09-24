
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
const Studentimage = () => {

var [inputs,setInputs]=useState({"Admno":'',"Sname":'',"Gender":'',"Dob":'' })
var [selectedimage,setSelectedimage]=useState (null)

const handleimage =(e)=> {
    const file=e.target.files[0]
    setSelectedimage(file)
    inputs.photo =file
}

const inputHandler=(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}

const addHandler =() =>{
const formdata=new FormData();
formdata.append("Admno",inputs.Admno)
formdata.append("Sname",inputs.Sname)
formdata.append("Gender",inputs.Gender)
formdata.append("Dob",inputs.Dob)
formdata.append("photo",selectedimage)

console.log(formdata.photo)

fetch('http://localhost:3005/imagenew',
{method:'post',body:formdata,}
)
.then((response) =>response.json())
.then((data)=>{
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
photo:<input type="file" onChange={handleimage}/>
<br></br>
<br></br>
<Button variant='contained' color='success'
onClick={addHandler} >SUBMIT</Button>
</div>
)
}
export default Studentimage
