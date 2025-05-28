import Translator from './components/Translator'
import { translateText } from './services/translations';
import TranslatorResult from './components/TranslatorResult';
import { useState } from 'react';

function App() {
  const [translatedText, setTranslatedText] = useState("");
  const [resultCharacterCount, setResultCharacterCount] = useState(translatedText.length);


  const getTranslatedTextFromComponent = async (textFromComponent) => {
    const translatedText = await translateText(textFromComponent, "english", "french");
    setResultCharacterCount(translatedText.length);
    setTranslatedText(translatedText);
  }

  return (
    <div className='min-w-screen min-h-screen bg-[url(./assets/hero_img.jpg)] bg-cover bg-center flex flex-col items-center justify-center pt-0'>
      
        <img src="/public/logo.svg" alt="logo" className='w-96' />
      
      <div className="flex flex-col items-center justify-center box-border p-10 gap-2 w-full md:flex-row">

        {/* Translator one */}
        <Translator getTranslatedTextFromComponent={getTranslatedTextFromComponent} />

        {/* Translator two */}
        <TranslatorResult translatedText={translatedText} resultCharacterCount={resultCharacterCount} />

      </div>
    </div>
  )
}

export default App
