"use client";

import { Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "use-intl";
import { routing } from "@/i18n/routing";

export default function LocaleSwitch() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select
      defaultValue={locale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="border-secondary-dark w-[150px] rounded-full border-2">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
