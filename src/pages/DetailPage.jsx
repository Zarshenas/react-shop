import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../contexts/ProductsProvider";
import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { IoIosArrowBack } from "react-icons/io";


export default function DetailPage() {
  const [loading, setLoading] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);
  const { id } = useParams();
  const product = useGetProduct(+id);

  useEffect(() => {
    if (product !== undefined) {
      setLoading(false);
      console.log(product);
    }
  }, [product]);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <p>loading .....</p>
        ) : (
          <div className="relative flex dark:bg-grayshade-400 border border-grayshade-300 rounded-xl  p-10 ">
          <Link to={'/'} className="absolute flex items-center bg-grayshade-500 border border-grayshade-300 px-4 py-2 top-2 right-2 text-grayshade-50 rounded-full"><IoIosArrowBack className="text-white mr-2"/>    Back</Link>
          <ImageSlider
            imageList={product.images}
            setImgIndex={setImgIndex}
            imgIndex={imgIndex}
          />
          <div className="p-8 flex flex-col justify-center">
            <p className="text-4xl font-semibold">{product.title}</p>
            <span className="bg-grayshade-300 inline-block border border-grayshade-200 py-2 px-3 text-xs rounded-full my-4 w-max">
              {product.category.name}
            </span>
            <p className="text-xl font-medium text-grayshade-50 my-10">
              {product.description}
            </p>
            <p className="text-grayshade-50 font-bold text-lg">Price</p>
            <p className="font-bold text-white text-2xl">
              $ {product.price.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
