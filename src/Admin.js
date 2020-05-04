import React from 'react';
import {Form,Dropdown,DropdownButton} from 'react-bootstrap'
const Admin = (props) => {
    const post=(e)=>{
        e.preventDefault();
        console.log(props.contest);
    }
    return (
        <div>
            <Form className='col' onSubmit={post} >
             <Form.Group>
                <Form.Label>Contest Name</Form.Label>
                <Form.Control  type="text" placeholder="Contest Name" value={props.contest} />
             </Form.Group>
             <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
             </Form.Group>
             <Form.Group>
                <Form.Label>Cost</Form.Label>
                <Form.Control type="text" placeholder="Cost" />
             </Form.Group>
             <Form.Group>
                <Form.Label>Last date</Form.Label>
                <Form.Control type="date"/>
             </Form.Group>
             <Form.Group>
                <Form.Label>Up Time</Form.Label>
                <Form.Control type="time"/>
             </Form.Group>
             <br/>
             <DropdownButton variant='info' title="No of Participants ">
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                    <Dropdown.Item>4</Dropdown.Item>
                    <Dropdown.Item>5</Dropdown.Item>
             </DropdownButton>
             <br/>
             <Form.Group>
                <Form.Label>prize money</Form.Label>
                <Form.Control type="time"/>
             </Form.Group>
             <Form.Group>
                <Form.Label>Up Time</Form.Label>
                <Form.Control type="time"/>
             </Form.Group>
             <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    );
};

export default Admin;