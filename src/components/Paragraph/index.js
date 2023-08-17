import React, { useState } from "react";
import Input from "../Input";

const Paragraph = () => {

    const [gelenMetin, setGelenMetin] = useState();

    const onChange = (value) => {
        console.log(value);
        setGelenMetin(value);
    }    

    return (
        <>
        <Input onChange={onChange}/>
        <p>{gelenMetin}</p>
        </>
    );
};

export default Paragraph;