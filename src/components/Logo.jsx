import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, href, className, fillOnHover, children, ...props }) => {
  // Use the fillOnHover prop internally to apply custom styles or logic
  className = clsx(
    className,
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600",
    fillOnHover && "hover:fill-current" // Example of how you might use fillOnHover
  );

  const inner = (
    <span className="relative">
      <Image
        src="/logo.svg"
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
