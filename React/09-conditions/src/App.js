import './App.css'
import FamilyInfo from './components/FamilyInfo'

function App() {
  return (
    <div className="App">
      <FamilyInfo number={2} relatives="sisters" hasRelatives />
      <FamilyInfo number={1} relatives="brother" hasRelatives />
      <FamilyInfo number={0} relatives="" hasRelatives={false} />
    </div>
  )
}

export default App
