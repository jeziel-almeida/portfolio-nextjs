import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
    isLoading?: boolean;
}

const Button = ({ children, isLoading }: ButtonProps) => {
    return (
        <>
            <button>
                {isLoading ? 'Loading...' : children}
            </button>
            <button className='font-bold' style={{ backgroundColor: 'blue' }}>
                Botão 2
            </button>
        </>
    )
}

export default Button