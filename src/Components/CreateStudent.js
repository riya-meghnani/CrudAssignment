import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'

function CreateStudent(props) {
const [question, setQuestion] = useState("")
const [answer, setAnswer] = useState("")
var Id=props.match.params.id;
useEffect(() => {
    if(Id){
    axios.get('http://localhost:3000/faq-by-id?id='+Id).then((res)=>{
     console.log()
     setQuestion(res.data.data[0].question)
     setAnswer(res.data.data[0].answer);
})}
}, [])
    
function setValue(e){
    e.target.name==="Question" && setQuestion(e.target.value);
    e.target.name==="Answer" && setAnswer(e.target.value);
   
}
    function sendDetails(){
        alert(question);
        alert(answer);
            var s={
        question,answer
            }
        if(Id){
            s._id=Id
            axios.post('http://localhost:3000/update-faq',s).then((res)=>{
                
                alert("you have successfully update faq")
                console.log(res.data);
                
                
            })
        }
        else{
            axios.post('http://localhost:3000/create-faq',s).then((res)=>{
                
                alert("you have successfully create faq")
                console.log(res.data);
                
                
            })
        }
            
        
        }
    return (
        <div>
           <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create FAQ</h3></div>
                                    <div class="card-body">
                                        <form>
                                            {Id}
                                        <label for="Question">Question</label>
                                            <div class="form-floating mb-3">
                                                <textarea class="form-control" id="Question" type="email"  name="Question"  value={question}onChange={(e)=>{setValue(e)}}/>
                                               
                                            </div>
                                            <label for="Answer">Answer</label>
                                            <div class="form-floating mb-3">
                                           
                                                <textarea class="form-control" id="Answer" type="password" name="Answer" value={answer}onChange={(e)=>{setValue(e)}} />
                                                
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                  
                                  <a className=" btn btn-primary" onClick={sendDetails}>{Id? "UPDATE":"CREATE"} </a>
                              </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
        </div>
    )
}

export default CreateStudent

