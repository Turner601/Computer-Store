import React from 'react'
import { useParams, Outlet, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer'
import SingleProducts from './components/SingleProducts'

function App() {
  const [productData, setProductData] = React.useState([])
  // const [singleProductData, setSingleProductData] = React.useState([])
  // const { id } = useParams()

    // const {id} = useParams()
    React.useEffect(() => {
        fetch('http://localhost:3001/api/product')
        .then(res => res.json())
        .then(data => setProductData(data))
    }, [])

    // console.log(productData)

    return (
        <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
                <Route path='About' element={<About />} />
                <Route path='Products' element={<Products props={productData} />} />
                  <Route path='/Products/:id' element={<SingleProducts props={productData} />} />
                <Route path='Contact' element={<Contact />} />
                <Route path='*' element={<main><p>Nothing To See Here!</p></main>} />
          </Routes>
        <Footer />
            <Outlet />
        </div>
    )
}

export default App;
