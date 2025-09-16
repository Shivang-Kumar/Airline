import React from 'react';

function Button({children , onClick , type="button", disabled=false})
{
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`'px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400'`}>
            {children}
        </button>
    );
}

export default Button;