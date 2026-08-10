import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, fillOnHover, children, ...props }) => {
  // Always use the regular logo
  const logoSrc = "/logo.svg";
  
  const linkClasses = clsx(
    "inline-flex items-center shrink-0 select-none",
    className,
    fillOnHover && "hover:opacity-90"
  );

  const inner = (
    <img
      src={logoSrc}
      alt="E-Cell SVNIT Logo"
      className="h-24 sm:h-32 w-auto object-contain shrink-0"
    />
  );

  if (href) {
    return (
      <Link href={href} className={linkClasses} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={linkClasses} {...props}>
      {inner}
    </div>
  );
};

export default Logo;