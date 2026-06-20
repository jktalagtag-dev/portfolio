import Container from "./Container";

export default function HeroContainer({
  children,
  className = "",
}) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}