import React from 'react';

export default function SignInPage(){
    
    const handleSubmit = () =>{
        alert('test');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Id:
                <input type="text" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}