import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import SectionHeader from "../SectionHeader";

export default function Features() {
  const t = useTranslations("HomePage.FeaturesSection");

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: t("features.0.title"),
      desc: t("features.0.desc"),
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: t("features.1.title"),
      desc: t("features.1.desc"),
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: t("features.2.title"),
      desc: t("features.2.desc"),
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: t("features.3.title"),
      desc: t("features.3.desc"),
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: t("features.4.title"),
      desc: t("features.4.desc"),
    },
    {
      icon: <PlusCircle className="h-6 w-6" />,
      title: t("features.5.title"),
      desc: t("features.5.desc"),
    },
    ,
  ];

  return (
    <section className="relative py-14">
      <div className="container">
        <SectionHeader
          badge={t("sectionBadge")}
          title={t("sectionTitle")}
          subtitle={t("sectionDesc")}
        />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) =>
              item ? (
                <li
                  key={idx}
                  className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4"
                >
                  <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#7aabff3f_inset]">
                    {item.icon}
                  </div>
                  <h4 className="font-geist text-lg font-bold">{item.title}</h4>
                  <p className="text-gray-500">{item.desc}</p>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
