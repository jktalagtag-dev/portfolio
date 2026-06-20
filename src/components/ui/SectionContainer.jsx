import Container from "./Container";

export default function SectionContainer({
  children,
  className = "",
}) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}