import React from "react";

function Input({label , type='text', value, onChange, placeholder})
{
    return (
    <div className="flex flex-col mb-4">
        {label && <label className="mb-1 font-medium">{label}</label>}
        <input
        
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={"px-3 py-2 border rounded  focus:outline-none focus:ring-2 focus-ring-blue-400"}
        />
    </div>
    );
}

export default Input;