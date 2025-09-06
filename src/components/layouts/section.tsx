import * as React from "react";

import { cn } from "@/lib/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("section", className)}
      {...props}
    />
  );
}

function SectionWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-wrapper"
      className={cn("wrapper space-y-16 py-8 md:py-16", className)}
      {...props}
    />
  );
}

function SectionHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-header"
      className={cn("space-y-4", className)}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="section-title"
      className={cn("text-center text-4xl font-bold", className)}
      {...props}
    />
  );
}

function SectionSubtitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-subtitle"
      className={cn("text-center text-base", className)}
      {...props}
    />
  );
}

function SectionContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="section-content" className={cn("", className)} {...props} />
  );
}

export {
  Section,
  SectionWrapper,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SectionContent,
};
