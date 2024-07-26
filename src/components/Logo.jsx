import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );

  const inner = (
    <span className="relative">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={180} // Set width to 30px
        height={180} // Set height to 30px
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
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
