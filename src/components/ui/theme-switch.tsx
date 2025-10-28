"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./dropdown-menu";
import { useTranslations } from "next-intl";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Settings.ThemeSwitcher");

  const themes = [
    {
      name: "dark",
      icon: <MoonIcon />,
    },
    {
      name: "light",
      icon: <SunIcon />,
    },
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <SunIcon /> Change theme
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            {themes.map((theme) => (
              <DropdownMenuRadioItem key={theme.name} value={theme.name}>
                {theme.icon}
                {t("theme", { theme: theme.name })}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
