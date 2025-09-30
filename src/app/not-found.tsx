import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">404 - Nicht gefunden</h1>
      <p className="mt-4">Entschuldigung, die von Ihnen gesuchte Seite existiert nicht.</p>

      <div className="mt-8">
        <Button asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </main>
  );
}
