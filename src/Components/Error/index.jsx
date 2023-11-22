import { Link } from 'react-router-dom'
import '../../style/index.scss'
import Footer from '../Footer/footer'

function Error() {
    return (
   <div className='error'>
    <p className='error-num'>404</p>
    <p className='error-phrase'>Oups! La page que vous demandez n'existe pas.
    </p>
    <Link to="/">Retourner sur la page d'acceuil</Link>
    <Footer></Footer>
    </div>
    )
  }
  
  export default Error
  