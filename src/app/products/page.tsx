const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {[1, 2, 3]?.map((el) => (
          <li key={"prod" + el}>Products {el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
