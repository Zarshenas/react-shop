import { Link } from "react-router-dom";

import textShrink from "../utils/helpers/textShrink";

function Product({ id, title, price, image, category, description }) {
  return (
    <div className="py-7 px-7 border border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-72">
      <Link to={`${id}`}>
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
          src={image}
          alt=""
        />
      </Link>
      <div>
        <p className="font-semibold text-xl mb-2 h-auto">{title}</p>
        <p className="text-grayshade-50 text-xs">
          {textShrink(description)}
          <Link className="font-semibold text-white text-xs ml-1" to={`${id}`} state={{ some: "value" }}>
            Read More
          </Link>
        </p>
        <span className="bg-grayshade-400 inline-block border border-grayshade-300 py-2 px-3 text-xs rounded-full my-4">
          {category}
        </span>
      </div>
      <div className="flex">
        <div>
          <p className="text-grayshade-50 text-xs">Price</p>
          <p className="font-semibold text-white text-lg">$ {price.toLocaleString()}</p>
        </div>
        <div>{/* /buttons 3 types */}</div>
      </div>
    </div>
  );
}

export default Product;
