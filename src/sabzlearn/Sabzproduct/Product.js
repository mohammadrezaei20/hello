import './Product.css'
export default function Product() {
    return (
        <div className='card'>
            <h2>
                shopping-card
            </h2>
            <div className='shopping-card'>
                <img src="./annn.webp" alt="Product" />
                <h3>shampo</h3>
                <p className='price'>49$</p>
                <p> good choice</p>
                <button>
                    click to buy
                </button>
            </div>
        </div>
    )
}