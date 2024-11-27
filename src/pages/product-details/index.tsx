import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Button from "../../components/button-generic";
import ColorOptions from "../../components/color-options";
import { useParams } from "react-router-dom";
import { userProducts } from "../../mocks";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = userProducts.products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <main className="font-poppins p-4">
        <section className="flex justify-center">
          <img
            src="../../assets/generic_product_details.png"
            alt="AirPods Max"
            className="w-full max-w-md rounded-xl"
          />
        </section>

        <section className="mt-6">
          <h1 className="text-2xl font-bold text-secondary-dark">
            {product.title}
          </h1>
          <p className="text-xl font-semibold text-primary-dark mt-2">
            ${Math.round(product.price)}
          </p>
          <p className="text-sm text-secondary-dark mt-1">
            (219 people bought this)
          </p>

          <ColorOptions />

          <h2 className="text-lg font-semibold text-secondary-dark mb-2 mt-6">
            Description
          </h2>
          <p className="text-sm text-secondary">{product.description}</p>

          <div className="mt-4 flex gap-4 mb-12 justify-center">
            <Button text="Edit" icon={AiOutlineEdit} type="button" />
            <Button text="Delete" icon={AiOutlineDelete} type="button" />
          </div>
        </section>
      </main>
    </>
  );
}
