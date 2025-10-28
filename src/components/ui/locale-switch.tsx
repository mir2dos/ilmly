"use client";

import { Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "use-intl";
import { routing } from "@/i18n/routing";

import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./dropdown-menu";
import { LanguagesIcon } from "lucide-react";

export default function LocaleSwitch() {
  const t = useTranslations("Settings.LocaleSwitcher");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function handleLocalChange(value: string) {
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
    <>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <LanguagesIcon /> Change language
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={locale}
              onValueChange={handleLocalChange}
              aria-disabled={isPending}
            >
              {routing.locales.map((cur) => (
                <DropdownMenuRadioItem key={cur} value={cur}>
                  {t("locale", { locale: cur })}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </>
  );
}
