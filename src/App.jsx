import Translator from './components/Translator'

function App() {

  return (
    <div className='min-w-screen min-h-screen bg-blue-200 flex flex-col items-center justify-center pt-4'>
     <h1 className="text-xl font-bold">Translater.io</h1>
      <div className="flex flex-col items-center justify-center bg-blue-200 box-border p-10 gap-2 w-full md:flex-row">
       

        {/* Translator one */}
        <Translator />

        {/* Translator two */}
        <Translator />

      </div>
    </div>
  )
}

export default App
