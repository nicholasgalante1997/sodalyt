import React, {Component} from 'react';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class NewUserCustomerForm extends Component {
    state = { 
        email: "",
        password: "",
        zipCode: "",
        gender: ""
    }
    
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push('/storycards')
    }

    render() { 
        console.log(this.state, this.props)
        return ( 
            <div style={{color: 'black'}}>
                <p>New User Sign Up Page</p>
                <Form className='new-user-sign-up-form' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email: </Form.Label>
                        <input name='email'
                        type='text' 
                        onChange={this.changeHandler} 
                        value={this.state.email}
                        placeholder='email' 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password: </Form.Label>
                        <input name='password'
                        type='password'
                        onChange={this.changeHandler} 
                        value={this.state.password}
                        placeholder='password' 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Zip Code: </Form.Label>
                        <input name='zipCode'
                        type='text'
                        onChange={this.changeHandler} 
                        value={this.state.zipCode}
                        placeholder='Zip Code' 
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='form-gender-select'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" 
                        onChange={this.changeHandler}
                        name='gender'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not to Say</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
         );
    }
}
 
export default NewUserCustomerForm;