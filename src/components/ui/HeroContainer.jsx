export default function HeroContainer({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        px-2
        md:px-5
        lg:px-7
        xl:px-8
        2xl:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}