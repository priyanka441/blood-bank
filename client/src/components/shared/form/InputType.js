import React from 'react'

const InputType = ({labelFor,labelText,inputType,value,onChange,name}) => {   //we need to add  value dynamically into this reusable component using props
  return (
    <>
        <div className="mb-2">
    <label htmlFor={labelFor} className="form-label">{labelText}</label>
    <input type={inputType} className="form-control" name={name} value={value} onChange={onChange} />
    
  </div>
    </>
  )
}

export default InputType