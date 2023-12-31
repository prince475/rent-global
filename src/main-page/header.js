import logo from './Globologo.png'
import './main-page.css'

//components are arguments that are passed into the component

const Header = ({subtitle}) => 
   (
    <header className='row'>
        
        <div className='col-md-5'>
            <img src={logo} className='logo' alt='logo'/>
        </div>

        <div className='col-md-7 mt-5 subtitle'>
        {subtitle}
        </div>
    </header>
  )

  export default Header; 
