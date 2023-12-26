function ImageSlider({ imageList, setImgIndex, imgIndex }) {
  console.log(imageList);
  return (
    <div className="flex justify-evenly">
      <div className="flex flex-col justify-around">
        {imageList.map((image, index) => (
          <img className={`w-20 rounded-xl cursor-pointer ${imgIndex === index ? 'opacity-30': ''}`}
            key={index}
            src={image}
            onClick={() => setImgIndex(index)}
            alt=""
          />
        ))}
      </div>
      <img className="w-3/4 rounded-xl" src={imageList[imgIndex]} alt="" />
    </div>
  );
}

export default ImageSlider;
