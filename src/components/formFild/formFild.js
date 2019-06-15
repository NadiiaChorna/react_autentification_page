import React from 'react'

const FormFild = ({el: {name, label, type}, onInputChange}) => {
    return (
        <div>
            <label>{label}</label>
            <div className="field">
                <input onChange={onInputChange} name={name} type={type}/>
            </div>
        </div>
    )
}
export default FormFild;