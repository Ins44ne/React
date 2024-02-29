const App = ({ initialButtonText, initialclassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setClassesList] = React.useState(initialclassesList)

  const onButtonClick = () => {
    setButtonText(`hello from React! ${Math.random()}`)
    setClassesList('button2')
  }

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me!" initialclassesList="" />)
