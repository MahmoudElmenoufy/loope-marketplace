import Button from "./Buttons";
import Product from "./Products";

function LatestListings() {
  return (
    <div>
      <h1 className="text-3xl mb-5 text-[#0E150E]">LATEST LISTINGS</h1>
      <Button />
      <div className="grid grid-cols-5">
        <Product imageSrc="product1.jpeg" />
        <Product imageSrc="product2.jpg" />
        <Product imageSrc="product6.jpg" />
        <Product imageSrc="product3.jpg" />
        <Product imageSrc="product4.jpg" />
        <Product imageSrc="product5.jpg" />
        <Product imageSrc="product7.jpg" />
        <Product imageSrc="product8.jpg" />
        <Product imageSrc="product9.jpg" />
        <Product imageSrc="product10.jpg" />
      </div>
    </div>
  );
}

export default LatestListings;
