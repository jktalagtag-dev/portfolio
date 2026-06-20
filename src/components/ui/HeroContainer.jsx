export default function HeroContainer({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        w-full

        px-5
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16

        ${className}
      `}
    >
      {children}
    </div>
  );
}