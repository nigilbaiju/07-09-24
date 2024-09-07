import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Studentedit from './Studedit';

const Studview = () => {
    var [students,setStudents] = useState([]); 
var [Selected,setSelected] = useState();
var [update,setUpdate] = useState(false);

      useEffect(()=>{ 
      axios.get("http://localhost:3005/sview") 
      .then(response =>{ 
        console.log(response.data) 
        setStudents(response.data)     }) 
      .catch(err=>console.log(err)) 
    },[]) 
    
const updatevalues =(value) => {
setSelected(value);
setUpdate(true);
}

    var result=
    <div>
      <h1>Student Details</h1>
     
      <TableContainer component={Paper}> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table"> 
        <TableHead> 
          <TableRow> 
            <TableCell>Admission No</TableCell> 
            <TableCell>Student Name</TableCell> 
            <TableCell>Gender</TableCell> 
            <TableCell>DOB</TableCell> 
            <TableCell>Edit</TableCell> 
            <TableCell>Delete</TableCell> 
            
          </TableRow> 
        </TableHead> 
        <TableBody> 
                {students.map((value,index)=>{ 
                  return( 
                    <TableRow key={index}>  
                      <TableCell>{value.Admno}</TableCell> 
                      <TableCell>{value.Sname}</TableCell> 
                      <TableCell>{value.Gender}</TableCell> 
                      <TableCell>{value.Dob}</TableCell> 
                      <TableCell><EditIcon onClick={()=>updatevalues(value)}/></TableCell>
                      <TableCell><DeleteIcon/></TableCell>


                    </TableRow> 
                  ) 
                })} 
        </TableBody> 
 
</Table> 
</TableContainer>
</div>
if(update)
  result=<Studentedit data={Selected} method='put'/>
   return ( result)
}

export default Studview
