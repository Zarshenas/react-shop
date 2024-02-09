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
        <div className="relative flex lg:flex-row flex-col bg-zinc-100 dark:bg-grayshade-400 border border-grayshade-300 rounded-xl max-md:p-4 lg:p-10 ">
          <Link
            className="absolute text-xs lg:text-base flex items-center dark:text-grayshade-50 text-grayshade-300 bg-zinc-200 dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 px-4 py-2 top-[1%] right-[2%] rounded-full"
            to={"/products"}
          >
            <IoIosArrowBack className="text-grayshade-400 dark:text-white mr-2" />{" "}
            Back
          </Link>
          <ImageSlider
            imageList={product.images}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
          <div className="lg:p-8 max-md:p-0 flex lg:min-w-96 flex-col justify-center">
            <p className="text-4xl max-sm:text-2xl font-semibold">
              {product.title}
            </p>
            <span className="lable w-max">{product.category.name}</span>
            <p className="text-xl max-sm:text-base font-medium text-grayshade-50 my-10">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-grayshade-100 dark:text-grayshade-50 text-lg">
                  Price
                </p>
                <p className="font-bold text-grayshade-300 dark:text-white text-2xl">
                  $ {product.price.toLocaleString()}
                </p>
              </div>
              <AddToCart
                cartData={{
                  id: product.id,
                  title: product.title,
                  price: product.price,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
