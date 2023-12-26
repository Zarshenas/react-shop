function Product({title,price,image}) {
  return (
    <div>
        <p>{title}</p>
        <p>{price}</p>
        <img src={image} alt="" />
    </div>
  )
}

export default Product