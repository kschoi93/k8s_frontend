import React, { useState } from 'react';
import instance from 'utils/AxiosDefault';
import styled from 'styled-components';

export default function SignUpPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const data = {
            user_id:id,
            user_pwd:password
        }

        instance.post('/sign-up',
            JSON.stringify(data),
            {
                headers: {
                    "Content-type": 'application/json'}
            })
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <Wrapper>
            <FormWrapper onSubmit={onSubmitHandler}>
                <PWrapper>id : <input type='text' value={id} onChange={onIdHandler}/></PWrapper>
                <PWrapper>pwd : <input type='password' value={password} onChange={onPasswordHandler}/></PWrapper>
                <PWrapper><SubmitWrapper type='submit' value='sign-up'/></PWrapper>
            </FormWrapper>
        </Wrapper>
    );
}

const SubmitWrapper = styled.input`
    width:100px;
    float: right;
`;

const PWrapper = styled.p`
    text-align:left;
`;

const FormWrapper = styled.form`
    width: 230px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;