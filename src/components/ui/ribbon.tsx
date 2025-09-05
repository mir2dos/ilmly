import { ReactNode } from "react";

export default function Ribbon({ children }: { children: ReactNode }) {
  return <p className="ribbon-text">{children}</p>;
}
