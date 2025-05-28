import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function TranslatorTextArea({translatedText}) {
    return (
        <TextareaAutosize   minRows={10} maxRows={10} className='disabled:bg-gray-200 cursor-not-allowed  w-full p-2 rounded-lg border-none outline-none custom-textarea max-h-56' value={translatedText}/>
    )
}

TranslatorTextArea.propTypes = {
  translatedText: PropTypes.string
};

export default TranslatorTextArea;