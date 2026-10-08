const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

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

async function main() {
  console.log('Starting seed...');

  // Helper function to insert data for a specific year
  const seedYear = async (dataObj, year) => {
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

  // Clear existing data (optional but good for testing)
  await prisma.teamMember.deleteMany({});
  console.log('Cleared existing team members.');

  await seedYear(team2025Data, 2025);
  console.log('Seeded 2025 team.');

  await seedYear(team2024Data, 2024);
  console.log('Seeded 2024 team.');

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
