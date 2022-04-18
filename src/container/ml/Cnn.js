import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import instance from 'utils/AxiosDefault';


export default function CnnInference(){
    const [selectFile, setSelectFile] = useState(null);
    const [preview, setPreview] = useState();
    const [inferenceResult, setInferenceResult] = useState(null)

    useEffect(() => {
        if (!selectFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectFile])

    const handleChangeFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectFile(undefined)
            return
        }

        setSelectFile(e.target.files[0]);
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        if(!selectFile){
            return alert("select image")
        }

        const formData = new FormData();
        formData.append(
            'cnn_image',
            selectFile,
            selectFile.name
        )

        instance.post('/inference/cnn',formData)
            .then(res => setInferenceResult(res.data))
            .catch(error => setInferenceResult(null));

    }

    return(
        <Wrapper>
            <form onSubmit={onSubmitHandler}>
                <input type="file" id="cnn" onChange={handleChangeFile}/>
                <br/><br/>
                <button type="submit">inference</button>
            </form>
            <br/>
            <InferenceWrapper>
                <InferenceData>{ selectFile && <img src={preview} style={{maxWidth:'100%',maxHeight:'100%'}}/> } </InferenceData>
                <InferenceData>{ inferenceResult }</InferenceData>
            </InferenceWrapper>
        </Wrapper>
    );
}

const InferenceData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const InferenceWrapper = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
`;

const Wrapper = styled.div`
    width: 100vw;
    heigh: 100vh;
    text-align: center;
    padding: 50px;
`;