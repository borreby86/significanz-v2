import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container size="default">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl text-gray-200">
            404
          </h1>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-black">
            Page not found
          </h2>
          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="primary">Back to home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
