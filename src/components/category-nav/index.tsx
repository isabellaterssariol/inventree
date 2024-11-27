import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { userProducts } from '../../mocks';

export default function CategoryNav() {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2.5, 
        gap: 4,
        pagination: false,
        arrows: false,
      }}
    >
      {userProducts.categories.map((category) => (
        <SplideSlide key={category.id}>
          <div className="bg-primary-dark rounded-lg flex justify-center items-center h-8 mt-3 mb-5">
            <h3 className="text-white text-sm font-semibold text-center">
              {category.title}
            </h3>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}