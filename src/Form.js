import React, {useState} from 'react';

const Form = () => {

    

    const send = (e) => {
        e.preventDefault();
        const state = {
            username: e.target.username.value,
            useremail: e.target.useremail.value,
            userpassword: e.target.userpassword.value
        };
        console.log(JSON.stringify(state));
        fetch('https://google.com', {
            method: 'POST',
            body: JSON.stringify(state)

        })
    }

    return (
        <form onSubmit={send}>
            <input name="username" type="text" placeholder="enter text"/>
            <input name="useremail" type="email" placeholder="enter email"/>
            <input name="userpassword" type="password" placeholder="enter password"/>
            <button>Send form</button>
        </form>
    )
}


export default Form;