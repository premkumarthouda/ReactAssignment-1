
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="cont1">
    <div className='container'>
      <img src={reactLogo} alt="React Logo" className='logo'/>
      <h1 className='head-1'>Rules of JSX</h1>

    </div>
    <ul className='unorderList'>
      <li>Must have enclosing JSX in root element</li>
      <li>Close tag properly</li>
      <li>Use className for css ,Js reserve class </li>
      <li>use camelCase for attributes</li>
      <li>use flower brackets for JSX expressions</li>
    </ul>


    </div>
  )
}

export default App
