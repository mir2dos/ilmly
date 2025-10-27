import Link from "next/link";
import { socialIconMap } from "./icon-map";

type SocialIconKey = keyof typeof socialIconMap;

const social_links = [
  {
    label: "Telegram",
    url: "https://t.me/ilmlyai",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/ilmlyai",
  },
  {
    label: "Mail",
    url: "mailto:mir2dos@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-4">
      {social_links.map((link) => {
        const Icon = socialIconMap[link.label.toLowerCase() as SocialIconKey];

        return (
          <li key={link.label}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
            >
              <Icon size={24} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
