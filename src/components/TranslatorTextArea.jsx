import TextareaAutosize from '@mui/material/TextareaAutosize';


function TranslatorTextArea({textToTranslate, setTextToTranslate, setCharacterCount}) {
    return (
        <TextareaAutosize  minRows={10} maxRows={10} className='w-full p-2 rounded-lg border-none outline-none custom-textarea max-h-56' value={textToTranslate} onChange={(e) => {setTextToTranslate(e.target.value); setCharacterCount(e.target.value.length)}}/>
    )
}

export default TranslatorTextArea;