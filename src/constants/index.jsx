import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "E Cell SVNIT",
    links: [
      { title: "About", href: "/about" },
      { title: "Team", href: "/team" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
      { title: "Job", href: "/jobs" },
      { title: "FAQ", href: "/Faq" },  // Added FAQ link
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
