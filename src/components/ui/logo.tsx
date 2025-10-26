import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface LogoProps {
  variant?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  size?: "sm" | "md";
}

const Logo = ({ variant = "4", size = "md" }: LogoProps) => {
  return (
    <Link href="/" className="block">
      <Image
        src={`/logo/logo-${variant}.svg`}
        alt="logo"
        width={size == "sm" ? "60" : "80"}
        height={size == "sm" ? "30" : "40"}
      />
    </Link>
  );
};

export default Logo;
