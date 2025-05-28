import TranslatorNavbar from './translatorNavbar'
import TranslatorResultArea from './TranslatorResultArea'
import { Button } from '@mui/material'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function TranslatorResult({translatedText, resultCharacterCount}) {
    const [characterCount, setCharacterCount] = useState(0);
    return (
        <div className="input-container-one bg-red-200 p-4 rounded-lg w-full md:w-1/2">
            <div className="navbar">
                <TranslatorNavbar />
            </div>
            <div className="text-area">
                <TranslatorResultArea translatedText={translatedText} setCharacterCount={setCharacterCount} />
            </div>
            <div className="button-container flex flex-col items-end">
                <p className='text-sm text-gray-500 mb-2'>{resultCharacterCount}/300</p>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='icons-button'>
                        <IconButton aria-label="delete">
                            <CopyAllIcon />
                        </IconButton>
                    </div>

                </div>
            </div>
        </div>
    )
}