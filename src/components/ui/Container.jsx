export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        max-w-[1900px]
        mx-auto

        px-5
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-16
        2xl:px-12

        ${className}
      `}
    >
      {children}
    </div>
  );
}