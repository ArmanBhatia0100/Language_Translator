import TranslatorNavbar from './translatorNavbar'
import TranslatorTextArea from './TranslatorTextArea'
import { Button } from '@mui/material'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { copyToClipboard } from '../services/utils';


export default function Translator({ getTranslatedTextFromComponent }) {
    const [characterCount, setCharacterCount] = useState(0);
    const [textToTranslate, setTextToTranslate] = useState("");
    return (
        <div className="input-container-one bg-red-200 p-4 rounded-lg w-full md:w-1/2">
            <div className="navbar">
                <TranslatorNavbar />
            </div>
            <div className="text-area">
                <TranslatorTextArea textToTranslate={textToTranslate} setTextToTranslate={setTextToTranslate} setCharacterCount={setCharacterCount}/>
            </div>
            <div className="button-container flex flex-col items-end">
                <p className='text-sm text-gray-500 mb-2'>{characterCount}/300</p>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='icons-button'>
                        <IconButton aria-label="delete" onClick={() => copyToClipboard(textToTranslate)}>
                            <CopyAllIcon />
                        </IconButton>
                    </div>
                    {getTranslatedTextFromComponent && (
                        <Button variant="contained" onClick={
                            () => getTranslatedTextFromComponent(textToTranslate, "english", "french")
                        }>
                            Translate</Button>
                    )}
                </div>
            </div>
        </div>
    )
}