import CardProduct from "../components/CardProduct";
import data from "../data/data.json";

function IndexProduct() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data.map((pro) => (
        <CardProduct key={pro.id} pro={pro} />
      ))}
    </div>
  );
}

export default IndexProduct;
