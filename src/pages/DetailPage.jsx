import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../contexts/ProductsProvider";
import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { IoIosArrowBack } from "react-icons/io";
import { Triangle } from "react-loader-spinner";
import AddToCart from "../components/AddToCart";

export default function DetailPage() {
  const [loading, setLoading] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);
  const { id } = useParams();
  const product = useGetProduct(+id);

  useEffect(() => {
    if (product !== undefined) {
      setLoading(false);
    }
  }, [product]);

  return (
    <div className="flex items-center justify-center max-w-7xl m-auto wrapper">
      {loading ? (
        <Triangle
          visible
          height="200"
          width="200"
          color="#703BF7"
          ariaLabel="triangle-loading"
          wrapperStyle={{ fontSize: "150px" }}
          wrapperClass="w-full col-span-3 flex justify-center m-auto"
        />
      ) : (
        <div className="relative flex dark:bg-grayshade-400 border border-grayshade-300 rounded-xl  p-10 ">
          <Link
            to={"/"}
            className="absolute flex items-center bg-grayshade-500 border border-grayshade-300 px-4 py-2 top-2 right-2 text-grayshade-50 rounded-full"
          >
            <IoIosArrowBack className="text-white mr-2" /> Back
          </Link>
          <ImageSlider
            imageList={product.images}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
          <div className="p-8 w-9/12 flex flex-col justify-center">
            <p className="text-4xl font-semibold">{product.title}</p>
            <span className="bg-grayshade-300 inline-block border border-grayshade-200 py-2 px-3 text-xs rounded-full my-4 w-max">
              {product.category.name}
            </span>
            <p className="text-xl font-medium text-grayshade-50 my-10">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-grayshade-50 font-bold text-lg">Price</p>
                <p className="font-bold text-white text-2xl">
                  $ {product.price.toLocaleString()}
                </p>
              </div>
              <AddToCart
                cartData={{ id:product.id, title:product.title, price:product.price }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
