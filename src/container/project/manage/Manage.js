import React, { useState, useEffect } from 'react';

export default function Manage(){

    const [contents, setContents] = useState({name:'',});

    useEffect(() => {
        fetch("api/projects/manage")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setContens({
                        name:'test',
                    });
                },
                (error) => {
                    this.setContents({
                        name:'error'
                    });
                }
            )
    });


    return (
        <>
            {
                contents.name
            }
        </>
    );

}