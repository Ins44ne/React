import Header from "./components/Header"
import Footer from "./components/Footer"

function WayToTeach() {
  return (
    <li>
    <p>
      <strong>Filtering information and technology.</strong> From the vast amount of information and skills in the IT field, you get only what is necessary and works.
    </p>
  </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Our approach to learning</h3>
          <ul>
          <WayToTeach/>
            <li>
              <p>
                <strong>Training format.</strong> While others offer 50 pages of text and 2-hour webinars, we give you the same amount of knowledge in one carefully produced 15-minute video.
              </p>
            </li>
            <li>
              <p>
                <strong>Using different formats.</strong> Video tutorials, practical assignments, notes, master classes, community discussions - all this gives a complete picture and speeds up the learning process.
              </p>
            </li>
            <li>
              <p>
                <strong>Our teachers are leading specialists</strong> VKontakte, Avito, Tinkoff, Kaspersky are active developers with experience teaching to a large audience.
              </p>
            </li>
            <li>
              <p>
                <strong></strong>
              </p>
            </li>
          </ul>
        </section>
      </main>
    <Footer/>
    </div>
  )
}

export default App
