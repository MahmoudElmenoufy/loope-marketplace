import Button from "./Buttons";
import Product from "./Products";
import RecentlyViewed from "./RecentlyViewed";

function LatestListings() {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-5">Latest Listings</h1>
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
      <RecentlyViewed />
    </div>
  );
}

export default LatestListings;
