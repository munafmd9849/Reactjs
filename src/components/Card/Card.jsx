function Card({product}){
    return (
        <div className="card">
            <img className="card__img" src={product?.image}/>
            <h4 className="card__title">{product?.title}</h4>
            <p className="card__description">{product?.description}</p>
            <button className="card__addToCart--disabled">Add to Cart</button>
        </div>
    )
}
export default Card