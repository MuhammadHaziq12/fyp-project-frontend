import React from "react";
// import ProductCard from "./productCard";
// import ProductCard from "./components/productcard/productCard";
import ProductCard from "../../ui/dashboard/productcard/ProductCard";

const productsData = [
  {
    img: "images/j/1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "images/j/2.jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "images/j/3.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "images/j/4.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "images/j/5.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "images/j/6.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "images/j/7.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

const Marketplace = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">Buy Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;