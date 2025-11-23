import { Button, Container, ErrorState } from "@/components/ui";

export default function DetailPageError({ onRetry, onBack }) {
  return (
    <Container className="max-w-5xl py-12">
      <ErrorState
        message="상세 정보를 불러오는 중 오류가 발생했습니다."
        onRetry={onRetry}
      >
        <div className="mt-4">
          <Button onClick={onBack}>이전 페이지로</Button>
        </div>
      </ErrorState>
    </Container>
  );
}

