import './App.css'

import Nav from './components/Nav'
import Promotion from './components/Promotion'
import BestSellers from './components/BestSellers'
import Collections from './components/Collections'
import NewFashion from './components/NewFashion'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Promotion/>
      <BestSellers/>
      <Collections/>
      <NewFashion/>
      {/* <Footer/> */}
    </>
  )
}

export default App