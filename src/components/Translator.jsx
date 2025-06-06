import React from 'react';
import TranslatorNavbar from './TranslatorNavbar'
import TranslatorTextArea from './TranslatorTextArea'
import { Button } from '@mui/material'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { copyToClipboard } from '../services/utils';
import PropTypes from 'prop-types';


export default function Translator({ getTranslatedTextFromComponent }) {
    
    const [characterCount, setCharacterCount] = useState(0);
    const [textToTranslate, setTextToTranslate] = useState("");

    return (
        <div className="input-container-one border-2 border-gray-500 shadow-xl shadow-gray-700/40 bg-gray-900/40 text-gray-300 backdrop-blur-lg p-4 rounded-lg w-full md:w-1/2">
            <div className="navbar">
                <TranslatorNavbar language="English" myLable="From"/>
            </div>
            <div className="text-area">
                <TranslatorTextArea textToTranslate={textToTranslate} setTextToTranslate={setTextToTranslate} setCharacterCount={setCharacterCount}/>
            </div>
            <div className="button-container flex flex-col items-end">
                <p className='text-sm text-gray-500 mb-2'>{characterCount}/300</p>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='icons-button'>
                        <IconButton aria-label="delete" onClick={() => copyToClipboard(textToTranslate)}>
                            <CopyAllIcon className='text-gray-300'/>
                        </IconButton>
                    </div>
                    {getTranslatedTextFromComponent && (
                        <Button variant="contained"  color='success' onClick={
                            () => getTranslatedTextFromComponent(textToTranslate, "english", "french")
                        }>
                            Translate</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

Translator.propTypes = {
  getTranslatedTextFromComponent: PropTypes.func
};