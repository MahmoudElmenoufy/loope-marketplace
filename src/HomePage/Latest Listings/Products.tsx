function Product({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="w-60 h-80 rounded-lg m-6 overflow-hidden">
      <img src={imageSrc} alt="product" className="!w-full !h-full" />
    </div>
  );
}

export default Product;
