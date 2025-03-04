import {Swiper, SwiperSlide} from "swiper/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";


export default function Events({images}: {
  images: { src: string; alt: string; name: string; desc: string }[],
}) {
  return (
<>
      {/* Popular Events (Carousel) */}
      <section>
        <h2 className="text-lg font-bold">Popular Event</h2>
        <Swiper slidesPerView={1.2} spaceBetween={10} className="mt-2">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-gray-900 text-white">
                <CardContent>
                  <Image src={image.src} alt={image.alt} width={300} height={150} className="rounded-lg"/>
                  <CardHeader>
                    <CardTitle>International Jazz Festival</CardTitle>
                    <p className="text-sm text-gray-400">{image.name}</p>
                    <p className="font-bold">{image.desc}</p>
                  </CardHeader>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Special Deals (Vertical List) */}
      <section>
        <h2 className="text-lg font-bold">Special Deal</h2>
        <div className="space-y-2">
          <Card className="bg-gray-900 text-white flex items-center">
            <Image src="/img/food.png" alt="Event Street Food" width={50} height={50} className="rounded-lg"/>
            <CardContent>
              <CardTitle>Padang Food Festival</CardTitle>
              <p className="text-sm text-gray-400">$55 → $35</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};