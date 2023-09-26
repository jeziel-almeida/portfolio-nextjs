import React from 'react'
import { CopyIcon } from '../icons/CopyIcon'

interface CopyButtonProps {
    textToCopy: string;
}

const CopyButton = ({ textToCopy }: CopyButtonProps) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
    }

    return (
        <button onClick={handleCopy} className='inline-flex justify-center items-center'>
            <CopyIcon title='Cique aqui para copiar' className='fill-white' />
        </button>
    )
}

export default CopyButton