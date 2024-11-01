import { Link } from "react-router-dom";

import textShrink from "../utils/helpers/textShrink";
import AddToCart from "./AddToCart";

function Product({ productData:{ id, title, price, images:[image,,], category:{name:category}, description }}) {
  return (
    <div className="md:p-4 lg:p-7 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full justify-center justify-items-center justify-self-center ">
      <Link to={`${id}`}>
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
          src={image}
          alt=""
        />
      </Link>
      <div className="w-full">
        <p className="font-semibold text-xl mb-2 h-auto">{title}</p>
        <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
          {textShrink(description)}
          <Link
            className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
            to={`${id}`}
            state={{ some: "value" }}
          >
            Read More
          </Link>
        </p>
        <span className="lable">
          {category}
        </span>
      </div>
      <div className="flex justify-between items-center w-full">
        <div>
          <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">Price</p>
          <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
            $ {price.toLocaleString()}
          </p>
        </div>
        <AddToCart cartData={{id, title, price}}/>
      </div>
    </div>
  );
}

export default Product;
