import './App.css'
import Card from './components/Card'

const data = [
  {
    id: 1,
    name: 'Sadatoy'
  },
  {
    id: 2,
    name: 'Argen'
  },
  {
    id: 3,
    name: 'Abubakir'
  },
  {
    id: 4,
    name: 'Akcholpon'
  },
]

function App() {

  return (
    <div className=''>
      {
        data.map(item => (
          <Card isTrue={!item.name.startsWith('A')} name={item.name} />
        ))
      }
      <button className='py-2 cursor-pointer px-6 bg-blue-300 hover:bg-blue-700 duration-300 text-white rounded-lg'>OK</button>
    </div>
  )
}

export default App
