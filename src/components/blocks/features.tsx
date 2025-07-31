import {
  // Code,
  // Terminal,
  // Paintbrush,
  // Rocket,
  // Book,
  // PlusCircle,
  ChevronRight,
} from "lucide-react";
// import { useTranslations } from "next-intl";
// import SectionHeader from "../SectionHeader";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Features() {
  // const t = useTranslations("HomePage.FeaturesSection");

  // const features = [
  //   {
  //     icon: <Code className="h-6 w-6" />,
  //     title: t("features.0.title"),
  //     desc: t("features.0.desc"),
  //   },
  //   {
  //     icon: <Terminal className="h-6 w-6" />,
  //     title: t("features.1.title"),
  //     desc: t("features.1.desc"),
  //   },
  //   {
  //     icon: <Paintbrush className="h-6 w-6" />,
  //     title: t("features.2.title"),
  //     desc: t("features.2.desc"),
  //   },
  //   {
  //     icon: <Rocket className="h-6 w-6" />,
  //     title: t("features.3.title"),
  //     desc: t("features.3.desc"),
  //   },
  //   {
  //     icon: <Book className="h-6 w-6" />,
  //     title: t("features.4.title"),
  //     desc: t("features.4.desc"),
  //   },
  //   {
  //     icon: <PlusCircle className="h-6 w-6" />,
  //     title: t("features.5.title"),
  //     desc: t("features.5.desc"),
  //   },
  //   ,
  // ];

  return (
    <>
      {/* <section className="relative py-14">
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
                    <h4 className="font-geist text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        </div>
      </section> */}
      <section className="relative py-14">
        <div className="container">
          {/* <SectionHeader
            badge={t("sectionBadge")}
            title={t("sectionTitle")}
            subtitle={t("sectionDesc")}
          /> */}
          <article className="mb-6 grid grid-cols-1 gap-6 rounded-lg bg-neutral-50 md:grid-cols-[3fr_2fr]">
            <div className="relative h-full min-h-[350px] w-full overflow-hidden">
              <Image
                src="/platform/dashboard.png"
                alt="Laptop Mockup"
                width={650}
                height={400}
                className="absolute top-20 left-10 rounded-xl shadow-lg shadow-neutral-600"
              />
            </div>
            <div className="space-y-6 p-4 py-8">
              <h3 className="text-4xl font-semibold">Easy & customizable</h3>
              <ul className="space-y-4 pl-4 text-lg">
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Payments management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Attendance tracking
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Online tests & exams
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Additionals adds-on
                </li>
              </ul>
              <Button className="rounded-full">See more features</Button>
            </div>
          </article>
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-[2fr_4fr]">
            <article className="space-y-6 rounded-lg bg-neutral-50 p-8">
              <h3 className="text-4xl font-semibold">
                Track payments without hassle.
              </h3>
              <ul className="space-y-4 pl-4 text-lg">
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Payments management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Attendance tracking
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Online tests & exams
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Additionals adds-on
                </li>
              </ul>
              <Button className="rounded-full">Start using now</Button>
            </article>

            <article className="relative overflow-hidden rounded-lg bg-neutral-50">
              <Image
                src="/platform/integrations.png"
                alt="Laptop Mockup"
                width={700}
                height={400}
                className="absolute top-20 left-1/2 -translate-x-1/2 rounded-xl shadow-lg shadow-neutral-600"
              />
            </article>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[4fr_3fr]">
            <article className="relative overflow-hidden rounded-lg bg-neutral-50">
              <Image
                src="/platform/tests.png"
                alt="Laptop Mockup"
                width={600}
                height={400}
                className="absolute top-20 left-1/2 -translate-x-1/2 rounded-xl shadow-lg shadow-neutral-600"
              />
            </article>

            <article className="space-y-6 rounded-lg bg-neutral-50 p-8">
              <h3 className="text-4xl font-semibold">Affordable tiers</h3>
              <ul className="space-y-4 pl-4 text-lg">
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Payments management
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Attendance tracking
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Online tests & exams
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight color="blue" /> Additionals adds-on
                </li>
              </ul>
              <Button className="rounded-full">Check pricing</Button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
