import React, { useEffect, useState } from "react";

import CardProduct from "../components/CardProduct";
import data from "../data/data.json";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const arrPro = data.filter((pro) => pro.id === Number.parseInt(id));
    setProductDetail(arrPro[0]);
  }, []);

  return <div>{productDetail && <CardProduct pro={productDetail} />}</div>;
}

export default ProductDetail;
