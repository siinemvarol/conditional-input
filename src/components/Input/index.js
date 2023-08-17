import React, { useEffect, useState } from "react";

const Input = ({onChange}) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const onChangeCheckBox = (e) => {
        const value = e.target.checked;
        setIsVisible(value);
    };

    const onChangeInput = (e) => {
        const value = e.target.value;
        onChange(value);
    };

    useEffect(() => {

    }, [isVisible, onChange]);

    useEffect(() => {
        console.log("isVisible", isVisible);
    }, [isVisible]);

    useEffect(() => {
        console.log("sayfa yüklendi");
    }, []);

    return (
        <>
            <input type="checkbox" onChange={onChangeCheckBox} />
            {isVisible && <input type="text" onChange={onChangeInput} />}
        </>
    );

}

export default Input;