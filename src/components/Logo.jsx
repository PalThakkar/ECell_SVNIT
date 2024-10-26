import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Logo = ({ invert, href, className, fillOnHover, children, ...props }) => {
  const pathname = usePathname();
  const isEventsPage = pathname === '/events';
  
  // Use black logo on events page when not inverted
  const logoSrc = (isEventsPage && !invert) ? "/logo-black.svg" : "/logo.svg";
  
  className = clsx(
    className,
    {
      'text-white hover:text-blue-600': invert || isEventsPage,
      'text-black hover:text-blue-600': !invert && !isEventsPage
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