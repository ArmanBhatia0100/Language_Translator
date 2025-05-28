import Translator from './components/Translator'
import { translateText } from './services/translations';
import TranslatorResult from './components/TranslatorResult';
import { useState } from 'react';
function App() {
  const [translatedText, setTranslatedText] = useState("");

  const getTranslatedTextFromComponent =  async(textFromComponent) => {
  const translatedText = await translateText(textFromComponent, "english", "french");
  setTranslatedText(translatedText);
  }


  return (
    <div className='min-w-screen min-h-screen bg-blue-200 flex flex-col items-center justify-center pt-4'>
     <h1 className="text-xl font-bold">Translater.io</h1>
      <div className="flex flex-col items-center justify-center bg-blue-200 box-border p-10 gap-2 w-full md:flex-row">
       

        {/* Translator one */}
        <Translator getTranslatedTextFromComponent={getTranslatedTextFromComponent} />

        {/* Translator two */}
        <TranslatorResult translatedText={translatedText} />

      </div>
    </div>
  )
}

export default App
