
import reactLogo from './assets/react.svg'
import prempt from '../prempt.png'
import './App.css'

function App() {

  return (
    <div className="container">
      <img src={prempt} alt="Profile Loading..." className='Profile' />
      <h1 className='name'>Prem Kumar</h1>
      <p className='role'>Software Developer</p>
      <p className='description'>At NxtWave’s CCBP 4.0 Academy, I’m currently learning full-stack development with a specialisation in 4.0 technologies. In love with the coding challenges and hands-on projects. With Industry’s first ever IRC 4.0, getting ready to take on new challenges in the tech world.</p>
      <nav className='nav-conatiner'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='nav-link'><p>Twitter</p></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='nav-link'><p>Instagram </p></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='nav-link'><p>Linkdin</p></a>
      </nav>
 
    </div>
  )
}

export default App
