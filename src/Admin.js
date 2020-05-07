import React,{useState} from 'react';
import {Form} from 'react-bootstrap'
import './Admin.css'
const Admin = () => {
    const [contest,setContest]=useState('');
    const [description,setDescription]=useState('');
    const [cost,setCost]=useState(0);
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [participants,setParticipants]=useState(0);
    const [winners,setWinners]=useState(0);
    const [prize,setPrize]=useState([]);
    const l=[];
    const unixTime=new Date(date+','+time).getTime() / 1000;
    for(let i=0;i<winners;i++)
          l.push(i);
    
    const post=(e)=>{
        e.preventDefault();
        console.log(date,time,prize);
        cancelCourse();
        setPrize([]);
    }
    const cancelCourse = () => { 
      document.getElementById("comp").reset();
    }
    

    return (
        <div>
           <h1>Time is {unixTime}{postDate()}</h1>
            <Form className='col' id='comp' onSubmit={post} >
             <Form.Group>
                <Form.Label className="text">Contest Name</Form.Label>
                <Form.Control  type="text" placeholder="Contest Name" value={contest} onChange={e=>setContest(e.target.value)} />
             </Form.Group>
             <Form.Group>
                <Form.Label className="text">Description</Form.Label>
                <Form.Control type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
             </Form.Group>
             <Form.Group>
                <Form.Label className="text">Cost</Form.Label>
                <Form.Control type="text" placeholder="Cost" value={cost} onChange={e=>setCost(e.target.value)} />
             </Form.Group>
             <Form.Group>
                <Form.Label className="text">Last date</Form.Label>
                <Form.Control type="date" value={date} onChange={e=>setDate(e.target.value)}/>
             </Form.Group>
             <Form.Group>
                <Form.Label className="text">Up Time</Form.Label>
                <Form.Control type="time" value={time} onChange={e=>setTime(e.target.value)}/>
             </Form.Group>
             <Form.Group>
                <Form.Label className="text">Total Participants</Form.Label>
                <Form.Control type="number" placeholder='count' value={participants} onChange={e=>setParticipants(e.target.value)} />
             </Form.Group>
             <Form.Group>
             <select type="number"className='btn btn-info'id='button' value={winners} onChange={e=>setWinners(e.target.value)}>
                <option value=''>No of Winners</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
             </select>
             </Form.Group>
             {l.map(i=> <Form.Group key={i}>
                                <Form.Label className="text">Prize {i+1}</Form.Label>
                                <Form.Control type="input" placeholder='count' value={prize[i]} onInput={prize.splice(i,0,InputEvent)} />
                        </Form.Group>,)}
             <button id='button' type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    );
};
const postDate=(separator = '-')=>{
   let date = new Date();
   let d = date.getDate();
   let m = date.getMonth()+1;
   let y = date.getFullYear();
   return(d+separator+m+separator+y)
 }
export default Admin;