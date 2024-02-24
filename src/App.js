import Home from '../src/components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './components/Form'

export default function App() {
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <Home/>
    <Form/>
    <Footer/>
    </div>
    )
}