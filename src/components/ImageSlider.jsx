function ImageSlider({ imageList, setImgIndex, imgIndex }) {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-around items-center">
      <div className="flex flex-row lg:flex-col justify-around">
        {imageList.map((image, index) => (
          <img
            className={`lg:w-20 md:w-16 w-14 my-5 max-md:mx-2 max-lg:mx-5  rounded-xl cursor-pointer ${
              imgIndex === index ? "opacity-30" : ""
            }`}
            key={index}
            src={image}
            onClick={() => setImgIndex(index)}
            alt=""
          />
        ))}
      </div>
      <img
        className="lg:w-4/6 max-sm:w-full rounded-xl object-cover"
        src={imageList[imgIndex]}
        alt=""
      />
    </div>
  );
}

export default ImageSlider;
