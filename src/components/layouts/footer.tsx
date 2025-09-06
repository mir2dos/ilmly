import { Mail } from "lucide-react";
import Logo from "../ui/logo";
import { SectionContent } from "./section";
import Link from "next/link";
import LocaleSwitch from "../ui/locale-switch";

export default function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="wrapper py-6">
        <SectionContent className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo />
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Mail />
              <Link className="font-semibold" href="mailto:ilmly@mir2dos.com">
                ilmly@mir2dos.com
              </Link>
            </div>
            <LocaleSwitch />
          </div>
        </SectionContent>
      </div>
      <div className="bg-muted text-muted-foreground py-4 text-center">
        © Copyright 2025 - Mir2Dos
      </div>
    </footer>
  );
}
