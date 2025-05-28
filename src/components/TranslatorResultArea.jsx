import TextareaAutosize from '@mui/material/TextareaAutosize';


function TranslatorTextArea({translatedText}) {
    return (
        <TextareaAutosize  minRows={10} maxRows={10} className='w-full p-2 rounded-lg border-none outline-none custom-textarea max-h-56' value={translatedText}/>
    )
}

export default TranslatorTextArea;