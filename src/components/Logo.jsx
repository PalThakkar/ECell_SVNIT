import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, href, className, fillOnHover, children, ...props }) => {
  const logoSrc = "/logo.svg";

  const combinedClass = clsx(
    "relative inline-flex items-center justify-center shrink-0",
    className,
    {
      'text-white hover:text-blue-600': invert,
      'text-black hover:text-blue-600': !invert
    },
    fillOnHover && "hover:fill-current"
  );

  const inner = (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
      <Image
        src={logoSrc}
        alt="E-Cell SVNIT Logo"
        fill
        sizes="(max-width: 768px) 96px, 112px"
        className="object-contain"
        priority
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClass} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={combinedClass} {...props}>
      {inner}
    </div>
  );
};

export default Logo;