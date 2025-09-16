import React from 'react';

function Select({label , options, value ,onChange})
{
    return(
        <div className="flex flex-col mb-4">
            {label && <label className="mb-1 font-medium">{label}</label>}
        
        <select value={value} onChange={onChange} className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue focus:ring-blue-400">
            
            
            <option value="">Select Option</option>
            
            {
                options.map((opt)=>{
                    return <option key={opt} value={opt}>{opt}</option>
                })
            }
        </select>

        </div>
    );
}


export default Select;