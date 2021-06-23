import React, {useState, useEffect} from "react"

function GetProduct() {
    const [productInfo, setProductInfo] = useState({})
    const [productId, setProductId] = useState('')
    const [showProduct, setShowProduct] = useState(false)

    const handleGetClick = () => {
        fetch(`http://localhost:8080/api/get-product/${productId}`).then(
            (res) => res.json()
        ).then(data => {
            setProductInfo(data)
            setShowProduct(!showProduct)
        })
    }

    const handleChange = (e) => {
        setProductId(e.target.value)
        console.log(productId)
    }

    return(
        <div className="product">

            <input name="productId" onChange={handleChange} placeholder="ID продукта" />
            <button onClick={handleGetClick}>
                Найти
            </button>
            {showProduct && 
                <div>
                    <img 
                        src={productInfo.imageUrl}
                        alt="Картинка"
                    />
                    <p>
                        Название : {productInfo.name}
                    </p>
                    <p>
                        Описание : {productInfo.description}
                    </p>
                    <p>
                        Цена : {productInfo.price}
                    </p>
                    <p>
                        Кол-во : {productInfo.count}
                    </p>
                </div>
            }
        </div>
    )
}

export default GetProduct