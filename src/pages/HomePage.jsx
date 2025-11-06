import Container from "@/components/common/Container.jsx";
import Section from "@/components/common/Section.jsx";
import MovieGrid from "@/features/movie/components/MovieGrid.jsx";

export default function HomePage() {
  return (
    <Container>
      <Section title="Popular Movies">
        <MovieGrid />
      </Section>
    </Container>
  );
}
