import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const team2025Data = {
  chiefExecutive: [
    { photo: "/atman.png", name: "Atman Shah", position: "Convener", linkedin: "https://www.linkedin.com/in/atman-shah-0510as/", instagram: "https://www.instagram.com/atmann_04/" },
    { photo: "/aman.png", name: "Aman Kapoor", position: "Co-Convener", linkedin: "https://www.linkedin.com/in/aman-kapoor-6a6122308/", instagram: "https://www.instagram.com/aman__kap33/" },
    { photo: "/asmi.png", name: "Asmi Wadhwa", position: "Secretary", linkedin: "https://www.linkedin.com/in/asmiwadhwa/", instagram: "https://www.instagram.com/asmiw.7" },
    { photo: "/soni.png", name: "Lakshya Soni", position: "Treasurer", linkedin: "https://www.linkedin.com/in/lakshya-soni-6b4099327/", instagram: "https://www.instagram.com/soni_lakshya_/" },
  ],
  finance: [
    { photo: "/adi.jpg", name: "Aditya Panchal", position: "Head", linkedin: "https://in.linkedin.com/in/panchal-aditya", instagram: "https://www.instagram.com/aditya._.127" },
    { photo: "/shabbir.png", name: "Shabbir Hussainy", position: "Head", linkedin: "https://www.linkedin.com/in/shabbir-svnit/", instagram: "https://www.instagram.com/shabbir.hussainy" },
  ],
  mediaAndDesign: [
    { photo: "/kasera.png", name: "Tanish Kasera", position: "Head", linkedin: "https://www.linkedin.com/in/tanish-kasera-301343285/", instagram: "https://www.instagram.com/tanish.xi" },
    { photo: "/altaf.jpg", name: "Altaf Shams", position: "Head", linkedin: "https://www.linkedin.com/in/shamsaltaf143/", instagram: "https://www.instagram.com/om_panchal_op7" },
  ],
  events: [
    { photo: "/priti.jpg", name: "Priti Sand", position: "Head", linkedin: "https://www.linkedin.com/in/priti-sand/", instagram: "https://www.instagram.com/priti_3110" },
    { photo: "/harsh.png", name: "Harsh Solanki", position: "Head", linkedin: "https://www.linkedin.com/in/harshhsolanki/", instagram: "https://www.instagram.com/harshsolanki_1206" },
  ],
  contentTeam: [
    { photo: "/tanisha.jpg", name: "Tanisha Mishra", position: "Head", linkedin: "https://www.linkedin.com/in/tanisha-mishra-b259722a3/", instagram: "https://www.instagram.com/tanisha.mishraaa" },
    { photo: "/jash.jpg", name: "Jash Vadani", position: "Head", linkedin: "https://www.linkedin.com/in/jash-vanidani/", instagram: "https://www.instagram.com/jashh_visuals" },
  ],
  publicRelations: [
    { photo: "/meet.png", name: "Meet Pandya", position: "Head", linkedin: "https://www.linkedin.com/in/meet-pandya-r1705/", instagram: "https://www.instagram.com/meet.pandya17" },
    { photo: "/devanshi.jpg", name: "Devanshi Rathwa", position: "Head", linkedin: "https://www.linkedin.com/in/devanshirathva/", instagram: "https://www.instagram.com/rdevanshi23" },
  ],
};

