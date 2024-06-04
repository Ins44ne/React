import './App.css'
import FamilyInfo from './components/FamilyInfo'

function App() {
  return (
    <div className="App">
      <FamilyInfo number={2} relatives="sisters" />
      <FamilyInfo number={1} relatives="brother" />
    </div>
  )
}

export default App
