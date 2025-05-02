import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Header from './components/header'


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/new-product" element={<ProductForm />} />
          <Route path="/edit-product" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App