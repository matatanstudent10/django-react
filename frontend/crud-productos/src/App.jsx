import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Header from './components/header'
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/new-product/" element={<ProductForm />} />
          <Route path="/edit-product/:id" element={<ProductForm />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App