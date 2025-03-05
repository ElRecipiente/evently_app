import {Swiper, SwiperSlide} from "swiper/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

export default function Events({images}: {
  images: { src: string; alt: string; name: string; desc: string; price: string; }[],
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
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={150}
                    className="rounded-lg"/>
                  <CardHeader className={"relative top-0 bg-gray-900"}>
                    <CardTitle>{image.name}</CardTitle>
                    <p className="text-sm text-gray-400">{image.desc}</p>
                    <p className="font-bold">{image.price}</p>
                  </CardHeader>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Event for you */}
      <section>
        <h2 className="text-lg font-bold">Event for you</h2>
        <div className="space-y-1">
          <Card className="bg-gray-900 text-white flex items-center">
            <Image
              src="/img/party.png"
              alt="Event Street Food"
              width={200}
              height={100}
              className="rounded-lg"/>
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