import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, href, className, fillOnHover, children, ...props }) => {
  // Always use the regular logo
  const logoSrc = "/logo.svg";
  
  className = clsx(
    className,
    {
      'text-white hover:text-blue-600': invert,
      'text-black hover:text-blue-600': !invert
    },
    fillOnHover && "hover:fill-current"
  );

  const inner = (
    <span className="relative">
      <Image
        src={logoSrc}
        alt="Logo"
        width={180}
        height={180}
        className="object-contain"
      />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2 className={clsx("cursor-pointer text-2xl font-semibold duration-300", className)}>
      {inner}
    </h2>
  );
};

export default Logo;