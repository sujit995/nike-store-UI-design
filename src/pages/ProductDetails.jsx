import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ReactImageGallery from "react-image-gallery";

import "react-rater/lib/react-rater.css";
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const { id } = useParams()

  const p = {
    images: [
      {
        original:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        original:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        thumbnail:
          "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        original:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
        thumbnail:
          "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    title: "Jordan shoes",
    subtitle: "good shoes",
    reviews: "150",
    availability: true,
    brand: "apex",
    category: "Sofa",
    sku: "BE45VGTRK",
    price: 450,
    previousPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["gray", "violet", "red"],
  };
 
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={p.images}
        />
      </div>
      <div className="flex-[1] py-3">
        <div className="text-[34px] font-semibold mb-2 leading-tight">
          {p.title}
        </div>
        <div className="text-lg font-semibold mb-5">{p.subtitle}</div>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">MRP : &#8377;{p.price}</p>
        </div>
        <div className="text-md font-medium text-black/[0.5]">
          incl. of taxes
        </div>
        <div className="text-md font-medium text-black/[0.5] mb-20">
          {`(Also includes all applicable duties)`}
        </div>
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <div className="text-md font-semibold">Select Size</div>
            <div className="text-md font-medium text-black/[0.5] cursor-pointer">
              Select Guide
            </div>
          </div>
          <div id="sizesGrid" className="grid grid-cols-3 gap-2">
            {p.size.map((item, i) => (
              <div
                key={i}
                className={`border rounded-md text-center py-3 font-medium ${
                  item.enabled
                    ? "hover:border-black cursor-pointer"
                    : "cursor-not-allowed bg-black/[0.1] opacity-50"
                } ${selectedSize === item.size ? "border-black" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
          {showError && (
            <div className="text-red-600 mt-1">Size selection is required</div>
          )}
        </div>
        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
          Add to Cart
        </button>
        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
          Whishlist
          <AiOutlineHeart size={20} />
        </button>
        <div>
          <div className="text-lg font-bold mb-5">Product Details</div>
          <div className="markdown text-md mb-5">
            <Markdown>{p.description}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
