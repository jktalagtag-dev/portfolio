export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        max-w-[1900px]
        mx-auto
        px-6
        md:px-10
        xl:px-16
        2xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
}