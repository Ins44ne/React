import Header from "./components/Header"
import Footer from "./components/Footer"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import {ways} from "./data" 

function App() {
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
            <Button>approach</Button>
            <Button>accessibility</Button>
            <Button>concentration</Button>
        </section>
      </main>
    <Footer/>
    </div>
  )
}

export default App