const team2024Data = {
  executiveBoard: [
    { name: "Mihir Gandhi", position: "President", photo: "/mihir.jpg", linkedin: "https://www.linkedin.com/in/mihir--gandhi", instagram: "https://www.instagram.com/mihir__gandhi/" },
    { name: "Darshan Upadhyay", position: "Vice President", photo: "/darshan.jpg", linkedin: "https://www.linkedin.com/in/thedarshanupadhyay/", instagram: "https://www.instagram.com/upadhyay__darshan/" },
    { name: "Burhanuddin Lokhandwala", position: "Secretary", photo: "/secraty.jpeg", linkedin: "https://www.linkedin.com/in/burhanuddinlokhandwala04/", instagram: "https://www.instagram.com/burhan____04/" },
  ],
  chiefExecutive: [
    { photo: "/jeet.jpg", name: "Jeet Ariwala", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/jeet-ariwala-152243256", instagram: "https://www.instagram.com/jeet_ariwala21" },
    { photo: "/kartik.jpg", name: "Kartik Srivastava", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/kartik-srivastava-b46b561b7", instagram: "https://www.instagram.com/__.the.prodigal.son.__" },
    { photo: "/kashish.jpg", name: "Kashish Sharma", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/kashish-sharma-545774215", instagram: "https://www.instagram.com/kashishhh__11" },
    { photo: "/omraa.jpg", name: "Om Ramanuj", position: "Chief Executive", linkedin: "https://www.linkedin.com/in/om-ramanuj-511501266", instagram: "https://www.instagram.com/ramanuj_om" },
  ],
  technical: [
    { photo: "/srjay.jpg", name: "S R Jay Kikani", position: "Head", linkedin: "https://www.linkedin.com/in/srjaykikani", instagram: "https://www.instagram.com/_srjay" },
    { photo: "/shambhavi.jpg", name: "Shambhavi Shinde", position: "Co-head", linkedin: "https://www.linkedin.com/in/shambhavishinde", instagram: "https://www.instagram.com/shmbhvi" },
  ],
  mediaAndPublicity: [
    { photo: "/dangar.jpg", name: "Ronak Dangar", position: "Head", linkedin: "https://www.linkedin.com/in/ronak-dangar", instagram: "https://www.instagram.com/ronak_dangar_04" },
    { photo: "/om-p.jpg", name: "Om Panchal", position: "Co-Head", linkedin: "https://in.linkedin.com/in/om-panchal-136410257", instagram: "https://www.instagram.com/om_panchal_op7" },
  ],
  events: [
    { photo: "/tripathi.jpg", name: "Pritish Tripathi", position: "Head", linkedin: "https://www.linkedin.com/in/pritish-tripathi-362006271", instagram: "https://www.instagram.com/tripathipritish" },
    { photo: "/tanish.jpg", name: "Tanish Panchal", position: "Co-head", linkedin: "https://www.linkedin.com/in/tanish2311", instagram: "https://www.instagram.com/ttan_ishh" },
  ],
  startupTeam: [
    { photo: "/ridhayu.jpg", name: "Gosai Ridhayu", position: "Head", linkedin: "https://www.linkedin.com/in/ridhayu-gosai-4b063a280", instagram: "https://www.instagram.com/ridhayu_gosai_28" },
    { photo: "/sp.jpg", name: "Soumya Parida", position: "Co-head", linkedin: "https://www.linkedin.com/in/soumyashreeparida785", instagram: "https://www.instagram.com/pvtt_soumya" },
  ],
  publicRelations: [
    { photo: "/zala.jpg", name: "Nanviya Zala", position: "Head", linkedin: "https://www.linkedin.com/in/nanviya-zala-108324306", instagram: "https://www.instagram.com/notnanviazala" },
    { photo: "/parmar.jpg", name: "Krish Parmar", position: "Co-Head", linkedin: "https://www.linkedin.com/in/krish-parmar-a30211258", instagram: "https://www.instagram.com/krishh_.003" },
  ],
};

import { eventPages } from '../src/config/events.js';

async function main() {
  console.log('Starting seed...');

  // --- TEAM MEMBERS SEEDING ---
  type Member = { name: string; position: string; photo?: string; linkedin?: string; instagram?: string };
  const seedYear = async (dataObj: Record<string, Member[]>, year: number) => {
    let globalSortOrder = 0;
    
    for (const [department, members] of Object.entries(dataObj)) {
      for (const member of members) {
        await prisma.teamMember.create({
          data: {
            name: member.name,
            position: member.position,
            department: department,
            photoUrl: member.photo || "/placeholder.jpg",
            linkedin: member.linkedin || null,
            instagram: member.instagram || null,
            year: year,
            sortOrder: globalSortOrder++,
          },
        });
      }
    }
  };

  await prisma.teamMember.deleteMany({});
  console.log('Cleared existing team members.');
  await seedYear(team2025Data, 2025);
  console.log('Seeded 2025 team.');
  await seedYear(team2024Data, 2024);
  console.log('Seeded 2024 team.');

  // --- EVENTS SEEDING ---
  await prisma.event.deleteMany({});
  console.log('Cleared existing events.');

  for (const [key, event] of Object.entries(eventPages)) {
    // Map event.registration.status to Prisma enum EventStatus
    let status = 'DRAFT';
    const regStatus = event.registration?.status?.toLowerCase() || '';
    if (regStatus === 'live' || regStatus === 'open') status = 'OPEN';
    else if (regStatus === 'closed' || regStatus === 'concluded') status = 'CLOSED';

    // Extract year from slug or hero line2
    let year = new Date().getFullYear();
    const yearMatch = event.slug.match(/\d{4}/);
    if (yearMatch) {
      year = parseInt(yearMatch[0], 10);
    }

    // Extract venue from details
    let venue = null;
    const venueItem = event.details?.items?.find((item: any) => item.icon === 'mapPin' || item.title.toLowerCase().includes('venue'));
    if (venueItem) {
      venue = `${venueItem.primary} - ${venueItem.secondary}`;
    }

    await prisma.event.create({
      data: {
        slug: event.slug,
        title: event.intro?.title || event.hero?.line1 || event.slug,
        subtitle: event.hero?.subtitle,
        year: year,
        status: status as any,
        venue: venue,
        registrationLink: event.registration?.link,
        heroLine1: event.hero?.line1,
        heroLine2: event.hero?.line2,
        description: event.intro?.description,
        metrics: event.metrics ? (event.metrics as any) : undefined,
        galleryPhotos: event.gallery?.photos ? (event.gallery.photos as any) : undefined,
      },
    });
  }
  console.log('Seeded events.');

  // --- BLOG POSTS SEEDING ---
  await prisma.blogPost.deleteMany({});
  console.log('Cleared existing blog posts.');

  const blogPosts = [
    {
      title: "How to Kickstart Your Startup Journey",
      content: "This is the full content of the Kickstart Your Startup Journey article.",
      slug: "kickstart-your-startup",
    },
    {
      title: "Networking for Entrepreneurs: A Comprehensive Guide",
      content: "This is the full content of the Networking for Entrepreneurs article.",
      slug: "networking-for-entrepreneurs",
    },
    {
      title: "Top 10 Resources for Budding Entrepreneurs",
      content: "This is the full content of the Top 10 Resources for Budding Entrepreneurs article.",
      slug: "top-resources-for-entrepreneurs",
    },
    {
      title: "Understanding MVP: The Key to Startup Success",
      content: `Welcome to our Startup Lingo Series! Today, we’re diving into the world of MVP, or Minimum Viable Product. If you’re embarking on a startup journey, this term is crucial for understanding how to launch your idea successfully.\n\n**What is an MVP?**\nA Minimum Viable Product (MVP) is the most basic version of a product that includes only the essential features needed to meet the core needs of early users. It is designed to quickly enter the market, gather feedback, and validate business assumptions with minimal investment, allowing for iterative improvements based on real-world usage.\n\n**Facebook’s MVP story**\nIn 2004, Facebook launched as “TheFacebook” with a minimal set of features—profile creation, friend requests, and messaging—exclusively for Harvard students. This MVP allowed Zuckerberg and his team to quickly test the concept and gather feedback. The initial success led to expansion to other universities and the addition of new features, validating the idea and paving the way for Facebook’s evolution into a global social networking platform.\n\n**Conclusion**\nFor a new startup, an MVP strategy facilitates rapid market entry with minimal resources. It enables validation of key concepts through real user feedback and iterative enhancement. This method reduces risk and lays the groundwork for scaling and refining the offering based on genuine market needs.`,
      excerpt: "Learn about MVP (Minimum Viable Product) and how it can drive startup success.",
      coverImage: "/mvp blog.jpg",
      slug: "understanding-mvp",
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: {
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt || post.content.substring(0, 100) + '...',
        coverImage: post.coverImage || null,
        published: true,
        author: "E-Cell SVNIT",
      },
    });
  }
  console.log('Seeded blog posts.');

  // --- LEADERBOARD SEEDING ---
  await prisma.leaderboardEntry.deleteMany({});
  console.log('Cleared existing leaderboard entries.');

  const leaderboardData = [
    { rank: 1, teamName: "Team Alpha", points: 368 },
    { rank: 2, teamName: "Tech Titans", points: 358 },
    { rank: 3, teamName: "Innovation Squad", points: 352 },
    { rank: 4, teamName: "Growth Hackers", points: 345 },
    { rank: 5, teamName: "Startup Ninjas", points: 340 },
    { rank: 6, teamName: "Code Warriors", points: 335 },
    { rank: 7, teamName: "Dream Builders", points: 328 },
    { rank: 8, teamName: "Pixel Pioneers", points: 322 },
    { rank: 9, teamName: "Data Driven", points: 318 },
    { rank: 10, teamName: "Future Founders", points: 312 },
  ];

  for (const entry of leaderboardData) {
    await prisma.leaderboardEntry.create({
      data: {
        teamName: entry.teamName,
        points: entry.points,
        event: "lego-2025"
      },
    });
  }
  console.log('Seeded leaderboard entries.');

  console.log('Seeding finished.');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
