import React from 'react';
import FormFild from '../formFild/formFild';

const FormComponent = ({fildsToRender, onInputChange, onSubmit}) => {
    const formFilds = fildsToRender.map((el,i)=>{
        return (<FormFild 
                key={i+3}
                onInputChange={onInputChange} 
                el={el}/>)
    })
    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                {formFilds}
                <div className="field">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent