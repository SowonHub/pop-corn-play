import { Container, Section } from "@/components/common";
import { Top10HeroBanner } from "@/features/home/components";
import { MovieGrid } from "@/features/movie/components";

export default function HomePage() {
  return (
    <Container>
      <Section title="Top 10" titleDescription="오늘 많이 본 영화">
        <Top10HeroBanner />
      </Section>

      <Section title="Popular" titleDescription="지금 뜨는 작품">
        <MovieGrid />
      </Section>
    </Container>
  );
}
