import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Award,
  MessageSquareCode,
  Download,
  HelpCircle,
  Home,
} from "lucide-react";
import KurakAvatar from "@/components/KurakAvatar";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center max-w-3xl mx-auto px-4 py-12">
      <KurakAvatar size={130} />
      
      <div className="space-y-2">
        <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
          Status 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Nie znaleziono tej strony
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Niebieski Kurak sprawdził swoją aktówkę i plan sprintu – ten adres nie istnieje lub zmienił lokalizację. Skorzystaj z poniższych sprawdzonych ścieżek:
        </p>
      </div>

      {/* Szybka mapa witryny na stronie 404 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-left">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <Home className="h-4 w-4 text-amber-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">Strona Główna</div>
            <div className="text-[10px] text-slate-400 truncate">Menu i moduły</div>
          </div>
        </Link>

        <Link
          href="/lekcje/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <BookOpen className="h-4 w-4 text-sky-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">10 Lekcji AI PM</div>
            <div className="text-[10px] text-slate-400 truncate">Krok po kroku</div>
          </div>
        </Link>

        <Link
          href="/kurs/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <Briefcase className="h-4 w-4 text-emerald-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">5 Filarów Kursu</div>
            <div className="text-[10px] text-slate-400 truncate">15 certyfikacji</div>
          </div>
        </Link>

        <Link
          href="/quiz/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <HelpCircle className="h-4 w-4 text-purple-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">Centrum Quizów</div>
            <div className="text-[10px] text-slate-400 truncate">Testy tematyczne</div>
          </div>
        </Link>

        <Link
          href="/simulator/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <MessageSquareCode className="h-4 w-4 text-amber-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">Symulator Klienta</div>
            <div className="text-[10px] text-slate-400 truncate">Rozmowy z klientem</div>
          </div>
        </Link>

        <Link
          href="/pobierz/"
          className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 p-3 hover:border-amber-400 transition"
        >
          <Download className="h-4 w-4 text-rose-400 shrink-0" />
          <div className="min-w-0">
            <div className="text-xs font-bold text-white">Pobierz Aplikację</div>
            <div className="text-[10px] text-slate-400 truncate">APK / iOS / PWA</div>
          </div>
        </Link>
      </div>

      <Link
        href="/"
        className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-400 transition active:scale-95 shadow-lg shadow-amber-500/20"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Wróć do strony głównej</span>
      </Link>
    </main>
  );
}
