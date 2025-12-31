export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface ArticleContent {
  slug: string;
  sections: ArticleSection[];
}

export const articleContents: Record<string, ArticleContent> = {
  "wprowadzenie-do-pre-pack": {
    slug: "wprowadzenie-do-pre-pack",
    sections: [
      {
        id: "definicja",
        title: "Czym jest Pre-Pack?",
        content: `<p>Przygotowana likwidacja, znana powszechnie jako <strong>pre-pack</strong>, to procedura w polskim prawie upadłościowym umożliwiająca szybkie przeprowadzenie sprzedaży przedsiębiorstwa dłużnika (lub jego zorganizowanej części albo istotnych składników majątkowych) w ramach postępowania upadłościowego.</p>
<p>Pre-pack został wprowadzony do polskiego systemu prawnego na mocy nowelizacji z 15 maja 2015 r., która weszła w życie <strong>1 stycznia 2016 r.</strong></p>
<p>Celem tej instytucji jest przyspieszenie i uproszczenie postępowania upadłościowego, maksymalizacja zaspokojenia wierzycieli oraz – co kluczowe – <strong>zachowanie ciągłości działania przedsiębiorstwa</strong> mimo ogłoszenia upadłości.</p>`,
      },
      {
        id: "jak-dziala",
        title: "Jak działa procedura Pre-Pack?",
        content: `<p>Procedura pre-pack opiera się na prostym założeniu: zanim sąd ogłosi upadłość, wnioskodawca (dłużnik lub wierzyciel) przedstawia już gotową ofertę zakupu przedsiębiorstwa.</p>
<p>Kluczowe elementy procedury:</p>
<ul>
<li><strong>Wniosek o zatwierdzenie warunków sprzedaży</strong> – składany wraz z wnioskiem o ogłoszenie upadłości</li>
<li><strong>Opis i oszacowanie majątku</strong> – przygotowane przez biegłego sądowego</li>
<li><strong>Wskazanie nabywcy i ceny</strong> – konkretna oferta od potencjalnego inwestora</li>
<li><strong>Decyzja sądu</strong> – zatwierdzenie warunków wraz z ogłoszeniem upadłości</li>
</ul>
<p>Dzięki temu sprzedaż następuje niemal natychmiast po ogłoszeniu upadłości, eliminując długotrwały etap poszukiwania kupca.</p>`,
      },
      {
        id: "dla-kogo",
        title: "Dla kogo jest Pre-Pack?",
        content: `<p>Pre-pack jest szczególnie przydatny w sytuacjach, gdy:</p>
<ul>
<li>Przedsiębiorstwo jest wartościowe jako działająca całość (ma markę, klientów, kontrakty)</li>
<li>Tradycyjna likwidacja doprowadziłaby do utraty znacznej wartości</li>
<li>Istnieje potencjalny nabywca zainteresowany szybkim przejęciem</li>
<li>Czas jest kluczowy (np. grozi utrata kluczowych kontraktów lub pracowników)</li>
</ul>
<p>Pre-pack wykorzystywany jest w różnych branżach – od handlu detalicznego, przez przemysł, po usługi. Szczególnie często pojawia się w sieciach sklepów, firmach produkcyjnych i przedsiębiorstwach z silną marką.</p>`,
      },
      {
        id: "korzysci",
        title: "Główne korzyści Pre-Pack",
        content: `<p>Dla <strong>dłużnika</strong>:</p>
<ul>
<li>Kontrolowany sposób rozstania się z biznesem</li>
<li>Wpływ na wybór nabywcy</li>
<li>Uniknięcie odpowiedzialności za opóźnienie wniosku</li>
</ul>
<p>Dla <strong>wierzycieli</strong>:</p>
<ul>
<li>Wyższa cena niż w tradycyjnej likwidacji (warunek ustawowy)</li>
<li>Szybsze zaspokojenie wierzytelności</li>
<li>Mniejsze koszty postępowania</li>
</ul>
<p>Dla <strong>pracowników</strong>:</p>
<ul>
<li>Zachowanie miejsc pracy przy kontynuacji działalności</li>
<li>Płynne przejście do nowego pracodawcy</li>
</ul>`,
      },
    ],
  },
  "podstawy-prawne": {
    slug: "podstawy-prawne",
    sections: [
      {
        id: "regulacje",
        title: "Podstawa prawna w ustawie",
        content: `<p>Instytucja pre-pack została uregulowana w <strong>Dziale VII ustawy – Prawo upadłościowe (art. 56a–56h P.U.)</strong>.</p>
<p>Zgodnie z tymi przepisami, w postępowaniu o ogłoszenie upadłości uczestnik postępowania (dłużnik lub wierzyciel osobisty dłużnika) może złożyć <strong>wniosek o zatwierdzenie warunków sprzedaży</strong> przedsiębiorstwa, jego zorganizowanej części lub istotnych składników majątkowych dłużnika.</p>`,
      },
      {
        id: "wymogi",
        title: "Wymogi formalne wniosku",
        content: `<p>Wniosek pre-pack musi zawierać:</p>
<ul>
<li><strong>Wskazanie potencjalnego nabywcy</strong> – konkretny podmiot gotowy nabyć przedsiębiorstwo</li>
<li><strong>Cenę zakupu</strong> – oferowana kwota za przedsiębiorstwo</li>
<li><strong>Opis i oszacowanie majątku</strong> – sporządzone przez biegłego sądowego</li>
<li><strong>Wadium</strong> – 10% oferowanej ceny (od nowelizacji 2020)</li>
</ul>
<p>Wniosek można dołączyć do wniosku o ogłoszenie upadłości lub złożyć później (po zmianach z 2020 r. dopuszczalne stało się składanie wniosku pre-pack również już po ogłoszeniu upadłości).</p>`,
      },
      {
        id: "rola-sadu",
        title: "Rola sądu upadłościowego",
        content: `<p>Sąd upadłościowy rozpoznaje wniosek o pre-pack wraz z wnioskiem o ogłoszenie upadłości.</p>
<p><strong>Kryterium zatwierdzenia:</strong> Jeżeli oferowana cena jest wyższa niż kwota możliwa do uzyskania w postępowaniu upadłościowym przy zwykłej likwidacji (pomniejszona o koszty takiego postępowania), sąd ma <strong>obowiązek uwzględnić wniosek</strong>.</p>
<p>Oznacza to gwarancję dla wnioskodawcy – jeśli zaoferuje cenę przewyższającą hipotetyczny wynik tradycyjnej likwidacji, pre-pack zostanie zatwierdzony.</p>`,
      },
      {
        id: "nowelizacja-2020",
        title: "Nowelizacja 2020 roku",
        content: `<p>Z dniem 24 marca 2020 r. weszły w życie istotne zmiany w przepisach o pre-pack:</p>
<ul>
<li><strong>Obowiązkowe wadium 10%</strong> – nabywca musi wpłacić wadium na rachunek depozytowy</li>
<li><strong>Powołanie tymczasowego nadzorcy sądowego</strong> – sporządza sprawozdanie o sytuacji dłużnika</li>
<li><strong>Możliwość sprzedaży różnym nabywcom</strong> – sąd może zatwierdzić sprzedaż różnych składników majątkowych różnym podmiotom</li>
<li><strong>Mechanizm ofert konkurencyjnych</strong> – sąd może dopuścić ofertę przebijającą o co najmniej 10%</li>
<li><strong>Obwieszczenie w KRZ</strong> – informacja o złożeniu wniosku pre-pack jest publicznie dostępna</li>
</ul>`,
      },
    ],
  },
  "pre-pack-na-swiecie": {
    slug: "pre-pack-na-swiecie",
    sections: [
      {
        id: "wielka-brytania",
        title: "Wielka Brytania - Pre-Pack Administration",
        content: `<p>W brytyjskim prawie insolwencyjnym nie występuje osobna instytucja o nazwie "pre-pack" w ustawie, ale jest to <strong>powszechna praktyka</strong> w ramach postępowania upadłościowego typu <em>administration</em>.</p>
<p>Administrator (licencjonowany insolwencyjny praktyk) może dokonać sprzedaży przedsiębiorstwa zaraz po swojej nominacji, o ile transakcja została przygotowana przed wszczęciem postępowania.</p>
<p><strong>Kluczowe różnice:</strong></p>
<ul>
<li>Sąd nie wydaje osobnej zgody na sprzedaż – decyzję podejmuje administrator</li>
<li>Od 2021 r. sprzedaż do podmiotu powiązanego wymaga zgody wierzycieli lub opinii eksperta</li>
<li>W 2024 r. odnotowano 628 pre-packów (wzrost o 212% od 2021)</li>
</ul>`,
      },
      {
        id: "niemcy",
        title: "Niemcy - Übertragende Sanierung",
        content: `<p>W niemieckim prawie upadłościowym <strong>brakuje odrębnej procedury pre-pack</strong> w sensie znanym w Polsce czy UK.</p>
<p>Wykształciła się jednak praktyka tzw. <em>übertragende Sanierung</em> (restrukturyzacji poprzez przeniesienie majątku), gdzie w ramach postępowania upadłościowego dochodzi do sprzedaży przedsiębiorstwa w całości nowemu inwestorowi.</p>
<p>W praktyce to faza wstępna (czas między złożeniem wniosku a formalnym otwarciem upadłości) jest wykorzystywana do przygotowania sprzedaży – tymczasowy syndyk ocenia sytuację i prowadzi poszukiwania inwestora.</p>`,
      },
      {
        id: "usa",
        title: "USA - Chapter 11 i 363 Sale",
        content: `<p>W Stanach Zjednoczonych funkcjonują dwa mechanizmy pokrewne:</p>
<p><strong>Pre-packaged Chapter 11:</strong></p>
<ul>
<li>Dłużnik zawczasu negocjuje i uzyskuje wstępną aprobatę wierzycieli dla planu reorganizacji</li>
<li>Głosowania odbywają się przed złożeniem wniosku o upadłość</li>
<li>Procedura sądowa trwa nawet ~60 dni</li>
</ul>
<p><strong>Section 363 Sale:</strong></p>
<ul>
<li>Sprzedaż aktywów za zgodą sądu, wolna od obciążeń</li>
<li>Często poprzedzona znalezieniem "stalking horse bidder" (inwestora startowego)</li>
<li>Słynne przypadki: Chrysler i GM sprzedane w ~40 dni</li>
</ul>`,
      },
      {
        id: "porownanie",
        title: "Tabela porównawcza",
        content: `<table>
<thead>
<tr>
<th>Aspekt</th>
<th>Polska</th>
<th>UK</th>
<th>Niemcy</th>
<th>USA</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Podstawa prawna</strong></td>
<td>Art. 56a-56h P.U.</td>
<td>Praktyka w administration</td>
<td>Brak dedykowanej procedury</td>
<td>Chapter 11, §363</td>
</tr>
<tr>
<td><strong>Rola sądu</strong></td>
<td>Zatwierdza warunki sprzedaży</td>
<td>Wyznacza administratora</td>
<td>Powołuje syndyka</td>
<td>Zatwierdza plan/sprzedaż</td>
</tr>
<tr>
<td><strong>Udział wierzycieli</strong></td>
<td>Nie głosują</td>
<td>Opiniują (od 2021)</td>
<td>Przez radę wierzycieli</td>
<td>Głosują nad planem</td>
</tr>
<tr>
<td><strong>Czas trwania</strong></td>
<td>~292 dni</td>
<td>Natychmiast</td>
<td>Kilka miesięcy</td>
<td>40-60 dni (pre-pack)</td>
</tr>
</tbody>
</table>`,
      },
    ],
  },
  "statystyki": {
    slug: "statystyki",
    sections: [
      {
        id: "liczba-wnioskow",
        title: "Liczba postępowań Pre-Pack",
        content: `<p>Pre-pack w Polsce funkcjonuje od 2016 r., z każdym rokiem zdobywając coraz większą popularność.</p>
<p><strong>Dane statystyczne:</strong></p>
<ul>
<li>2016 r.: <strong>30 wniosków</strong> pre-pack</li>
<li>2017 r.: <strong>51 wniosków</strong></li>
<li>2018 r.: co najmniej <strong>41 wniosków</strong> (część sądów nie udzieliła danych)</li>
<li>Łącznie 2016-2018: <strong>127+ wniosków</strong></li>
</ul>
<p>Według badań Court Watch, w pierwszych latach obowiązywania <strong>ponad 1/3 wszystkich wniosków o ogłoszenie upadłości przedsiębiorstw</strong> zawierała pre-pack.</p>`,
      },
      {
        id: "efektywnosc",
        title: "Efektywność procedury",
        content: `<p><strong>Większość złożonych wniosków pre-pack została przez sądy uwzględniona</strong> (zatwierdzona).</p>
<p>Średni czas rozpoznania i realizacji sprzedaży w trybie pre-pack wynosił <strong>około 292 dni</strong> (niecały rok).</p>
<p>Dla porównania: tradycyjne postępowania upadłościowe likwidacyjne trwają często 2-3 lata.</p>
<p><strong>Przebicie ceny:</strong></p>
<ul>
<li>W 2017 r. ponad połowa ofert pre-pack była wyższa od wartości ustalonej przez biegłego</li>
<li>Średnia nadwyżka w 2017 r.: <strong>24%</strong> ponad wycenę</li>
<li>Średnia nadwyżka w 2016 r.: 11% ponad wycenę</li>
</ul>`,
      },
      {
        id: "geografia",
        title: "Rozkład geograficzny",
        content: `<p>Najwięcej wniosków pre-pack trafia do sądów w dużych ośrodkach gospodarczych:</p>
<ul>
<li><strong>Warszawa</strong>: 27 wniosków (2016-2018)</li>
<li><strong>Kraków</strong>: 17 wniosków</li>
<li><strong>Poznań</strong>: 11 wniosków</li>
<li><strong>Wrocław</strong>: 9 wniosków</li>
<li><strong>Olsztyn</strong>: 5 wniosków (2018)</li>
<li><strong>Rzeszów</strong>: 4 wnioski (2018)</li>
</ul>
<p>Świadczy to o tym, że pre-pack stał się narzędziem najczęściej wykorzystywanym przez przedsiębiorców z regionów o dużej aktywności biznesowej.</p>`,
      },
      {
        id: "wnioskodawcy",
        title: "Profil wnioskodawców",
        content: `<p>Zdecydowana większość wniosków składana jest przez <strong>samych dłużników (87%)</strong>, a tylko ok. 13% przez wierzycieli.</p>
<p>Wynika to z faktu, że zarząd dłużnej firmy ma najlepszą pozycję, by przed upadłością znaleźć inwestora zainteresowanego zakupem i przygotować ofertę.</p>
<p>Pre-packi wykorzystywane są w różnych branżach:</p>
<ul>
<li>Handel detaliczny i hurtowy</li>
<li>Budownictwo</li>
<li>Przemysł lekki</li>
<li>Produkcja</li>
</ul>`,
      },
    ],
  },
  "ekonomiczne-skutki": {
    slug: "ekonomiczne-skutki",
    sections: [
      {
        id: "dla-dluznika",
        title: "Korzyści dla dłużnika",
        content: `<p>Pre-pack stanowi często <strong>najbardziej optymalną ścieżkę wyjścia</strong> z trudnej sytuacji dla przedsiębiorcy:</p>
<ul>
<li>Zarząd może samodzielnie poszukać inwestora i dogadać warunki przejęcia</li>
<li>Dłużnik ma wpływ na wybór nabywcy – może wybrać podmiot dający gwarancje kontynuacji działalności</li>
<li>Pozwala uniknąć chaosu zwykłej upadłości</li>
<li>Członkowie zarządu mogą uniknąć zarzutów opóźnienia wniosku</li>
</ul>`,
      },
      {
        id: "dla-wierzycieli",
        title: "Korzyści dla wierzycieli",
        content: `<p>Celem pre-packu jest <strong>maksymalizacja spłaty wierzytelności</strong>:</p>
<ul>
<li>Warunkiem zgody sądu jest lepsza cena niż w normalnej likwidacji</li>
<li>Wierzyciele uzyskują środki znacznie szybciej</li>
<li>Szybkie zamknięcie transakcji ogranicza "erozję" masy upadłości</li>
<li>Wierzyciele zabezpieczeni (banki) często popierają pre-pack</li>
</ul>
<p>Dla wierzycieli handlowych dodatkową zaletą jest możliwość kontynuacji współpracy z nowym właścicielem.</p>`,
      },
      {
        id: "dla-pracownikow",
        title: "Wpływ na pracowników",
        content: `<p>Pre-pack bywa przedstawiany wręcz jako <strong>mechanizm ratowania miejsc pracy</strong>:</p>
<ul>
<li>Nabywca przejmuje przedsiębiorstwo w ruchu, co oznacza kontynuację działalności</li>
<li>Pracownicy często zachowują pracę (choć mogą zmienić się warunki)</li>
<li>Unika się masowych zwolnień typowych dla tradycyjnej upadłości</li>
<li>Stabilizacja zatrudnienia oznacza mniejszy ciężar dla funduszy publicznych</li>
</ul>`,
      },
      {
        id: "dla-gospodarki",
        title: "Efekty makroekonomiczne",
        content: `<p>Na poziomie gospodarki narodowej pre-packi przyczyniają się do <strong>zwiększenia efektywności gospodarowania aktywami</strong>:</p>
<ul>
<li>Przedsiębiorstwo przeskakuje płynnie od starego do nowego właściciela</li>
<li>Kapitał ludzki, infrastruktura, sieć dostaw nadal pracują na PKB</li>
<li>Ułatwia restrukturyzację sektorów gospodarki</li>
<li>Ogranicza ryzyko "efektu domina" – upadek jednej firmy nie pociąga kooperantów</li>
<li>Odciąża system sądowniczy – krótsze postępowania to niższe koszty</li>
</ul>`,
      },
    ],
  },
  "kontrowersje-case-studies": {
    slug: "kontrowersje-case-studies",
    sections: [
      {
        id: "ustawione-transakcje",
        title: "Zarzut 'ustawionych transakcji'",
        content: `<p>Najpoważniejszy zarzut wobec pre-packu to podejrzenie, że procedura sprzyja <strong>kulisyzmowi</strong> – dłużnik potajemnie dogaduje się z wybranym inwestorem na sprzedaż majątku po zaniżonej cenie.</p>
<p><strong>Zjawisko "phoenixingu":</strong> Dawni właściciele poprzez podstawioną spółkę odkupują swoje przedsiębiorstwo za ułamek wartości, pozbywając się długów.</p>
<p>Polskie przepisy starają się temu przeciwdziałać poprzez:</p>
<ul>
<li>Wymóg niezależnej wyceny przez biegłego</li>
<li>Kryterium minimalnej ceny</li>
<li>Obowiązkowe wadium 10%</li>
<li>Możliwość ofert konkurencyjnych</li>
</ul>`,
      },
      {
        id: "transparentnosc",
        title: "Problem transparentności",
        content: `<p>W porównaniu z klasyczną upadłością, gdzie sprzedaż majątku następuje jawnie, pre-pack odbywa się w <strong>trybie niejawnym</strong> do momentu ogłoszenia upadłości.</p>
<p><strong>Obawy wierzycieli:</strong></p>
<ul>
<li>Wycena majątku może być stronnicza</li>
<li>Biegłego wskazuje wnioskodawca</li>
<li>Wierzyciele dowiadują się o szczegółach dopiero po postanowieniu sądu</li>
</ul>
<p>Dla poprawy transparentności wprowadzono obowiązek obwieszczenia w KRZ oraz powołanie tymczasowego nadzorcy sądowego.</p>`,
      },
      {
        id: "praktiker",
        title: "Case Study: Praktiker Polska",
        content: `<p>Sieć marketów budowlanych <strong>Praktiker Polska</strong> popadła w tarapaty finansowe po upadłości niemieckiej spółki-matki.</p>
<p>W 2017 r., po nieudanej restrukturyzacji sanacyjnej, zarządca złożył wniosek o upadłość z pre-packiem. Ofertę złożyła firma 3W Dystrybucja Budowlana z Rudy Śląskiej.</p>
<p><strong>Wnioski:</strong></p>
<ul>
<li>Pre-pack dawał szansę na uratowanie części sieci i zachowanie miejsc pracy</li>
<li>Czas był kluczowy – sklepami interesował się też inny konkurent</li>
<li>Ostatecznie nie doszło do pełnego przejęcia marki</li>
<li>Przykład pokazuje zarówno potencjał, jak i ograniczenia procedury</li>
</ul>`,
      },
      {
        id: "zagraniczne",
        title: "Case Studies zagraniczne: GAME i Chrysler",
        content: `<p><strong>GAME Group (UK, 2012):</strong></p>
<ul>
<li>Sieć ~1300 sklepów z grami, 10 000 pracowników</li>
<li>Pre-pack administration umożliwił sprzedaż 333 rentownych sklepów konsorcjum OpCapita</li>
<li>Uratowano 1/4 sieci i tysiące miejsc pracy</li>
<li>Marka GAME działa do dziś pod innym właścicielem</li>
</ul>
<p><strong>Chrysler (USA, 2009):</strong></p>
<ul>
<li>Rząd USA zaaranżował plan sprzedaży do spółki powiązanej z Fiatem</li>
<li>W ciągu 42 dni od złożenia wniosku sąd zatwierdził sprzedaż (363 sale)</li>
<li>Fabryki, pracownicy i marka uratowane</li>
<li>Kontrowersje dotyczące pominięcia praw niektórych wierzycieli</li>
</ul>`,
      },
    ],
  },
};

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articleContents[slug];
}
