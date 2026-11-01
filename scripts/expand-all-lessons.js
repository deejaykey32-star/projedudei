const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.json');
const data = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'));

// Wzbogacamy lekcje o kompletne, 3-4 krokowe moduły wiedzy i praktyki
const expandedSteps = {
  3: [
    {
      title: "Czym jest Spec-Driven Development i dlaczego deklasuje tradycyjny kod",
      explanation: [
        "W tradycyjnym programowaniu programista spędza 80% czasu na pisaniu składni i debugowaniu literówek. W podejściu Spec-Driven Development (SDD) PM poświęca ten czas na stworzenie bezbłędnej, wielowymiarowej specyfikacji PRD (Product Requirements Document).",
        "Dla modelu sztucznej inteligencji jakość wygenerowanego kodu zależy w 100% od jednoznaczności specyfikacji: modelu encji, reguł biznesowych, stanów brzegowych i kontraktów API.",
        "Jeśli Twoja specyfikacja precyzyjnie opisuje zachowanie w 10 scenariuszach skrajnych, AI generuje czysty, w pełni otypowany kod w TypeScript w kilka sekund bez halucynacji."
      ],
      practicalRule: "Zasada Zero Niejasności: Jeśli człowiek czytający Twój PRD musi zadać pytanie 'a co jeśli użytkownik kliknie dwa razy?', to model AI w tym miejscu wymyśli losowe rozwiązanie. Wszystkie stany brzegowe muszą być zdefiniowane przed promptowaniem."
    },
    {
      title: "Anatomia Żelaznego Dokumentu Wymagań Produktowych (PRD) dla AI",
      explanation: [
        "Profesjonalny dokument PRD dla agentów AI składa się z 5 niezmiennych sekcji: 1. Cel biznesowy i Persony, 2. Diagram przepływu użytkownika (Happy Path + Error Paths), 3. Schemat bazy danych (tabele, relacje, klucze obce, indeksy), 4. Kontrakt API (REST lub Server Actions) z typami request/response, 5. Warunki brzegowe i wymagania niefunkcjonalne (czas odpowiedzi, RLS, limity).",
        "Używamy formatu Markdown z blokami kodu Mermaid i tabelami schematów bazodanowych. Taki format jest natywnym językiem rozumowania dla modeli LLM."
      ],
      aiPromptExample: "Działasz jako Lead Systems Architect. Na podstawie poniższego briefu utwórz kompletny dokument PRD w Markdownie: [Wklej notatkę z wywiadu z klientem]. Uwzględnij schemat bazy PostgreSQL ze schematem typów TypeScript, 5 kluczowych endpointów API oraz listę 8 negatywnych przypadków testowych (edge cases)."
    },
    {
      title: "Kaskadowe Promptowanie Architektoniczne w Cursorze i Claude",
      explanation: [
        "Nigdy nie wrzucaj całego 50-stronicowego PRD na raz z poleceniem 'zbuduj mi aplikację'. Modele tracą wtedy uwagę (context drift) i pomijają detale.",
        "Stosuj orkiestrację kaskadową: Krok 1 - Wygenerowanie schematu bazy danych i migracji SQL. Krok 2 - Utworzenie typów TypeScript i walidacji Zod. Krok 3 - Implementacja logiki biznesowej i zapytań bazodanowych. Krok 4 - Komponenty interfejsu użytkownika w React i Tailwind. Krok 5 - Testy E2E.",
        "W ten sposób kontrolujesz każdy etap i natychmiast wychwytujesz ewentualne rozbieżności z wizją klienta."
      ],
      practicalRule: "Złota Zasada Kaskady: Każdy krok musi kompilować się bez ostrzeżeń lintera i TypeScriptu przed przejściem do kolejnego komponentu."
    }
  ],
  4: [
    {
      title: "Wycena Wartością (Value-Based Pricing) vs Płatność za Godziny",
      explanation: [
        "Tradycyjny programista sprzedaje swój czas w stawce godzinowej (np. 150 PLN/h). Gdy używa AI i zamiast 100 godzin pracuje 10 godzin, jego wynagrodzenie spadłoby dziesięciokrotnie! To pułapka archaicznego myślenia.",
        "Jako nowoczesny AI Project Manager wyceniasz PROJEKT WARTOŚCIĄ DLA BIZNESU KLIENTA. Jeśli Twoja aplikacja automatyzująca obieg dokumentów zaoszczędzi firmie klienta 200 000 PLN rocznie na etatach, rynkowa cena wdrożenia to 50 000 - 80 000 PLN.",
        "Klienta nie interesuje, czy pisałeś kod palcami przez 4 miesiące, czy orkiestrowałeś agentów AI przez 5 dni. Klient płaci za osiągnięty rezultat biznesowy."
      ],
      practicalRule: "Reguła Wyceny: Wyceniaj efekt, a nie wysiłek. Twoja marża to premia za mistrzowskie posługiwanie się technologią przyszłości."
    },
    {
      title: "Trójpunktowa Estymacja PERT w Rozkładzie Beta dla Projektów AI",
      explanation: [
        "Nawet przy użyciu AI w projekcie pojawiają się czynniki niepewności (np. opóźnienia klienta w dostarczeniu API bankowego, decyzje compliance). Stosujemy oficjalną metodę PMI - PERT (Program Evaluation and Review Technique).",
        "Dla każdego pakietu roboczego szacujesz trzy czasy: O (Optimistic - optymistyczny), M (Most Likely - najbardziej prawdopodobny) oraz P (Pessimistic - pesymistyczny).",
        "Wzór na czas oczekiwany: Te = (O + 4M + P) / 6. Wzór na odchylenie standardowe: σ = (P - O) / 6. Dzięki temu klientowi podajesz termin z 95% pewnością statystyczną (Te ± 2σ), co buduje autorytet bezwzględnego profesjonalisty."
      ],
      aiPromptExample: "Przeanalizuj poniższą listę 8 pakietów roboczych projektu CRM. Przypisz każdemu estymaty O, M, P w dniach roboczych dla 1 osoby orkiestrującej AI. Oblicz oczekiwany czas Te oraz wskaż zadania leżące na ścieżce krytycznej o zerowym zapasie czasu."
    },
    {
      title: "Konstrukcja Kosztorysu z 80-90% Marżą Operacyjną",
      explanation: [
        "Struktura kosztów projektu AI o budżecie 40 000 PLN: 1. Subskrypcje narzędzi AI (Claude API, OpenAI, Cursor): 400 - 800 PLN, 2. Infrastruktura Cloudflare Pages & Supabase Pro: 120 PLN, 3. Gotowe szablony i komponenty UI: 300 PLN, 4. Rezerwa na nieprzewidziane ryzyka (Contingency Reserve 15%): 6 000 PLN. Zysk netto PM-a: ponad 32 000 PLN.",
        "Kluczem jest transparentne przedstawienie klientowi etapów płatności w formule kamieni milowych (Milestone Billing): 40% zaliczka przy podpisaniu Karty Zakresu, 40% po prezentacji wersji MVP, 20% po pomyślnych testach UAT."
      ],
      practicalRule: "Żelazna Zasada Finansowa: Nigdy nie rozpoczynaj generowania architektury przed zaksięgowaniem zaliczki na koncie."
    }
  ],
  5: [
    {
      title: "Struktura Zwinnego Sprintu AI: 7 Dni Zamiast 2 Tygodni",
      explanation: [
        "W klasycznym Scrumie sprint trwa 2 lub 3 tygodnie z powodu wolnego tempa ręcznego pisania kodu. Przy orkiestracji AI optymalnym cyklem jest Mikro-Sprint 7-dniowy.",
        "Dzień 1: Sprint Planning i zamiana wymagań na prompty architektoniczne. Dzień 2-4: Generowanie i walidacja funkcjonalności (Frontend + Backend + Baza). Dzień 5: Integracja i automatyczne testy regresyjne. Dzień 6: Sprint Review z klientem na działającym środowisku testowym (Preview Deployment). Dzień 7: Retrospektywa i plan kolejnej iteracji.",
        "Taki rytm utrzymuje klienta w stanie ciągłej ekscytacji postępami i uniemożliwia powstanie nieporozumień."
      ],
      practicalRule: "Zasada 'Pokaż, Nie Opowiadaj': Na każdym spotkaniu przeglądowym (Sprint Review) pokazujesz klientowi klikalną aplikację na telefonie, a nie prezentację w PowerPoincie."
    },
    {
      title: "Klasyfikacja MoSCoW i Odrzucanie Zachcianek Klienta",
      explanation: [
        "Klient w trakcie sprintu zawsze wpada na 'genialne' pomysły: 'a dodajmy jeszcze logowanie przez Apple i algorytm rekomendacji AI!'. Bez dyscypliny projekt utonie w chaosie.",
        "Stosujesz klasyfikację MoSCoW: Must Have (krytyczne dla działania MVP - 60% czasu), Should Have (ważne, ale aplikacja zadziała bez nich - 20%), Could Have (miłe dodatki, jeśli zostanie czas - 20%), Won't Have this time (odrzucone do wersji 2.0).",
        "Wszystkie nowe pomysły klienta trafiają natychmiast do kategorii Won't Have do rozliczenia w osobnym zleceniu."
      ],
      aiPromptExample: "Działasz jako doświadczony Scrum Master. Przeanalizuj poniższe 15 wymagań klienta dla portalu B2B i podziel je zgodnie z metodą MoSCoW dla 7-dniowego sprintu MVP. Wskaż uzasadnienie biznesowe dla każdego odrzucenia do kategorii Won't Have."
    },
    {
      title: "Definition of Done (DoD) w Świecie Kodu Generowanego przez AI",
      explanation: [
        "Kod wygenerowany przez sztuczną inteligencję potrafi wyglądać imponująco na pierwszy rzut oka, ale zawierać subtelne błędy logiczne lub luki bezpieczeństwa.",
        "Twoje Definition of Done musi zawierać 6 twardych kryteriów: 1. Zero błędów kompilacji TypeScript (`npm run build` ze statusem 0), 2. Wszystkie zapytania bazodanowe chronione przez Row Level Security (RLS), 3. Responsywność sprawdzona na iPhone i Androidzie, 4. Poprawna walidacja formularzy z komunikatami błędów w języku polskim, 5. Czas ładowania poniżej 1.5s na sieci 4G, 6. Kod zatwierdzony i zmergowany do gałęzi main na GitHubie."
      ],
      practicalRule: "Zasada Bezpieczeństwa: Zadanie nie jest skończone, dopóki nie przejdzie testu 'głupiego użytkownika' – wpisania losowych znaków we wszystkie pola formularza."
    }
  ],
  6: [
    {
      title: "Architektura Serverless & Edge: Zero Serwerów do Zarządzania",
      explanation: [
        "Tradycyjny PM musiał negocjować z klientem zakup serwerów VPS, konfigurować certyfikaty SSL, pamiętać o backupach i płacić za hosting setki złotych miesięcznie.",
        "Architektura Edge Computing zmienia reguły gry: Twoja aplikacja w Next.js jest wdrażana na sieć Cloudflare Pages, która replikuje pliki w ponad 300 miastach na całym świecie. Żadne serwery nie wymagają restartu, a skalowalność od 10 do 100 000 użytkowników następuje automatycznie bez Twojego udziału.",
        "Koszty stałe dla klienta wynoszą 0 PLN na darmowym planie Cloudflare lub kilkanaście dolarów przy dużym ruchu."
      ],
      practicalRule: "Zasada Edge: Jeśli aplikacja może być wygenerowana jako statyczny HTML z dynamicznymi zapytaniami API do Supabase, wybieraj to rozwiązanie zawsze. Jest najszybsze, najtańsze i bezawaryjne."
    },
    {
      title: "Relacyjny Model Danych na Supabase z Bezpieczeństwem RLS",
      explanation: [
        "Supabase dostarcza pełnowymiarową bazę danych PostgreSQL wraz z automatycznym API, uwierzytelnianiem użytkowników i storage'em na pliki.",
        "Najważniejszy mechanizm, który musisz opanować jako PM, to Row Level Security (RLS). Zamiast pisać setki linijek kodu sprawdzającego uprawnienia w backendzie, definiujesz reguły bezpośrednio w bazie danych: 'Użytkownik X może odczytać tylko te zamówienia, gdzie user_id = auth.uid()'.",
        "Nawet jeśli frontend miałby lukę, baza danych fizycznie zablokuje nieautoryzowany wyciek danych konkurencji."
      ],
      aiPromptExample: "Napisz skrypt migracji SQL dla Supabase PostgreSQL dla systemu rezerwacji sal konferencyjnych. Utwórz tabele: users, rooms, bookings. Dodaj indeksy na daty oraz kompletne polityki RLS uniemożliwiające podwójną rezerwację tej samej sali w tym samym czasie oraz edycję rezerwacji przez osoby trzecie."
    },
    {
      title: "Automatyczny Pipeline CI/CD na GitHub Actions i Wrangler",
      explanation: [
        "Nie wdrażaj plików ręcznie przez FTP jak w latach 90. Skonfiguruj repozytorium GitHub połączone z Cloudflare Pages.",
        "Każdy commit w gałęzi testowej tworzy osobny, unikalny adres URL (np. `abc123.projedudei.pages.dev`), który możesz wysłać klientowi do akceptacji przed publikacją na domenie głównej.",
        "Gdy klient zatwierdzi zmiany, scalasz pull request do gałęzi `main`, a Cloudflare w 30 sekund publikuje aktualizację dla całego świata."
      ],
      practicalRule: "Złota Zasada CI/CD: Nigdy nie dotykaj plików na produkcji ręcznie. Wszystko przechodzi przez repozytorium kodu."
    }
  ],
  7: [
    {
      title: "Generatywny Pipeline Graficzny AI dla Interfejsów i Mediów",
      explanation: [
        "Czekanie 3 tygodni na ilustracje od grafika to relikt przeszłości. Jako AI PM tworzysz spójne systemy wizualne za pomocą narzędzi Midjourney v6, Stable Diffusion XL, Flux oraz Recraft.",
        "Kluczem jest zachowanie spójności stylistycznej (Style Consistency): definiujesz stały seed, paletę kolorów heksadecymalnych zgodną z brandingiem klienta oraz styl renderu (np. 'Clean isometric 3D vector, tech corporate, blue and amber accents, neutral background').",
        "Otrzymujesz gotowe assety w 15 minut, które natychmiast optymalizujesz do formatu WebP/AVIF o wadze poniżej 50 KB."
      ],
      practicalRule: "Reguła Spójności Wizualnej: Zdefiniuj 1 wzorcowy prompt stylu i używaj go jako prefiksu do wszystkich generowanych ilustracji w projekcie."
    },
    {
      title: "Animacje, 3D i Wideo w Przeglądarce bez Spadku Wydajności",
      explanation: [
        "Nowoczesny klient oczekuje efektu 'WOW'. Zamiast ciężkich plików MP4 ładujących się 10 sekund, stosujemy ultralekkie wektorowe animacje Lottie, interaktywne grafiki SVG oraz modele 3D w Spline/Three.js.",
        "Elementy te ważą ułamek megabajta, renderują się sprzętowo na karcie graficznej telefonu i reagują na ruch kursora lub scrollowanie strony.",
        "Taki poziom wykonania pozwala pozycjonować Twoją ofertę w segmencie premium."
      ],
      aiPromptExample: "Jesteś ekspertem UI/UX i grafiki wektorowej SVG. Przygotuj czysty, responsywny kod komponentu React renderującego animowaną ikonę aktówki menedżerskiej z subtelnym pulsującym efektem świetlnym w kolorach niebieskim (#2563EB) i bursztynowym (#F59F00)."
    },
    {
      title: "Prawa Autorskie, Licencje Komercyjne i Bezpieczeństwo Prawne AI",
      explanation: [
        "Klient biznesowy boi się pozwów o naruszenie praw autorskich przez modele AI. Twoim obowiązkiem jako PM-a jest zapewnienie mu 100% spokoju prawnego.",
        "Korzystaj wyłącznie z płatnych planów komercyjnych generatorów AI (np. Midjourney Pro, Adobe Firefly z gwarancją indemnifikacji prawnej), które gwarantują pełne prawa do komercyjnego wykorzystania dzieła.",
        "W Karcie Zakresu i umowie z klientem umieszczasz zapis: 'Wykonawca oświadcza, że dostarczone assety graficzne posiadają komercyjną licencję na nieograniczone wykorzystanie i nie naruszają praw osób trzecich'."
      ],
      practicalRule: "Tarcza Prawna: Nigdy nie używaj darmowych generatorów bez weryfikacji licencji komercyjnej w regulaminie dostawcy."
    }
  ],
  8: [
    {
      title: "Architektura Nowoczesnego E-Commerce: Headless i Jamstack",
      explanation: [
        "Tradycyjne sklepy na WordPress/WooCommerce są wolne, podatne na włamania i wymagają ciągłych aktualizacji wtyczek. Gdy ruch rośnie w Black Friday, serwer pada.",
        "Standard Projedudei to Headless Commerce: szybki frontend Next.js na Cloudflare Pages połączony z elastycznym panelem zamówień i systemem płatności Stripe, Przelewy24 lub BLIK.",
        "Strona ładuje się w mgnieniu oka, konwersja w koszyku rośnie o 30-50%, a sklep wytrzymuje dowolny skok popularności bez dodatkowych opłat za hosting."
      ],
      practicalRule: "Zasada 1 Sekundy: Każde 100 ms opóźnienia w ładowaniu koszyka sklepu obniża konwersję o 7%. Architektura Edge na Cloudflare to gwarancja najwyższej sprzedaży dla Twojego klienta."
    },
    {
      title: "Błyskawiczne Lejki Sprzedażowe (Funnel Hacking) z AI",
      explanation: [
        "Klient nie potrzebuje samego sklepu – klient potrzebuje sprzedaży. Oprócz katalogu produktów budujesz dla niego zoptymalizowany lejek (Landing Page -> Oferta One-Time -> Koszyk One-Click -> Upsell/Cross-sell po zakupie).",
        "Wykorzystujesz modele językowe do wygenerowania perswazyjnych tekstów marketingowych opartych na sprawdzonych formułach copywritingowych: PAS (Problem - Agitation - Solution) oraz AIDA (Attention - Interest - Desire - Action).",
        "Dzięki temu oddajesz klientowi nie tylko kod, ale kompletną maszynę generującą przychód."
      ],
      aiPromptExample: "Działasz jako elitarny copywriter e-commerce. Dla kursu zarządzania projektami z AI stwórz treść strony lądowania (landing page) w formule PAS. Napisz chwytliwy nagłówek H1, 3 punkty bólu tradycyjnego PM-a, prezentację rozwiązania oraz wezwanie do działania (CTA) z gwarancją zwrotu pieniędzy w 14 dni."
    },
    {
      title: "Automatyzacja E-Marketingu i E-maili Transakcyjnych",
      explanation: [
        "Podłączasz nowoczesne API do wysyłki e-maili transakcyjnych (Resend lub SendGrid) zintegrowane z szablonami React Email.",
        "Klient po zakupie automatycznie otrzymuje estetyczne potwierdzenie zamówienia, fakturę PDF i dostęp do panelu. Dodatkowo konfigurujesz sekwencję powitalną ratującą porzucone koszyki.",
        "Taka automatyzacja działa 24/7 bez ingerencji człowieka, a klient widzi, że dostarczył mu to jeden sprawny PM z asystą AI."
      ],
      practicalRule: "Zasada Automatu: Wszystko, co powtarza się częściej niż dwa razy w obsłudze klienta, musi zostać zautomatyzowane za pomocą webhooków."
    }
  ],
  9: [
    {
      title: "Psychologia Klienta: Dlaczego Pojawia się Scope Creep",
      explanation: [
        "Scope Creep (niekontrolowany rozrost zakresu) rzadko wynika ze złej woli klienta. Wynika z lęku: klient w trakcie projektu uświadamia sobie, że o czymś zapomniał, albo widzi, jak szybko i pięknie tworzysz aplikację z AI, więc zakłada: 'skoro to dla Ciebie takie proste, to dorzućmy jeszcze to i tamto!'.",
        "Jeśli zgodzisz się na jedną 'drobną przysługę' za darmo, ustanawiasz niebezpieczny precedens. Klient przestanie szanować granice projektu, a Twój zysk zacznie topnieć.",
        "Profesjonalny PM nigdy nie mówi agresywnego 'Nie!', ani uległego 'Tak'. Mówi: 'Świetny pomysł! Z przyjemnością to zrealizujemy – zobaczmy, jak wpłynie to na budżet i termin'."
      ],
      practicalRule: "Żelazna Odpowiedź PM-a: 'Tak, możemy to zrobić! Przygotuję formalny wniosek o zmianę (Change Request) z wyceną dodatkową i nowym terminem wdrożenia'."
    },
    {
      title: "Procedura Change Request w Praktyce: Od Prośby do Dopłaty",
      explanation: [
        "Kiedy klient prosi o nową funkcjonalność spoza podpisanej Karty Zakresu, uruchamiasz 3-krokowy proces: 1. Zapisujesz propozycję w rejestrze zmian (Change Log). 2. Szacujesz wpływ na koszty i harmonogram za pomocą promptu AI w 10 minut. 3. Wysyłasz klientowi 1-stronicowy formularz z dwiema opcjami: A) Wdrażamy to w obecnym sprincie za dopłatą X PLN i przesunięciem terminu o Y dni, B) Zostawiamy to na wersję 2.0 po odbiorze obecnego projektu.",
        "W 80% przypadków klient decyduje się na odłożenie pomysłu na później, a w 20% z uśmiechem dopłaca do faktury."
      ],
      aiPromptExample: "Klient przesłał wiadomość: 'Potrzebujemy dodać wielojęzyczność (angielski i niemiecki) oraz eksport do Excela przed piątkowym uruchomieniem'. Działasz jako asertywny Senior PM. Napisz profesjonalną, uprzejmą, ale stanowczą odpowiedź e-mail. Wyjaśnij wpływ na termin premiery, przedstaw szacunek kosztów (Change Request) oraz zaproponuj dodanie tych funkcji w etapie Phase 2 po pomyślnym starcie MVP."
    },
    {
      title: "Zarządzanie Trudnymi Rozmowami i Eskalacjami",
      explanation: [
        "Co zrobić, gdy klient krzyczy, grozi prawnikiem lub odmawia zapłaty transzy? Podstawowa reguła: oddziel emocje od faktów.",
        "Zawsze prowadź komunikację na piśmie lub podsumowuj każdą rozmowę telefoniczną krótką notatką e-mail (MoM - Minutes of Meeting): 'Dziękuję za rozmowę. Zgodnie z ustaleniami do środy dostarczasz nam logotypy w wektorach, a my w piątek pokazujemy wersję testową'.",
        "W przypadku sporu wyciągasz podpisaną Kartę Zakresu i historię ustaleń. Prawda zapisana w dokumentach rozbraja każdy konflikt w zarodku."
      ],
      practicalRule: "Zasada Pisemnego Śladu: Czego nie ma w e-mailu lub Karcie Zakresu, to w zarządzaniu projektami nie istnieje."
    }
  ],
  10: [
    {
      title: "Ustrukturyzowane Testy Odbiorcze (UAT) z Listą Kontrolną",
      explanation: [
        "Najczęstszy błąd na finiszu projektu: PM wysyła link do aplikacji i pisze: 'Proszę sprawdzić, czy wszystko działa'. Klient klika bez planu przez miesiąc i zawsze znajdzie coś, do czego można się przyczepić.",
        "Prawidłowa procedura: Wysyłasz Listę Kontrolną Testów Odbiorczych (UAT Checklist): 'Oto 12 scenariuszy testowych odpowiadających podpisanej Karcie Zakresu. Proszę o ich przetestowanie do piątku do godz. 16:00. Zgodnie z umową, brak uwag krytycznych w tym terminie oznacza formalny odbiór dzieła'.",
        "Testy UAT sprawdzają zgodność z umową, a nie nowe widzimisię klienta."
      ],
      practicalRule: "Zasada Zamkniętego UAT: Testy odbiorcze trwają maksymalnie 3 do 5 dni roboczych i dotyczą wyłącznie kryteriów akceptacji określonych w Karcie Zakresu."
    },
    {
      title: "Bezpieczny Deployment Produkcyjny i Przekazanie Dostępów",
      explanation: [
        "Przeniesienie na domenę produkcyjną klienta odbywa się po zakończeniu testów UAT: podpięcie domeny w panelu Cloudflare, weryfikacja rekordów DNS (CNAME, SSL), konfiguracja kluczy produkcyjnych bramek płatności i bazy danych.",
        "Kluczowa zasada bezpieczeństwa: Przekazanie kodów źródłowych w repozytorium GitHub oraz praw administracyjnych do kont następuje ZAWSZE PO ZAKSIĘGOWANIU 100% PŁATNOŚCI na Twoim rachunku bankowym.",
        "Wystawiasz fakturę końcową, a po przelewie przekazujesz oficjalny 'Protokół Zdawczo-Odbiorczy' oraz paczkę wdrożeniową."
      ],
      aiPromptExample: "Przygotuj profesjonalny wzór Protokołu Zdawczo-Odbiorczego Dzieła Cyfrowego w formacie Markdown. Uwzględnij dane stron, tytuł projektu, potwierdzenie przeprowadzenia testów UAT bez zastrzeżeń, oświadczenie o uregulowaniu płatności oraz klauzulę o przeniesieniu autorskich praw majątkowych z dniem zaksięgowania środków."
    },
    {
      title: "Umowa Opieki Technicznej i Rozwoju (SLA): Dochód Pasywny PM-a",
      explanation: [
        "Zakończenie projektu to dopiero początek prawdziwego biznesu! Zamiast żegnać się z klientem, natychmiast oferujesz mu Umowę Wsparcia i Utrzymania (SLA - Service Level Agreement).",
        "Oferujesz 3 pakiety abonamentowe: 1. Basic (monitoring, backupy, drobne poprawki do 2h/mc): 1 500 PLN/mc, 2. Pro (gwarantowany czas reakcji 4h, optymalizacje, rozwój do 5h/mc): 3 500 PLN/mc, 3. Enterprise: 6 000+ PLN/mc.",
        "Przy 10 stałych klientach na nowoczesnym stacku Cloudflare/Supabase (który prawie nigdy się nie psuje) generujesz 20 000 - 35 000 PLN stabilnego, powtarzalnego dochodu miesięcznie!"
      ],
      practicalRule: "Zasada Złotego Abonamentu: Najbardziej dochodowy AI Project Manager to ten, który łączy marże z nowych wdrożeń z comiesięcznymi abonamentami SLA zadowolonych klientów."
    }
  ]
};

// Zaktualizuj kroki w lekcjach 3-10
data.lessons.forEach(lesson => {
  if (expandedSteps[lesson.number]) {
    lesson.steps = expandedSteps[lesson.number];
  }
});

fs.writeFileSync(lessonsPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Pomyślnie rozbudowano kroki w lekcjach 3-10 w data/lessons.json!');

