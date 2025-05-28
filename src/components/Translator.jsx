import TranslatorNavbar from './translatorNavbar'
import TranslatorTextArea from './TranslatorTextArea'
import { Button } from '@mui/material'
import CopyAllIcon from '@mui/icons-material/CopyAll';
import IconButton from '@mui/material/IconButton';

export default function Translator() {
    return (
        <div className="input-container-one bg-red-200 p-4 rounded-lg w-full md:w-1/2">
            <div className="navbar">
                <TranslatorNavbar />
            </div>
            <div className="text-area">
                <TranslatorTextArea />
            </div>
            <div className="button-container flex flex-col items-end">
                <p className='text-sm text-gray-500 mb-2'>0/300</p>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='icons-button'>
                        <IconButton aria-label="delete">
                            <CopyAllIcon />
                        </IconButton>
                    </div>
                    <Button variant="contained">Translate</Button>
                </div>
            </div>
        </div>
    )
}