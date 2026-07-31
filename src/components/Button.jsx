import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-[#FEFEFE] text-[#111111] border border-[#E8E4DC] hover:bg-[#FAF9F6]"
      : "bg-[#FBBD58] text-[#111111] border border-[#F5AB35] hover:bg-[#F5AB35]"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
