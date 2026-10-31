import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import KurakAvatar from "@/components/KurakAvatar";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
      <KurakAvatar size={120} />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-100">404 - Nie znaleziono strony</h1>
        <p className="text-sm text-slate-400">
          Kurak sprawdził w swojej aktówce, ale ten adres nie istnieje w harmonogramie sprintu!
        </p>
      </div>

      <Link
        href="/"
        className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 text-sm font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Wróć do strony głównej</span>
      </Link>
    </main>
  );
}

