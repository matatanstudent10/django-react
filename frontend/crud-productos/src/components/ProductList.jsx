import { useState, useEffect } from "react"
import { getProducts } from "../api/products"



export default function ProductList(){

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
                            <button className="bg-green-600 text-white px-2 py-1 rounded-lg">Editar</button>
                            <button className="bg-red-600 text-white px-2 py-1 rounded-lg ml-2">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}