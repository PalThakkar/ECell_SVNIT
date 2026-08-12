import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Border from "./Border";

export function GridList({ className, children }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({ title, children, className, invert = false }) {
  return (
    <li
      className={clsx(
        "text-base",
        invert
          ? "text-[#7A756C] before:bg-[#D4CFC6] after:bg-[#D4CFC6]/10"
          : "text-[#3D3A35] before:bg-[#FBBD58] after:bg-[#E8E4DC]",
        className
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              "font-semibold",
              "text-[#111111]"
            )}
          >
            {title}.
          </strong>{" "}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
