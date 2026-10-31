# Projedudei 💼 🚀

**Projedudei** to interaktywna aplikacja edukacyjno-certyfikacyjna stworzona z myślą o współczesnych **Project Managerach**, **Scrum Masterach**, **Product Ownerach** oraz **AI Product Builderach**. Aplikacja uczy, jak bezpośrednio rozmawiać z klientami biznesowymi, badać ich potrzeby i tworzyć pełnowymiarowe aplikacje na zamówienie z wykorzystaniem modeli sztucznej inteligencji (Vibe Coding, AI Agents, Cloudflare, Supabase) – całkowicie **omijając powolne, kosztowne zespoły programistyczne kodujące w starym stylu**.

Aplikacja jest częścią rodziny serwisów edukacyjnych (`eledudei`, `langedudei`, `guitaredudei`, `drogedudei`) i została wdrożona na platformie **Cloudflare Pages**.

Adres wdrożenia: **[https://projedudei.pages.dev](https://projedudei.pages.dev)**

---

## 👔 Maskotka i Mentor: Kurak Project Manager
- **Wektorowy Kurak PM**: Żółty Kurak z biznesowym krawatem, kołnierzykiem i **elegancką aktówką (briefcase)** w ręku.
- **Wbudowany Lektor (TTS - Web Speech API pl-PL)**: Odczytuje na głos powitania, pytania, warianty odpowiedzi, wyjaśnienia błędów, scenariusze spotkań z klientem i sekrety biznesowe.
- **Animowany dziób i mruganie**: Dynamiczna reakcja na odtwarzaną mowę.
- **Dymek dialogowy**: Narzędzia powtarzania głosu, wyciszania, regulacji tempa mowy (0.75x - 1.4x) oraz losowe porady PM-a.

---

## 🎯 Główne Moduły Aplikacji

### 1. Ścieżki Pytań Certyfikacyjnych & Quizy
- **Scrum Master w erze AI (PSM I / II)**: Definition of Done przy vibe codingu, sprinty 1-osobowe z agentami, eliminacja sztucznego szacowania story pointów, rola SM w usuwaniu barier promptowania.
- **Product Owner & Badanie Potrzeb (PSPO)**: Warsztaty discovery, przekładanie wizji biznesowej na PRD dla LLM, zwalczanie Scope Creep.
- **Kontakt z Klientem, Wyceny i Zastępowanie Software House'ów**: Value-Based Pricing (sprzedaż wartości i wdrożenia w 10 dni zamiast roboczogodzin koderów), prawa autorskie, umowy powierzenia danych (DPA) i bezpieczeństwo.
- **Vibe Coding, Architektura & Jakość AI**: Architektura Next.js + Cloudflare Pages + Supabase, ochrona przed Prompt Injection, sanityzacja wejścia.

### 2. Symulator Spotkań z Klientem (Client Simulator)
- Interaktywne studium przypadku z trudnymi klientami (Janusz z hurtowni instalacyjnych, Marta z kliniki medycyny estetycznej, Tomasz z kancelarii prawnej).
- Dynamiczne wskaźniki KPI: **Zadowolenie Klienta %**, **Marża Projektu %**, **Prędkość Dowozu %**.
- Autoodczyt wypowiedzi klienta i werdyktów Kuraka.

### 3. Oficjalny Egzamin Próbny (Mock Certification Exam)
- 12 losowych pytań z zegarem (15 minut).
- Próg zdawalności: **80%**.
- Generowanie imiennego **Certyfikatu "Certified AI Project Master & Scrum Builder"** z podpisem Kuraka PM-a i konfetti.

### 4. Playbook & Szablony Promptów
- Gotowe do skopiowania szablony promptów do generowania PRD, reguł biznesowych i architektury systemowej.

---

## 🛠️ Stack Technologiczny
- **Next.js 15** (App Router, Static Export `output: "export"`)
- **React 19 & TypeScript 5**
- **Tailwind CSS v4**
- **Lucide React** (nowoczesne ikony)
- **Canvas Confetti** (efekty certyfikatu)
- **Web Speech API (`pl-PL`)** (synteza mowy)
- **Cloudflare Pages & Wrangler CLI** (globalny hosting Edge)

---

## 🚀 Uruchomienie lokalne i deploy

```bash
# Instalacja zależności
npm install

# Uruchomienie deweloperskie
npm run dev

# Kompilacja i eksport statyczny
npm run build

# Deploy na Cloudflare Pages
npm run deploy
```
