import { useState, useEffect } from "react"
import { getProducts } from "../api/products"
import { useNavigate } from "react-router-dom"
import { deleteProduct } from "../api/products"
import toast from'react-hot-toast'

export default function ProductList(){
    const navigate = useNavigate()
    const handledelete = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            await deleteProduct(id)
            toast.success('Producto eliminado')
            //loadProducts() podria usar este metodo para actualizar la lista de productos despues de elimnar el producto, 
            // pero si son muchos haria que la pagina se demore mucho en cargar, 
            // entonces se puede usar el metodo de abajo que lo que hace 
            // es eliminar el producto de la lista de productos sin necesidad de cargar la pagina de nuevo
            setProducts(products.filter(product => product.id !== id))
        }
    }
    const [products, setProducts] = useState([])
    // const [products, setProducts] = useState([])

    const loadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)

    }

    useEffect(() => {
        loadProducts()
    }, [])


    return (
        <div className="mg-8">
            <h1 className="text-3x1 font-bold text-sky-900">Productos disponibles</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
                {products.map((product) => (
                    <div key={product.id} className="bg-sky-900 p-4 rounded-lg shadow-md">
                        <p className="font-extrabold">{product.nombre}</p>
                        <p><span className="font-bold">Precio: $</span>{product.precio}</p>
                        <p><span className="font-bold">Descripción: </span>{product.descripcion}</p>
                        <div className="mt-4">
                            <button 
                            className="bg-green-600 text-white px-2 py-1 rounded-lg" onClick={() => {
                                navigate('/edit-product/' + product.id)
                            }}>Editar</button>
                            <button 
                            className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2" onClick={() => handledelete(product.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}