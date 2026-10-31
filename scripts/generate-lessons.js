const fs = require('fs');
const path = require('path');

const lessonsData = {
  overview: {
    title: "Akademia Krok po Kroku: Zarządzanie Projektami i Klientem w Erze AI",
    subtitle: "Kompletny przewodnik od pierwszej rozmowy telefonicznej z klientem, przez zbieranie wymagań, po wdrożenie produkcyjne bez zespołów koderów",
    totalDurationMinutes: 240,
    lessonsCount: 10
  },
  lessons: [
    {
      id: "lekcja-1-era-ai-pm",
      number: 1,
      title: "Wprowadzenie do Nowej Ery: Project Manager 2.0 i Orkiestracja AI",
      shortDesc: "Jak zmieniła się rola PM-a: od pilnowania tabel w Excelu do samodzielnego architekta cyfrowego z asystą modeli generatywnych.",
      durationMinutes: 20,
      badge: "Fundamenty",
      category: "Wprowadzenie",
      iconName: "Sparkles",
      objective: "Zrozumienie paradygmatu One-Person Unicorn i odejścia od tradycyjnych, ociężałych struktur software house'ów na rzecz zwinnej orkiestracji AI.",
      steps: [
        {
          title: "Koniec archaicznych zespołów 10 programistów",
          explanation: [
            "W tradycyjnym modelu software house'u realizacja prostej aplikacji dla klienta angażowała: PM-a, Product Ownera, architekta, 2 programistów backend, 2 programistów frontend, designera UI/UX, testera QA i DevOpsa. Generowało to gigantyczny narzut komunikacyjny, 6-miesięczny czas oczekiwania i koszt rzędu 150 000 - 300 000 PLN.",
            "W erze modeli generatywnych (Claude 3.5 Sonnet, Cursor, Bolt, GPT-4o) nowoczesny Project Manager przejmuje rolę Głównego Architekta i Dyrektora Produktu. Za pomocą precyzyjnych specyfikacji i asystentów AI realizuje ten sam zakres w 5 do 14 dni, zachowując 80-90% marży dla siebie.",
            "Twoją najważniejszą kompetencją przestaje być pisanie kodu, a staje się krystaliczne myślenie logiczne, psychologia klienta i umiejętność zamiany chaosu w głowie zleceniodawcy w precyzyjny model danych."
          ],
          practicalRule: "Reguła Kuraka: Klient nie płaci za liczbę linijek kodu ani za pot wylany przez programistów. Klient płaci za działające rozwiązanie swojego problemu dostarczone w przewidywalnym czasie i budżecie."
        },
        {
          title: "Nowoczesny Stack Technologiczny PM-a (Cloudflare + Next.js + Supabase)",
          explanation: [
            "Zapomnij o drogich, skomplikowanych klastrach Kubernetes i serwerach wymagających dedykowanego administratora.",
            "Standardem w Projedudei jest architektura Serverless & Edge: Next.js (App Router) ze statycznym eksportem na darmową, globalną sieć Cloudflare Pages, baza relacyjna PostgreSQL na Supabase lub Cloudflare D1/KV oraz systemy płatności Stripe i BLIK.",
            "Taki stack gwarantuje zero kosztów stałych dla Ciebie i klienta (do miliona odsłon miesięcznie w darmowych tierach) oraz prędkość ładowania poniżej 200 ms na całym świecie."
          ],
          aiPromptExample: "Działasz jako Principal Cloud Architect. Dla platformy rezerwacji wizyt przygotuj specyfikację architektury bezserwerowej opartej na Cloudflare Pages (frontend/API) i Supabase (Postgres, RLS auth, storage). Wskaż strukturę bazy danych i przepływ żądań bez konieczności utrzymywania dedykowanego serwera."
        }
      ],
      summaryTakeaways: [
        "AI zdemokratyzowało wytwarzanie oprogramowania – wąskim gardłem nie jest już pisanie kodu, lecz precyzja wymagań.",
        "Stack Serverless na Cloudflare i Supabase minimalizuje koszty infrastruktury do zera na etapie startu.",
        "Project Manager staje się bezpośrednim partnerem biznesowym klienta, oferując terminy liczone w dniach, a nie w kwartałach."
      ],
      kurakLessonTip: "Niebieski Kurak przypomina: Kiedy konkurencja mówi klientowi 'zrobimy to w pół roku za 200 tysięcy', Ty mówisz: 'zobaczmy działające demo w ten piątek'. Wtedy kontrakt jest Twój!",
      quizQuestion: {
        id: 1001,
        text: "Co stanowi główną przewagę konkurencyjną Project Managera orkiestrującego narzędzia AI nad tradycyjnym zespołem software house'u?",
        options: [
          "Brak konieczności kontaktu z klientem.",
          "Błyskawiczny czas iteracji (dni zamiast miesięcy), minimalny narzut komunikacyjny i drastycznie niższy koszt wytworzenia przy zachowaniu wysokiej marży.",
          "Możliwość generowania kodu bez testowania.",
          "Ignorowanie wymagań bezpieczeństwa i RODO."
        ],
        correctAnswerIndex: 1,
        explanation: "Orkiestracja AI pozwala zredukować wieloosobowy łańcuch komunikacyjny do bezpośredniej relacji PM - Narzędzie AI, co skraca czas wdrożenia o 80-90% i pozwala osiągnąć ogromną rentowność projektu.",
        kurakTip: "Szybkość i brak szumów w komunikacji to Twoja supermoc!"
      }
    },
    {
      id: "lekcja-2-wywiad-z-klientem-zakres",
      number: 2,
      title: "Kompletny Wywiad z Klientem: Zbieranie Zakresu i Zabezpieczenie Projektu",
      shortDesc: "Arcyważny warsztat: jak poprowadzić Discovery Call, wyciągnąć ukryte wymagania, zneutralizować pułapki i stworzyć żelazną kartę ustaleń.",
      durationMinutes: 45,
      badge: "Kluczowa Lekcja • Masterclass",
      category: "Relacja z Klientem",
      iconName: "MessageSquare",
      objective: "Opanowanie psychologii i techniki prowadzenia rozmowy wstępnej ze zleceniodawcą, zadawania właściwych pytań i formułowania zakresu projektu wykluczającego późniejsze spory.",
      steps: [
        {
          title: "Struktura 6 Faz Badania Potrzeb Klienta (Discovery Framework)",
          explanation: [
            "Nigdy nie zaczynaj rozmowy od pytania: 'Jaki design Panu się podoba?' albo 'Ile ma Pan budżetu?'. Klient najczęściej sam nie wie, czego potrzebuje technologicznie, ale doskonale wie, co go boli w biznesie.",
            "Profesjonalny wywiad składa się z 6 precyzyjnych faz: 1. Kontekst biznesowy i mierzalny cel (Po co to robimy?), 2. Użytkownicy i Persony (Kto w to klika, a kto za to płaci?), 3. Podstawowe procesy biznesowe (Jak przepływa wartość?), 4. Zakres funkcjonalny MoSCoW (Must / Should / Could / Won't), 5. Wymagania niefunkcjonalne i integracje (Bezpieczeństwo, RODO, urządzenia, systemy zewnętrzne), 6. Warunki brzegowe, harmonogram i budżet.",
            "Twoim celem podczas wywiadu jest zamiana nieostrych przymiotników klienta ('nowocześnie', 'szybko', 'intuicyjnie') na precyzyjne kryteria akceptacji ('czas ładowania < 1.5s', 'rejestracja w 2 krokach z kodem SMS')."
          ],
          practicalRule: "Zasada Żelaznego Dociekania: Na każde życzenie klienta zadaj pytanie: 'Jaki problem biznesowy to rozwiązuje i co się stanie, jeśli w pierwszej wersji tego nie będzie?'."
        }
      ],
      clientInterviewSuite: {
        overview: "Kompleksowy zestaw 25 realnych pytań diagnostycznych zadawanych klientowi wraz z autentycznymi (często nieprecyzyjnymi) odpowiedziami klientów, reakcją pogłębiającą PM-a oraz ostatecznym zapisem w specyfikacji technicznej.",
        phases: [
          {
            phaseName: "Faza 1: Wizja Biznesowa, Cele i Mierzalny Sukces",
            phaseDescription: "Odkrywamy rzeczywisty powód zlecenia i definiujemy, po czym poznamy, że projekt zakończył się sukcesem.",
            dialogues: [
              {
                category: "Cel biznesowy",
                pmQuestion: "Jaki jest główny cel biznesowy tego wdrożenia i co musi się wydarzyć w ciągu pierwszych 3 miesięcy od startu, aby uznał Pan ten projekt za pełen sukces?",
                clientAnswerRaw: "Chcemy mieć nowoczesną aplikację dla naszych klientów, bo konkurencja już taką ma i nasi handlowcy mówią, że przez to tracimy zamówienia.",
                pmFollowUp: "Rozumiem. A czy możemy to zmierzyć liczbami? Na przykład: czy celem jest pozyskanie 100 nowych zamówień miesięcznie bez telefonu do handlowca, czy skrócenie czasu obsługi z 2 dni do 15 minut?",
                finalScopeSpec: "Cel projektu: Uruchomienie samoobsługowego portalu zamówień B2B redukującego czas składania zamówień powtarzalnych z 48h do 3 minut oraz zmniejszenie obciążenia handlowców o 40% w Q1 po wdrożeniu.",
                kurakTip: "Nigdy nie akceptuj celu 'chcemy być nowocześni'. Nowoczesność nie płaci faktur – mierzalna oszczędność czasu i zysk tak!"
              },
              {
                category: "Priorytet Czas vs Zakres",
                pmQuestion: "Gdybyśmy musieli wybierać między terminem 15 listopada a wdrożeniem wszystkich 20 dodatkowych opcji, co jest dla Pana ważniejsze?",
                clientAnswerRaw: "Wszystko jest ważne! Chcemy wszystko na 15 listopada.",
                pmFollowUp: "Z punktu widzenia inżynierii projektu: 15 listopada startują Państwa targi branżowe. Czy lepiej mieć wtedy przetestowany, działający moduł sprzedaży, czy opóźnić premierę o 2 miesiące dla drugorzędnych raportów?",
                finalScopeSpec: "Kryterium sukcesu: Sztywny termin wydania MVP (15 listopada) z zablokowanym zakresem MUST-HAVE. Wszystkie funkcje opcjonalne (NICE-TO-HAVE) trafiają do Wydania 2 (grudzień/styczeń).",
                kurakTip: "Klient zawsze powie, że wszystko jest ważne. Twoim zadaniem jest uświadomić mu konsekwencje braku priorytetów."
              }
            ]
          },
          {
            phaseName: "Faza 2: Użytkownicy, Persony i Urządzenia",
            phaseDescription: "Badamy, kto faktycznie będzie klikał w system i w jakich warunkach fizycznych.",
            dialogues: [
              {
                category: "Profil użytkownika",
                pmQuestion: "Kto będzie codziennym użytkownikiem systemu i w jakich warunkach będzie z niego korzystał?",
                clientAnswerRaw: "Wszyscy nasi klienci – zarówno młodzi ludzie z biura, jak i starsi majstrzy na budowach.",
                pmFollowUp: "Świetna uwaga! Majster na budowie korzysta ze smartfona w słońcu, często w rękawicach lub przy słabym zasięgu LTE. Czy priorytetem jest więc wersja mobilna (PWA) działająca offline z dużymi przyciskami i wysokim kontrastem?",
                finalScopeSpec: "Architektura UI: Mobile-First PWA z obsługą trybu Offline (Service Worker cache). Minimalny rozmiar elementów dotykowych: 48x48px, zgodność kontrastu WCAG AA, automatyczna synchronizacja zamówień po powrocie zasięgu sieci.",
                kurakTip: "Warunki otoczenia użytkownika (słońce, rękawice, brak zasięgu) decydują o sukcesie aplikacji bardziej niż kolorystyka logo!"
              },
              {
                category: "Poziom uprawnień i role",
                pmQuestion: "Jakie typy kont i uprawnień muszą istnieć w systemie?",
                clientAnswerRaw: "No, musi być logowanie dla klienta i dla nas jako administratora.",
                pmFollowUp: "Czy po stronie klienta jedna firma może mieć kilku pracowników (np. pracownik składa koszyk, a dyrektor zatwierdza budżet), czy wystarczy jedno wspólne konto na firmę?",
                finalScopeSpec: "Model RBAC (Role-Based Access Control): 3 role w systemie: 1. Klient-Kupiec (tworzenie koszyka), 2. Klient-Dyrektor (akceptacja zamówień powyżej limitu 5000 PLN), 3. SuperAdmin (zarządzanie cenami i stanami magazynowymi).",
                kurakTip: "Doprecyzowanie ról na etapie wywiadu oszczędza 3 tygodnie przebudowywania bazy danych w trakcie sprintu!"
              }
            ]
          },
          {
            phaseName: "Faza 3: Zakres Funkcjonalny i Płatności (Model MoSCoW)",
            phaseDescription: "Oddzielamy funkcje krytyczne (Must-Have) od marzeń (Nice-to-Have).",
            dialogues: [
              {
                category: "Metody Płatności",
                pmQuestion: "Jakie formy płatności są bezwzględnie wymagane w pierwszym etapie?",
                clientAnswerRaw: "Wszystkie możliwe: karty, BLIK, przelewy tradycyjne, leasing, odroczone płatności PayPo i kredyt kupiecki.",
                pmFollowUp: "Integracja 6 bramek płatności wydłuży prace i wymaga podpisania 4 oddzielnych umów finansowych. Czy na start wystarczy szybka bramka Stripe/Przelewy24 obsługująca 92% transakcji (BLIK, szybki przelew, karta), a leasing dodamy w etapie 2?",
                finalScopeSpec: "Bramka płatności MVP: Jednolity operator Stripe z aktywnym modułem BLIK i kart płatniczych. Płatności odroczone i leasing przeniesione do fazy 2 po weryfikacji wolumenu transakcji.",
                kurakTip: "Jedna sprawdzona bramka płatności na start to szybszy launch i brak chaosu w księgowości klienta."
              },
              {
                category: "Powiadomienia i Komunikacja",
                pmQuestion: "W jaki sposób klienci mają otrzymywać powiadomienia o statusie zamówienia?",
                clientAnswerRaw: "Chcemy SMS-y, maile i powiadomienia push na telefon.",
                pmFollowUp: "Bramki SMS generują stały koszt (ok. 0.18 PLN za każdego SMS-a) i wymagają rejestracji nazwy nadawcy. Czy w MVP zgadza się Pan na bezpłatne, automatyczne maile transakcyjne (Resend/SendGrid) oraz darmowe web-push w PWA, a bramkę SMS dodamy na życzenie?",
                finalScopeSpec: "Komunikacja transakcyjna: Szablony e-mail HTML zintegrowane z Resend API (potwierdzenie zamówienia, zmiana statusu, faktura PDF). Powiadomienia Web-Push w PWA. Integracja SMS odsunięta do etapu płatnego rozszerzenia.",
                kurakTip: "Chroń klienta przed zbędnymi kosztami operacyjnymi na start – zapamięta to i wróci po kolejne projekty."
              }
            ]
          },
          {
            phaseName: "Faza 4: Integracje Zewnętrzne i Baza Danych",
            phaseDescription: "Sprawdzamy, z czym aplikacja musi się łączyć i gdzie leżą dane.",
            dialogues: [
              {
                category: "Integracja z ERP/Magazynem",
                pmQuestion: "Z jakim systemem magazynowo-księgowym aplikacja musi się synchronizować i czy ten system udostępnia otwarte API?",
                clientAnswerRaw: "Mamy w biurze program Subiekt GT na komputerze w piwnicy. Musi pobierać stany co minutę.",
                pmFollowUp: "Subiekt GT na lokalnym komputerze stacjonarnym nie posiada chmurowego REST API bez dedykowanego serwera lub dodatku Sfera. Czy na start wystarczy automatyczny import stanów raz dziennie przez plik CSV/Excel z możliwością ręcznego wywołania, a pełne API zrobimy jako oddzielny etap infrastrukturalny?",
                finalScopeSpec: "Integracja magazynowa MVP: Moduł bezpiecznego importu stanów i cennika z pliku XLSX/CSV (przeciągnij i upuść w panelu admina z walidacją schematu) + eksport zamówień do formatu EDI++ akceptowanego przez Subiekta.",
                kurakTip: "Lokalne programy księgowe klienta to największa pułapka budżetowa w IT. Zawsze proponuj sprawdzony etap pośredni (CSV/Excel)!"
              }
            ]
          },
          {
            phaseName: "Faza 5: Wymagania Prawne, RODO i Bezpieczeństwo",
            phaseDescription: "Zabezpieczamy projekt od strony prawnej, audytowej i regulacyjnej.",
            dialogues: [
              {
                category: "Zgody i RODO",
                pmQuestion: "Kto dostarcza regulamin sklepu, politykę prywatności i klauzule RODO?",
                clientAnswerRaw: "Myśleliśmy, że to programista wkleja ze swoich innych projektów.",
                pmFollowUp: "Kopiowanie regulaminu z internetu grozi karami UOKiK i naruszeniem praw autorskich. W aplikacji przygotujemy techniczne checkboxy, mechanizm rejestracji zgód ze znacznikiem czasu i adresem IP, ale treść prawną musi zweryfikować Państwa radca prawny lub możemy polecić zaprzyjaźnioną kancelarię e-commerce.",
                finalScopeSpec: "Moduł zgodności prawnej: Techniczna ewidencja zgód marketingowych i akceptacji regulaminu w bazie danych (data, godzina, wersja regulaminu, IP). Klient dostarcza ostateczną treść regulaminu i polityki prywatności do 10 dni przed premierą.",
                kurakTip: "Nigdy nie bierz na siebie odpowiedzialności prawnej za treść regulaminu klienta. Ty dostarczasz mechanizm techniczny, prawnik dostarcza treść."
              }
            ]
          },
          {
            phaseName: "Faza 6: Budżet, Płatności Etapowe i SLA",
            phaseDescription: "Ustalanie warunków finansowych, zaliczek i gwarancji.",
            dialogues: [
              {
                category: "Struktura Płatności",
                pmQuestion: "Jak ma wyglądać harmonogram płatności za projekt?",
                clientAnswerRaw: "Zapłacimy całość po wdrożeniu, jak wszystko sprawdzimy przez miesiąc.",
                pmFollowUp: "Jako profesjonalna pracownia cyfrowa pracujemy w standardzie 3 transz powiązanych z mierzalnymi kamieniami milowymi: 40% zaliczki przy podpisaniu karty zakresu i uruchomieniu środowiska, 40% po akceptacji wersji demonstracyjnej na serwerze testowym, 20% po wdrożeniu produkcyjnym na Państwa domenie.",
                finalScopeSpec: "Harmonogram płatności: Transza 1 (40% - rozpoczęcie prac i prototyp), Transza 2 (40% - akceptacja środowiska staging), Transza 3 (20% - publikacja na domenie docelowej i przekazanie dostępów). Gwarancja techniczna: 90 dni.",
                kurakTip: "NIGDY nie zaczynaj pracy bez zaliczki (minimum 30-40%). Zaliczka to jedyny dowód, że klient traktuje projekt poważnie!"
              }
            ]
          }
        ],
        ironcladScopeTemplate: "SZABLON ŻELAZNEJ KARTY ZAKRESU (Project Scope Agreement):\n\n1. CEL PROJEKTU: [Jednozdaniowy cel biznesowy z metryką KPI]\n2. ZAKRES WCHODZĄCY W MVP (IN-SCOPE):\n   - [Moduł 1 z kryteriami akceptacji]\n   - [Moduł 2 z kryteriami akceptacji]\n   - [Moduł 3 z kryteriami akceptacji]\n3. ZAKRES JEDNOZNACZNIE WYŁĄCZONY Z ETAPU 1 (OUT-OF-SCOPE):\n   - Wszystkie integracje niewymienione w punkcie 2\n   - Dedykowane aplikacje natywne AppStore/Google Play (zastąpione PWA)\n   - Wprowadzanie bazy produktów (odpowiedzialność klienta)\n4. WARUNKI ODBIORU (UAT):\n   - 5 dni roboczych na testy scenariuszowe wg listy kontrolnej\n   - Brak zgłoszenia uwag w terminie oznacza automatyczną akceptację etapu\n5. PROCEDURA CHANGE REQUEST:\n   - Każda nowa funkcja zgłoszona po podpisaniu karty wymaga oddzielnej wyceny i wydłużenia terminu."
      },
      summaryTakeaways: [
        "Wywiad z klientem to badanie biznesu, a nie dyskusja o kolorach przycisków.",
        "Kluczem do braku konfliktów jest precyzyjna lista OUT-OF-SCOPE (co robimy później).",
        "Płatność w 3 transzach (40/40/20) chroni płynność finansową i motywuje klienta do terminowych odbiorów."
      ],
      kurakLessonTip: "Złota rada Kuraka: Jeśli nie wpiszesz w umowie tego, czego NIE ROBISZ, klient założy, że w cenie jest wszystko, łącznie z promem kosmicznym! Zawsze miej sekcję OUT-OF-SCOPE!",
      quizQuestion: {
        id: 1002,
        text: "Klient podczas wywiadu mówi: 'Chcemy, żeby aplikacja była bardzo szybka i nowoczesna'. Jak powinien zareagować profesjonalny Project Manager?",
        options: [
          "Przytaknąć i wpisać w umowie: 'Aplikacja będzie bardzo szybka i nowoczesna'.",
          "Doprecyzować nieostre pojęcia: zdefiniować mierzalne Core Web Vitals (np. LCP < 2.0s, TTFB < 200ms) oraz określić konkretne persony użytkowników i bibliotekę komponentów UI.",
          "Zaproponować zakup najdroższego dedykowanego serwera fizycznego.",
          "Powiedzieć klientowi, że nowoczesność zależy od gustu programisty."
        ],
        correctAnswerIndex: 1,
        explanation: "Słowa 'szybki' i 'nowoczesny' to pułapki interpretacyjne. Profesjonalny PM zamienia je na mierzalne wskaźniki techniczne i biznesowe, które można jednoznacznie zweryfikować podczas odbioru.",
        kurakTip: "Mierzalne wskaźniki to jedyna ochrona przed marudzeniem przy odbiorze końcowym!"
      }
    },
    {
      id: "lekcja-3-spec-driven-development-prd",
      number: 3,
      title: "Od Rozmowy do Kodu: Spec-Driven Development, PRD i Prompty Architektoniczne",
      shortDesc: "Jak przekształcić notatki z wywiadu w profesjonalny Product Requirements Document (PRD) oraz prompty, które zmuszają AI do wygenerowania bezbłędnej aplikacji.",
      durationMinutes: 25,
      badge: "Inżynieria Wymagań",
      category: "Metodologia",
      iconName: "FileCode",
      objective: "Opanowanie tworzenia modularnych specyfikacji PRD w standardzie Spec-Driven Development i generowania kodu produkcyjnego za pomocą promptów kontekstowych.",
      steps: [
        {
          title: "Struktura dokumentu PRD dla modeli AI",
          explanation: [
            "Modele AI piszą kiepski kod tylko wtedy, gdy otrzymują nieprecyzyjne prompty w stylu 'stwórz mi sklep'.",
            "Spec-Driven Development polega na stworzeniu jednego zwięzłego dokumentu Markdown zawierającego: 1. Kontekst biznesowy, 2. Schemat encji bazy danych (TypeScript Interfaces / SQL schema), 3. Kontrakty API (ścieżki, parametry, format JSON odpowiedzi), 4. Zasady bezpieczeństwa i uprawnień RLS, 5. Reguły walidacji formularzy.",
            "Posiadając taki dokument w katalogu projektu (np. `/docs/spec.md`), asystent kodowania w Cursorze lub Claude generuje 100% poprawną architekturę bez halucynacji."
          ],
          practicalRule: "Zasada Single Source of Truth: Wszystkie nazwy pól w bazie, w API i na frontendzie muszą być zdefiniowane w specyfikacji zanim powstanie jakikolwiek plik z kodem."
        }
      ],
      summaryTakeaways: [
        "Precyzyjne PRD eliminuje 95% błędów architektonicznych i długu technologicznego.",
        "Modele AI działają jak genialni koderzy ze sklerozą – potrzebują jasnego, niezmiennego pliku specyfikacji w repozytorium.",
        "Kontrakty TypeScript i schematy bazy danych tworzone są przed jakimkolwiek kodem interfejsu."
      ],
      kurakLessonTip: "Kurak zdradza sekret: Gdy masz dobre PRD, nakarmienie nim Cursora trwa 10 sekund, a gotowa działająca baza powstaje w 5 minut. Kto nie ma specyfikacji, ten poprawia ten sam błąd przez 3 dni!",
      quizQuestion: {
        id: 1003,
        text: "Czym charakteryzuje się podejście Spec-Driven Development w projektach prowadzonych z AI?",
        options: [
          "Pisaniem kodu bezpośrednio w przeglądarce bez planu.",
          "Utworzeniem modularnej, ścisłej specyfikacji technicznej i modeli danych w pliku projektu przed wygenerowaniem implementacji przez modele AI.",
          "Zatrudnieniem 5 testerów manualnych.",
          "Rezygnacją z testów automatycznych."
        ],
        correctAnswerIndex: 1,
        explanation: "Spec-Driven Development traktuje specyfikację w Markdownie jako nadrzędne źródło prawdy (Single Source of Truth), na podstawie którego agenci AI generują spójny kod bazodanowy, backendowy i frontendowy.",
        kurakTip: "Dobra specyfikacja to 80% sukcesu całego projektu!"
      }
    },
    {
      id: "lekcja-4-wycena-budzet-pert",
      number: 4,
      title: "Wycena Wartością (Value-Based Pricing), Budżetowanie i Szacowanie PERT z 80% Marżą",
      shortDesc: "Jak przestać sprzedawać swoje roboczogodziny na stawce 80 PLN/h, a wyceniać wartość biznesową rozwiązania z potężną marżą.",
      durationMinutes: 25,
      badge: "Finanse & Wyceny",
      category: "Biznes",
      iconName: "TrendingUp",
      objective: "Nauczenie się kalkulacji budżetów według standardów PMI (szacowanie trójpunktowe PERT, EVM) oraz technik sprzedaży wartościowej (Value-Based Pricing).",
      steps: [
        {
          title: "Pułapka 'Stawki Godzinowej' w erze AI",
          explanation: [
            "Jeśli używasz AI i stworzysz klientowi aplikację w 10 godzin zamiast 200 godzin, to rozliczając się 'na godziny' (Time & Materials) zarobisz 20 razy mniej za szybsze dostarczenie wartości! To absurd.",
            "Wyceniaj WARTOŚĆ DLA KLIENTA: Jeśli portal zaoszczędzi firmie klienta 120 000 PLN rocznie na pensjach i pomyłkach handlowców, to cena projektu 35 000 PLN jest dla klienta gigantyczną okazją z natychmiastowym ROI.",
            "Cena projektu nie wynika z Twojego nakładu pracy, lecz z wartości biznesowej i alternatywy rynkowej (ile musiałby zapłacić w korporacyjnym software house)."
          ],
          practicalRule: "Formuła PERT: Te = (Optymistyczny + 4 * Najbardziej_Prawdopodobny + Pesymistyczny) / 6. Dodaj zawsze 20% rezerwy zarządczej na nieprzewidziane opóźnienia po stronie klienta."
        }
      ],
      summaryTakeaways: [
        "Nigdy nie ujawniaj klientowi, że aplikacja powstała z pomocą AI w 3 dni – klient ocenia rezultat biznesowy, a nie narzędzie.",
        "Stosuj stałą cenę ryczałtową (Fixed Price) z rygorystycznie zdefiniowaną Kartą Zakresu (Scope Statement).",
        "Wycena wartością pozwala osiągać 80-90% marży netto przy zadowoleniu klienta z szybkiej dostawy."
      ],
      kurakLessonTip: "Kurak do portfela: Kiedy hydraulik naprawia rurę w 5 minut uderzeniem młotka i bierze 300 zł, płacisz za to, że wiedział GDZIE uderzyć. Ty bierzesz 30 000 zł za to, że wiesz CO i JAK wygenerować!",
      quizQuestion: {
        id: 1004,
        text: "Dlaczego w projektach realizowanych przy wsparciu AI rozliczanie godzinowe (Time & Materials) jest skrajnie niekorzystne dla Project Managera?",
        options: [
          "Ponieważ AI zabrania wystawiania faktur.",
          "Ponieważ AI drastycznie skraca czas wykonania, więc rozliczenie godzinowe karze PM-a za wysoką efektywność, zamiast nagradzać go za dostarczoną wartość biznesową.",
          "Ponieważ klienci nie lubią płacić co miesiąc.",
          "Ponieważ banki odrzucają takie przelewy."
        ],
        correctAnswerIndex: 1,
        explanation: "Dzięki AI wykonujesz pracę w ułamku tradycyjnego czasu. Wycena stała oparta na wartości (Value-Based Pricing) pozwala zachować pełną korzyść finansową z technologicznej przewagi.",
        kurakTip: "Sprzedawaj rezultaty, a nie swój czas na zegarku!"
      }
    },
    {
      id: "lekcja-5-zwinny-sprint-moscow",
      number: 5,
      title: "Zwinny Sprint w Praktyce: Definition of Done, Priorytetyzacja MoSCoW i Inspekcja z AI",
      shortDesc: "Praktyczne prowadzenie sprintów w modelu 'AI-augmented Scrum': zablokowany Sprint Goal, bezwzględne DoD i codzienna weryfikacja.",
      durationMinutes: 20,
      badge: "Zwinne Zarządzanie",
      category: "Metodologia",
      iconName: "Target",
      objective: "Opanowanie prowadzenia tygodniowych sprintów z precyzyjną definicją ukończenia (DoD) i ochroną zespołu przed zmianami w trakcie iteracji.",
      steps: [
        {
          title: "Tygodniowy Sprint jako Kontener Postępu",
          explanation: [
            "W projektach z AI 2-tygodniowe lub miesięczne sprinty są za długie. Optymalny timebox to sprint 1-tygodniowy (od poniedziałku do piątku).",
            "Każdy sprint ma JEDEN nienaruszalny Cel Sprintu (Sprint Goal), np. 'Działający moduł koszyka i autoryzacji zintegrowany ze Stripe'.",
            "Definition of Done (DoD) dla kodu z AI: 1. Kod skompilowany bez błędów TypeScript, 2. Wszystkie testy jednostkowe zielone, 3. Brak ostrzeżeń w linterze, 4. Poprawny deployment na staging Cloudflare, 5. Sprawdzone wyświetlanie na ekranie telefonu."
          ],
          practicalRule: "Zasada Zamkniętego Sprintu: W trakcie trwania tygodniowego sprintu klient NIE MOŻE dodawać nowych zadań. Wszelkie nowe pomysły trafiają na tablicę kolejnego sprintu."
        }
      ],
      summaryTakeaways: [
        "Krótkie, 7-dniowe sprinty dają natychmiastowe poczucie postępu i pozwalają szybko reagować na błędy.",
        "Nienaruszalny Sprint Goal chroni przed rozpraszaniem uwagi na poboczne detale.",
        "Definition of Done jest tarczą jakościową gwarantującą brak długu technologicznego."
      ],
      kurakLessonTip: "Kurak przypomina: Jeśli w środę klient prosi 'zmieńmy jeszcze to i tamto', odpowiadasz: 'Świetny pomysł! Zapisuję do kolejnego sprintu od najbliższego poniedziałku, a w tym kończymy uzgodniony cel'." ,
      quizQuestion: {
        id: 1005,
        text: "Czym jest Definition of Done (DoD) w zespole projektowym?",
        options: [
          "Listą życzeń klienta do spełnienia w przyszłym roku.",
          "Formalną, uzgodnioną listą kryteriów jakościowych i technicznych, które musi spełnić każdy przyrost, aby można go było uznać za gotowy do wydania.",
          "Momentem, w którym programista kończy pracę o godzinie 17:00.",
          "Płatnością ostatniej faktury przez klienta."
        ],
        correctAnswerIndex: 1,
        explanation: "Definition of Done (Scrum Guide 2020) to formalne zobowiązanie zapewniające jakość i przejrzystość stanu technicznego oprogramowania.",
        kurakTip: "DoD to Twój certyfikat jakości przed wypuszczeniem aplikacji na produkcję!"
      }
    },
    {
      id: "lekcja-6-architektura-it-cloudflare-supabase",
      number: 6,
      title: "Architektura Techniczna i Wdrożenia IT: Next.js, Cloudflare Pages/Workers i Bazy Supabase",
      shortDesc: "Techniczne fundamenty nowoczesnego wdrożenia: jak skonfigurować bezpieczne środowisko chmurowe z darmowym SSL, globalnym CDN i bazą SQL.",
      durationMinutes: 25,
      badge: "Informatyka & Cloud",
      category: "Technologia",
      iconName: "Code",
      objective: "Zrozumienie kluczowych parametrów technicznych wdrożeń w uprzywilejowanym obszarze IT i programowania bez konieczności kodowania od zera.",
      steps: [
        {
          title: "Globalny Edge Cloudflare i Baza Danych bez Administracji",
          explanation: [
            "Dlaczego Cloudflare Pages? Ponieważ serwuje statyczne pliki z ponad 300 centrów danych na świecie, posiada wbudowaną darmową ochronę przed atakami DDoS, nielimitowany transfer i automatyczne certyfikaty SSL.",
            "W połączeniu z Supabase (zarządzany PostgreSQL z autoryzacją RLS i bazą wektorową pgvector dla AI) otrzymujesz architekturę klasy korporacyjnej za 0 PLN kosztów stałych.",
            "Jako PM potrafisz skonfigurować rekordy DNS, podpiąć domenę klienta w 3 minuty i skonfigurować zmienne środowiskowe (Environment Variables) chroniące klucze API."
          ],
          practicalRule: "Złota Zasada Bezpieczeństwa: Nigdy nie umieszczaj kluczy prywatnych (API Keys, Tokeny Stripe) w kodzie klienta (frontendzie). Używaj Cloudflare Secrets i endpointów brzegowych (Edge Workers)."
        }
      ],
      summaryTakeaways: [
        "Infrastruktura Serverless eliminuje koszty i ryzyko awarii tradycyjnych maszyn wirtualnych.",
        "Row-Level Security (RLS) w PostgreSQL dba o bezpieczeństwo danych użytkowników na poziomie silnika bazy danych.",
        "Projekt jest gotowy do obsługi milionowego ruchu od pierwszej minuty po wdrożeniu."
      ],
      kurakLessonTip: "Niebieski Kurak wyjaśnia: Gdy klient pyta 'co jak serwer padnie?', odpowiadasz z uśmiechem: 'Nasza aplikacja stoi na 300 serwerach Cloudflare na całym świecie. Musiałby zgasnąć internet na całej planecie, żeby padła!'." ,
      quizQuestion: {
        id: 1006,
        text: "Dlaczego architektura Serverless na Cloudflare Pages jest idealna dla projektów tworzonych przez nowoczesnego PM-a?",
        options: [
          "Bo wymaga zatrudnienia trzech administratorów Linuksa.",
          "Zapewnia darmowy globalny CDN, ochronę DDoS, automatyczny SSL i zerowe koszty utrzymania serwera przy ruchu startowym.",
          "Ponieważ nie pozwala na podpięcie własnej domeny.",
          "Bo działa tylko w godzinach pracy biura."
        ],
        correctAnswerIndex: 1,
        explanation: "Cloudflare Pages rozwiązuje wszystkie problemy z hostingiem, wydajnością i skalowaniem bez kosztów stałych i konieczności zarządzania serwerami.",
        kurakTip: "Bezserwerowa chmura to wolność od nocnych telefonów o padniętym serwerze!"
      }
    },
    {
      id: "lekcja-7-grafika-3d-multimedia-pipeline",
      number: 7,
      title: "Projekty Graficzne, 3D i Wideo z AI: Pipeline Produkcyjny, Prawo Autorskie i Licencje",
      shortDesc: "Zarządzanie produkcją multimedialną nowej ery: od promptu w Midjourney/Runway, przez obróbkę wektorową, po komercyjny audyt praw autorskich.",
      durationMinutes: 20,
      badge: "Grafika & Multimedia",
      category: "Kreatywne AI",
      iconName: "Palette",
      objective: "Opanowanie pipeline'u produkcyjnego multimediów (2D, 3D, wideo, UI/UX) z wykorzystaniem narzędzi generatywnych i zabezpieczeniem praw autorskich.",
      steps: [
        {
          title: "Generatywny Pipeline Graficzny z Zachowaniem Spójności Marki",
          explanation: [
            "Największym wyzwaniem w grafice AI jest spójność wizualna (Consistency). Klient nie chce przypadkowych ładnych obrazków, lecz spójnego bohatera marki, palety kolorów i stylu ilustracji.",
            "Stosuj techniki seedowania, styleref (`--sref` w Midjourney) oraz LoRA w Stable Diffusion, aby utrzymać ten sam styl w 50 grafikach dla aplikacji.",
            "Optymalizacja dla sieci: Grafiki z silników generatywnych są za ciężkie. Zawsze przepuszczaj je przez zautomatyzowany skrypt konwertujący do formatu WebP/AVIF z kompresją bezstratną, aby utrzymać Google PageSpeed na poziomie 95+ punktów."
          ],
          practicalRule: "Zasada Praw Autorskich: Generacje AI w wielu jurysdykcjach nie podlegają prawu autorskiemu, dopóki nie zostaną znacząco zmodyfikowane przez człowieka. W umowie z klientem przekazuj prawa majątkowe do kompozycji, kodu i finalnego dzieła multimedialnego."
        }
      ],
      summaryTakeaways: [
        "Generowanie grafik to dopiero 30% pracy – kluczowa jest selekcja, spójność stylu, wektoryzacja i optymalizacja kompresji.",
        "Formaty WebP i AVIF są obowiązkowym standardem w nowoczesnym designie webowym.",
        "Prawidłowo sformułowana klauzula praw autorskich chroni Cię przed sporami licencyjnymi."
      ],
      kurakLessonTip: "Kurak w świecie sztuki: Prawdziwy kunszt graficzny to nie wygenerowanie jednego ładnego kuraka, ale stworzenie 10 grafik, gdzie ten sam niebieski kurak z aktówką występuje w 10 różnych sytuacjach biznesowych!",
      quizQuestion: {
        id: 1007,
        text: "Dlaczego bezpośrednie umieszczanie surowych plików graficznych z generatorów AI w aplikacji webowej jest błędem?",
        options: [
          "Ponieważ pliki AI psują monitor użytkownika.",
          "Surowe pliki PNG/JPG z AI są zbyt ciężkie (często 5-15 MB), co drastycznie spowalnia ładowanie strony i obniża pozycję w Google (Core Web Vitals) – wymagają konwersji do WebP i optymalizacji.",
          "Bo przeglądarki internetowe blokują grafikę generatywną.",
          "Ponieważ grafika musi być czarno-biała."
        ],
        correctAnswerIndex: 1,
        explanation: "Optymalizacja rozmiaru grafik i formaty WebP/AVIF to warunek konieczny dla szybkiego czasu ładowania (LCP < 2s) i pozytywnego doświadczenia użytkownika.",
        kurakTip: "Kompresuj grafiki do WebP – prędkość to konwersja!"
      }
    },
    {
      id: "lekcja-8-ecommerce-marketing-funnels",
      number: 8,
      title: "Wdrożenia E-Commerce i E-Marketingu: Integracje Płatności, Lejki Sprzedażowe i Analityka",
      shortDesc: "Jak projektować sklepy i aplikacje sprzedażowe zoptymalizowane pod kątem maksymalnej konwersji (CRO), analityki GA4 i automatyzacji marketingowych.",
      durationMinutes: 25,
      badge: "E-Commerce & Lejki",
      category: "Sprzedaż Cyfrowa",
      iconName: "ShoppingCart",
      objective: "Zrozumienie architektury nowoczesnego e-commerce, eliminacji porzuconych koszyków, wdrożenia analityki zdarzeniowej i automatyzacji lejków sprzedaży.",
      steps: [
        {
          title: "Architektura Zakupowa o Wysokiej Konwersji (CRO)",
          explanation: [
            "Tradycyjne platformy e-commerce (np. stare wersje WooCommerce na tanim hostingu) ładują koszyk przez 4 sekundy i wymagają wypełnienia 15 pól formularza. Efekt? 75% klientów porzuca koszyk przed wpisaniem karty.",
            "W Projedudei stosujemy architekturę One-Page Checkout: klient wybiera produkt, wpisuje telefon, klika BLIK lub Apple Pay i w 15 sekund transakcja jest sfinalizowana.",
            "Analityka to podstawa: wdrożenie Google Analytics 4 (GA4) z pomiarem zdarzeń (ViewItem, AddToCart, BeginCheckout, Purchase) pozwala klientowi natychmiast zobaczyć, które reklamy generują zysk."
          ],
          practicalRule: "Prawo Prostoty Koszyka: Każde dodatkowe pole w formularzu zamówienia obniża konwersję sklepu o 7%. Pytaj tylko o to, co niezbędne do wysyłki!"
        }
      ],
      summaryTakeaways: [
        "Szybki checkout (BLIK/Apple Pay) potrafi podwoić przychody sklepu bez zwiększania budżetu reklamowego.",
        "Śledzenie zdarzeń GA4 i konwersji serwerowych (CAPI) jest obowiązkowym elementem profesjonalnego wdrożenia.",
        "Połączenie sklepu z zautomatyzowanym e-mail marketingiem (ratowanie koszyków) generuje 15-25% dodatkowego obrotu."
      ],
      kurakLessonTip: "Kurak patrzy na koszyk: Klient w internecie jest niecierpliwy jak głodny kogut. Daj mu zapłacić BLIK-iem w 3 sekundy, a zapomni, co to porzucony koszyk!",
      quizQuestion: {
        id: 1008,
        text: "Jaki jest najczęstszy powód porzucania koszyków w sklepach internetowych i jak nowoczesny PM powinien go wyeliminować?",
        options: [
          "Zbyt ładne zdjęcia produktów.",
          "Zbyt długi i skomplikowany proces zamówienia z koniecznością rejestracji konta i brakiem szybkich płatności mobilnych (BLIK, Apple Pay).",
          "Zbyt niski koszt dostawy.",
          "Obecność regulaminu na stronie."
        ],
        correctAnswerIndex: 1,
        explanation: "Uproszczenie procesu do One-Page Checkout, zakup bez rejestracji i obsługa płatności jednym kliknięciem (BLIK/Apple Pay) to najskuteczniejsza metoda redukcji porzuconych koszyków.",
        kurakTip: "Maksymalnie uprość ścieżkę do kasy – zysk gwarantowany!"
      }
    },
    {
      id: "lekcja-9-obrona-scope-creep-psychologia",
      number: 9,
      title: "Psychologia Klienta: Obrona przed Scope Creep, Negocjacje Zmian i Trudne Sytuacje",
      shortDesc: "Jak asertywnie radzić sobie z 'a doróbmy jeszcze to za darmo', nie psując relacji ze zleceniodawcą i zarabiając na rozszerzeniach.",
      durationMinutes: 20,
      badge: "Psychologia & Negocjacje",
      category: "Zarządzanie Zmianą",
      iconName: "ShieldCheck",
      objective: "Wykształcenie asertywnej postawy menedżerskiej, opanowanie techniki 'Yes, and...' oraz formalnej procedury Change Request.",
      steps: [
        {
          title: "Mechanizm Zjawiska Scope Creep (Rozpełzanie Zakresu)",
          explanation: [
            "Scope Creep nie zaczyna się od wielkich żądań. Zaczyna się od niewinnego pytania klienta w piątek o 16:30: 'A czy mógłby Pan jeszcze szybko dorobić taki mały przycisk z eksportem do PDF? To przecież chwila dla kogoś, kto się zna'.",
            "Jeśli powiesz 'dobrze, zrobię to w cenie', otwierasz puszkę Pandory. W poniedziałek klient poprosi o kolejne 3 'małe przyciski', a za dwa tygodnie okaże się, że pracujesz za darmo przez dodatkowy miesiąc.",
            "Zastosuj Technikę 'Yes, and...' (Tak, z przyjemnością, i...): 'Oczywiście, to świetna funkcja i bardzo podniesie wartość systemu! Z przyjemnością przygotuję wycenę tego dodatkowego modułu w ramach Change Request, albo możemy wymienić go za inną funkcję z obecnego zakresu, aby nie zmieniać budżetu. Którą opcję Pan woli?'."
          ],
          practicalRule: "Zasada Trójkąta Ograniczeń: Jeśli rośnie Zakres, to musi wzrosnąć Budżet lub wydłużyć się Czas. Klient może wybrać tylko jedno z dwojga – Ty nie finansujesz jego pomysłów z własnej kieszeni."
        }
      ],
      summaryTakeaways: [
        "Nigdy nie mów klientowi agresywnego 'Nie, tego nie ma w umowie'. Mów: 'Tak, chętnie to zrobimy jako płatne rozszerzenie'.",
        "Dokumentuj każdą ustną prośbę mailowym podsumowaniem ustaleń z wyceną i wpływem na termin.",
        "Klient, który szanuje Twoje granice, będzie Cię szanował jako partnera biznesowego, a nie taniego wykonawcę."
      ],
      kurakLessonTip: "Niebieski Kurak ostrzega: Kto zgadza się na darmowe poprawki z litości, ten kończy pracując po nocach za darmo. Bądź miły, profesjonalny i bezwzględnie asertywny w sprawach zakresu!",
      quizQuestion: {
        id: 1009,
        text: "Klient w trakcie realizacji prosi o dodanie skomplikowanego modułu raportowania, którego nie było w podpisanej Karcie Zakresu. Jaka jest wzorcowa reakcja profesjonalnego PM-a?",
        options: [
          "Zrobić to po cichu w nocy za darmo, żeby klient nie był zły.",
          "Pochwalić pomysł biznesowy, wskazać, że wykracza poza zakres MVP i przedstawić ofertę w ramach formalnego Change Request z wyceną i ewentualną korektą terminu (lub zamianą za inny element).",
          "Nawymyślać klientowi i zerwać umowę.",
          "Zablokować numer klienta w telefonie."
        ],
        correctAnswerIndex: 1,
        explanation: "Profesjonalista nie walczy z klientem, lecz kanalizuje nowe pomysły w formalną, płatną procedurę Change Request, chroniąc budżet i termin pierwotnego zlecenia.",
        kurakTip: "Zamieniaj zachcianki klienta w płatne zlecenia dodatkowe!"
      }
    },
    {
      id: "lekcja-10-odbior-uat-deployment-sla",
      number: 10,
      title: "Testy Odbiorcze (UAT), Bezpieczny Deployment Produkcyjny, Przekazanie Praw i Kontrakt SLA",
      shortDesc: "Finisz projektu: jak przeprowadzić testy odbiorcze, odebrać ostatnią transzę pieniędzy, przekazać prawa i podpisać stałą umowę abonamentową (SLA).",
      durationMinutes: 20,
      badge: "Wdrożenie & Monetyzacja",
      category: "Zakończenie & SLA",
      iconName: "Award",
      objective: "Opanowanie formalnego protokołu odbioru końcowego, procedury wdrożenia zero-downtime oraz monetyzacji opieki powdrożeniowej (SLA).",
      steps: [
        {
          title: "Protokół Odbioru UAT i Zamknięcie Projektu",
          explanation: [
            "Najczęstszy błąd na finiszu: PM wysyła link do aplikacji i pisze: 'Proszę sprawdzić, czy wszystko działa'. Klient klika bez planu przez miesiąc i zawsze znajdzie coś, do czego można się przyczepić.",
            "Wysyłaj Listę Kontrolną Testów Odbiorczych (UAT Checklist): 'Oto 12 scenariuszy testowych odpowiadających podpisanej Karcie Zakresu. Proszę o ich przetestowanie do piątku do godz. 16:00. Zgodnie z umową, brak uwag krytycznych w tym terminie oznacza formalny odbiór dzieła'.",
            "Po podpisaniu protokołu odbioru wystawiasz fakturę końcową (20%) i natychmiast oferujesz Umowę Opieki Technicznej i Rozwoju (SLA) za stałą opłatę abonamentową (np. 1500 - 3000 PLN/mc za monitoring, drobne aktualizacje i gwarantowany czas reakcji)."
          ],
          practicalRule: "Zasada Złotego Abonamentu: Najbardziej dochodowy PM to ten, który ma 10 stałych klientów płacących miesięczny abonament SLA za zrealizowane wcześniej aplikacje serverless, które praktycznie nigdy się nie psują."
        }
      ],
      summaryTakeaways: [
        "Ustrukturyzowane testy UAT z listą kontrolną zamykają etap odbioru w 3-5 dni roboczych.",
        "Przekazanie kodów i dostępów następuje ZAWSZE po zaksięgowaniu ostatniej płatności.",
        "Umowy SLA to fundament stabilnego, powtarzalnego dochodu każdego profesjonalnego Project Managera nowej ery."
      ],
      kurakLessonTip: "Kurak wieńczy dzieło: Kiedy projekt jest wdrożony, klient jest zachwycony, a na Twoim koncie jest pełna kwota, wyciągasz z aktówki umowę SLA. W ten sposób jedno zlecenie daje Ci zysk przez kolejne lata!",
      quizQuestion: {
        id: 1010,
        text: "Kiedy Project Manager powinien przekazać klientowi pełne prawa majątkowe do kodu oraz dostęp administracyjny do kont produkcyjnych?",
        options: [
          "Przed rozpoczęciem jakichkolwiek prac.",
          "Po zakończeniu testów odbiorczych (UAT) i zaksięgowaniu 100% płatności wynikających z umowy na koncie bankowym.",
          "W połowie sprintu.",
          "Nigdy – kody zawsze pozostają tajemnicą."
        ],
        correctAnswerIndex: 1,
        explanation: "Dostęp produkcyjny i prawa autorskie przekazuje się dopiero po uregulowaniu całości należności finansowych przez klienta. To złota zasada bezpieczeństwa w biznesie.",
        kurakTip: "Dostęp i prawa oddajesz po przelewie – nigdy na ładne oczy!"
      }
    }
  ]
};

const targetPath = path.resolve(__dirname, '..', 'data', 'lessons.json');
fs.writeFileSync(targetPath, JSON.stringify(lessonsData, null, 2), 'utf8');
console.log('Pomyślnie wygenerowano bazę lekcji krok po kroku:', targetPath);
console.log('Liczba lekcji:', lessonsData.lessons.length);

