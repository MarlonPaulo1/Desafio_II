import '../styles/productCardStyle.css'

function ProductCard() {
    return (
        <div className="card-container">
            <div className="product-image">
                <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/10/Televisao-PNG.png" alt="" />
            </div>
            <div className="product-content">
                <h3>TV 50 polegadas</h3>
                <h2 className="price">R$ 2.299,00</h2>
                <a href="#" className="buy">Comprar</a>
            </div>
        </div>
    )
}

export default ProductCard