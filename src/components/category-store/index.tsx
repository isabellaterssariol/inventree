import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { userProducts } from "../../mocks";
import { MdArrowForward } from "react-icons/md";

export default function CategoryStore() {
  return (
    <Splide
      options={{
        type: "slide",
        perPage: 1.1,
        gap: 10,
        rewind: true,
        pagination: false,
        arrows: false,
      }}
    >
      {userProducts.products.map((product) => (
        <SplideSlide key={product.id}>
          <main className="flex items-center w-[19.5rem] h-[11.875rem] p-4 rounded-lg font-dm-sans bg-white cursor-pointer">
            <div>
              <h1 className="text-default font-montserrat text-[1.3rem] font-bold mb-6">
                {product.title}
              </h1>
              <Link
                to={"/"}
                className="text-primary font-dm-sans text-[0.875rem] font-bold tracking-[0.2px] flex items-center"
              >
                <p className="text-primary font-dm-sans text-[0.9rem] font-bold tracking-[0.2px] mr-1">
                  Edit now
                </p>
                <MdArrowForward size={20} />
              </Link>
            </div>
            <Link to={"/"}>
              <img
                src={"../../assets/generic_product.png"}
                alt="Box product"
                className="w-[8rem] h-[8rem] p-[0.4rem_0_0.4rem_2.7rem] flex items-center"
              />
            </Link>
          </main>
        </SplideSlide>
      ))}
    </Splide>
  );
}
