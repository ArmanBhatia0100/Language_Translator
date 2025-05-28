import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function TranslatorTextArea({textToTranslate, setTextToTranslate, setCharacterCount}) {
    return (
        <TextareaAutosize  minRows={10} maxRows={10} className='w-full p-2 rounded-lg border-none outline-none custom-textarea max-h-56' value={textToTranslate} onChange={(e) => {setTextToTranslate(e.target.value); setCharacterCount(e.target.value.length)}}/>
    )
}

TranslatorTextArea.propTypes = {
  textToTranslate: PropTypes.string,
  setTextToTranslate: PropTypes.func,
  setCharacterCount: PropTypes.func
};

export default TranslatorTextArea;