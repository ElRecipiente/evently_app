import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedEvents = [
  {
    name: "Festival de Musique",
    desc: "Un grand festival de musique en plein air.",
    picture: "festival.jpg",
    address: { type: "Point", coordinates: [2.3522, 48.8566] },
    start_at: new Date("2025-06-01"),
    end_at: new Date("2025-06-03"),
  },
  {
    name: "Conférence Tech",
    desc: "Un rassemblement des passionnés de technologie.",
    picture: "tech.jpg",
    address: { type: "Point", coordinates: [-74.006, 40.7128] },
    start_at: new Date("2025-07-10"),
    end_at: new Date("2025-07-12"),
  },
  {
    name: "Salon du Livre",
    desc: "Un événement dédié aux amoureux de la littérature.",
    picture: "bookfair.jpg",
    address: { type: "Point", coordinates: [13.405, 52.52] },
    start_at: new Date("2025-09-15"),
    end_at: new Date("2025-09-17"),
  },
  {
    name: "Tournoi d'Échecs",
    desc: "Compétition internationale d'échecs.",
    picture: "chess.jpg",
    address: { type: "Point", coordinates: [-3.7038, 40.4168] },
    start_at: new Date("2025-11-05"),
    end_at: new Date("2025-11-07"),
  },
  {
    name: "Exposition d'Art Contemporain",
    desc: "Une collection des plus belles œuvres modernes.",
    picture: "art.jpg",
    address: { type: "Point", coordinates: [151.2093, -33.8688] },
    start_at: new Date("2025-08-20"),
    end_at: new Date("2025-08-25"),
  },
  {
    name: "Marathon International",
    desc: "Une course ouverte aux coureurs de tous niveaux.",
    picture: "marathon.jpg",
    address: { type: "Point", coordinates: [37.6173, 55.7558] },
    start_at: new Date("2025-10-12"),
    end_at: new Date("2025-10-12"),
  },
  {
    name: "Gaming Convention",
    desc: "Un rassemblement des amateurs de jeux vidéo et e-sport.",
    picture: "gaming.jpg",
    address: { type: "Point", coordinates: [139.6917, 35.6895] },
    start_at: new Date("2025-07-25"),
    end_at: new Date("2025-07-27"),
  },
  {
    name: "Spectacle de Cirque",
    desc: "Un show spectaculaire avec des artistes internationaux.",
    picture: "circus.jpg",
    address: { type: "Point", coordinates: [-118.2437, 34.0522] },
    start_at: new Date("2025-12-01"),
    end_at: new Date("2025-12-03"),
  },
  {
    name: "Marché de Noël",
    desc: "Une ambiance magique pour les fêtes de fin d'année.",
    picture: "christmas.jpg",
    address: { type: "Point", coordinates: [4.8357, 45.764] },
    start_at: new Date("2025-12-15"),
    end_at: new Date("2025-12-24"),
  },
  {
    name: "Conférence IA et Innovation",
    desc: "Un forum sur l'intelligence artificielle et ses applications.",
    picture: "ai.jpg",
    address: { type: "Point", coordinates: [103.8198, 1.3521] },
    start_at: new Date("2025-09-30"),
    end_at: new Date("2025-10-02"),
  }
];

async function main() {
  for (const event of seedEvents) {
    await prisma.event.create({
      data: {
        ...event,
        created_at: new Date(),
      },
    });
  }
  console.log("Seeding terminé !");
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
