import { Facebook, Github, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/logo";
import { useTranslations } from "next-intl";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/mvpblocks" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/mvpblocks",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/mvpblocks" },
];

const contactInfo = [
  { icon: Mail, text: "ilmly@mir2dos.com" },
  { icon: Phone, text: "+998 90 123 45 67" },
  { icon: MapPin, text: "Tashkent, Uzbekistan", isAddress: true },
];

export default function Footer() {
  const t = useTranslations("HomePage.Footer");

  const companyLinks = [
    { text: t("companyLinks.about"), href: "/" },
    { text: t("companyLinks.partners"), href: "/" },
    { text: t("companyLinks.news"), href: "/" },
    { text: t("companyLinks.pricing"), href: "/" },
    { text: t("companyLinks.contact"), href: "/" },
  ];

  const resourcesLinks = [
    { text: t("resourcesLinks.guides"), href: "/" },
    { text: t("resourcesLinks.demo"), href: "/" },
    { text: t("resourcesLinks.centers"), href: "/" },
    { text: t("resourcesLinks.trial"), href: "/" },
  ];

  const helpfulLinks = [
    { text: t("helpfulLinks.faqs"), href: "/" },
    { text: t("helpfulLinks.support"), href: "/" },
    { text: t("helpfulLinks.chat"), href: "/", hasIndicator: true },
  ];

  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Logo />

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {t("companyDesc")}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">{t("companyLinks.title")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {companyLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">{t("resourcesLinks.title")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {resourcesLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">{t("helpfulLinks.title")}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-secondary-foreground/70 transition"
                      }`}
                    >
                      <span className="text-secondary-foreground/70 transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {t("companyName")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
