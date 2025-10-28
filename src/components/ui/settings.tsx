"use client";

import { SettingsIcon } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import LocaleSwitch from "./locale-switch";
import ThemeSwitch from "./theme-switch";

export default function Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <SettingsIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <LocaleSwitch />

        <DropdownMenuSeparator />

        <ThemeSwitch />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
