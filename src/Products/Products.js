import React, {useState, useEffect} from "react"
import GetProduct from "../Product/GetProduct"
import CreateProduct from "../Product/CreateProduct"

function Products() {
    const [productsInfo, setProductsInfo] = useState([])
    const [creatingProduct, setCreatingProduct] = useState(false)
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/`, {method: 'GET'}).then(
            (res) => res.json()
        ).then(
            (data) => {
                setProductsInfo(data)
                console.log(1);
            }
        )
    }, [])

    const deleteProductHandler = (id) => {
        fetch(`http://localhost:8080/api/remove-product/${id}`, {method: 'DELETE'}).then(
            (res) => {
                if (res.status === 200) {
                    setProductsInfo(productsInfo.filter(product => product["_id"] !== id))
                }
            }
        )
    }

    const createProductHandler = () => {
        setCreatingProduct(!creatingProduct)
    }

    return(
        <div className="products">
            {creatingProduct &&
                <CreateProduct />}
            <GetProduct />
            <button onClick={createProductHandler}>Добавить</button>
            {productsInfo.map((product, index) => {
                return <div className="product" key={index}> 
                    <img 
                        src={product.imageUrl}
                        alt="Картинка"
                    />
                    <p>
                        Название : {product.name}
                    </p>
                    <button onClick={() => deleteProductHandler(product["_id"])}>
                        Удалить
                    </button>
                </div>
            })

            }
        </div>
    )
}

export default Products