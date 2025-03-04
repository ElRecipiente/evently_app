import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({
                                   images,
                                 }: {
  images: { src: string; alt: string; title: string; description: string }[];
}) {
  return (
    <div className="h-full w-full">
      <Swiper
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation, A11y]}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}