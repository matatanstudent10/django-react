import {useState} from'react'
import {createProduct} from'../api/products'
import {getProduct} from'../api/products'
import {useEffect} from'react'
import {useNavigate} from'react-router-dom'
import {useParams} from'react-router-dom'
import {updateProduct} from'../api/products'
import toast from'react-hot-toast'

export default function ProductForm() {
  const [product, setProduct] = useState({
    nombre: '',
    precio: '0',
    descripcion: '',
    stock: '0'
  })
  const navigate = useNavigate()
  const params = useParams()



  useEffect(() => {
    const loadProduct = async() => {
      if (params.id){
        const response = await getProduct(params.id)
        setProduct(response.data)
      }
    }
    loadProduct()

  }, [params.id])


  const handleSubmit = async(e) => {
    e.preventDefault()
    if(params.id){
      await updateProduct(params.id, product)
      toast.success('Producto actualizado')
    }else{
      await createProduct(product)
      toast.success('Producto creado')
    }
    navigate('/')
  }
  console.log(params.id)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm dont-bold text-gray-700">Nombre</label>
          <input 
          value={product.nombre}
          type="text" 
          onChange={(e) => setProduct({...product, nombre: e.target.value})}
          className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Nombre del producto"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm dont-bold text-gray-700">Precio</label>
          <input 
          value={product.precio}
          type="number"
          onChange={(e) => setProduct({...product, precio: e.target.value})}
          className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Precio del producto"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm dont-bold text-gray-700">Stock</label>
          <input
          value={product.stock}
          type="number"
          onChange={(e) => setProduct({...product, stock: e.target.value})}
          className="w-full mt-1 p-2 border border-gray-300 rounded" placeholder="Stock del producto"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm dont-bold text-gray-700">Descripción</label>
          <textarea
          value={product.descripcion}
          onChange={(e) => setProduct({...product, descripcion: e.target.value})}
          className="w-full mt-1 p-2 border border-gray-300 rounded" 
          rows="4" placeholder="Descripción del producto"></textarea>
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Guardar</button>
          <button type="reset" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2">Cancelar</button>
        </div>
      </form>
    </div>
  )
}