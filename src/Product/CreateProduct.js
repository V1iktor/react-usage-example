import React, {useState} from "react"

function CreateProduct() {
    const [product, setProduct] = useState({})

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddClick = () => {
        fetch(`http://localhost:8080/api/create-product`, {
                method: 'POST', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify(product)
          }).then(
            (res) => {
                if (res.status === 200) {
                    console.log('Product added')
                    console.log(product)
                }
            }
        )
        
    }

    return(
        <div className="createProduct">
            <input name="name" onChange={handleChange} placeholder="Название" />
            <input name="description" onChange={handleChange} placeholder="Описание" />
            <input name="price" onChange={handleChange} placeholder="Цена" />
            <input name="count" onChange={handleChange} placeholder="Кол-во" />
            <input name="imageUrl" onChange={handleChange} placeholder="Ссылка на картинку" />
            <button onClick={handleAddClick}>
                Добавить
            </button>
        </div>
    )
}

export default CreateProduct