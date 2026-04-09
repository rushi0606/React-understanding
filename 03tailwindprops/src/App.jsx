import './index.css'
import Card from './components/Card'

function App() {
  

  return (
   <>
   <h1 className='bg-green-400 text-black p-4 text-center'>Tailwind Test</h1>
   <Card username = "chaiaurcode" btnText="click me" />   
   <Card username = "sheriyancoadingschool" btnText="visit me" />
   </>
  )
}

export default App
