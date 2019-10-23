import React, {Component} from 'react';
import {createUserAPI} from '../../actions/Action';

class CreateUser extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name : '',
            age : 0,
            sex : '',
            email : '',

            newUser : []
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
       
    submitHandler(event) {
        let { name, age, sex, email} = this.state;

        //call API to save a user.
        createUserAPI(this, name, age, sex, email);
    }

     //set the data returned from create User API call
     setNewUser(results) {
        this.setState({
            newUser : results.data
        })
    }

     //display if any error from API calls.
    showError(err) {
    }

    
    render() {
        return (
            <div>
                <p>Create new User</p>
                    <form onSubmit={this.submitHandler}>
                        <label>Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.changeHandler} />
                        </label>
                        <br/>
                        <label>Age:
                        <input name="age" type="text" value={this.state.age} onChange={this.changeHandler} />
                        </label>
                        <br/>
                        <label>Sex:
                        <select name="sex" value={this.state.sex} onChange={this.changeHandler}>
                            <option value=""></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        </label>
                        <br/>
                        <label>Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.changeHandler} />
                        </label>
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        );
    };
}

export default CreateUser;