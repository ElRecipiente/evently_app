import {Swiper, SwiperSlide} from "swiper/react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Event} from "@prisma/client";

interface EventsProps {
  events: Event[] | null | undefined;
}
export default function Events({ events }: EventsProps) {

  if (!events || !Array.isArray(events)) {
    return (
      <section>
        <h2 className="text-lg font-bold">Popular Event</h2>
        <p>Aucun évènement disponible actuellement.</p>
      </section>
    )
  }

  return (
    <>
      {/* Popular Events (Carousel) */}
      <section>
        <h2 className="text-lg font-bold">Popular Event</h2>
        <Swiper slidesPerView={1.2} spaceBetween={10} className="mt-2">
          {events.map((event: Event) => (
            <SwiperSlide key={event.id}>
              <Card className="bg-gray-900 text-white">
                <CardContent>
                  <Image
                    src={`/img/${event.picture}`}
                    alt={event.name}
                    width={300}
                    height={150}
                    className="rounded-lg"/>
                  <CardHeader className={"relative top-0 bg-gray-900"}>
                    <CardTitle>{event.name}</CardTitle>
                    <p className="text-sm text-gray-400">{event.desc}</p>
                    <p className="font-bold">Un prix ici</p>
                  </CardHeader>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Event for you */}
      {/*<section>*/}
      {/*  <h2 className="text-lg font-bold">Event for you</h2>*/}
      {/*  <div className="space-y-1">*/}
      {/*    <Card className="bg-gray-900 text-white flex items-center">*/}
      {/*      <Image*/}
      {/*        src="/img/party.png"*/}
      {/*        alt="Event Street Food"*/}
      {/*        width={200}*/}
      {/*        height={100}*/}
      {/*        className="rounded-lg"/>*/}
      {/*      <CardContent>*/}
      {/*        <CardTitle>Padang Food Festival</CardTitle>*/}
      {/*        <p className="text-sm text-gray-400">$55 → $35</p>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};