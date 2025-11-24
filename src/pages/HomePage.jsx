import { PopularMovieGrid, TopBanner } from "@/components/movies";
import { Container, Section, SectionHeader } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-12">
      <Section className="w-full">
        <TopBanner />
      </Section>
      <Container className="max-w-6xl px-8">
        <Section
          header={
            <SectionHeader title="Popular" description="지금 뜨는 작품" />
          }
        >
          <PopularMovieGrid />
        </Section>
      </Container>
    </div>
  );
}
