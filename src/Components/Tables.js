import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Tables(props) {
const [faq,setFaq] = useState([])
useEffect(()=>{
 axios.get('http://localhost:3000/list-faq').then((res)=>{
     console.log(res.data.data)
     setFaq(res.data.data)
 })   
},[])
function doAction(id,action){
    if(action==="delete"){
        alert("you are in doaction")
        axios.get('http://localhost:3000/delete-faq?id='+id).then((res)=>{
            console.log(res.data.data);
        axios.get('http://localhost:3000/list-faq').then((res)=>{
            console.log(res.data.data)
            setFaq(res.data.data)
        
        }
        ) 
        }
        ) 
    }
    else if (action==="update"){
        props.history.push("/updatefaq/"+id);
    }
    
    
}

var FAQData=faq.map((st)=>{
   return <tr key={st._id}>
        <td>{st.question}</td>
        <td>{st.answer}</td>
        
        <td><button onClick={()=>{doAction(st._id,"delete")}}>Delete</button></td>
        
            <td> <button onClick={()=>{doAction(st._id, "update")}} >Update</button> </td>
    </tr>
})





    return (
        <div>
             
                    
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple" >
                                    <thead>
                                        <tr >
                                            
                                            
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {FAQData}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        
                                            
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                        </tr>
                                    </tfoot>
                                    
                                </table>
                            </div>
                        </div>
                    </div>  
                     
        
    )
}

