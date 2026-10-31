const fs = require('fs');
const path = require('path');

const curriculum = {
  sections: [
    {
      id: "project-manager",
      number: 1,
      title: "Project Manager (Kierownik Projektu)",
      subtitle: "Dostarczanie projektów w czasie, budżecie i zakresie w erze AI i metodyk hybrydowych",
      iconName: "Briefcase",
      description: "Zarządzanie przedsięwzięciami w oparciu o globalne standardy PMI, AXELOS i IPMA. Poznaj techniki predykcyjne (Waterfall), adaptacyjne (Agile) oraz hybrydowe, ze szczególnym uwzględnieniem orkiestracji agentów AI zamiast tradycyjnych zespołów programistycznych.",
      subsections: [
        {
          id: "pmp",
          code: "PMP",
          title: "PMP (Project Management Professional - PMI)",
          badge: "Złoty Standard Globalny",
          description: "Najbardziej prestiżowy certyfikat zarządzania projektami na świecie, wydawany przez Project Management Institute (USA). Oparty o PMBOK Guide 7th Edition i Process Groups Practice Guide. Obejmuje 3 domeny: People (Ludzie - 42%), Process (Procesy - 50%) oraz Business Environment (Środowisko biznesowe - 8%).",
          certificationDetails: {
            issuer: "Project Management Institute (PMI, USA)",
            difficulty: "Bardzo wysoka (jeden z najtrudniejszych egzaminów menedżerskich na świecie)",
            validity: "3 lata (wymaga zdobycia 60 punktów PDU na recertyfikację)",
            examFormat: "180 pytań (wielokrotny wybór, wielokrotna odpowiedź, przeciągnij i upuść, punkty na wykresie), 230 minut, 2 przerwy po 10 min",
            targetAudience: "Doświadczeni kierownicy projektów, dyrektorzy operacyjni, liderzy transformacji cyfrowej",
            passingScore: "Ocena psychometryczna (szacunkowo 68-75% poprawnych odpowiedzi)",
            costEstimate: "405 USD (dla członków PMI) / 575 USD (dla osób bez członkostwa)"
          },
          keyFormulasOrRules: [
            "Wskaźnik kosztu (Cost Performance Index): CPI = EV / AC (CPI > 1.0 = oszczędność budżetu, CPI < 1.0 = przekroczenie kosztów)",
            "Wskaźnik harmonogramu (Schedule Performance Index): SPI = EV / PV (SPI > 1.0 = wyprzedzenie harmonogramu)",
            "Szacowanie trójpunktowe PERT (Rozkład Beta): Te = (O + 4M + P) / 6 (Optymistyczny, Najbardziej prawdopodobny, Pesymistyczny)",
            "Odchylenie standardowe PERT: σ = (P - O) / 6, Wariancja: σ² = ((P - O) / 6)²",
            "Szacunek przy ukończeniu: EAC = BAC / CPI (gdy dotychczasowa tendencja kosztowa utrzyma się do końca)",
            "Ścieżka krytyczna (Critical Path): Najdłuższa ścieżka w sieci projektu o zerowym całkowitym zapasie czasu (Float / Slack = 0)"
          ],
          examTrap: "Pytania sytuacyjne PMI niemal nigdy nie nagradzają natychmiastowego zgłaszania problemu do sponsora lub żądania dodatkowego budżetu. Prawidłowa odpowiedź PMP zawsze zaczyna się od: oceny wpływu (impact assessment), przeanalizowania rejestru ryzyk, zaktualizowania rejestru problemów i wypracowania opcji naprawczych z zespołem przed uruchomieniem procedury Change Request.",
          theorySummary: [
            "PMBOK 7 opiera się na 12 Zasadach Zarządzania Projektami (m.in. Stewardship, Team, Stakeholders, Value, Systems Thinking, Leadership, Tailoring, Quality, Complexity, Risk, Adaptability, Change).",
            "8 Domen Efektywności Projektu (Project Performance Domains): Stakeholders, Team, Development Approach & Life Cycle, Planning, Project Work, Delivery, Measurement, Uncertainty.",
            "Podejścia: Predictive (predykcyjne/kaskadowe), Adaptive (zwinne/iteracyjne) oraz Hybrid (łączenie predykcyjnego planowania budżetu z iteracyjnym dostarczaniem oprogramowania przez AI).",
            "Zarządzanie Wartością Wypracowaną (Earned Value Management - EVM): integracja zakresu, czasu i kosztu w obiektywne wskaźniki mierzalne dla sponsora i klienta.",
            "Zarządzanie Ryzykiem: Strategie dla zagrożeń (Avoid, Mitigate, Transfer, Accept, Escalate) oraz dla szans (Exploit, Enhance, Share, Accept, Escalate).",
            "Inżynieria wymagań i WBS (Work Breakdown Structure): dekompozycja 100% zakresu projektu na pakiety robocze (Work Packages) z przypisanym słownikiem WBS."
          ],
          industryApplications: {
            itAndSoftware: [
              "Orkiestracja autonomicznych agentów AI (Claude, Cursor, Copilot) w modelu hybrydowym: predykcyjne określenie kamieni milowych przyrostu z iteracyjnym vibe-codingiem.",
              "Tworzenie precyzyjnych specyfikacji technicznych (Spec-Driven Development) i kontraktów API (OpenAPI 3.0), stanowiących ścisły 'Project Scope Statement' dla modeli językowych.",
              "Architektury serverless (Cloudflare Pages, Workers, Supabase D1/KV) redukujące koszty infrastruktury z 50 000 PLN/rok do ułamka kosztów operacyjnych.",
              "Wdrażanie zautomatyzowanego testowania CI/CD (GitHub Actions), gdzie metryki EVM mierzą faktyczny postęp weryfikowany testami jednostkowymi i E2E (Playwright)."
            ],
            graphicsAndMultimedia: [
              "Zarządzanie pipeline'em produkcyjnym assetów 2D/3D i wideo przy użyciu generatywnego AI (Midjourney v6, Stable Diffusion XL, Runway Gen-3, Blender AI).",
              "Harmonogramowanie etapów preprodukcji, moodboardingu, concept artu i postprodukcji z redukcją czasu z 6 tygodni do 4 dni.",
              "Audyt praw autorskich i czystości licencyjnej wygenerowanych materiałów multimedialnych dla kampanii telewizyjnych i platform streamingowych.",
              "Zarządzanie zapasem czasu (Float) w renderowaniu zaawansowanych scen 3D i kompozycji VFX w silnikach czasu rzeczywistego (Unreal Engine 5)."
            ],
            ecommerceAndMarketing: [
              "Wdrożenia wielokanałowych platform e-commerce (Shopify Plus, Headless Next.js Commerce) z rygorystycznym budżetem i terminem przed Black Friday.",
              "Kampanie Performance Max i automatyzacje Meta Ads oparte o dynamicznie generowane warianty kreacji reklamowych (Creative Automation).",
              "Integracja systemów ERP, CRM (HubSpot/Salesforce) i bramek płatności (Stripe, BLIK) z monitorowaniem wskaźnika SPI pod kątem daty go-live.",
              "Zarządzanie ryzykiem wydajnościowym pod dużym obciążeniem (stress testy serwerów, polityka cache Cloudflare CDN, optymalizacja Core Web Vitals)."
            ],
            otherTechIndustries: [
              "FinTech: Wdrożenia zgodne z normami PCI-DSS, PSD2 i KNF z rygorystyczną matrycą śledzenia wymagań (Traceability Matrix).",
              "MedTech & HealthTech: Projekty telemedyczne z audytem RODO/GDPR i certyfikacją wyrobów medycznych klasy IIa/b.",
              "EdTech: Skalowanie platform e-learningowych na miliony jednoczesnych użytkowników z automatycznym lektorem AI i transkrypcją."
            ]
          },
          useCase: {
            scenarioTitle: "Budowa dedykowanej platformy B2B dla dystrybutora części z budżetem 80 000 PLN",
            clientSituation: "Tradycyjny software house wycenił wdrożenie platformy zamówień B2B z integracją ERP na 350 000 PLN i 9 miesięcy pracy 6-osobowego zespołu. Klient dysponował budżetem 80 000 PLN i terminem 6 tygodni do targów branżowych.",
            actionTaken: "Certyfikowany PMP zorganizował projekt hybrydowy: opracował kartę projektu (Project Charter) i ścisły WBS. Zamiast zatrudniać koderów, PM użył Cursor AI i agentów Claude do wygenerowania nowoczesnej aplikacji Next.js na Cloudflare Pages z bazą Supabase Postgres.",
            aiAdvantage: "Pakiety robocze (Work Packages) z WBS były zamieniane bezpośrednio na prompty architektoniczne. Kod frontendowy i backendowy powstał w 10 dni, kolejne 7 dni przeznaczono na testy integracji API z ERP klienta. Koszt wytworzenia: 12 000 PLN na subskrypcje AI i infrastrukturę, marża projektu wyniosła 85%.",
            clientResult: "Aplikacja wdrożona 10 dni przed terminem targów, obsłużyła w pierwszym tygodniu zamówienia o wolumenie 1.4 mln PLN. Klient podpisał stały kontrakt SLA."
          },
          beyondCertification: {
            title: "Od rygorystycznej biurokracji do 'Prompt-Driven Project Management'",
            keyTakeaway: "Egzamin PMP kładzie ogromny nacisk na formalne rejestry (Change Log, Issue Log, Stakeholder Engagement Plan). W nowoczesnej praktyce rynkowej PM nie tworzy tych dokumentów ręcznie – automatyzuje ich powstawanie za pomocą zintegrowanych asystentów AI z repozytoriami Git i zadaniami w Jira/Linear.",
            practicalAiTip: "Używaj AI do natychmiastowego generowania macierzy RACI i rejestru ryzyk Monte Carlo na podstawie surowej transkrypcji spotkania ze sponsorem: 'Przeanalizuj poniższą rozmowę z klientem, wyodrębnij 10 kluczowych ryzyk technologicznych i biznesowych, przypisz prawdopodobieństwo i wpływ (1-5), zaproponuj strategię mitygacji i stwórz gotową tabelę Markdown'."
          },
          kurakBriefcaseTip: "Niebieski Kurak radzi: Na egzaminie PMP, gdy masz dylemat między 'zrób to natychmiast' a 'przeanalizuj wpływ na rejestr ryzyk', zawsze wybieraj analizę! A w pracy z klientem: nigdy nie pytaj 'jakiego języka programowania użyć?', tylko 'jaki jest kluczowy wskaźnik sukcesu biznesowego tego wdrożenia?'.",
          youtubeVideos: [
            {
              title: "PMP Certification Full Course - Learn PMP Fundamentals in 12 Hours",
              channel: "Edureka / Simplilearn",
              url: "https://www.youtube.com/results?search_query=PMP+Certification+Full+Course+PMBOK+7",
              searchQuery: "PMP Certification Full Course PMBOK 7",
              durationEstimate: "11h 45m",
              description: "Kompleksowy przegląd 12 zasad i 8 domen PMBOK 7, wskaźniki EVM (CPI, SPI) oraz techniki zdawania pytań sytuacyjnych."
            },
            {
              title: "EVM Formulas Explained - PMP Exam Prep (CPI, SPI, EAC, VAC)",
              channel: "Ricardo Vargas / PMP Lounge",
              url: "https://www.youtube.com/results?search_query=EVM+Formulas+Explained+PMP+Earned+Value",
              searchQuery: "EVM Formulas Explained PMP Earned Value",
              durationEstimate: "24m",
              description: "Przejrzyste wyprowadzenie wszystkich wzorów Zarządzania Wartością Wypracowaną z przykładami graficznymi."
            }
          ],
          practiceQuestions: [
            {
              id: 101,
              text: "Wskaźnik CPI projektu wynosi 0.82, a wskaźnik SPI wynosi 1.15. Jaki jest aktualny stan Twojego projektu?",
              options: [
                "Projekt przekracza budżet, ale wyprzedza harmonogram.",
                "Projekt mieści się w budżecie, ale jest opóźniony.",
                "Projekt przekracza budżet i jest opóźniony.",
                "Projekt generuje oszczędności i wyprzedza harmonogram."
              ],
              correctAnswerIndex: 0,
              explanation: "CPI = EV / AC. Wartość poniżej 1.0 oznacza, że za każdą wydaną złotówkę wypracowano wartość tylko 0.82 zł (przekroczenie kosztów). SPI = EV / PV powyżej 1.0 oznacza, że tempo prac jest szybsze niż planowano (wyprzedzenie harmonogramu).",
              kurakTip: "Pamiętaj regułę Kuraka: CPI/SPI > 1 to powód do dumy, poniżej 1 to telefon do księgowej!"
            },
            {
              id: 102,
              text: "Podczas wdrożenia aplikacji klient zgłasza kluczową zmianę w architekturze autoryzacji użytkowników. Co powinien zrobić Project Manager w pierwszej kolejności?",
              options: [
                "Wdrożyć zmianę natychmiast, aby zadowolić klienta.",
                "Odrzucić zmianę, ponieważ harmonogram jest zamrożony.",
                "Ocenić wpływ proponowanej zmiany na zakres, czas, koszt i ryzyko projektu.",
                "Zwrócić się do sponsora z prośbą o natychmiastowe zwiększenie budżetu."
              ],
              correctAnswerIndex: 2,
              explanation: "W standardzie PMI każda prośba o zmianę musi najpierw przejść przez formalną analizę wpływu (Impact Analysis) na potrójne ograniczenie projektu, zanim trafi do Change Control Board (CCB) lub sponsora.",
              kurakTip: "Niebieski Kurak przypomina: Zmiana bez analizy to prosta droga do Scope Creep i katastrofy budżetowej."
            }
          ]
        },
        {
          id: "prince2",
          code: "PRINCE2",
          title: "PRINCE2 (Foundation & Practitioner - AXELOS)",
          badge: "Standard Europejski & Sektor Publiczny",
          description: "PRojects IN Controlled Environments – wiodąca w Europie, Wielkiej Brytanii i korporacjach metodyka procesowa wydawana przez PeopleCert / AXELOS. Opiera się na 7 Zasadach, 7 Tematach (Praktykach w PRINCE2 7) i 7 Procesach. Gwarantuje pełną kontrolę zarządczą i stałą zasadność biznesową.",
          certificationDetails: {
            issuer: "AXELOS / PeopleCert (Wielka Brytania)",
            difficulty: "Średnia (Foundation) / Wysoka (Practitioner - studium przypadku)",
            validity: "Foundation - bezterminowo; Practitioner - 3 lata (wymaga recertyfikacji lub członkostwa PeopleCert Plus)",
            examFormat: "Foundation: 60 pytań testowych, 60 min, próg 60% (36/60). Practitioner: 68 pytań scenariuszowych, 150 min, open book, próg 60% (41/68)",
            targetAudience: "Kierownicy projektów w administracji publicznej, korporacjach europejskich, telekomach i bankowości",
            passingScore: "60% punktów w obu egzaminach",
            costEstimate: "Foundation ~350-450 EUR / Practitioner ~450-550 EUR (w zależności od centrum egzaminacyjnego)"
          },
          keyFormulasOrRules: [
            "7 Zasad PRINCE2 (Principles): Ciągła zasadność biznesowa, Korzystanie z doświadczeń, Zdefiniowane role i obowiązki, Zarządzanie etapowe, Zarządzanie z wykorzystaniem tolerancji, Koncentracja na produktach, Dostosowanie do warunków projektu.",
            "7 Praktyk/Tematów (Practices): Uzasadnienie Biznesowe (Business Case), Organizacja, Jakość, Plany, Ryzyko, Zmiana, Postępy.",
            "7 Procesów (Processes): Przygotowanie projektu (SU), Inicjowanie projektu (IP), Zarządzanie strategiczne projektem (DP), Sterowanie etapem (CS), Zarządzanie dostarczaniem produktów (MP), Zarządzanie końcem etapu (SB), Zamykanie projektu (CP).",
            "Tolerancje (Tolerances): 6 wymiarów kontroli – Czas, Koszt, Zakres, Jakość, Korzyści, Ryzyko.",
            "Raport o Wyjątku (Exception Report): Obowiązkowo generowany przez PM dla Komitetu Sterującego w momencie prognozy przekroczenia dowolnej tolerancji."
          ],
          examTrap: "W PRINCE2 Project Manager NIE MA uprawnień do podejmowania decyzji o kontynuowaniu projektu, jeśli przekroczona zostanie tolerancja etapu. Nie może też samodzielnie zmienić Uzasadnienia Biznesowego. Jedynym organem decyzyjnym jest Komitet Sterujący (Project Board reprezentujący Klienta, Użytkownika i Dostawcę).",
          theorySummary: [
            "Zarządzanie przez wyjątki (Management by Exception): Komitet Sterujący deleguje codzienne zarządzanie do PM-a, interweniując tylko w przypadku zgłoszenia wyjątku.",
            "Zarządzanie etapowe (Manage by Stages): Dzielenie projektu na minimum 2 etapy zarządcze (Etap inicjowania + przynajmniej jeden etap realizacji).",
            "Opisy Produktów (Product Descriptions): Ścisłe kryteria jakościowe i tolerancje odbiorcze dla każdego dostarczanego komponentu.",
            "Uzasadnienie Biznesowe (Business Case): Dokument 'żywy', rewalidowany na koniec każdego etapu (Proces SB). Jeśli projekt traci zasadność finansową, musi zostać natychmiast przerwany."
          ],
          industryApplications: {
            itAndSoftware: [
              "PRINCE2 Agile: Połączenie rygoru zarządczego Komitetu Sterującego z dynamicznym dostarczaniem produktów przez autonomiczne mikro-zespoły i AI.",
              "Określenie kryteriów tolerancji jakościowych w kodzie: automatyczne progi pokrycia testami (np. min. 80% coverage w Vitest) jako kryterium akceptacji pakietu roboczego.",
              "Dokumentacja architektury oprogramowania w formie zwięzłych Product Descriptions, które stanowią bezpośredni wsad do promptów AI generujących aplikacje."
            ],
            graphicsAndMultimedia: [
              "Etapowe zatwierdzanie koncepcji kreatywnej (Key Visual, Biblia Stylu) przez Komitet Sterujący przed rozpoczęciem kosztownej generacji assetów 3D.",
              "Zarządzanie tolerancjami jakościowymi w postprodukcji wideo (rozdzielczość 4K/8K, bitrate, color grading, zgodność ze standardami nadawczymi EBU R128).",
              "Pakiety robocze (Work Packages) dla zewnętrznych freelancerów i grafików AI z rygorystycznym Product Description."
            ],
            ecommerceAndMarketing: [
              "Wdrożenia e-commerce w przetargach publicznych i dużych grupach kapitałowych wymagających formalnego raportowania etapu (Stage Gate).",
              "Business Case wdrożenia marketplace'u: precyzyjna analiza ROI z uwzględnieniem oszczędności generowanych przez chatboty obsługi klienta oparte na LLM.",
              "Zarządzanie ryzykiem vendor-lockin przy wyborze platformy SaaS (Shopify vs BigCommerce vs custom headless)."
            ],
            otherTechIndustries: [
              "Projekty smart-city, systemy bilingowe telekomunikacji oraz wdrożenia ERP w samorządach i instytucjach unijnych."
            ]
          },
          useCase: {
            scenarioTitle: "Wdrożenie portalu dla urzędu wojewódzkiego w procedurze zamówień publicznych",
            clientSituation: "Instytucja publiczna wymagała rygorystycznego wdrożenia portalu informacyjno-usługowego zgodnie z normami WCAG 2.1 AA i metodyką PRINCE2, z precyzyjnym komitetem odbiorczym i budżetem 120 000 PLN.",
            actionTaken: "PM przygotował PID (Project Initiation Documentation), zdefiniował etapy zarządcze i Opisy Produktów dla każdego modułu. Zamiast rocznego projektu kodowania, interfejs i komponenty WCAG wygenerowano z pomocą AI w 3 tygodnie.",
            aiAdvantage: "Zautomatyzowany audyt kodu i kontrastów przez AI wyeliminował błędy dostępności na bieżąco, a raporty z końca etapu (End Stage Reports) generowały się automatycznie z commitów w Git.",
            clientResult: "Komitet Sterujący odebrał projekt bez ani jednego Raportu o Wyjątku. Czas wdrożenia skrócono o 70%, a instytucja zaoszczędziła 140 000 PLN z puli rezerwowej."
          },
          beyondCertification: {
            title: "PRINCE2 7 zasilany sztuczną inteligencją",
            keyTakeaway: "Najczęstszy zarzut wobec PRINCE2 to 'zbyt duża ilość papierologii'. Zastosowanie modeli językowych pozwala na automatyczne generowanie rejestrów, kart produktów i raportów z postępów na podstawie telemetryki projektowej w kilka sekund.",
            practicalAiTip: "Stwórz szablon promptu: 'Działasz jako Asystent PM PRINCE2. Na podstawie poniższych danych z zakończonego etapu przygotuj formalny End Stage Report dla Komitetu Sterującego, uwzględniając wskaźniki wykorzystania tolerancji kosztu i czasu oraz zaktualizowany Business Case'."
          },
          kurakBriefcaseTip: "Kurak zdradza sekret: W PRINCE2 pamiętaj o trzech perspektywach w Komitecie: Biznes (kto płaci), Użytkownik (kto będzie klikał) i Dostawca (kto to buduje). Jeśli wszyscy trzej mają zielone światło w aktówce, projekt jest nie do zatrzymania!",
          youtubeVideos: [
            {
              title: "PRINCE2 Explained in 30 Minutes - Principles, Themes & Processes",
              channel: "Project Management Videos",
              url: "https://www.youtube.com/results?search_query=PRINCE2+Explained+Principles+Processes",
              searchQuery: "PRINCE2 Explained Principles Processes",
              durationEstimate: "32m",
              description: "Kompletna mapa drogowa metodyki PRINCE2: jak 7 zasad łączy się z procesami od SU do CP."
            }
          ],
          practiceQuestions: [
            {
              id: 103,
              text: "Która z poniższych sytuacji wymaga od Project Managera natychmiastowego sporządzenia Raportu o Wyjątku (Exception Report)?",
              options: [
                "Członek zespołu zgłosił jednodniowe zwolnienie lekarskie.",
                "Prognozowany koszt etapu przekroczy przyznaną przez Komitet Sterujący tolerancję o 12%.",
                "Klient pochwalił wersję demonstracyjną aplikacji.",
                "Zakończono etap zgodnie z planem."
              ],
              correctAnswerIndex: 1,
              explanation: "W PRINCE2 prognoza przekroczenia dowolnej z przyznanych tolerancji (czasu, kosztu, jakości, zakresu, ryzyka, korzyści) odbiera PM-owi mandat decyzyjny i nakłada obowiązek złożenia Raportu o Wyjątku do Komitetu Sterującego.",
              kurakTip: "Niebieski Kurak ostrzega: Przekroczenie tolerancji bez Raportu o Wyjątku to kardynalny błąd na egzaminie Practitioner!"
            }
          ]
        },
        {
          id: "ipma",
          code: "IPMA",
          title: "IPMA (International Project Management Association - Poziomy D do A)",
          badge: "Kompetencje 4-L-C & ICB4",
          description: "Międzynarodowy 4-poziomowy system certyfikacji kompetencji (4-L-C): Poziom D (Certified Project Management Associate), Poziom C (Certified Project Manager), Poziom B (Certified Senior Project Manager), Poziom A (Certified Projects Director). Oparty na Wytycznych Kompetencji Indywidualnych ICB4 (IPMA Individual Competence Baseline).",
          certificationDetails: {
            issuer: "IPMA (International Project Management Association, Szwajcaria) / IPMA Polska",
            difficulty: "Zróżnicowana: Poziom D (test wiedzy dla początkujących), Poziomy C-A (weryfikacja udokumentowanych lat doświadczenia i wywiad z asesorami)",
            validity: "5 lat (wymaga re-certyfikacji na podstawie udokumentowanego rozwoju zawodowego)",
            examFormat: "Poziom D: egzamin pisemny (100 pytań testowych + zadania otwarte/obliczeniowe), 180 minut. Poziomy C-A: Raport z projektu (STAR method) + warsztat symulacyjny + rozmowa z dwoma asesorami",
            targetAudience: "Kierownicy projektów w Europie Środkowej, inżynierowie, specjaliści ceniący holistyczne kompetencje miękkie i twarde",
            passingScore: "Min. 60% z każdego z 3 obszarów kompetencji",
            costEstimate: "Poziom D: ~1300-1800 PLN / Poziom C: ~4500-6000 PLN / Poziom A: ~10 000+ PLN"
          },
          keyFormulasOrRules: [
            "Oko Kompetencji IPMA (Eye of Competence): 3 domeny – People (Ludzie - 10 elementów kompetencji), Practice (Praktyka - 14 elementów), Perspective (Perspektywa/Otoczenie - 5 elementów).",
            "Zarządzanie interesariuszami: Macierz Wpływ / Zainteresowanie (Mendelow Power-Interest Grid): Zarządzaj ściśle, Utrzymuj satysfakcję, Informuj na bieżąco, Monitoruj.",
            "Formuła sukcesu projektu: Sukces zarządzania projektem (w ramach ograniczeń) vs Sukces produktu (realizacja celów biznesowych i zadowolenie użytkownika)."
          ],
          examTrap: "IPMA ocenia nie tylko to, co wiesz (wiedza podręcznikowa), ale jak się zachowujesz (kompetencje behawioralne: przywództwo, negocjacje, asertywność, etyka). Odpowiedź ignorująca emocje zespołu lub opór interesariuszy jest w IPMA zawsze uznawana za błędną.",
          theorySummary: [
            "Kompetencje Ludzkie (People): autorefleksja i motywacja, uczciwość osobista i niezawodność, komunikacja interpersonalna, relacje i zaangażowanie, przywództwo, praca zespołowa, rozwiązywanie konfliktów i kryzysów, pomysłowość, negocjacje, zorientowanie na wyniki.",
            "Kompetencje Praktyczne (Practice): projektowanie projektu, wymagania i cele, zakres, czas, organizacja i informacja, jakość, finanse, zasoby, zamówienia, planowanie i kontrola, ryzyko i szanse, interesariusze, zmiana i transformacja.",
            "Kompetencje Perspektywiczne (Perspective): strategia, ład i struktura, zgodność z prawem i regulacje, władza i interesy, kultura i wartości."
          ],
          industryApplications: {
            itAndSoftware: [
              "Facylitacja pracy z zespołami rozproszonymi (Remote Work) i zarządzanie kulturą organizacyjną w erze wirtualnych współpracowników AI.",
              "Negocjacje umów na usługi chmurowe i licencje LLM z perspektywy prawa IT, ochrony danych osobowych i compliance.",
              "Łagodzenie oporu pracowników przed automatyzacją procesów za pomocą narzędzi generatywnych."
            ],
            graphicsAndMultimedia: [
              "Zarządzanie kreatywnym zespołem projektantów: techniki budowania zaufania i przezwyciężania syndromu 'AI zabierze nam pracę'.",
              "Kompetencje negocjacyjne przy zmianach briefu graficznego przez niekompetentnych interesariuszy korporacyjnych.",
              "Budowanie kultury innowacji w agencji reklamowej poprzez hackathony narzędzi generative media."
            ],
            ecommerceAndMarketing: [
              "Koordynacja wielobranżowych zespołów e-commerce (programiści, copywriterzy, specjaliści SEO, media buyerzy, obsługa magazynu).",
              "Zarządzanie konfliktami priorytetów między działem sprzedaży a zespołem deweloperskim wdrażającym nową platformę.",
              "Budowanie relacji ze strategicznymi partnerami logistycznymi i marketplace (Allegro, Amazon, InPost)."
            ],
            otherTechIndustries: [
              "Projekty badawczo-rozwojowe (B+R) z dofinansowaniem NCBiR i UE, wymagające formalnego potwierdzenia kompetencji menedżerskich."
            ]
          },
          useCase: {
            scenarioTitle: "Zarządzanie kryzysem wdrożeniowym systemu multimedialnego w sieci 40 salonów retail",
            clientSituation: "Poprzedni wykonawca porzucił wdrożenie interaktywnych kiosków i digital signage w 40 salonach. Zespół klienta był sfrustrowany, zdemotywowany i wrogo nastawiony do nowych technologii.",
            actionTaken: "Certyfikowany kierownik projektu IPMA przeprowadził warsztaty empatii (People Competence), zmapował ukryte obawy pracowników salonów i przedstawił plan naprawczy. Stworzono lekki system oparty na Cloudflare i tabletach, z automatycznym generowaniem ofert przez AI.",
            aiAdvantage: "AI przygotowało spersonalizowane interfejsy dla każdego salonu w 48 godzin, eliminując konieczność kosztownych zmian sprzętowych.",
            clientResult: "Wskaźnik akceptacji personelu wzrósł z 15% do 96%. System ruszył w pełnej skali w 30 dni, a sprzedaż promocyjna w salonach wzrosła o 34%."
          },
          beyondCertification: {
            title: "Oko Kompetencji w dobie Agentów AI",
            keyTakeaway: "W miarę jak twarde zadania obliczeniowe (harmonogramy, budżety) przejmuje AI, wartość Project Managera przesuwa się w stronę kompetencji personalnych i perspektywicznych: budowania relacji, etyki, rozwiązywania konfliktów i wizji biznesowej.",
            practicalAiTip: "Użyj AI jako sparingpartnera przed trudną rozmową ze sponsorem: 'Wciel się w rolę sceptycznego dyrektora finansowego, który uważa, że budżet na wdrożenie AI jest za wysoki. Zadawaj mi trudne pytania, a ja będę ćwiczyć argumentację opartą na ROI'."
          },
          kurakBriefcaseTip: "Kurak wie najlepiej: Możesz znać na pamięć wszystkie wykresy Gantta, ale jeśli nie potrafisz wysłuchać klienta i zażegnać kłótni w zespole, projekt utonie. Kompetencje People to serce aktówki każdego dojrzałego PM-a!",
          youtubeVideos: [
            {
              title: "IPMA ICB4 Competence Elements Overview - Eye of Competence",
              channel: "IPMA International / PM Channel",
              url: "https://www.youtube.com/results?search_query=IPMA+ICB4+Eye+of+Competence",
              searchQuery: "IPMA ICB4 Eye of Competence",
              durationEstimate: "18m",
              description: "Przegląd 29 elementów kompetencji z wytycznych ICB4 z naciskiem na egzamin IPMA-D i C."
            }
          ],
          practiceQuestions: [
            {
              id: 104,
              text: "Według wytycznych IPMA ICB4, do którego obszaru kompetencji zalicza się 'Uczciwość osobista i niezawodność' (Personal integrity and reliability)?",
              options: [
                "Praktyka (Practice)",
                "Ludzie (People)",
                "Perspektywa (Perspective)",
                "Strategia (Strategy)"
              ],
              correctAnswerIndex: 1,
              explanation: "Uczciwość osobista i niezawodność to fundamentalny element kompetencji osobistych i interpersonalnych należący do domeny People (Ludzie) w oku kompetencji IPMA ICB4.",
              kurakTip: "Niebieski Kurak przypomina: Ludzie to fundament – bez uczciwości żaden projekt nie utrzyma się na rynku."
            }
          ]
        },
        {
          id: "capm",
          code: "CAPM",
          title: "CAPM (Certified Associate in Project Management - PMI)",
          badge: "Start Kariery & Junior PM",
          description: "Oficjalny certyfikat wejściowy od PMI dla osób rozpoczynających karierę w zarządzaniu projektami. Opiera się na standardach PMBOK Guide 7th Edition, Process Groups Practice Guide oraz zwinnych podejściach Agile i Business Analysis. Nie wymaga wieloletniego doświadczenia, stanowiąc idealny start dla Junior PM-ów, analityków i studentów.",
          certificationDetails: {
            issuer: "Project Management Institute (PMI, USA)",
            difficulty: "Średnia (idealna baza pojęciowa przed podejściem do PMP)",
            validity: "3 lata (wymaga 15 punktów PDU na recertyfikację)",
            examFormat: "150 pytań, 180 minut, pytania wielokrotnego wyboru, test komputerowy online lub w ośrodku Pearson VUE",
            targetAudience: "Junior Project Managerowie, koordynatorzy projektów, specjaliści IT chcący wejść w ścieżkę menedżerską",
            passingScore: "Ocena psychometryczna PMI (~70%)",
            costEstimate: "225 USD (członkowie PMI) / 300 USD (osoby bez członkostwa)"
          },
          keyFormulasOrRules: [
            "Podstawy EVM: CV = EV - AC (Odchylenie kosztu), SV = EV - PV (Odchylenie harmonogramu).",
            "Karta Projektu (Project Charter): Dokument formalnie powołujący projekt i dający PM-owi uprawnienia do dysponowania zasobami organizacji.",
            "Rejestr Interesariuszy (Stakeholder Register): Identyfikacja, ocena wpływu i planowanie strategii angażowania.",
            "Cykl Deminga (PDCA): Plan - Do - Check - Act jako uniwersalna pętla kontroli jakości."
          ],
          examTrap: "Pytania CAPM często testują precyzyjną terminologię wejść i wyjść (Inputs, Tools & Techniques, Outputs - ITTO). Pamiętaj, że Karta Projektu NIE JEST tworzona przez PM-a, lecz przez Sponsora lub inicjatora projektu, choć PM może pomagać w jej sporządzeniu.",
          theorySummary: [
            "Zrozumienie różnicy między operacjami bieżącymi (Operations - ciągłe i powtarzalne) a projektem (Project - tymczasowy i unikalny produkt/usługa).",
            "Trójkąt Ograniczeń (Triple Constraint): Zakres, Czas, Koszt z nadrzędnym wymogiem Jakości.",
            "Cykle życia: Predykcyjny (Waterfall), Przyrostowy (Incremental), Iteracyjny (Iterative), Zwinny (Agile).",
            "Struktury organizacyjne: Funkcjonalna, Macierzowa (Słaba, Zrównoważona, Silna) oraz Zorientowana na Projekty (Projectized). Największą władzę PM ma w strukturze Projectized."
          ],
          industryApplications: {
            itAndSoftware: [
              "Idealny certyfikat dla Junior PM-a koordynującego zadania między AI tools, a klientem biznesowym.",
              "Tworzenie rejestrów ryzyk i harmonogramów w Trello/ClickUp/Jira w oparciu o standaryzowaną terminologię PMI.",
              "Dokumentowanie sprintów i wydań MVP w projektach webowych na Cloudflare i Vercel."
            ],
            graphicsAndMultimedia: [
              "Koordynacja harmonogramu produkcji materiałów wideo, animacji i grafik social media.",
              "Standaryzacja procesu akceptacji kreacji przez klientów z wykorzystaniem cyklu PDCA.",
              "Śledzenie odchyleń czasu (Schedule Variance) w pracy ilustratorów i modelarzy 3D."
            ],
            ecommerceAndMarketing: [
              "Zarządzanie wdrożeniem kampanii marketingowej jako mini-projektem o określonym budżecie i czasie trwania.",
              "Prowadzenie rejestru interesariuszy w relacjach z influencerami i partnerami afiliacyjnymi.",
              "Przygotowywanie zwięzłych raportów statusowych dla zarządu e-sklepu."
            ],
            otherTechIndustries: [
              "Przepustka do korporacji technologicznych i międzynarodowych hubów usług wspólnych (BPO/SSC)."
            ]
          },
          useCase: {
            scenarioTitle: "Koordynacja wdrożenia bazy wiedzy z asystentem AI dla firmy logistycznej",
            clientSituation: "Średnia firma kurierska potrzebowała wewnętrznego asystenta AI dla 50 dyspozytorów. Projekt miał mały budżet (25 000 PLN) i wymagał uporządkowania setek procedur PDF.",
            actionTaken: "Junior PM z certyfikatem CAPM sporządził Kartę Projektu, stworzył rejestr interesariuszy i zastosował podejście iteracyjne. Zbudowano wyszukiwarkę semantyczną RAG na Cloudflare Vectorize i Workers AI w 2 tygodnie.",
            aiAdvantage: "Dokumenty zindeksowano automatycznie w 1 dzień. Koszt infrastruktury wyniósł 0 PLN (darmowy tier Cloudflare).",
            clientResult: "Czas odpowiedzi dyspozytorów na zapytania kierowców spadł z 8 minut do 20 sekund. Projekt zakończony z CV = +6 000 PLN (oszczędność budżetu)."
          },
          beyondCertification: {
            title: "Od teorii CAPM do roli AI Delivery Managera",
            keyTakeaway: "CAPM daje solidny fundament terminologiczny, który ułatwia precyzyjne promptowanie modeli AI. Gdy znasz dokładne definicje PMI, asystent AI generuje dla Ciebie bezbłędne plany zarządzania jakością, komunikacją i zamówieniami.",
            practicalAiTip: "Wykorzystaj AI do generowania szablonów PMI: 'Napisz kompletną Kartę Projektu (Project Charter) dla aplikacji mobilnej dla restauracji, uwzględniając cele SMART, mierzalne kryteria sukcesu, wstępny budżet 30 000 PLN i zidentyfikowane kluczowe ryzyka'."
          },
          kurakBriefcaseTip: "Kurak uczy młodych: CAPM to Twój złoty bilet na rozmowę rekrutacyjną. Gdy rzucisz rekruterowi poprawną definicją WBS i wskaźnikami EVM, od razu wiesz, że nie jesteś amatorem!",
          youtubeVideos: [
            {
              title: "CAPM Exam Prep Course - Complete PMBOK Guide 7th Edition",
              channel: "Careers in Project Management",
              url: "https://www.youtube.com/results?search_query=CAPM+Exam+Prep+PMBOK+7",
              searchQuery: "CAPM Exam Prep PMBOK 7",
              durationEstimate: "2h 15m",
              description: "Przegląd kluczowych definicji i typowych pytań testowych egzaminu CAPM."
            }
          ],
          practiceQuestions: [
            {
              id: 105,
              text: "W jakiej strukturze organizacyjnej Project Manager posiada najwyższy poziom autorytetu i pełną kontrolę nad budżetem?",
              options: [
                "Struktura funkcjonalna (Functional)",
                "Struktura słabej macierzy (Weak Matrix)",
                "Struktura silnej macierzy (Strong Matrix)",
                "Struktura zorientowana na projekty (Projectized)"
              ],
              correctAnswerIndex: 3,
              explanation: "W strukturze Projectized (zorientowanej na projekty) personel jest bezpośrednio przypisany do projektów, a Project Manager posiada niemal całkowity autorytet i kontrolę nad budżetem oraz zasobami.",
              kurakTip: "Niebieski Kurak podpowiada: W strukturze funkcjonalnej rządzi kierownik działu, w projectized – Ty jesteś kapitanem okrętu!"
            }
          ]
        }
      ]
    },
    {
      id: "scrum-master",
      number: 2,
      title: "Scrum Master",
      subtitle: "Poprawność procesu zwinnego, edukacja zespołu i usuwanie impedimetów w dobie AI",
      iconName: "Shield",
      description: "Rola służebnego przywódcy (Servant Leader), który dba o empiryzm, przejrzystość, inspekcję i adaptację. Zobacz, jak Scrum Master nowej generacji wspiera jednoosobowych twórców i małe zespoły orkiestrujące sztuczną inteligencję w dostarczaniu wartościowego przyrostu oprogramowania w każdym sprincie.",
      subsections: [
        {
          id: "psm",
          code: "PSM",
          title: "PSM (Professional Scrum Master - Scrum.org)",
          badge: "Bezterminowy Prestiż & 85% Próg",
          description: "Stworzony przez Kena Schwabera (współtwórcę Scruma). Poziomy PSM I (fundamenty), PSM II (zaawansowany Scrum Master), PSM III (mistrzostwo i głęboka ekspertyza). Egzamin uchodzi za najtrudniejszy test zwinny na rynku – wymaga aż 85% poprawnych odpowiedzi w języku angielskim, ale certyfikat jest przyznawany bezterminowo bez ukrytych opłat odnawiania.",
          certificationDetails: {
            issuer: "Scrum.org (USA)",
            difficulty: "Wysoka (wymóg 85% poprawnych odpowiedzi, podchwytliwe pytania sytuacyjne)",
            validity: "BEZTERMINOWO (certyfikat nigdy nie wygasa, brak opłat rocznych)",
            examFormat: "PSM I: 80 pytań, 60 minut, wielokrotny wybór, wielokrotna odpowiedź, prawda/fałsz. Online.",
            targetAudience: "Scrum Masterzy, Agile Coache, programiści, managerowie transformacji zwinnej",
            passingScore: "85% (68 poprawnych odpowiedzi na 80 pytań)",
            costEstimate: "PSM I: 200 USD / PSM II: 250 USD / PSM III: 500 USD"
          },
          keyFormulasOrRules: [
            "Scrum Guide 2020: 3 Filary Empiryzmu – Przejrzystość (Transparency), Inspekcja (Inspection), Adaptacja (Adaptation).",
            "5 Wartości Scruma: Zaangażowanie (Commitment), Skupienie (Focus), Otwartość (Openness), Szacunek (Respect), Odwaga (Courage).",
            "3 Odpowiedzialności (Accountabilities): Scrum Master, Product Owner, Developers (koniec ze słowem 'Role').",
            "3 Artefakty i ich Zobowiązania (Commitments): Product Backlog -> Product Goal; Sprint Backlog -> Sprint Goal; Increment -> Definition of Done.",
            "Sprint to kontener dla wszystkich innych wydarzeń: Sprint Planning, Daily Scrum (15 min), Sprint Review, Sprint Retrospective."
          ],
          examTrap: "W Scrum Guide 2020 NIE MA ról 'Project Manager', 'Team Lead' ani 'Release Manager'. Scrum Master NIE ROZDZIELA ZADAŃ i NIE ROZLICZA DEVELOPERÓW. Zespół Scrumowy jest samorządny (self-managing) – decyduje KTO, CO i JAK wykonuje. Każda odpowiedź sugerująca, że SM nakazuje wykonanie zadania, jest błędna!",
          theorySummary: [
            "Scrum Master jest prawdziwym liderem, który służy zespołowi Scrumowemu i całej organizacji (Leader who serves).",
            "Usuwanie przeszkód (Impediments): SM nie naprawia każdej błahej usterki za zespół, lecz uczy zespół, jak samodzielnie radzić sobie z barierami.",
            "Definition of Done (DoD): Formalna deklaracja stanu przyrostu, gwarantująca brak długu technologicznego i gotowość do wydania na produkcję.",
            "Daily Scrum: 15-minutowe wydarzenie wyłącznie dla Developerów służące inspekcji postępów w kierunku Celu Sprintu (Sprint Goal), a nie raportowaniu statusu dla menedżera.",
            "Sprint Goal: Jedyny nienegocjowalny element Sprintu. Jeśli w trakcie prac okazuje się, że cel traci sens biznesowy, tylko Product Owner ma władzę przerwać Sprint."
          ],
          industryApplications: {
            itAndSoftware: [
              "Facylitacja pracy w modelu 'AI-augmented Scrum': zdefiniowanie DoD obejmującego czystość kodu generowanego przez AI, brak podatności CVE i zielone testy CI/CD.",
              "Usuwanie impedimetów technicznych: wąskie gardła w limitach tokenów API (Rate Limits OpenAI/Anthropic), problemy z deploymentem na Cloudflare.",
              "Ochrona skupienia (Focus) jednoosobowego developera tworzącego aplikację z AI przed ciągłymi zmianami koncepcji ze strony klienta."
            ],
            graphicsAndMultimedia: [
              "Sprinty w produkcji multimediów: każdy sprint kończy się gotowym, wyrenderowanym fragmentem animacji lub gry (Grywalny Przyrost / Playable Slice).",
              "Definicja Ukończenia (DoD) dla grafiki: zatwierdzone formaty WebP/SVG, kompresja bezstratna, przetestowane wyświetlanie na mobile i desktop.",
              "Retrospektywa kreatywna: analiza promptów graficznych i eliminacja halucynacji silników renderujących."
            ],
            ecommerceAndMarketing: [
              "Agile Marketing Sprint: 1-tygodniowe sprinty testowania hipotez sprzedażowych i kreacji reklamowych.",
              "DoD dla kampanii e-commerce: skonfigurowany piksel konwersji, działający tracking GA4, przetestowany proces płatności w sklepie.",
              "Usuwanie impedimetów w integracjach kurierskich i płatniczych przed startem kampanii promocyjnej."
            ],
            otherTechIndustries: [
              "Transformacje zwinne w bankowości i telekomunikacji eliminujące silosy organizacyjne."
            ]
          },
          useCase: {
            scenarioTitle: "Wdrożenie sklepu internetowego z systemem subskrypcyjnym w 4 tygodniowych sprintach",
            clientSituation: "Klient chciał uruchomić e-sklep z kawą rzemieślniczą i subskrypcjami. Zespół składał się z jednego AI Architekta i grafika, ale klient codziennie dzwonił z nowymi pomysłami niszczącymi postęp prac.",
            actionTaken: "Scrum Master wdrożył rygorystyczny proces PSM: ustanowił tygodniowe sprinty, nienaruszalny Sprint Goal i nauczył klienta uczestnictwa w Sprint Review. Wszystkie nowe pomysły klienta trafiały do Product Backlogu zamiast do bieżącego sprintu.",
            aiAdvantage: "Dzięki ochronie skupienia, developer przy użyciu narzędzi AI dostarczał w pełni działający przyrost w każdy piątek (Sprint 1: katalog, Sprint 2: koszyk i Stripe, Sprint 3: portal subskrybenta, Sprint 4: automatyzacje mailowe).",
            clientResult: "Projekt zakończony w 28 dni bez nadgodzin i bez długu technologicznego. Sklep w pierwszym miesiącu zdobył 420 stałych subskrybentów."
          },
          beyondCertification: {
            title: "Scrum w świecie Solo-Deweloperów i Agentów AI",
            keyTakeaway: "Scrum Guide zakłada zespół 3-9 osób. W erze AI jeden człowiek orkiestrujący 4 wyspecjalizowanych agentów AI (architekt, koder, tester, copywriter) w praktyce stanowi cały zespół. Rola Scrum Mastera polega na utrzymaniu rygoru iteracji, inspekcji i definicji ukończenia.",
            practicalAiTip: "Uruchom AI jako Scrum Mastera na koniec sprintu: 'Przeprowadź ze mną Sprint Retrospective. Przeanalizuj listę commitów i zgłoszonych błędów z ostatniego tygodnia. Zadaj mi 3 pytania coachingowe: co poszło świetnie, co nas spowolniło i jakie jedno usprawnienie procesu wprowadzimy do następnego sprintu?'."
          },
          kurakBriefcaseTip: "Kurak pieje z zachwytu: 85% na egzaminie PSM to nie żarty! Zapamiętaj raz na zawsze: Scrum Master nie jest sekretarką, która przestawia karteczki w Jirze. SM jest strażnikiem empiryzmu, który chroni zespół przed chaosem!",
          youtubeVideos: [
            {
              title: "Scrum Master Certification (PSM I) Full Course - Pass in 1st Attempt",
              channel: "Scrum.org / Agile Digest",
              url: "https://www.youtube.com/results?search_query=PSM+I+Certification+Full+Course+Scrum.org",
              searchQuery: "PSM I Certification Full Course Scrum.org",
              durationEstimate: "4h 20m",
              description: "Szczegółowa analiza Scrum Guide 2020, podchwytliwe pytania egzaminacyjne i różnice między PSM a CSM."
            }
          ],
          practiceQuestions: [
            {
              id: 201,
              text: "Podczas trwania Sprintu Developerzy zdają sobie sprawę, że nie będą w stanie ukończyć wszystkich elementów Sprint Backlogu. Co powinni zrobić?",
              options: [
                "Scrum Master powinien natychmiast wydłużyć Sprint o kilka dni.",
                "Developerzy powinni skonsultować się z Product Ownerem i negocjować zakres prac przy zachowaniu Celu Sprintu (Sprint Goal).",
                "Developerzy powinni obniżyć kryteria w Definition of Done, aby zdążyć.",
                "Product Owner powinien natychmiast anulować Sprint."
              ],
              correctAnswerIndex: 1,
              explanation: "Zgodnie ze Scrum Guide 2020, jeśli w trakcie sprintu praca okazuje się inna niż oczekiwano, Developerzy współpracują z Product Ownerem w celu renegocjacji zakresu Sprint Backlogu, nie naruszając jednak Celu Sprintu ani Definition of Done.",
              kurakTip: "Niebieski Kurak przypomina: Długość sprintu jest zablokowana (Timebox)! Nigdy nie przedłużaj sprintu na egzaminie PSM!"
            }
          ]
        },
        {
          id: "csm",
          code: "CSM",
          title: "CSM (Certified ScrumMaster - Scrum Alliance)",
          badge: "Akredytowane Szkolenie & Praktyka",
          description: "Program certyfikacyjny stworzony przez Scrum Alliance. Wymaga obowiązkowego ukończenia 2-dniowego intensywnego warsztatu z akredytowanym trenerem CST (Certified Scrum Trainer). Kładzie potężny nacisk na facylitację, dynamikę zespołową, psychologię i rozwiązywanie dysfunkcji zespołowych.",
          certificationDetails: {
            issuer: "Scrum Alliance (USA)",
            difficulty: "Średnia (kluczowa jest obecność na warsztatach i zrozumienie ćwiczeń symulacyjnych)",
            validity: "2 lata (wymaga punktów SEU i płatnej recertyfikacji 100 USD)",
            examFormat: "50 pytań testowych, 60 minut, próg 74% (37/50 poprawnych), open book online po ukończeniu szkolenia",
            targetAudience: "Osoby preferujące naukę warsztatową pod okiem mentora, liderzy HR, menedżerowie liniowi",
            passingScore: "74% poprawnych odpowiedzi",
            costEstimate: "~2500 - 4000 PLN (cena zawiera obowiązkowy 2-dniowy kurs i podejście do testu)"
          },
          keyFormulasOrRules: [
            "Facylitacja zwinna: Techniki consensusu (Fist of Five, Dot Voting, Deciding how to decide).",
            "Model Rozwoju Zespołu Tuckmana: Forming (Formowanie) -> Storming (Burza) -> Norming (Normowanie) -> Performing (Działanie) -> Adjourning (Rozpad).",
            "5 Dysfunkcji Pracy Zespołowej wg Lencioniego: Brak zaufania, Strach przed konfliktem, Brak zaangażowania, Unikanie odpowiedzialności, Brak dbałości o wyniki."
          ],
          examTrap: "CSM kładzie nacisk na facylitację warsztatową. Błędne są odpowiedzi, w których Scrum Master rozstrzyga spór merytoryczny zespołu autorytarnie. Prawidłowa rola SM to facylitator procesu, który zadaje pytania otwarte i pomaga zespołowi dojść do porozumienia.",
          theorySummary: [
            "Praktyczne techniki facylitacji wydarzeń Scrumowych (Liberating Structures).",
            "Coaching menedżerów wyższego szczebla w zakresie rezygnacji z mikrozarządzania na rzecz autonomii zespołów.",
            "Wskaźniki zwinne: Velocity (Prędkość zespołu), Burn-down Chart (Wykres spalania prac w sprincie), Burn-up Chart.",
            "Tworzenie bezpiecznego środowiska psychologicznego (Psychological Safety) sprzyjającego innowacjom i eksperymentom."
          ],
          industryApplications: {
            itAndSoftware: [
              "Facylitacja ceremonii planowania z użyciem interaktywnych tablic Miro/Mural zintegrowanych z generowaniem historyjek przez AI.",
              "Praca z programistami nad redukcją silosów wiedzy (Silos of Knowledge) i wprowadzenie Pair Programming z asystentem AI.",
              "Wdrażanie kultury 'Fail Fast, Learn Faster' w eksperymentalnych projektach R&D."
            ],
            graphicsAndMultimedia: [
              "Facylitacja feedbacku kreatywnego (Critique Sessions) eliminująca osobiste urazy na rzecz merytorycznej oceny kompozycji.",
              "Praca z grafikami nad przełamywaniem blokady twórczej przy wsparciu promptów generatywnych.",
              "Koordynacja warsztatów Design Sprint (Google Ventures) przed startem produkcji multimediów."
            ],
            ecommerceAndMarketing: [
              "Przełamywanie silosów między działem marketingu a działem technologicznym w e-commerce.",
              "Wspólne retrospektywy po nieudanych kampaniach reklamowych w celu wyciągnięcia wniosków bez szukania winnych (Blameless Post-Mortem).",
              "Budowanie zaangażowania w realizację Celu Kwartalnego (OKR)."
            ],
            otherTechIndustries: [
              "Transformacje kultury korporacyjnej w tradycyjnych przedsiębiorstwach produkcyjnych i ubezpieczeniowych."
            ]
          },
          useCase: {
            scenarioTitle: "Zażegnanie kryzysu zaufania w zespole tworzącym aplikację FinTech",
            clientSituation: "Klient zlecił budowę portfela kryptowalutowego. Programiści nie ufali Product Ownerowi, ukrywali błędy w kodzie, a na daily scrum panowało milczenie. Terminy były zagrożone.",
            actionTaken: "Certyfikowany CSM przeprowadził serię warsztatów opartych o model Lencioniego i Liberating Structures. Zbudowano bezpieczne środowisko do zgłaszania błędów i wdrożono zautomatyzowane testy bezpieczeństwa AI jako obiektywnego arbitra jakości.",
            aiAdvantage: "Asystent AI analizował pull requesty pod kątem podatności zanim trafiały na code review, zdejmując z programistów stres związany z oceną kolegów.",
            clientResult: "Wskaźnik zaufania w zespole wzrósł o 80%, prędkość (Velocity) podwoiła się w ciągu 3 sprintów, a aplikacja pomyślnie przeszła audyt bezpieczeństwa."
          },
          beyondCertification: {
            title: "Facylitacja zwinna z asystą AI",
            keyTakeaway: "Scrum Alliance uczy głębokiej empatii i psychologii. W nowoczesnej praktyce SM wykorzystuje AI do analizy nastrojów w zespole (Sentiment Analysis na Slacku/Discordzie) oraz do błyskawicznego przygotowywania kreatywnych szablonów retrospektyw.",
            practicalAiTip: "Poproś AI o scenariusz retrospektywy: 'Zaproponuj kreatywny scenariusz 45-minutowej retrospektywy dla zespołu, który w ostatnim sprincie był przeciążony pracą. Użyj metafory Formuły 1 (Pit Stop, Paliwo, Przeszkody na torze) z konkretnymi ćwiczeniami facylitacyjnymi'."
          },
          kurakBriefcaseTip: "Kurak wie, jak rozmawiać z ludźmi: Na szkoleniu CSM nauczysz się słuchać nie tylko tego, co ludzie mówią, ale czego NIE mówią. Gdy w zespole pojawia się strach, niebieski Kurak wyciąga z aktówki empatię i stawia na szczery dialog!",
          youtubeVideos: [
            {
              title: "Scrum Master vs Agile Coach - Roles, Salary and Certification Differences",
              channel: "Agile Coach Academy",
              url: "https://www.youtube.com/results?search_query=Scrum+Master+CSM+Scrum+Alliance+Overview",
              searchQuery: "Scrum Master CSM Scrum Alliance Overview",
              durationEstimate: "22m",
              description: "Różnice w ścieżce certyfikacji Scrum Alliance i rola facylitatora w nowoczesnych organizacjach."
            }
          ],
          practiceQuestions: [
            {
              id: 202,
              text: "Podczas Daily Scrum dwóch developerów zaczyna gorącą, 10-minutową dyskusję na temat szczegółów technicznych biblioteki autoryzacji. Co powinien zrobić Scrum Master?",
              options: [
                "Pozwolić im dyskutować tak długo, aż rozwiążą problem, nawet jeśli Daily potrwa 45 minut.",
                "Przypomnieć o 15-minutowym timeboxie wydarzenia i zaproponować, aby omówili ten temat bezpośrednio po zakończeniu Daily Scrum (tzw. 16th minute).",
                "Samodzielnie podjąć decyzję, którą bibliotekę wybrać.",
                "Zgłosić niesubordynację developerów do ich przełożonego."
              ],
              correctAnswerIndex: 1,
              explanation: "Daily Scrum jest ściśle ograniczony do 15 minut. Scrum Master dba o przestrzeganie timeboxu. Szczegółowe dyskusje techniczne dwóch osób powinny odbyć się poza Daily, aby nie marnować czasu reszty zespołu.",
              kurakTip: "Niebieski Kurak przypomina: Daily to szybka synchronizacja w stronę Celu Sprintu, a nie debata akademicka!"
            }
          ]
        },
        {
          id: "dassm",
          code: "DASSM",
          title: "DASSM (Disciplined Agile Senior Scrum Master - PMI)",
          badge: "Zaawansowany Agile/Lean & Skalowanie",
          description: "Zaawansowany certyfikat wydawany przez PMI dla doświadczonych Scrum Masterów i liderów zwinnych pracujących w złożonych środowiskach korporacyjnych. Disciplined Agile (DA) to unikalny zestaw narzędzi (toolkit), który nie narzuca jednego sztywnego frameworku, lecz uczy doboru sposobu pracy (Way of Working - WoW) dopasowanego do kontekstu sytuacji.",
          certificationDetails: {
            issuer: "Project Management Institute (PMI, USA)",
            difficulty: "Bardzo wysoka (wymaga doświadczenia w DASSM/DASM i znajomości toolkitu Disciplined Agile)",
            validity: "3 lata (wymaga 21 punktów PDU na recertyfikację)",
            examFormat: "50 pytań scenariuszowych, 90 minut, online z proctoringiem Pearson VUE",
            targetAudience: "Senior Scrum Masterzy, architekci zwinności, kierownicy portfela projektów w korporacjach",
            passingScore: "Ocena psychometryczna PMI (~70%)",
            costEstimate: "Zawarty w pakiecie akredytowanego szkolenia PMI (~700-1000 USD)"
          },
          keyFormulasOrRules: [
            "Wybór Sposobu Pracy (Choose your WoW): Dopasowanie metodyki do kontekstu projektu (Context Counts).",
            "6 Cykli Życia DA: Agile (oparty na Scrumie), Lean (oparty na Kanbanie), Continuous Delivery: Agile, Continuous Delivery: Lean, Exploratory (oparty na Lean Startup), Program (duże zespoły).",
            "Piramida Zwinności Biznesowej DA: Disciplined DevOps -> Disciplined Agile IT -> Foundation -> Enterprise.",
            "Ostrza Procesowe (Process Blades): Finanse, Zaopatrzenie, Zarządzanie Ludźmi, Architektura Korporacyjna."
          ],
          examTrap: "W Disciplined Agile NIE MA 'jedynego słusznego podejścia'. Jeśli pytanie pyta: 'Co powinien zrobić Scrum Master w projekcie o wysokiej zmienności i ciągłym napływie pilnych ticketów?', w DA odpowiedzią nie jest sztywny 2-tygodniowy Scrum, lecz przejście na cykl Lean/Kanban z ciągłym przepływem.",
          theorySummary: [
            "Praktyczne skalowanie Agile bez biurokracji wielkich frameworków (alternatywa dla SAFe).",
            "Kierowanie się celami procesowymi (Process Goals) zamiast dogmatycznymi regułami.",
            "Współpraca z 'tradycyjnymi' działami korporacji: audytem, bezpieczeństwem, finansami i HR.",
            "Zarządzanie konfliktami między zespołami pracującymi w różnych metodykach (np. jeden zespół w Scrumie, drugi w Kanbanie)."
          ],
          industryApplications: {
            itAndSoftware: [
              "Łączenie wytwarzania aplikacji z AI w modelu Continuous Delivery Lean z rygorystycznymi bramkami bezpieczeństwa DevSecOps.",
              "Dobór architektury mikroserwisów i serverless pod kątem minimalizacji zależności między zespołami.",
              "Przejście ze sztywnego Scruma na przepływ Lean w projektach utrzymaniowych i supportowych."
            ],
            graphicsAndMultimedia: [
              "Skalowanie produkcji materiałów multimedialnych na wiele rynków międzynarodowych z uwzględnieniem lokalnych regulacji prawnych.",
              "Wybór cyklu Exploratory dla testowania nowatorskich formatów wideo i interaktywnych aplikacji 3D.",
              "Zarządzanie portfelem projektów kreatywnych w holdingu mediowym."
            ],
            ecommerceAndMarketing: [
              "Zwinne zarządzanie całym ekosystemem e-commerce (aplikacja mobilna, sklep webowy, systemy magazynowe, kampanie reklamowe).",
              "Dostosowanie procesów zakupowych i logistycznych do natychmiastowych zmian popytu rynkowego.",
              "Koordynacja wdrażania narzędzi AI w wielu działach firmy jednocześnie."
            ],
            otherTechIndustries: [
              "Duże instytucje finansowe, ubezpieczeniowe i medyczne przechodzące transformację z Waterfall do zwinności biznesowej."
            ]
          },
          useCase: {
            scenarioTitle: "Skalowanie platformy medycznej Telehealth w środowisku korporacyjnym",
            clientSituation: "Klient z branży medycznej budował sieć telemedyczną. Zespół programistyczny chciał pracować w Scrumie, ale dział prawny i audyt medyczny wymagały predykcyjnej dokumentacji i testów walidacyjnych.",
            actionTaken: "Senior Scrum Master z certyfikatem DASSM zastosował Disciplined Agile toolkit: wybrał cykl życia Continuous Delivery Agile z dedykowanym 'Process Blade' dla zgodności regulacyjnej. Zintegrowano generowanie raportów audytowych z pipeline'em CI/CD.",
            aiAdvantage: "Narzędzia AI przygotowywały komplet dokumentacji walidacyjnej w czasie rzeczywistym podczas każdego deploymentu, zadowalając audytorów medycznych.",
            clientResult: "Czas wydania nowej wersji systemu skrócono z 6 miesięcy do 1 tygodnia, przy zachowaniu 100% zgodności z wymogami Ministerstwa Zdrowia."
          },
          beyondCertification: {
            title: "Agile pragmatyczny zamiast dogmatycznego",
            keyTakeaway: "Największą zaletą DASSM jest uświadomienie, że metodyki są dla ludzi, a nie ludzie dla metodyk. Prawdziwy mistrz zwinności potrafi żonglować technikami Scrum, Kanban, Lean i Waterfall w zależności od tego, co maksymalizuje marżę i zadowolenie klienta.",
            practicalAiTip: "Użyj AI do doboru Sposobu Pracy (WoW): 'Przedstawiam profil mojego projektu: zespół 2-osobowy z AI, budżet 40k PLN, wysoka zmienność wymagań klienta, konieczność codziennych wdrożeń. Wykorzystując wytyczne Disciplined Agile, zarekomenduj optymalny cykl życia i cele procesowe'."
          },
          kurakBriefcaseTip: "Kurak wie jak skalować: Kiedy korporacja mówi 'u nas Scrum się nie sprawdzi, bo jesteśmy specyficzni', wyciągasz z aktówki Disciplined Agile i pokazujesz, jak dobrać Way of Working idealnie pod ich bolączki!",
          youtubeVideos: [
            {
              title: "Disciplined Agile (DA) Overview - Choose Your WoW with PMI",
              channel: "Project Management Institute (PMI)",
              url: "https://www.youtube.com/results?search_query=Disciplined+Agile+Senior+Scrum+Master+DASSM",
              searchQuery: "Disciplined Agile Senior Scrum Master DASSM",
              durationEstimate: "35m",
              description: "Oficjalny przegląd toolkitu Disciplined Agile, 6 cykli życia i filozofii Choose Your WoW."
            }
          ],
          practiceQuestions: [
            {
              id: 203,
              text: "W metodyce Disciplined Agile, który cykl życia (Life Cycle) jest najbardziej rekomendowany dla zespołów tworzących innowacyjne produkty typu Startup, gdzie kluczowe jest szybkie potwierdzenie hipotez rynkowych?",
              options: [
                "Cykl życia Agile (Agile Life Cycle)",
                "Cykl życia Exploratory (Lean Startup)",
                "Cykl życia Program (Program Life Cycle)",
                "Cykl tradycyjny (Waterfall)"
              ],
              correctAnswerIndex: 1,
              explanation: "Cykl Exploratory w Disciplined Agile bazuje bezpośrednio na idei Lean Startup (Eric Ries): Buduj - Mierz - Ucz się, służąc do szybkiej weryfikacji hipotez rynkowych minimalnym nakładem środków.",
              kurakTip: "Niebieski Kurak potwierdza: Gdy nie wiesz, czego rynek chce, cykl Exploratory ratuje przed zmarnowaniem budżetu!"
            }
          ]
        }
      ]
    },
    {
      id: "product-owner",
      number: 3,
      title: "Product Owner (Właściciel Produktu)",
      subtitle: "Maksymalizacja wartości biznesowej, zarządzanie Product Backlogiem i priorytetyzacja",
      iconName: "Target",
      description: "Jednoosobowy decydent odpowiedzialny za zwrot z inwestycji (ROI) produktu. Dowiedz się, jak współczesny Product Owner łączy analizę rynkową z błyskawicznym prototypowaniem w AI, buduje precyzyjny backlog i odrzuca pomysły klienta, które nie przynoszą zysku.",
      subsections: [
        {
          id: "pspo",
          code: "PSPO",
          title: "PSPO (Professional Scrum Product Owner - Scrum.org)",
          badge: "Maksymalizacja Wartości & EBM",
          description: "Wiodąca na świecie certyfikacja dla Właścicieli Produktu od Scrum.org. Obejmuje poziomy PSPO I, II i III. Egzamin PSPO I to 80 pytań, koszt 200 USD, a uzyskany certyfikat jest ważny dożywotnio. Skupia się na maksymalizacji wartości produktu wynikającej z pracy Developerów, zarządzaniu Product Backlogiem oraz rygorystycznym podejściu Evidence-Based Management (EBM).",
          certificationDetails: {
            issuer: "Scrum.org (USA)",
            difficulty: "Wysoka (wymóg 85% poprawnych odpowiedzi, nacisk na decyzje biznesowe)",
            validity: "BEZTERMINOWO (certyfikat nigdy nie wygasa, brak konieczności odnawiania)",
            examFormat: "PSPO I: 80 pytań, 60 minut, wielokrotny wybór, wielokrotna odpowiedź, prawda/fałsz. Online.",
            targetAudience: "Product Ownerzy, przedsiębiorcy, analitycy biznesowi, Product Managerowie",
            passingScore: "85% (68/80 punktów)",
            costEstimate: "PSPO I: 200 USD / PSPO II: 250 USD / PSPO III: 500 USD"
          },
          keyFormulasOrRules: [
            "Zarządzanie Oparte na Dowodach (Evidence-Based Management - EBM): 4 Kluczowe Obszary Wartości (Key Value Areas - KVA): Bieżąca Wartość (Current Value - CV), Wartość Niezrealizowana (Unrealized Value - UV), Czas do Wprowadzenia na Rynek (Time-to-Market - T2M), Zdolność do Innowacji (Ability to Innovate - A2I).",
            "Cechy dobrze zarządzanego Product Backlogu - akronim DEEP: Detailed appropriately, Estimated, Emergent, Prioritized.",
            "Formuła User Story: 'Jako [persona], chcę [działanie/funkcja], aby [korzyść biznesowa]'.",
            "Techniki priorytetyzacji: WSJF (Weighted Shortest Job First), MoSCoW (Must, Should, Could, Won't), Kano Model, Value vs Effort Matrix."
          ],
          examTrap: "W Scrumie Product Owner jest JEDNĄ OSOBĄ, a nie komitetem. Nawet jeśli CEO firmy żąda dodania funkcjonalności, o kolejności elementów w Product Backlogu decyduje WYŁĄCZNIE Product Owner. Odpowiedź sugerująca, że PO musi pytać o zgodę komitet sterujący, jest na egzaminie PSPO błędna!",
          theorySummary: [
            "Product Owner odpowiada za maksymalizację wartości produktu wynikającej z pracy zespołu Scrumowego.",
            "Product Goal (Cel Produktu): Zobowiązanie przypisane do Product Backlogu, opisujące przyszły stan produktu będący celem długoterminowym.",
            "Pielęgnacja Backlogu (Product Backlog Refinement): Ciągły proces dekompozycji i szacowania elementów, zajmujący zwykle do 10% czasu zespołu.",
            "Eksperymentowanie i MVP: Wypuszczanie najmniejszej wersji przyrostu weryfikującej hipotezę rynkową z realnymi użytkownikami."
          ],
          industryApplications: {
            itAndSoftware: [
              "Przekładanie wizji klienta na ustrukturyzowany Product Backlog i generowanie kodu MVP w AI (Next.js, Supabase, Cloudflare Pages).",
              "Priorytetyzacja długu technologicznego i optymalizacji architektury serverless pod kątem wskaźnika Time-to-Market.",
              "Walidacja hipotez produktowych w oparciu o analitykę telemetryczną (PostHog, Mixpanel) w czasie rzeczywistym."
            ],
            graphicsAndMultimedia: [
              "Definiowanie kryteriów akceptacji (Acceptance Criteria) dla interfejsów UI/UX i bibliotek assetów graficznych.",
              "Zarządzanie backlogiem elementów multimedialnych w grach i aplikacjach interaktywnych (priorytetyzacja assetów krytycznych dla gameplayu).",
              "Testy A/B różnych stylów graficznych i miniatur wideo za pomocą AI przed finalnym wdrożeniem."
            ],
            ecommerceAndMarketing: [
              "Maksymalizacja wskaźnika konwersji (CR) i średniej wartości koszyka (AOV) jako główne kryteria priorytetyzacji funkcji e-sklepu.",
              "Zarządzanie integracjami marketing automation (klawiatury promocyjne, systemy lojalnościowe, rekomendacje AI).",
              "Analiza wskaźnika Current Value (CV) i Unrealized Value (UV) w odniesieniu do bazy stałych klientów."
            ],
            otherTechIndustries: [
              "Zarządzanie cyklem życia aplikacji mobilnych w SaaS B2B i rynkach dwustronnych (Marketplaces)."
            ]
          },
          useCase: {
            scenarioTitle: "Zbudowanie platformy rezerwacji usług beauty z ROI osiągniętym w 2 miesiące",
            clientSituation: "Inwestor chciał stworzyć portal rezerwacyjny dla salonów fryzjerskich z listą 80 życzeń funkcjonalnych. Budżet wynosił 50 000 PLN, co według tradycyjnych wycen nie starczyłoby nawet na 20% funkcji.",
            actionTaken: "Certyfikowany PSPO przeprowadził warsztat User Story Mapping, zastosował model Kano i wyciął 65 zbędnych funkcji. Skupił się na MVP: rezerwacja wizyty w 3 kliknięciach i płatność BLIK. Aplikację wygenerowano z pomocą AI w 3 tygodnie.",
            aiAdvantage: "AI wygenerowało kompletny panel salonu i klienta oraz integrację z kalendarzem Google w 14 dni, redukując koszt deweloperski o 80%.",
            clientResult: "W pierwszym miesiącu zapisało się 90 salonów, a portal obsłużył 4500 rezerwacji. Zwrot z inwestycji (ROI) nastąpił w 60 dni od startu."
          },
          beyondCertification: {
            title: "Product Owner jako Dyrektor Przedsiębiorstwa w miniaturze",
            keyTakeaway: "Podręczniki Scruma mówią o zarządzaniu backlogiem, ale na rynku PO musi rozumieć rachunek zysków i strat (P&L), koszt pozyskania klienta (CAC) i wartość życiową (LTV). AI pozwala PO samodzielnie weryfikować prototypy bez angażowania programistów.",
            practicalAiTip: "Zamień notatkę ze spotkania z klientem w profesjonalne User Stories z kryteriami Given-When-Then: 'Przekształć poniższe wymagania biznesowe w 5 zwinnych User Stories w formacie: Jako [rola], chcę [akcja], aby [korzyść], a dla każdego z nich napisz 3 precyzyjne kryteria akceptacji w standardzie Gherkin (Given/When/Then)'."
          },
          kurakBriefcaseTip: "Kurak nie ma wątpliwości: Najważniejszym słowem w słowniku Product Ownera jest słowo 'NIE'. Jeśli dodajesz do backlogu każdą zachciankę klienta, nie jesteś Product Ownerem, tylko kelnerem przyjmującym zamówienia!",
          youtubeVideos: [
            {
              title: "PSPO I Certification Preparation - Professional Scrum Product Owner",
              channel: "Agile Training & Scrum.org Prep",
              url: "https://www.youtube.com/results?search_query=PSPO+I+Certification+Preparation+Scrum.org",
              searchQuery: "PSPO I Certification Preparation Scrum.org",
              durationEstimate: "3h 40m",
              description: "EBM, techniki szacowania wartości biznesowej, pytania egzaminacyjne z odpowiedziami i wskazówki Ken Schwabera."
            }
          ],
          practiceQuestions: [
            {
              id: 301,
              text: "W jaki sposób Product Owner powinien uporządkować elementy w Product Backlogu?",
              options: [
                "Alfabetycznie według nazwy modułu.",
                "Zawsze w oparciu o maksymalizację dostarczanej wartości biznesowej, uwzględniając ryzyko, zależności i wskaźniki EBM.",
                "Zgodnie z życzeniem najgłośniejszego interesariusza.",
                "Według kolejności zgłoszeń przez dział wsparcia technicznego."
              ],
              correctAnswerIndex: 1,
              explanation: "Główną odpowiedzialnością Product Ownera jest maksymalizacja wartości produktu. Dlatego Backlog porządkuje się biorąc pod uwagę wartość biznesową, koszt opóźnienia, ryzyko oraz strategiczne cele produktu.",
              kurakTip: "Niebieski Kurak potwierdza: Wartość biznesowa to król, a Product Owner to jej strażnik!"
            }
          ]
        },
        {
          id: "cspo",
          code: "CSPO",
          title: "CSPO (Certified Scrum Product Owner - Scrum Alliance)",
          badge: "Odkrywanie Produktu & Mapowanie",
          description: "Oficjalny certyfikat Właściciela Produktu od Scrum Alliance. Zdobywany po ukończeniu 2-dniowego interaktywnego warsztatu z trenerem CST. Kładzie ogromny nacisk na fazę Product Discovery (odkrywanie produktu), badania z użytkownikami, techniki Story Mappingu i walidację hipotez rynkowych przed napisaniem pierwszej linijki kodu.",
          certificationDetails: {
            issuer: "Scrum Alliance (USA)",
            difficulty: "Średnia (wymóg aktywnego udziału w warsztatach symulacyjnych)",
            validity: "2 lata (wymaga punktów SEU i opłaty recertyfikacyjnej)",
            examFormat: "Weryfikacja kompetencji podczas akredytowanego warsztatu z trenerem CST",
            targetAudience: "Przedsiębiorcy, menedżerowie produktu, innowatorzy startupowi",
            passingScore: "Zaliczenie ćwiczeń warsztatowych",
            costEstimate: "~2500 - 4200 PLN (obejmuje 2-dniowy warsztat z trenerem CST)"
          },
          keyFormulasOrRules: [
            "User Story Mapping (Jeff Patton): Oś pozioma (Narrative Flow / Podróż użytkownika) vs Oś pionowa (Priorytet wydań MVP).",
            "Pętla Lean Startup: Build -> Measure -> Learn z minimalnym nakładem zasobów.",
            "Koncepcja 'Job to be Done' (JTBD): Użytkownik nie kupuje produktu, lecz 'zatrudnia go' do wykonania określonego zadania.",
            "Kryteria INVEST dla historyjek: Independent, Negotiable, Valuable, Estimable, Small, Testable."
          ],
          examTrap: "CSPO przestrzega przed pułapką 'Feature Factory' (fabryki funkcji) – mierzenia sukcesu ilością wdrożonych opcji zamiast zmianą zachowania użytkowników (Outcomes over Outputs). Prawidłowa odpowiedź zawsze stawia na walidację hipotez i redukcję zbędnej pracy.",
          theorySummary: [
            "Przejście od tradycyjnego zbierania wymagań do ciągłego odkrywania produktu (Continuous Discovery).",
            "Tworzenie Person użytkowników opartych na danych behawioralnych, a nie wyobrażeniach.",
            "Techniki prototypowania low-fidelity i no-code do natychmiastowego testowania z klientami.",
            "Współpraca z zespołem deweloperskim w celu zrozumienia ograniczeń technologicznych i kosztowych."
          ],
          industryApplications: {
            itAndSoftware: [
              "Wykorzystanie AI do błyskawicznego tworzenia interaktywnych klikalnych makiet w 1 dzień przed zatwierdzeniem budżetu przez klienta.",
              "Generowanie syntetycznych person badawczych AI do wstępnego testowania copywritingu i użyteczności interfejsu.",
              "Mapowanie ścieżki użytkownika (User Journey) w aplikacjach webowych z optymalizacją czasu załadowania na Cloudflare."
            ],
            graphicsAndMultimedia: [
              "Testowanie percepcji wizualnej marki i wariantów kolorystycznych za pomocą szybkich ankiet użytkowników.",
              "Walidacja stylistyki assetów 3D i animacji przed rozpoczęciem pełnoskalowej produkcji w silniku gry.",
              "Story Mapping narracji w interaktywnych prezentacjach multimedialnych dla klientów korporacyjnych."
            ],
            ecommerceAndMarketing: [
              "Optymalizacja ścieżki zakupowej (Checkout Funnel) poprzez eliminację zbędnych kroków zidentyfikowanych w badaniach JTBD.",
              "Odkrywanie ukrytych potrzeb klientów e-sklepu i wprowadzanie innowacyjnych modeli sprzedaży (np. subskrypcje, bundles).",
              "Projektowanie ofert specjalnych w oparciu o analizę segmentacji behawioralnej."
            ],
            otherTechIndustries: [
              "Innowacje produktowe w aplikacjach bankowych, ubezpieczeniach micro-insurance i platformach SaaS."
            ]
          },
          useCase: {
            scenarioTitle: "Odkrycie i wdrożenie aplikacji mobilnej dla sieci myjni samochodowych",
            clientSituation: "Właściciel sieci 15 myjni chciał zlecić budowę skomplikowanej aplikacji za 150 000 PLN z grami i rozbudowanym programem lojalnościowym. Podejrzewano, że klienci nie będą z tego korzystać.",
            actionTaken: "CSPO przeprowadził 3-dniowe badania przy myjniach, odkrywając kluczowy 'Job to be Done': kierowcy chcą po prostu umyć auto bez wychodzenia do kasy i szukania drobnych. Zbudowano minimalistyczną aplikację PWA z płatnością Apple Pay/BLIK.",
            aiAdvantage: "PWA na Cloudflare z kodem wygenerowanym przez Cursor AI powstała w 7 dni za ułamek planowanego budżetu (18 000 PLN).",
            clientResult: "94% klientów wybrało płatność aplikacją zamiast gotówki w automatach, a przychody myjni wzrosły o 28% dzięki wyeliminowaniu kolejek."
          },
          beyondCertification: {
            title: "Prototypowanie AI jako narzędzie negocjacyjne PO",
            keyTakeaway: "Tradycyjny PO spędzał tygodnie na pisaniu specyfikacji. Nowoczesny PO idzie na spotkanie z klientem z działającym prototypem wygenerowanym przez AI w 3 godziny. To eliminuje 90% nieporozumień i niepotrzebnych dyskusji.",
            practicalAiTip: "Użyj AI do mapowania historyjek: 'Działasz jako konsultant CSPO. Dla aplikacji marketplace usług ogrodniczych przygotuj User Story Map: zdefiniuj kręgosłup narracyjny (Backbone) w 5 krokach użytkownika, a następnie rozpisz zadania na wydanie MVP, Release 2 i Release 3 zgodnie z kryteriami INVEST'."
          },
          kurakBriefcaseTip: "Kurak radzi: Nie zgaduj, czego chcą ludzie. Wyciągnij z aktówki prototyp, daj go do ręki trzem klientom i patrz, gdzie klikają. Prawda rynkowa leży w danych, a nie w opiniach dyrektorów!",
          youtubeVideos: [
            {
              title: "User Story Mapping Explained - Jeff Patton Agile Product Discovery",
              channel: "Product School / Agile Alliance",
              url: "https://www.youtube.com/results?search_query=User+Story+Mapping+Jeff+Patton+Agile",
              searchQuery: "User Story Mapping Jeff Patton Agile",
              durationEstimate: "28m",
              description: "Praktyczny warsztat mapowania historyjek użytkownika, tworzenia MVP i dekompozycji backlogu."
            }
          ],
          practiceQuestions: [
            {
              id: 302,
              text: "Co oznacza zasada 'Outcomes over Outputs' w nowoczesnym zarządzaniu produktem?",
              options: [
                "Należy mierzyć sukces liczbą dostarczonych linii kodu i zamkniętych ticketów w sprincie.",
                "Sukces produktu mierzy się realną zmianą zachowania użytkowników i korzyścią biznesową, a nie samą liczbą wyprodukowanych funkcjonalności.",
                "Programiści powinni pracować po godzinach, aby zamknąć więcej zadań.",
                "Należy zrezygnować z testowania jakości na rzecz szybszego wydania."
              ],
              correctAnswerIndex: 1,
              explanation: "Outcomes over Outputs to fundament myślenia zwinnego: liczy się rezultat i wartość (Outcome - zadowolenie, zysk, rozwiązany problem), a nie sama masa wyprodukowanych funkcji (Output), które mogą okazać się nikomu niepotrzebne.",
              kurakTip: "Niebieski Kurak ostrzega: Klient płaci za rozwiązanie problemu, a nie za wagę kodu na kilogramy!"
            }
          ]
        },
        {
          id: "spoc",
          code: "SPOC",
          title: "SPOC (Scrum Product Owner Certified - SCRUMstudy)",
          badge: "Środowisko Korporacyjne & SBOK",
          description: "Certyfikat Właściciela Produktu wydawany przez SCRUMstudy, oparty na oficjalnym podręczniku SBOK Guide (A Guide to the Scrum Body of Knowledge). Ważny na 3 lata. Skupia się na wdrażaniu i dostosowywaniu Scruma w dużych środowiskach korporacyjnych z wieloma interesariuszami i rygorystycznymi procedurami.",
          certificationDetails: {
            issuer: "SCRUMstudy (VMEdu, USA)",
            difficulty: "Średnia (test wiedzy z podręcznika SBOK Guide)",
            validity: "3 lata (wymaga punktów RCU na przedłużenie certyfikatu)",
            examFormat: "140 pytań testowych wielokrotnego wyboru, 180 minut, egzamin online proctorowany",
            targetAudience: "Menedżerowie produktu w korporacjach, konsultanci wdrożeniowi, analitycy biznesowi",
            passingScore: "Szacunkowo 70% poprawnych odpowiedzi",
            costEstimate: "~450-550 USD (często w pakiecie z materiałami szkoleniowymi SBOK)"
          },
          keyFormulasOrRules: [
            "Struktura SBOK Guide: 19 procesów Scrumowych pogrupowanych w 5 faz: Initiate, Plan and Estimate, Implement, Review and Retrospect, Release.",
            "Chief Product Owner: Koordynacja wielu Product Ownerów w programach i portfelach projektów korporacyjnych.",
            "Wizja Projektu (Project Vision Statement): Oficjalny dokument inicjujący proces tworzenia Backlogu.",
            "Kryteria Done i Kryteria Akceptacji: Różnica między Definition of Done (ogólna jakość) a Acceptance Criteria (indywidualne dla danej historyjki)."
          ],
          examTrap: "SBOK Guide wprowadza specyficzne role korporacyjne, takie jak Chief Product Owner czy Program Product Owner. W pytaniach SPOC należy ściśle odróżniać odpowiedzialności pojedynczego PO od Chief PO nadzorującego spójność całego programu.",
          theorySummary: [
            "Zarządzanie wieloma strumieniami wartości w macierzowych strukturach korporacyjnych.",
            "Tworzenie uzasadnienia biznesowego opartego na zdyskontowanych przepływach pieniężnych (DCF) i NPV.",
            "Metody estymacji korporacyjnej: Planning Poker, Fist of Five, Wideband Delphi.",
            "Zarządzanie wydaniami (Release Planning) w cyklach kwartalnych i półrocznych."
          ],
          industryApplications: {
            itAndSoftware: [
              "Koordynacja wdrażania systemów ERP/CRM z setkami powiązanych procesów biznesowych.",
              "Nadzorowanie integracji AI z systemami legacy w korporacyjnych centrach danych.",
              "Zarządzanie kontraktami B2B z dostawcami oprogramowania z rygorystycznymi SLA."
            ],
            graphicsAndMultimedia: [
              "Zarządzanie globalną biblioteką identyfikacji wizualnej (Brand Assets) dla międzynarodowej korporacji.",
              "Koordynacja kampanii multimedialnych prowadzonych jednocześnie w 12 krajach.",
              "Audyt zgodności materiałów marketingowych z wytycznymi prawnymi i korporacyjnymi."
            ],
            ecommerceAndMarketing: [
              "Zarządzanie regionalnymi wersjami platformy e-commerce na Europę Środkowo-Wschodnią.",
              "Integracja systemów lojalnościowych w sieci 500 sklepów stacjonarnych i sklepu online.",
              "Optymalizacja procesów zwrotów i reklamacji z wykorzystaniem automatycznych agentów AI."
            ],
            otherTechIndustries: [
              "Duże firmy energetyczne, banki, operatorzy telekomunikacyjni i koncerny farmaceutyczne."
            ]
          },
          useCase: {
            scenarioTitle: "Ujednolicenie systemu zgłoszeń serwisowych w holdingu 8 spółek przemysłowych",
            clientSituation: "Holding przemysłowy posiadał 8 różnych systemów obsługi zgłoszeń serwisowych, generując chaos i roczne koszty licencyjne rzędu 400 000 PLN.",
            actionTaken: "Certyfikowany SPOC objął rolę Chief Product Ownera, stworzył wspólną Wizję Projektu i zunifikowany Backlog. Wdrożono jeden nowoczesny portal na Cloudflare Pages z bazą wektorową AI, który automatycznie kierował zgłoszenia do odpowiednich techników.",
            aiAdvantage: "Asystent AI klasyfikował 85% zgłoszeń bez udziału człowieka, redukując czas reakcji z 2 dni do 4 minut.",
            clientResult: "Zamknięto 8 starych systemów, oszczędzając 340 000 PLN rocznie na licencjach. Zarząd holdingu przyznał projektowi nagrodę innowacji roku."
          },
          beyondCertification: {
            title: "Architektura Korporacyjna spotyka Zwinność AI",
            keyTakeaway: "SBOK kładzie nacisk na procesy i strukturę. W połączeniu z nowoczesnymi technologiami serverless i AI, korporacyjny Product Owner może realizować projekty w tempie startupu, jednocześnie spełniając wszystkie wymogi formalne audytu i bezpieczeństwa.",
            practicalAiTip: "Przygotuj formalną deklarację wizji projektu w standardzie SBOK: 'Napisz oficjalny Project Vision Statement dla migracji bazy wiedzy do chmury Cloudflare, uwzględniając uzasadnienie biznesowe, analizę interesariuszy i minimalne kryteria akceptacji dla zarządu'."
          },
          kurakBriefcaseTip: "Kurak radzi w korporacji: W wielkich firmach nie wystarczy mieć racji – trzeba mieć papier i procedurę. Z certyfikatem SPOC w aktówce rozmawiasz z dyrektorami departamentów ich własnym językiem procesów i korzyści!",
          youtubeVideos: [
            {
              title: "SCRUMstudy SPOC Certification - Scrum Product Owner Certified Overview",
              channel: "SCRUMstudy Official / Edusum",
              url: "https://www.youtube.com/results?search_query=SCRUMstudy+SPOC+Certification+Overview",
              searchQuery: "SCRUMstudy SPOC Certification Overview",
              durationEstimate: "25m",
              description: "Przegląd podręcznika SBOK Guide, 5 faz procesów Scruma i przygotowanie do testu SPOC."
            }
          ],
          practiceQuestions: [
            {
              id: 303,
              text: "Jaka jest kluczowa różnica między Kryteriami Ukończenia (Definition of Done) a Kryteriami Akceptacji (Acceptance Criteria) w standardzie SBOK?",
              options: [
                "Nie ma żadnej różnicy, to synonimy.",
                "Definition of Done stosuje się uniwersalnie do wszystkich elementów backlogu w projekcie, podczas gdy Kryteria Akceptacji są unikalne dla danej historyjki użytkownika.",
                "Definition of Done tworzy klient, a Acceptance Criteria programista.",
                "Definition of Done dotyczy tylko dokumentacji, a Acceptance Criteria kodu."
              ],
              correctAnswerIndex: 1,
              explanation: "Definition of Done to zbiór ogólnych zasad inżynieryjnych i jakościowych stosowanych do każdego przyrostu. Kryteria Akceptacji (Acceptance Criteria) definiują specyficzne warunki biznesowe, które musi spełnić konkretna historyjka użytkownika, aby uznać ją za zrealizowaną.",
              kurakTip: "Niebieski Kurak wyjaśnia: DoD to standard czystości w całej kuchni, a Acceptance Criteria to przepis na konkretne danie!"
            }
          ]
        }
      ]
    },
    {
      id: "product-manager",
      number: 4,
      title: "Product Manager (Menedżer Produktu)",
      subtitle: "Wizja rynkowa, strategia biznesowa, Product-Market Fit i pełny cykl życia produktu",
      iconName: "TrendingUp",
      description: "Rola znacznie szersza niż Product Owner – Product Manager odpowiada za cały cykl życia produktu (Product Lifecycle), analizę konkurencji, pozycjonowanie rynkowe, strategię monetyzacji i osiągnięcie Product-Market Fit. Zobacz, jak PM w świecie nowych technologii i AI zarządza produktami generującymi miliony złotych przychodów.",
      subsections: [
        {
          id: "cpm",
          code: "CPM",
          title: "Certified Product Manager (CPM - AIPMM)",
          badge: "Globalny Standard Product Managementu",
          description: "Wydawany przez Association of International Product Marketing and Management (AIPMM, USA) – największą na świecie organizację skupiającą menedżerów produktu i marketingu produktowego. Oparty na oficjalnym podręczniku ProdBOK Guide (Product Management Body of Knowledge). Obejmuje cały cykl życia produktu: od strategii, przez rozwój, launch rynkowy, po fazę dojrzałości i wycofanie z rynku.",
          certificationDetails: {
            issuer: "AIPMM (Association of International Product Marketing and Management, USA)",
            difficulty: "Bardzo wysoka (kompleksowy egzamin strategiczny, finansowy i rynkowy)",
            validity: "Wymaga członkostwa AIPMM i ciągłego rozwoju zawodowego",
            examFormat: "120-150 pytań testowych wielokrotnego wyboru, 2-3 godziny, egzamin komputerowy online z proctoringiem",
            targetAudience: "Product Managerowie, Group Product Managerowie, Dyrektorzy Produktu (CPO), VP of Product",
            passingScore: "Min. 70-75% poprawnych odpowiedzi",
            costEstimate: "~395 USD egzamin (+ ewentualne szkolenie akredytowane 1500-2500 USD)"
          },
          keyFormulasOrRules: [
            "7 Faz Cyklu Życia Produktu (Product Lifecycle - PLC) wg ProdBOK: Conceive (Koncepcja), Plan (Planowanie), Develop (Rozwój), Qualify (Kwalifikacja/Testy), Launch (Wprowadzenie), Maximize (Maksymalizacja zysków), Retire (Wycofanie).",
            "Wskaźniki finansowe produktu: P&L (Rachunek Zysków i Strat), Gross Margin (Marża Brutto), CAC (Koszt Pozyskania Klienta), LTV (Wartość Życiowa Klienta), Churn Rate (Wskaźnik Odejść), LTV:CAC Ratio (optimum > 3.0).",
            "Analiza Macierzy BCG: Gwiazdy (Stars), Dojne Krowy (Cash Cows), Znaki Zapytania (Question Marks), Psy (Dogs).",
            "Strategia Cenowa: Cost-Plus Pricing, Value-Based Pricing, Dynamic Pricing, Freemium, Tiered SaaS."
          ],
          examTrap: "Product Manager (w odróżnieniu od Product Ownera) odpowiada za sukces FINANSOWY i RYNKOWY, a nie tylko za dostarczenie oprogramowania. Jeśli pytanie egzaminacyjne dotyczy spadających przychodów produktu lub zmiany trendów konsumenckich, właściwą odpowiedzią nie jest 'dodaj funkcje do sprintu', lecz 'przeprowadź analizę rentowności, segmentacji rynku i pozycjonowania cenowego'.",
          theorySummary: [
            "Różnica między Product Managerem (strategia, rynek, finanse, 'DLACZEGO i KIEDY') a Product Ownerem (egzekucja zwinna, backlog, zespół, 'CO i JAK').",
            "Product-Market Fit (PMF): Metryka Seana Ellisa (jeśli ponad 40% użytkowników odpowiedziałoby, że byłoby 'bardzo rozczarowanych', gdyby produkt zniknął z rynku).",
            "Analiza konkurencji: Macierze cech, analiza luk rynkowych (Gap Analysis), 5 Sił Portera, analiza SWOT/TOWS.",
            "Go-To-Market Strategy (GTM): Kanały dystrybucji, plan komunikacji, enablement działu sprzedaży, polityka cenowa i wskaźniki sukcesu launchu."
          ],
          industryApplications: {
            itAndSoftware: [
              "Budowa i monetyzacja produktów SaaS opartych na AI: optymalizacja kosztów inferencji LLM w relacji do miesięcznych opłat subskrypcyjnych (MRR).",
              "Kierowanie produktami cyfrowymi od pierwszego promptu w Cursorze do wdrożenia na globalną infrastrukturę Cloudflare z obsługą płatności Stripe.",
              "Zarządzanie roadmapą produktową w oparciu o twarde dane analityczne (cohort retention analysis, feature adoption rate)."
            ],
            graphicsAndMultimedia: [
              "Wprowadzanie na rynek komercyjnych bibliotek assetów 3D, generatorów wideo AI i wtyczek do oprogramowania kreatywnego.",
              "Monetyzacja treści cyfrowych i modeli subskrypcyjnych dla twórców multimediów.",
              "Pozycjonowanie agencji kreacji multimedialnej jako lidera innowacji AI o wysokiej marży."
            ],
            ecommerceAndMarketing: [
              "Zarządzanie portfolio marek e-commerce w modelu D2C (Direct to Consumer).",
              "Projektowanie i optymalizacja współczynnika LTV:CAC poprzez zautomatyzowane lejki e-mail marketingu i programy lojalnościowe.",
              "Wdrażanie algorytmów Dynamic Pricing opartych o popyt, pogodę i zachowania konkurencji."
            ],
            otherTechIndustries: [
              "Platformy B2B Enterprise, systemy cyberbezpieczeństwa, narzędzia DevOps i telematyka flotowa."
            ]
          },
          useCase: {
            scenarioTitle: "Launch produktu SaaS do automatyzacji postów social media dla małych firm",
            clientSituation: "Przedsiębiorca chciał stworzyć narzędzie SaaS dla fryzjerów i restauracji generujące gotowe posty i grafiki social media za pomocą AI, z celem osiągnięcia 10 000 USD MRR w 6 miesięcy.",
            actionTaken: "Certyfikowany CPM opracował strategię GTM, wyznaczył Value-Based Pricing (opłata 79 PLN/mc zamiast wyceny za tokeny), przeprowadził testy dymne (Smoke Tests) z landing page'em przed napisaniem kodu i potwierdził popyt. Aplikację zbudowano w 2 tygodnie na Cloudflare Pages.",
            aiAdvantage: "Zoptymalizowano prompty i wdrożono lokalne cache'owanie najpopularniejszych postów, obniżając jednostkowy koszt generacji AI do 0.04 PLN na użytkownika.",
            clientResult: "W 5 miesięcy produkt osiągnął 620 płatnych subskrybentów (48 980 PLN MRR), wskaźnik churn poniżej 3.2% i wskaźnik LTV:CAC na poziomie 4.8. Firma pozyskała inwestora na dalszą ekspansję."
          },
          beyondCertification: {
            title: "Micro-SaaS i jednoosobowe imperia produktowe",
            keyTakeaway: "Kiedyś zbudowanie komercyjnego SaaS wymagało zespołu 10 inżynierów i 500 000 PLN budżetu. Dziś certyfikowany Product Manager posiadający umiejętność orkiestracji modeli AI jest w stanie samodzielnie zbudować, opublikować i zmonetyzować dochodowy produkt w weekend.",
            practicalAiTip: "Użyj AI do kompleksowej analizy konkurencji: 'Przeprowadź analizę 5 wiodących narzędzi do automatyzacji e-commerce w Polsce. Zidentyfikuj ich słabości w recenzjach na Trustpilot i G2, wskaż nieobsłużoną niszę rynkową i zaproponuj propozycję unikalnej wartości (UVP) dla nowego produktu SaaS'."
          },
          kurakBriefcaseTip: "Kurak wie, gdzie są pieniądze: Kod jest tani, sztuczna inteligencja wygeneruje go w kilka sekund. Najcenniejszą rzeczą na świecie jest wiedza, CO warto zbudować i KTO za to zapłaci. Z certyfikatem CPM stajesz się architektem biznesu!",
          youtubeVideos: [
            {
              title: "Product Management Full Course - What Does a Product Manager Do?",
              channel: "Product School / Dan Olsen",
              url: "https://www.youtube.com/results?search_query=Product+Management+Full+Course+AIPMM+ProdBOK",
              searchQuery: "Product Management Full Course AIPMM ProdBOK",
              durationEstimate: "2h 45m",
              description: "Kluczowe zagadnienia Product Lifecycle, Product-Market Fit, wskaźniki P&L i przygotowanie do egzaminu CPM."
            }
          ],
          practiceQuestions: [
            {
              id: 401,
              text: "Wskaźnik LTV (Customer Lifetime Value) Twojego produktu SaaS wynosi 450 PLN, a koszt pozyskania klienta (CAC) wynosi 300 PLN. Co to oznacza dla strategii produktu?",
              options: [
                "Produkt jest wybitnie rentowny, stosunek wynosi 1.5 i jest idealny.",
                "Stosunek LTV:CAC wynosi 1.5, co jest wartością niebezpiecznie niską (zdrowy benchmark to minimum 3.0) – model biznesowy jest zagrożony i wymaga obniżenia CAC lub zwiększenia retencji.",
                "Należy natychmiast potroić budżet reklamowy.",
                "Wskaźnik CAC nie ma znaczenia w modelach SaaS."
              ],
              correctAnswerIndex: 1,
              explanation: "W ekonomice jednostkowej SaaS (Unit Economics) wskaźnik LTV:CAC poniżej 3.0 oznacza, że koszty marketingu i sprzedaży pochłaniają zbyt dużą część przychodów z klienta, pozostawiając za małą marżę na rozwój i utrzymanie produktu.",
              kurakTip: "Niebieski Kurak ostrzega: Jeśli LTV:CAC jest poniżej 3, palisz pieniądze inwestorów w piecu!"
            }
          ]
        },
        {
          id: "pragmatic-pmc",
          code: "Pragmatic PMC",
          title: "Pragmatic Institute Certifications (PMC - Pragmatic Management Certified)",
          badge: "Rynkowy Standard Badania Rynku & 'Nihil Nisi Bonum'",
          description: "Pragmatic Institute (USA) to rynkowy złoty standard szkoleń produktowych, ukończonych przez ponad 200 000 profesjonalistów z Doliny Krzemowej i globalnych gigantów technologicznych. Opiera się na Pragmatic Framework i legendarnej zasadzie 'Nihil Nisi Bonum' (Nic bez rynku / W biurze nie ma odpowiedzi). Kładzie bezwzględny nacisk na wywiady rynkowe (Win/Loss Analysis) i rozwiązywanie problemów, za które klienci chcą płacić.",
          certificationDetails: {
            issuer: "Pragmatic Institute (USA)",
            difficulty: "Średnia/Wysoka (koncentracja na rynkowych studiach przypadku)",
            validity: "Bezterminowo (po zaliczeniu egzaminów modułowych)",
            examFormat: "Test online po każdym module (Foundations, Focus, Build, Market, Price, Launch)",
            targetAudience: "Product Managerowie, Product Marketing Managerowie, założyciele spółek technologicznych",
            passingScore: "Min. 80% w testach modułowych",
            costEstimate: "~1295 USD za pojedynczy moduł lub pakiet PMC ~3000-5000 USD"
          },
          keyFormulasOrRules: [
            "Zasada NIHITO (Nothing Important Happens In The Office): Prawdziwe odpowiedzi na temat produktu znajdują się na rynku, a nie w sali konferencyjnej.",
            "Pragmatic Framework: 37 obszarów podzielonych na Strategię (Market, Focus, Business) i Egzekucję (Planning, Programs, Launch).",
            "Win/Loss Analysis: Systematyczne wywiady z klientami, którzy kupili produkt (Win) oraz tymi, którzy wybrali konkurencję (Loss).",
            "Pozycjonowanie produktowe: 'Dla [klient docelowy], który [problem rynkowy], nasz produkt jest [kategoria], który [kluczowa korzyść]. W przeciwieństwie do [konkurencja], my [unikalny wyróżnik]'."
          ],
          examTrap: "Pragmatic Institute odrzuca budowanie funkcji na życzenie pojedynczego klienta. Jeśli pytanie pyta: 'Kluczowy klient korporacyjny grozi odejściem, jeśli nie dorobimy dedykowanej funkcji', odpowiedź w duchu Pragmatic brzmi: sprawdź, czy ten problem jest powszechny na całym rynku i czy rynek jest gotów za to zapłacić. Jeśli to kaprys jednego klienta – nie buduj tego w produkcie masowym!",
          theorySummary: [
            "Identyfikacja problemów rynkowych, które są: Powszechne (Pervasive), Bolesne (Urgent) oraz Takie, za których rozwiązanie ludzie chętnie zapłacą (Willing to Pay).",
            "Oddzielenie roli Product Managera (odkrywanie problemów rynku) od inżynierów (projektowanie rozwiązań technologicznych).",
            "Buyer Personas (kto podejmuje decyzję zakupową i płaci) vs User Personas (kto faktycznie klika w systemie).",
            "Tworzenie planu Business Case bez zbędnego żargonu, opartego na policzalnych danych rynkowych."
          ],
          industryApplications: {
            itAndSoftware: [
              "Przeprowadzanie zautomatyzowanych wywiadów rynkowych i analizy opinii użytkowników z użyciem AI do ekstrakcji nastrojów.",
              "Budowa produktów B2B rozwiązujących wąskie gardła w integracjach API i przepływach danych.",
              "Walidacja gotowości rynkowej do płacenia (Willingness to Pay) przed rozpoczęciem prac kaskadowych lub zwinnych."
            ],
            graphicsAndMultimedia: [
              "Badanie rzeczywistych barier w zakupie zaawansowanych pakietów graficznych i assetów interaktywnych.",
              "Pozycjonowanie usług produkcji multimedialnej pod kątem rozwiązywania problemów biznesowych klienta (np. wzrost konwersji dzięki wideo 3D).",
              "Analiza Win/Loss przegranych przetargów agencyjnych."
            ],
            ecommerceAndMarketing: [
              "Identyfikacja punktów tarcia (Friction Points) na rynku e-commerce i wprowadzanie unikalnych rozwiązań płatniczych i logistycznych.",
              "Projektowanie komunikatów marketingowych precyzyjnie trafiających w 'Bolesne i Powszechne' problemy klientów.",
              "Segmentacja rynkowa według kryteriów behawioralnych i gotowości do zakupu."
            ],
            otherTechIndustries: [
              "B2B SaaS, rynki automatyki przemysłowej, technologie medyczne i oprogramowanie dla edukacji."
            ]
          },
          useCase: {
            scenarioTitle: "Identyfikacja niszy i wdrożenie systemu fakturowania dla branży budowlanej",
            clientSituation: "Software house chciał stworzyć kolejny 'ogólny program do fakturowania', konkurując z potentatami rynku. Budżet był ograniczony, a szanse rynkowe znikome.",
            actionTaken: "Product Manager przeszkolony w Pragmatic Institute przeprowadził 25 wywiadów NIHITO z kierownikami budów i podwykonawcami. Odkrył unikalny, powszechny i bolesny problem: rozliczanie robót częściowych w oparciu o kosztorysy KNR i protokoły odbioru.",
            aiAdvantage: "Zamiast budować ogólny system, z pomocą AI stworzono dedykowaną aplikację na Cloudflare do fakturowania budowlanego z importem kosztorysów w 3 tygodnie.",
            clientResult: "Produkt zyskał 350 płatnych firm budowlanych w 4 miesiące przy zerowym budżecie reklamowym (marketing szeptany na forach branżowych), osiągając rentowność od pierwszego kwartału."
          },
          beyondCertification: {
            title: "Zasada NIHITO w cyfrowym świecie",
            keyTakeaway: "Koncepcja 'Nothing Important Happens in The Office' jest dziś ważniejsza niż kiedykolwiek. Mając narzędzia AI, łatwo ulec pokusie generowania kolejnych funkcji bez wychodzenia z pokoju. Pragmatic przypomina: rozmawiaj z żywymi ludźmi, bo tylko oni płacą prawdziwymi pieniędzmi.",
            practicalAiTip: "Użyj AI do syntezy wywiadów rynkowych: 'Przeanalizuj poniższe 10 transkrypcji rozmów z klientami. Zidentyfikuj 3 najbardziej bolesne i powtarzające się problemy, oceń gotowość do płacenia i wskaż, jakich funkcji klienci NIE chcą mimo wcześniejszych deklaracji'."
          },
          kurakBriefcaseTip: "Kurak przypomina zasadę mistrzów: Przestań pytać mamę i znajomych, czy Twój pomysł na aplikację jest fajny. Idź do obcego człowieka, powiedz mu ile to kosztuje i poproś o numer karty. Jeśli zapłaci – masz produkt!",
          youtubeVideos: [
            {
              title: "Pragmatic Institute Framework - Market-Driven Product Management",
              channel: "Pragmatic Institute Official",
              url: "https://www.youtube.com/results?search_query=Pragmatic+Institute+Framework+Overview",
              searchQuery: "Pragmatic Institute Framework Overview",
              durationEstimate: "29m",
              description: "Filozofia NIHITO, 37 obszarów Pragmatic Framework i strategie badania rynku."
            }
          ],
          practiceQuestions: [
            {
              id: 402,
              text: "Zgodnie z filozofią Pragmatic Institute, jakimi trzema cechami musi charakteryzować się problem rynkowy, aby warto było budować produkt rozwiązujący ten problem?",
              options: [
                "Musi być ciekawy technologicznie, innowacyjny i popierany przez prezesa firmy.",
                "Musi być powszechny (pervasive), pilny/bolesny (urgent) oraz taki, za którego rozwiązanie rynek jest gotów zapłacić (willing to pay).",
                "Musi być zgłoszony przez co najmniej 100 osób na Twitterze.",
                "Musi być łatwy do zakodowania w jednym sprincie."
              ],
              correctAnswerIndex: 1,
              explanation: "Złota reguła Pragmatic Institute mówi, że produkt odnosi sukces tylko wtedy, gdy rozwiązuje problem, który jest: powszechny (duży rynek), pilny/bolesny (wysoka motywacja do zmiany) oraz taki, za który klienci są skłonni zapłacić.",
              kurakTip: "Niebieski Kurak podkreśla: Bez gotowości do płacenia masz hobby, a nie biznes!"
            }
          ]
        },
        {
          id: "pm-po-it",
          code: "Rola PM i PO w IT",
          title: "Rola PM i PO w zespołach IT w powiązaniu z AI",
          badge: "Synergia Praktyczna & No-Code/AI",
          description: "Praktyczny przewodnik po koegzystencji i synergii ról Product Managera (PM) i Product Ownera (PO) w nowoczesnych projektach informatycznych z wykorzystaniem sztucznej inteligencji. Zobacz, jak w nowoczesnych organizacjach granice te zacierają się, a menedżer nowej ery staje się jednoosobowym liderem cyfrowym łączącym rynkową strategię PM-a z operacyjną egzekucją PO.",
          certificationDetails: {
            issuer: "Scrum.org / AIPMM / PMI (podejście syntetyczne rynkowe)",
            difficulty: "Wysoka (wymaga łączenia myślenia strategicznego z technicznym rozumieniem AI)",
            validity: "Ciągła adaptacja do najnowszych trendów technologicznych (LLM, AI Coding Agents)",
            examFormat: "Weryfikacja rynkowa w oparciu o certyfikacje łączone (PSPO + PMP/CPM)",
            targetAudience: "Przedsiębiorcy technologiczni, Senior PM/PO, Architekci rozwiązań cyfrowych",
            passingScore: "Zdolność do samodzielnego dostarczenia dochodowego MVP na rynek",
            costEstimate: "Wiedza oparta na praktyce rynkowej i integracji narzędzi zwinnych"
          },
          keyFormulasOrRules: [
            "Podział odpowiedzialności: PM patrzy na zewnątrz (Rynek, Klienci, Strategia, Ceny, Konkurencja, 'Dlaczego?'), PO patrzy do wewnątrz (Sprint, Backlog, Zespół, Jakość, 'Co i Jak?').",
            "Model Hybrydowy AI: W małych projektach i startupach PM i PO łączą się w jedną postać: AI Product Leadera.",
            "Spec-Driven Development: Zastąpienie setek stron dokumentacji precyzyjną, modularną specyfikacją techniczną generowaną dla modeli językowych.",
            "Szybkość iteracji jako główna przewaga konkurencyjna (Velocity of Learning)."
          ],
          examTrap: "W środowiskach IT bardzo często dochodzi do sporów kompetencyjnych między PM a PO. Pamiętaj: PM bez PO cierpi na brak egzekucji (dużo wizji, mało kodu), a PO bez PM-a buduje perfekcyjne oprogramowanie, którego nikt nie chce kupić. Prawdziwa wartość powstaje w ich synergii.",
          theorySummary: [
            "Jak sztuczna inteligencja zmienia rolę deweloperów: inżynier staje się weryfikatorem kodu, a PM/PO staje się autorem logiki biznesowej.",
            "Konstrukcja nowoczesnego stacku technologicznego bez tradycyjnych zespołów: Next.js (frontend/backend), Tailwind CSS (design), Cloudflare Pages & Workers (infrastruktura globalna), Supabase (Postgres, auth, storage).",
            "Zarządzanie bezpieczeństwem, RODO i prawami autorskimi w projektach wykorzystujących LLM.",
            "Projektowanie architektur zorientowanych na oszczędność kosztów inferencji i serwerów."
          ],
          industryApplications: {
            itAndSoftware: [
              "Samodzielne tworzenie przez PM-a funkcjonalnych aplikacji webowych i mobilnych z pominięciem wielomiesięcznych kolejek w działach IT.",
              "Wdrażanie agentów AI do automatycznego generowania dokumentacji technicznej, testów jednostkowych i analizy logów.",
              "Zarządzanie projektami integracji API w modelu zero-trust na infrastrukturze Cloudflare."
            ],
            graphicsAndMultimedia: [
              "Orkiestracja generowania spójnych identyfikacji wizualnych, logotypów i interfejsów za pomocą Midjourney i Figma AI.",
              "Błyskawiczne prototypowanie animacji i wideo produktowych na landing page bez wynajmowania studia filmowego.",
              "Optymalizacja wagi i wydajności multimediów pod kątem Google Core Web Vitals."
            ],
            ecommerceAndMarketing: [
              "Projektowanie i uruchamianie kompletnych sklepów online w 48 godzin zintegrowanych z CRM i systemami fakturowymi.",
              "Automatyzacja procesów marketingu afiliacyjnego, cross-sellingu i up-sellingu przy użyciu modeli rekomendacyjnych AI.",
              "Analiza zachowań użytkowników w sklepie z natychmiastowym wdrażaniem testów A/B w kodzie."
            ],
            otherTechIndustries: [
              "Budowa wewnętrznych narzędzi operacyjnych (Internal Tools) dla firm prawniczych, logistycznych i medycznych."
            ]
          },
          useCase: {
            scenarioTitle: "Stworzenie w 14 dni platformy rekrutacyjnej z selekcją CV przez AI",
            clientSituation: "Agencja rekrutacyjna tonęła w tysiącach nadsyłanych CV. Tradycyjna wycena systemu ATS z modułem parsowania CV wynosiła 180 000 PLN i 6 miesięcy oczekiwania.",
            actionTaken: "PM/PO nowej ery sporządził specyfikację, rozpisał architekturę serverless na Cloudflare z bazą wektorową Vectorize i modelem Llama 3 / Claude. Kod wygenerowano w Cursorze w 10 dni.",
            aiAdvantage: "System przetwarza 500 CV w 3 minuty, wyodrębniając kluczowe umiejętności i generując zwięzły raport dopasowania dla rekrutera.",
            clientResult: "Koszt wdrożenia wyniósł 14 000 PLN zamiast 180 000 PLN. Agencja skróciła czas wstępnej selekcji kandydatów o 92% i pozyskała 12 nowych korporacyjnych klientów."
          },
          beyondCertification: {
            title: "Era Jednoosobowych Jednorożców (One-Person Unicorns)",
            keyTakeaway: "Sam Altman i liderzy Doliny Krzemowej przewidują powstanie pierwszej jednoosobowej firmy wycenianej na miliard dolarów. Będzie nią zarządzał właśnie wszechstronny Product Manager, który dzięki sztucznej inteligencji ma do dyspozycji moce produkcyjne dawnego tysiącosobowego koncernu.",
            practicalAiTip: "Stwórz architekturę systemu w jednym promptcie: 'Działasz jako Principal Solution Architect i Technical PM. Zaprojektuj architekturę bezserwerową na Cloudflare dla portalu ogłoszeniowego z 100k wizyt dziennie. Wskaż schemat bazy D1 SQL, strukturę endpointów Workers, politykę bezpieczeństwa CORS oraz model autoryzacji JWT'."
          },
          kurakBriefcaseTip: "Kurak podsumowuje: Nie czekaj na armię programistów. Dziś największe projekty wygrywa ten, kto potrafi precyzyjnie myśleć, sprawnie promptować i natychmiast dostarczać wartość klientowi prosto z aktówki!",
          youtubeVideos: [
            {
              title: "Product Manager vs Product Owner - Key Differences & Career Paths",
              channel: "Exponent / PM Interviews",
              url: "https://www.youtube.com/results?search_query=Product+Manager+vs+Product+Owner+Differences",
              searchQuery: "Product Manager vs Product Owner Differences",
              durationEstimate: "19m",
              description: "Szczegółowa analiza rozgraniczenia i współpracy PM i PO w branży technologicznej."
            }
          ],
          practiceQuestions: [
            {
              id: 403,
              text: "Które z poniższych stwierdzeń najlepiej definiuje fundamentalną różnicę w perspektywie pracy Product Managera (PM) i Product Ownera (PO)?",
              options: [
                "PM zajmuje się wyłącznie grafiką, a PO pisze kod w C++.",
                "PM skupia się na perspektywie rynkowej, biznesowej strategii, konkurencji i rentowności (perspektywa zewnętrzna), podczas gdy PO skupia się na maksymalizacji wartości prac zespołu, zarządzaniu backlogiem i dostarczaniu przyrostu (perspektywa operacyjno-wewnętrzna).",
                "PO jest bezpośrednim szefem i przełożonym PM-a w hierarchii firmy.",
                "Nie ma żadnej różnicy, to dokładnie to samo stanowisko pod dwoma nazwami."
              ],
              correctAnswerIndex: 1,
              explanation: "W nowoczesnym IT Product Manager odpowiada za strategię rynkową i sukces komercyjny (Dlaczego i Co budujemy dla rynku?), podczas gdy Product Owner ściśle współpracuje z deweloperami nad precyzyjną egzekucją tych założeń w sprincie.",
              kurakTip: "Niebieski Kurak wyjaśnia: PM widzi cały ocean i rynek, a PO steruje statkiem w porcie sprintu!"
            }
          ]
        }
      ]
    },
    {
      id: "agile-analysis",
      number: 5,
      title: "Podobne stanowiska zwinne i analityczne",
      subtitle: "Wszechstronny praktyk zwinności i profesjonalna analiza biznesowa",
      iconName: "Compass",
      description: "Zaawansowane certyfikacje przekrojowe Project Management Institute (PMI): PMI-ACP (obejmujący Scrum, Kanban, Lean, XP i TDD) oraz PMI-PBA (inżynieria wymagań i analiza biznesowa kształtująca wyniki komercyjne). Zobacz, jak analityk i praktyk zwinny wspierany przez AI tworzą bezbłędne specyfikacje i sterują przepływem prac.",
      subsections: [
        {
          id: "pmi-acp",
          code: "PMI-ACP",
          title: "PMI-ACP (Agile Certified Practitioner - PMI)",
          badge: "Przekrojowy Zwinny Ekspert (Scrum, Kanban, Lean, XP)",
          description: "Najbardziej wszechstronny i rygorystyczny certyfikat zwinny na rynku, wydawany przez Project Management Institute. W odróżnieniu od certyfikatów skupionych tylko na Scrumie, PMI-ACP weryfikuje znajomość całej palety metodyk zwinnych: Scrum, Kanban, Lean Software Development, Extreme Programming (XP), Test-Driven Development (TDD), Feature-Driven Development (FDD) oraz Crystal.",
          certificationDetails: {
            issuer: "Project Management Institute (PMI, USA)",
            difficulty: "Bardzo wysoka (obejmuje szeroki zakres metodyk i wymaga udokumentowanego doświadczenia zwinnego)",
            validity: "3 lata (wymaga 30 punktów PDU na recertyfikację)",
            examFormat: "120 pytań testowych wielokrotnego wyboru, 180 minut, egzamin w centrum Pearson VUE lub online z proctoringiem",
            targetAudience: "Doświadczeni kierownicy projektów zwinnych, liderzy techniczni, architekci oprogramowania",
            passingScore: "Ocena psychometryczna PMI (~70%)",
            costEstimate: "435 USD (członkowie PMI) / 495 USD (bez członkostwa)"
          },
          keyFormulasOrRules: [
            "Prawo Little'a (Kanban): Czas Realizacji (Lead Time) = Praca w Toku (WIP) / Przepustowość (Throughput). Ograniczenie limitów WIP bezpośrednio skraca czas dostarczenia funkcji na rynek!",
            "Skumulowany Diagram Przepływu (Cumulative Flow Diagram - CFD): Identyfikacja wąskich gardeł na podstawie rozszerzających się pasm prac w toku.",
            "7 Zasad Lean Software Development (Poppendieck): Eliminacja marnotrawstwa (Muda), Wzmacnianie uczenia się, Decydowanie tak późno jak to możliwe, Dostarczanie tak szybko jak to możliwe, Wzmacnianie zespołu, Budowanie integralności, Spojrzenie na całość.",
            "Praktyki Extreme Programming (XP): Test-Driven Development (TDD: Red-Green-Refactor), Pair Programming, Continuous Integration, Refactoring, Collective Code Ownership, Simple Design."
          ],
          examTrap: "Pytania PMI-ACP często zderzają praktyki Scruma z Kanbanem i XP. Pamiętaj: w Kanbanie NIE MA sztywnych sprintów (timeboxów) – praca odbywa się w modelu ciągłego przepływu (Continuous Flow), a kluczowym narzędziem kontrolnym są limity pracy w toku (WIP Limits).",
          theorySummary: [
            "Zarządzanie wizualne: Tablice Kanban, wykresy spalania (Burn-down) i przyrostu (Burn-up).",
            "Trójkąt Zwinny (Agile Triangle): Zakres jest zmienny, podczas gdy Czas i Koszt są stałe (odwrócenie tradycyjnego trójkąta Waterfall).",
            "Testowanie i jakość w XP: Piramida testów (Unit -> Integration -> E2E), podejście TDD i BDD (Behavior-Driven Development).",
            "Wykrywanie i redukcja marnotrawstwa (Muda): zbędne funkcje, przełączanie kontekstu, opóźnienia decyzyjne, wady w oprogramowaniu."
          ],
          industryApplications: {
            itAndSoftware: [
              "Wdrażanie praktyk Extreme Programming (XP) z udziałem AI: pisanie testów jednostkowych przed generowaniem kodu (AI-assisted TDD).",
              "Projektowanie tablic Kanban na GitHub Projects do monitorowania przepływu zadań automatycznych agentów kodujących.",
              "Optymalizacja wskaźnika Lead Time i Cycle Time przy publikacji aplikacji na Cloudflare Pages."
            ],
            graphicsAndMultimedia: [
              "Zastosowanie limitów WIP w zespole graficznym w celu eliminacji zatorów na etapie postprodukcji i akceptacji klienta.",
              "Praktyka Pair Design (odpowiednik Pair Programming): grafik współpracuje w czasie rzeczywistym z prompt-inżynierem.",
              "Eliminacja marnotrawstwa (np. renderowanie wariantów grafik, których klient nigdy nie obejrzy)."
            ],
            ecommerceAndMarketing: [
              "Zarządzanie kampaniami marketingowymi w modelu Lean: szybkie hipotezy, weryfikacja na małym budżecie, natychmiastowe skalowanie wygranych kreacji.",
              "Monitorowanie przepływu zamówień e-commerce za pomocą diagramów CFD pod kątem wąskich gardeł w magazynie.",
              "Ciągła integracja i publikacja zmian w sklepie internetowym (CI/CD) bez przestojów w sprzedaży."
            ],
            otherTechIndustries: [
              "Wielkie programy transformacji cyfrowej łączące zespoły programistyczne, operacyjne i biznesowe."
            ]
          },
          useCase: {
            scenarioTitle: "Optymalizacja przepływu i skrócenie czasu wdrożenia aplikacji logistycznej z 6 miesięcy do 3 tygodni",
            clientSituation: "Firma spedycyjna borykała się z ogromnymi opóźnieniami w dziale IT. Ponad 80 zadań było rozpoczętych jednocześnie (wysoki WIP), żaden moduł nie był kończony, a programiści byli przeciążeni.",
            actionTaken: "Certyfikowany PMI-ACP zdiagnozował problem Prawem Little'a: drastycznie ograniczył limity WIP (maks. 3 zadania w toku na zespół), wprowadził tablice Kanban i zintegrował proces z narzędziami AI wspomagającymi testowanie TDD.",
            aiAdvantage: "AI generowało testy jednostkowe i mockowało dane testowe w kilka sekund, pozwalając zespołowi skupić się na dokończeniu zadań przed rozpoczęciem nowych.",
            clientResult: "Czas realizacji funkcji (Lead Time) spadł o 76%. W 3 tygodnie wdrożono kluczowy moduł śledzenia przesyłek, który leżał odłogiem przez pół roku."
          },
          beyondCertification: {
            title: "Agile bez dogmatów: Potęga TDD z AI",
            keyTakeaway: "PMI-ACP uczy, że jakość musi być wbudowana w proces od początku. Zastosowanie AI w modelu TDD (najpierw piszesz test, potem AI generuje kod spełniający ten test) eliminuje 95% halucynacji modeli językowych i gwarantuje stabilność produkcyjną.",
            practicalAiTip: "Zastosuj TDD z AI: 'Napisz zestaw testów jednostkowych w Vitest dla modułu koszyka e-commerce (dodawanie produktu, zniżka kodem rabatowym, przeliczanie walut, podatek VAT). Nie generuj jeszcze kodu implementacji – najpierw potrzebuję samych testów z asercjami'."
          },
          kurakBriefcaseTip: "Kurak przypomina Prawo Little'a: Chcesz szybciej kończyć projekty? Przestań zaczynać dziesięć rzeczy na raz, a zacznij kończyć to, co w toku! Ogranicz WIP, a Twoja aktówka zapełni się sukcesami!",
          youtubeVideos: [
            {
              title: "PMI-ACP Exam Prep Full Course - Agile Certified Practitioner",
              channel: "Edureka / Simplilearn",
              url: "https://www.youtube.com/results?search_query=PMI-ACP+Exam+Prep+Full+Course",
              searchQuery: "PMI-ACP Exam Prep Full Course",
              durationEstimate: "5h 15m",
              description: "Omówienie 7 domen PMI-ACP, porównanie Scrum, Kanban, XP, Lean oraz strategie zdawania egzaminu."
            }
          ],
          practiceQuestions: [
            {
              id: 501,
              text: "Zgodnie z Prawem Little'a w metodyce Kanban, jeśli zespół chce skrócić średni czas realizacji zadania (Lead Time), jakie działanie powinien podjąć w pierwszej kolejności?",
              options: [
                "Zatrudnić dwa razy więcej programistów.",
                "Zmniejszyć limit pracy w toku (Work In Progress - WIP).",
                "Wydłużyć czas pracy zespołu do 12 godzin na dobę.",
                "Zrezygnować ze spotkań retrospektywnych."
              ],
              correctAnswerIndex: 1,
              explanation: "Prawo Little'a określa relację: Lead Time = WIP / Throughput. Przy stałej przepustowości, zmniejszenie ilości pracy będącej w toku (WIP) automatycznie skraca czas, jaki pojedyncze zadanie spędza w systemie.",
              kurakTip: "Niebieski Kurak potwierdza: Mniej zadań rozgrzebanych na raz to szybsze dostarczenie całości klientowi!"
            }
          ]
        },
        {
          id: "pmi-pba",
          code: "PMI-PBA",
          title: "PMI-PBA (Professional in Business Analysis - PMI)",
          badge: "Analiza Biznesowa & Zbieranie Wymagań",
          description: "Prestiżowy certyfikat Project Management Institute dedykowany Analitykom Biznesowym, Product Managerom i Kierownikom Projektów. Oparty na przewodniku PMI-PBA Guide to Business Analysis. Koncentruje się na odkrywaniu potrzeb biznesowych (Needs Assessment), planowaniu analizy, pozyskiwaniu wymagań (Elicitation), analizie i modelowaniu, identyfikacji korzyści komercyjnych oraz ocenie rozwiązań.",
          certificationDetails: {
            issuer: "Project Management Institute (PMI, USA)",
            difficulty: "Bardzo wysoka (złożone scenariusze inżynierii wymagań i walidacji biznesowej)",
            validity: "3 lata (wymaga 60 punktów PDU na recertyfikację)",
            examFormat: "200 pytań testowych, 240 minut, pytania sytuacyjne oparte na metodykach predykcyjnych i adaptacyjnych",
            targetAudience: "Analitycy biznesowi, analitycy systemowi, Product Managerowie, konsultanci wdrożeniowi ERP",
            passingScore: "Ocena psychometryczna PMI (~70-75%)",
            costEstimate: "405 USD (członkowie PMI) / 575 USD (bez członkostwa)"
          },
          keyFormulasOrRules: [
            "5 Domen Analizy Biznesowej wg PMI: Needs Assessment (Ocena potrzeb - 18%), Planning (Planowanie - 22%), Analysis (Analiza i modelowanie - 35%), Traceability and Monitoring (Śledzenie i monitorowanie - 15%), Evaluation (Ewaluacja rozwiązania - 10%).",
            "Matryca Śledzenia Wymagań (Requirements Traceability Matrix - RTM): Śledzenie każdego wymagania od potrzeby biznesowej, przez specyfikację techniczną, kod, aż po scenariusz testowy.",
            "Poziomy wymagań: Biznesowe (Business Requirements), Interesariuszy (Stakeholder Requirements), Rozwiązania (Solution: Funkcjonalne i Niefunkcjonalne), Przejściowe (Transition Requirements).",
            "Modelowanie procesów: Notacja BPMN 2.0, Diagramy Przypadków Użycia (UML Use Cases), Tabele Decyzyjne, Diagramy Przepływu Danych (DFD)."
          ],
          examTrap: "Analityk biznesowy NIE ZACZYNA od szukania rozwiązań technologicznych. Jeśli klient mówi: 'Chcę aplikację mobilną z blockchainem', prawidłowa odpowiedź analityka PMI-PBA brzmi: 'Przeprowadź ocenę potrzeb (Needs Assessment), zidentyfikuj rzeczywisty problem biznesowy i sprawdź, czy blockchain w ogóle jest uzasadniony ekonomicznie'.",
          theorySummary: [
            "Techniki pozyskiwania wymagań (Elicitation): Wywiady pogłębione, warsztaty JAD/Focus Group, ankiety, obserwacja w miejscu pracy (Job Shadowing), analiza dokumentacji i prototypowanie.",
            "Wymagania niefunkcjonalne (Quality of Service): Wydajność, bezpieczeństwo, skalowalność, dostępność (WCAG), zgodność z prawem (RODO/GDPR).",
            "Zarządzanie konfliktami w wymaganiach między różnymi grupami interesariuszy.",
            "Ewaluacja powdrożeniowa: Mierzenie, czy wdrożone rozwiązanie faktycznie zrealizowało planowane korzyści biznesowe (Benefits Realization)."
          ],
          industryApplications: {
            itAndSoftware: [
              "Tworzenie nieskazitelnych specyfikacji PRD (Product Requirements Document) stanowiących idealny wsad (Prompt Context) dla AI koderów.",
              "Modelowanie procesów biznesowych w BPMN i automatyczne tłumaczenie ich na architekturę mikroserwisów.",
              "Walidacja zgodności wygenerowanego kodu z wymogami prawnymi i standardami cyberbezpieczeństwa (OWASP Top 10)."
            ],
            graphicsAndMultimedia: [
              "Precyzyjne definiowanie wymagań niefunkcjonalnych dla systemów renderowania multimediów i streamingu wideo.",
              "Projektowanie matrycy śledzenia assetów graficznych w zaawansowanych grach i symulatorach VR.",
              "Mapowanie wymagań użytkowników końcowych w interfejsach UI/UX z uwzględnieniem dostępności cyfrowej."
            ],
            ecommerceAndMarketing: [
              "Audyt procesów sprzedaży wielokanałowej (Omnichannel) i identyfikacja luk funkcjonalnych w integracjach ERP/PIM.",
              "Analiza wymagań biznesowych dla wdrożeń systemów rekomendacyjnych AI w sklepach internetowych.",
              "Definiowanie wskaźników KPI kampanii e-marketingowych i mechanizmów zbierania leadów zgodnie z RODO."
            ],
            otherTechIndustries: [
              "Sektor bankowy (systemy płatnicze, przeciwdziałanie praniu brudnych pieniędzy - AML), ubezpieczenia i ochrona zdrowia."
            ]
          },
          useCase: {
            scenarioTitle: "Identyfikacja wąskiego gardła i automatyzacja obsługi reklamacji w sieci handlowej",
            clientSituation: "Ogólnopolska sieć handlowa traciła 1.2 mln PLN rocznie z powodu przedłużających się procesów reklamacyjnych. Zarząd chciał kupić kosztowny system korporacyjny za 800 000 PLN.",
            actionTaken: "Certyfikowany analityk PMI-PBA przeprowadził ocenę potrzeb (Needs Assessment) i zmapował proces w BPMN. Odkrył, że problemem nie był brak systemu, lecz chaos w kategoryzacji zdjęć uszkodzeń przesyłanych przez klientów. Przygotował specyfikację lekkiego modułu wizyjnego AI.",
            aiAdvantage: "Aplikacja na Cloudflare Pages z modelem widzenia komputerowego AI wstępnie weryfikuje zgłoszenie i zdjęcia w 5 sekund, automatycznie zatwierdzając bezsporne reklamacje.",
            clientResult: "Czas rozpatrzenia reklamacji spadł z 14 dni do 2 godzin. Koszt projektu zamknął się w 45 000 PLN zamiast 800 000 PLN, przynosząc 950 000 PLN oszczędności w pierwszym roku."
          },
          beyondCertification: {
            title: "Prompt Engineering to Nowoczesna Analiza Biznesowa",
            keyTakeaway: "Precyzja, z jaką analityk biznesowy definiuje wymagania, reguły biznesowe i przypadki brzegowe (Edge Cases), jest dokładnie tym, czego potrzebują modele AI do wygenerowania bezbłędnej aplikacji. Certyfikat PMI-PBA uczy krystalicznego myślenia logicznego.",
            practicalAiTip: "Użyj AI do wygenerowania kompletnego dokumentu wymagań: 'Na podstawie poniższego opisu pomysłu na portal marketplace wygeneruj kompleksowy dokument PRD (Product Requirements Document), zawierający: 1. Cele biznesowe i metryki sukcesu, 2. Zakres funkcjonalny podzielony na moduły, 3. Wymagania niefunkcjonalne (bezpieczeństwo, wydajność na Cloudflare), 4. Tabele decyzji dla procesów brzegowych'."
          },
          kurakBriefcaseTip: "Kurak kończy z dumą: Kod można wygenerować w sekundę, ale jeśli wygenerujesz kod do złego procesu biznesowego, wyprodukujesz tylko szybszą katastrofę. Certyfikat PMI-PBA gwarantuje, że budujesz dokładnie to, co przynosi zysk!",
          youtubeVideos: [
            {
              title: "PMI-PBA Exam Prep Course - Professional in Business Analysis",
              channel: "Watermark Learning / IIBA & PMI Prep",
              url: "https://www.youtube.com/results?search_query=PMI-PBA+Certification+Business+Analysis+Overview",
              searchQuery: "PMI-PBA Certification Business Analysis Overview",
              durationEstimate: "1h 50m",
              description: "Przegląd 5 domen PMI-PBA, techniki pozyskiwania wymagań, modelowanie w BPMN i matryce RTM."
            }
          ],
          practiceQuestions: [
            {
              id: 502,
              text: "Podczas projektu analityk biznesowy tworzy Matrycę Śledzenia Wymagań (Requirements Traceability Matrix - RTM). Jaki jest główny cel tworzenia tego dokumentu?",
              options: [
                "Zastąpienie umowy prawnej z klientem.",
                "Zapewnienie, że każde wymaganie biznesowe ma swoje odzwierciedlenie w projekcie, implementacji i scenariuszach testowych oraz że żaden element nie powstał bez uzasadnienia biznesowego.",
                "Wyliczenie pensji dla programistów.",
                "Stworzenie listy obecności na spotkaniach."
              ],
              correctAnswerIndex: 1,
              explanation: "Matryca RTM gwarantuje śledzenie dwukierunkowe (Bidirectional Traceability) – od pierwotnej potrzeby biznesowej do testów odbiorczych. Zapobiega powstawaniu nieautoryzowanych funkcji (Gold Plating) oraz pominięciu wymagań klienta.",
              kurakTip: "Niebieski Kurak potwierdza: RTM to ubezpieczenie na życie dla każdego analityka – żaden szczegół nie zginie z aktówki!"
            }
          ]
        }
      ]
    }
  ]
};

const targetPath = path.resolve(__dirname, '..', 'data', 'curriculum.json');
fs.writeFileSync(targetPath, JSON.stringify(curriculum, null, 2), 'utf8');
console.log('Pomyślnie wygenerowano rozbudowany program nauczania (curriculum.json):', targetPath);
console.log('Liczba sekcji:', curriculum.sections.length);
console.log('Liczba podsekcji:', curriculum.sections.reduce((acc, s) => acc + s.subsections.length, 0));

