import TranslatorNavbar from './translatorNavbar'
import TranslatorResultArea from './TranslatorResultArea'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useState } from 'react';
import { copyToClipboard } from '../services/utils';

const handleSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR'; 
    window.speechSynthesis.speak(utterance);
  };

export default function TranslatorResult({translatedText, resultCharacterCount}) {
    return (
        <div className="input-container-one bg-red-200 p-4 rounded-lg w-full md:w-1/2">
            <div className="navbar">
                <TranslatorNavbar />
            </div>
            <div className="text-area">
                <TranslatorResultArea translatedText={translatedText} />
            </div>
            <div className="button-container flex flex-col items-end">
                <p className='text-sm text-gray-500 mb-2'>{resultCharacterCount}/300</p>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='icons-button'>
                        <IconButton aria-label="copy" onClick={() => copyToClipboard(translatedText)}>
                            <CopyAllIcon />
                        </IconButton>
                        <IconButton aria-label="speak" onClick={() => handleSpeak(translatedText)}>
                            <VolumeUpIcon />
                        </IconButton>
                    </div>

                </div>
            </div>
        </div>
    )
}