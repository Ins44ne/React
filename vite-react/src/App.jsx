import Header from "./components/Header"
import Footer from "./components/Footer"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import {ways} from "./data" 

function App() {
  let content = 'press the button'
  function handleClick(type){
    console.log('button clicked', type)
    content = type
  }
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Our approach to learning</h3>
          <ul>
          <WayToTeach title={ways[0].title} description={ways[0].description}/>
          <WayToTeach {...ways[1]}/>
          <WayToTeach {...ways[2]}/>
          <WayToTeach {...ways[3]}/>
          </ul>
        </section>
        <section>
            <h3>How are we different from others</h3>
            <Button buttonClick={() => handleClick('way')}>approach</Button>
            <Button buttonClick={() => handleClick('easy')}>accessibility</Button>
            <Button buttonClick={() => handleClick('program')}>concentration</Button>
            <p>{content}</p>
        </section>
      </main>
    <Footer/>
    </div>
  )
}

export default App
