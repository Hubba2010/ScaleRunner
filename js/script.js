'use strict';

///////// Data to render exercises

const dataArray = {
	Proste_melodie: [
		'Ćwiczenie już Was nudzą? Spróbujcie zatem opanować kilka prostych popularnych melodyjek, które każdy powinien znać. W sumie całe te kawałki nie są takie trudne jak się wydają, ale pamiętajcie żeby się czegoś nauczyć, trzeba zawsze trochę posiedzieć :) Przed wami 5 łatwiutkich nutek, spróbujcie sami! Zacznijmy od......',
		'Budka Suflera - Takie Tango (uwaga na bendy!)',
		'The Cranberries - Zombie',
		'Nothing Else Matters - Metallica',
		'House of the Rising Sun aka "Dom Wschodzącego Słońca" - The Animals',
	],
	Chromatyka: [
		'Ćwiczenia chromatyczne są jednymi z najlepszych jeśli chodzi o kształtowanie techniki gry na gitarze, ponieważ odpowiednio ogrywane, poprawiają motorykę obu grających rąk. Świetnie nadają się na rozgrzewkę, a granie ich przez dłuższy czas potrafi nieźle zmęczyć! Nie traćmy czasu - zacznijmy od najprostszych ćwiczeń chromatycznych - 2 palce na strunę, a na początek pierwszy palec (wskazujący) z drugim (środkowym). Nie ma co narazie forsować czterech palców jeśli będzie problem z dwoma lub trzema, dlatego absolutnie początkujący shrederzy powinni zacząć właśnie od tego ćwiczenia. Na początek najlepiej zaczynać od bardzo wolnego tempa, i dopiero stopniowo zwiększać jeśli na ogół nie robimy błędów. Możesz spróbować też grać to ćwiczenie z drugim i trzecim palcem (środkowym i serdecznym) i z trzecim i czwartym (serdecznym i małym), ale na tym etapie nie jest to wymagane, więc nie przejmuj się jeśli będziesz miał kłopoty na początku. Spróbuj zacząć od tempa 80-90 przy jednym uderzeniu w gitarę na jedno kliknięcie metronomu. Pamiętaj o naprzemiennym kostkowaniu i synchronizacji swojego grania z metronomem!!!',
		'Kolejne ćwiczenie wymaga użycia dwóch "niesąsiadujących" ze sobą palców, a więc używaj pierwszego i trzeciego. Dla treningu możesz drugi i czwarty (zobaczysz że będzie dużo trudniej i bardziej się będziesz męczyć!), ale jak wspomniano wcześniej, nie jest to obligatoryjne na początek. Warto jednak spróbować :) Zauważ że grając to ćwiczenie będziesz zbliżał się do końca gryfu, a progi będą coraz krótsze - postaraj się zajść jak najdalej i wrócić z powrotem!',
		'Tutaj już musisz użyć trzech palców. Postaraj się grać płynnie i równo z metronomem. Problemem tutaj może okazać się kostkowanie, ponieważ z każdą struną będziesz zmieniać system kostkowania - raz będziesz zaczynał grać daną strunę z góry, raz z dołu. Miej to na uwadze. Możesz spróbować potem dołączyć czwarty palec (4 dźwięki na strunę).',
		'Chyba nie trzeba przedstawiać, jak wyglądałaby chromatyka na 4 palce, natomiast jest jeszcze jedno ciekawe ćwiczenie, które poprawia dynamikę poruszania się lewej ręki po gryfie. To ćwiczenie jest skuteczniejsze przy szybszych tempach. Gramy na jednej strunie i schodzimy jak najdalej, a następnie wracamy w analogiczny sposób. ',
	],
	Cwiczenia_na_lewa_reke: [
		'W tej sekcji skupimy się na ręce odpowiedzialnej za chodzenie po gryfie. Ćwiczenia będą miały na celu rozwój motoryki palców lewej dłoni, oraz poprawę koordynacji. Pierwsze ćwiczenie wymaga myślenia, aby nie pomylić kolejności stawiania palców na gryfie. Łatwo zauważyć schemat, który się powtarza w kolejnych pozycjach. Kiedy już skończysz ogrywać ostatnią pozycję, wracaj przez drugą, potem pierwszą i tak w kółko. Postaraj się utrzymać bezbłędną grę przez 2-3 minuty zanim zwiększysz tempo bicia metronomu.',
		'Kolejne ćwiczenie wymaga sprawności w przechodzeniu pomiędzy strunami, dlatego zanim do niego przystąpisz, najlepiej dobrze przerób pierwsze ćwiczenie z sekcji ĆWICZENIA NA KOSTKOWANIE, aby nie mieć większych kłopotów z tym zadaniem. Tak poza przechodzeniem między strunami, jest to czysta chromatyka.',
		'Tutaj dużo będzie zależeć od sprawności Twojego czwartego palca, ponieważ do niego będziesz dostosowyać pierwszy i drugi palec - nie powinno się używać trzeciego (serdecznego) palca w tym ćwiczeniu. Czeka Cię szybka przejażdżka po gryfie z najsłabszym palcem w roli głównej. NIE JEST to łatwe ćwiczenie.',
		'Ostatnie, proste zadanko, które zmusza do stosowania innych kombinacji opalcowania. Chodzi o to w tym ćwiczeniu, aby w przyszłości być przygotowanym na przeróżne ustawienia - uwierz, przyda Ci się to. Nie będziesz przecież wiecznie grać chromatyk prawda? Spróbuj wymyśleć też jakieś swoje ustawienie!',
	],
	Cwiczenia_na_kostkowanie: [
		'Zajmijmy się teraz trochę ręką kostkującą, której sprawność odgrywa kluczową rolę w shredingu. Grając bardziej skomplikowane kawałki, musisz bez problemów umieć przemieszczać się między strunami, aby nigdzie nie zahaczać niepotrzebnie i zastanawiać się gdzie popełniło się błąd. Nie zaleca się też śledzić wzrokiem ręki kostkującej, ponieważ pogubi się później lewa ręka, a więc staraj się ogrywać później te ćwiczenia bez patrzenia na kostkę. Bez przerobienia tych ćwiczeń nie ma mowy o ruszaniu do string-skippingu.',
		'Poniższe ćwiczenie może się okazać problematyczne jeśli chodzi o utrzymanie rytmu z metronomem. Do tej pory zapewne grałeś / grałaś z metronomem uderzając jedno lub jeśli jesteś nieco bardziej zaawansowany/a dwa dźwięki w gitarę na klik. Jeśli grasz już większość ćwiczeń chromatycznych ~130, 4/1 (gitara/metronom) bezbłędnie, to wiedz, że jesteś na dobrej drodze do sukcesu. W każdym razie, jeśli chcesz ułatwić sobie to ćwiczenie, spróbuj zagrać na 3/1, wtedy co klik będziesz przechodzić do nowej struny. Wymagające zadanie, zarówno na kostkowanie, jak i na rytmikę!',
		'Po zagraniu poniższego ćwiczenia, może Ci być niedobrze, ponieważ dźwięki idą tak, a nie inaczej - może brzmieć jak muzyka z jakiegoś horroru, ale nie o to w tym chodzi by grać tutaj arcydzieła muzyczne. Chodzi o to w tym ćwiczeniu, by nauczyć Cię móc dowolnie w każdym momencie przejść na kolejną strunę bez zawrotów głowy. Tutaj jest wykorzystany tkzw. system trójkowy, czyli idziesz w górę trzy dźwięki i cofasz się o jeden, aż w końcu dochodzisz do końca i wracasz tak samo. Ćwiczenie może z pozoru okazywać się straszne i nieprzyjemne, ale zobaczysz, że w pewnym momencie odruchowo będziesz grywał te trójki :) ',
		'Ostatnie w tej sekcji ćwiczenie, a zarazem fragment utworu Knights Of Cydonia zespołu Muse! Fani zespołu zapewne podskakują z radości. Przyjemne dla ucha, a zarazem męczące dla kostkującej ręki ćwiczenie. Jest to również małe wprowadzenie do string-skippingu, ponieważ tutaj będziesz przeskakiwać strunę G po zagraniu każdego zejścia. Tempo oryginału? Lepiej nie próbuj póki co, ale jeśli musisz wiedzieć, to jest to 140 UNM w triolach (3/1), grane przez niecałe pół minuty! Można się zmęczyć.... Pamiętaj żeby nie forsować tempa niepotrzebnie.',
	],
	Cwiczenia_rytmiczne: [
		'W ćwiczeniach rytmicznych będziemy skupiać się przede wszystkim na ręce kostkującej. Jeśli chcesz zaistnieć w świecie Rock & Rolla, koniecznie musisz nauczyć się techniki palm muttingu. Krótko o P.M. - technika gry na gitarze polegająca na odpowiednim tłumieniu strun prawą ręką tuż przy mostku podczas kostkowania celem ograniczenia długości rozbrzmiewania dźwięku oraz nadania mu przytłumionego brzmienia... Tak więc do poniższych ćwiczeń zmusimy do pracy Twój nadgarstek, który regularnie będzie tłumił wybrzmiewanie strun, kiedy będzie to potrzebne. W tabulaturach wszelkiego rodzaju dźwięki tłumione przez Palm Mutting, reprezentowane są przez zaznaczenie u góry P.M danego ciągu dźwięków przerywaną linią. Nie należy mylić Palm Muttingu z tłumieniem lewą ręką, gdzie wtedy dźwięki są oznaczone jako "X" na tabulaturach, ponieważ one zwyczajnie nie wybrzmiewają, a mają dodać jedynie pikanterii. Poniżej proste ćwiczenie na trening techniki P.M. Oczywiście pamiętaj o dokładności, szybkość - przyjdzie z czasem.',
		'Zadanie poniżej wymaga od Ciebie stosowania techniki Palm Mutting, gdy grasz pustą strunę E. Chyba jeden z najbardziej wzorcowych przykładów, na którym można bazować tworząc własne riffy gitarowe.',
		'W kolejnym zadaniu musisz patrzeć na nuty i na ich wartości. Na początku każdego taktu znajduje się ćwierćnuta, która powinna trwać jeden klik metronomu, później występują ósemki (2 ósemki składają się na jeden klik metronomu) i są one wytłumione techniką P.M. Do dzieła!',
	],
	Pajaki: [
		'Pająki są świetnymi ćwiczeniami jeśli chodzi o rozwój zarówno ręki kostkującej i tej, która przemieszcza się po gryfie. Nazwa pająki nie wzięła się znikąd - szybkie pełzanie po różnych strunach i charakterystyczne brzmienie stwarzają klimacik grozy. Poniższe ćwiczenia można wykonywać kostkując naprzemiennie lub stosując technikę "Sweep picking", ale do niej dojdziemy już niedługo. Tak czy owak, ucząc się później sweepa, możesz doskonalić technikę na pająkach.',
		'Niżej znajdziesz właściwie jedynie rozwinięcie powyższego ćwiczenia. Koncepcję pająków już raczej znasz, a więc na tym zadaniu zakończymy tą sekcję :)',
	],
	Hammer_ony_Pull_offy: [
		"Szybkie solówki legendarnych gitarzystów nie istniałyby bez szybkich hammer-on'ów i pull-off'ów. Na czym polegają obie techniki? Hammer-on'y to dźwięki wydobywane przez gitarę bez szarpania kostkującą ręką struny po energicznym uderzeniu opuszkiem któregoś z palców lewej dłoni na wyżej położonym progu tej samej struny. Pull-off to jest jedynie przeciwność, ale ściągając palec musisz nim dodatkowo szarpnąć strunę, aby mocniej wydobyć pożądany dźwięk. To właśnie stosując obie te techniki, gitarzyści są w stanie zagrać milion dźwięków na sekundę kostkując praktycznie wcale. Na początku uważaj, żeby nie przesadzać z poniższymi ćwiczeniami - mogą Cię później boleć palce. Pierwsze ćwiczenie - banał, proste ćwiczenie chromatyczne, jednak kostkujesz tylko pierwszy dźwięk struny! PAMIĘTAJ: dostawiasz palec - hammer-on, kiedy ściągasz palec - pull-off. Staraj się jak najmniej używać małego palca, ponieważ jest on najsłabszy. Granie nim legato (bez kostkowania) jest bardzo męczące dla lewej ręki.",
		'Następne ćwiczenie jest stworzone typowo pod wytrzymałościówkę - granie w miejscu i wykorzystywanie wszystkich palców. Ręka kostkująca nie ma prawa brać udziału! Wytrzymaj jak najdłużej. Rekomendowane tempo na początek: 110 UNM, 2/1 (gitara/klik).',
		'Poniższy przykład to nic innego jak główna pentatonika molowa zagrana legato, wykorzystując obie poznane techniki. Przyda się później podczas improwizacji! Popróbuj też inne pentatoniki - znajdziesz je w zakładce SKALE. Możesz też spróbować zagrać tak, że schodzisz w dół pierwszą pozycją, a wracasz drugą itd. Dla dodatkowego utrudnienia możesz nawet dodać system trójkowy, pamiętasz go jeszcze? Pomysłów jest wiele.....',
	],
	Bendy: [
		'Bending (podciąganie) strun jest podstawową techniką gry na gitarze, często używaną w bluesie i rocku, ale także w większości innych stylów (oprócz muzyki klasycznej). Chodzi o to, aby „wygiąć” (pchnąć strunę w poprzek lub nad podstrunnicą palcami lewej ręki) tak, aby struna zacieśniła się, a dźwięk podniósł się. Skąd wiadomo ile podciągnąć? Na tabulaturach gitarowych zazwyczaj stopień podciągnięcia podawany jest w tonach (cały ton to dwa progi) -- 1/2 to pół tonu - czyli podciągasz do dźwięku z następnego progu, natomiast "full" to podciągnięcie o cały ton. Rzadko podciąga się wyżej... Bardzo ważne jest, aby dużo ćwiczyć (ale z umiarem!), ponieważ bendy brzmią okropnie, gdy są źle wykonywane. Jeśli nie zaczniesz od razu ćwiczyć bendingu w melodiach, ryzykujesz, że potem będziesz brzmieć jak dziecko uczące się skrzypiec i możesz zacząć tracić znajomych. Częste podciąganie to tortura dla opuszków palców, dlatego jeśli zaczną Cię boleć, nie katuj ich na śmierć! Bending to bardzo trudna technika do nauczenia przy użyciu samego tekstu, więc spróbuj popatrzeć na YT, jak robią to profesjonaliści. Wiedz drogi czytelniku, że ScaleRunner jest od tego aby Cię tylko ukierunkować, czego się uczyć i jak ćwiczyć :) Pierwsze zadanie - zacznij od nauki poprawnego podciągania półtonowego - możesz zagrać sobie wcześniej dźwięk, aby wiedzieć jaką barwę uzyskać podczas bendu.',
		'Kolejne zadanie oczywiście trudniejsze, tym razem podciąganie o cały ton - najlepiej basowe struny ciągnąć w dół, wioliny podciągaj w górę.',
		'Tutaj mix - podciąganie dźwięków ze skali eolskiej.',
	],
	String_skipping: [
		'Technika, dająca ciekawe efekty brzmieniowe przy szybszych tempach, bardzo często wykorzystywana przez schrederów. String skipping (pomijanie strun) wymaga nie lada sprawności jeśli chodzi o swobodne przeskakiwanie kostki między strunami i przemieszczanie się po gryfie, dlatego jeśli tu jesteś, przygotuj się na niezłą ganiankę. Pierwsze ćwiczenie z bazą na strunie basowej i skakanie po kolei po pozostałych.',
		'Skakanka po pasażach durowych w różnych partiach gryfu. Najlepiej myśleć tutaj akordami barowymi.',
		"Tutaj musisz starać się zaczynać każdą pozycję od pierwszego palca. Niezłe ćwiczenie usprawniające bieganie dźwiękami ze skali string-skipping'iem po gryfie, a zarazem test Twojego kostkowania i rozciągłości palców.",
	],
	Sweep_picking: [
		"Zapewne słyszeliście, jak gitarzyści heavy metal'owi robią te superszybkie zagrywki, w której zamiatają kostką po wszystkich strunach, wykonując wydaje się - zamaszyste ruchy, jednocześnie poruszając swoimi zwinnymi palcami z prędkością światła.  Sweep brzmi trochę jak akord, ale z rozdzielonymi wszystkimi nutami, czyli na ogół błyskawiczne granie pasażami, podczas gdy kostka chodzi po strunach góra/dół. Ta technika została spopularyzowana w latach 80. przez Yngwie Malmsteena, Jasona Beckera i Marty'ego Friedmana, nazywana jest „sweep pickingiem”. Jest to dość zaawansowana technika kostkowania i może wymagać trochę praktyki, aby uzyskać ciekawe efekty brzmieniowe. Zaczynając naukę sweep'u najlepiej nie szaleć z tempem na początku i powoli, ale dokładnie brnąć do przodu. Ćwiczenie 1 - proste dwie zmiany pasażowe Am - Dm, D oznacza kostkowanie w dół, a G w górę.",
		'Ćwiczenie 2 - wspinaczka po wiolinach z legato',
		'Ćwiczenie 3 - twardy orzech do rozgryzienia samemu, akordy zmniejszone pomieszane z różnymi pozycjami A-molla',
	],
	Pentatoniki_modalne: [
		'Czym są penatoniki i po co Ci one? Pentatoniki są to pięciostopniowe skale (zawierające pięć tych samych dźwięków w oktawie). Większość współczesnych gitarzystów, podczas improwizacji, bądź też tworzenia własnych utworów, bazuje właśnie na pentatonikach, ponieważ to one stanowią źródło tych "poprawnych" dźwięków. Oczywiście wszystko zależy od tonacji - każda zmiana tonacji przesuwa wszystkie pentatoniki i skale, a więc nie są to na stałe przypisane dźwięki do danych progów gitary. My będziemy poznawać na początku pentatoniki i skale modalne do tonacji a-moll, a więc baza znajduje się na dźwięku A (5 próg, najgrubsza struna - odtąd idzie pierwsza pozycja pentatoniki w tej tonacji). W przypadku tonacji G-moll, pierwsza pentatonika zaczynałaby się od progu trzeciego. Poniżej wszystkie pozycje pentatoniczne, łącznie z ich nazwami. I pozycja - pentatonika eolska.',
		'II pozycja - pentatonika jońska.',
		'III pozycja - pentatonika dorycka.',
		'IV pozycja - pentatonika frygijska.',
		'V pozycja - pentatonika miksolidyjska (zauważ, że tutaj mamy możliwość grania od progu trzeciego, ponieważ wchodzimy w nową oktawę, a więc możemy zaczynać zarówno z trzeciego progu jak i piętnastego - te same dźwięki tylko wyższe częstotliwościowo.)',
	],
	Skale_modalne: [
		'Skoro już znasz pentatoniki, a przechodzenie między nimi nie stanowi dla Ciebie problemu, czas przejść do skali siedmiostopniowej, która zawiera tak naprawdę wszystkie przyzwoite dźwięki. Jako że skala siedmiostopniowa, pozycji będzie siedem. Tak naprawdę jest to tylko (i aż) rozszerzenie do pentatonik o dwie dodatkowe pozycje i dodatkowe barwniki dźwiękowe. Zaczynamy oczywiście od I pozycji - eolskiej.',
		'II pozycja - skala lokrycka',
		'III pozycja - skala jońska',
		'IV pozycja - dorycka',
		'V pozycja - frygijska',
		'VI pozycja - lidyjska',
		'VII - miksolidyjska',
	],
	Pasaze: [
		"Pasaże z ang.(arpeggios) są to nic innego jak dźwięki muzycznych akordów grane szybko jedne po drugim zamiast razem. Stanowią one cenne źródło dźwięków podczas improwizacji, gdy ogrywamy poszczególne dźwięki akordów opartych na skalach. Dla bardziej zaawansowanych: technika sweep picking znacznie ułatwia granie pasaży, ponieważ nie musimy obawiać się o kostkowanie naprzemienne, poza tym pasaże lubią hammer-on'y i pull-off'y, pod warunkiem, że pierwsze dźwięki strun są grane kostką. Pierwsza przykładowa progresja do przećwiczenia oparta na akordach: G, Am, B, C.",
		'To ćwiczenie korzysta z progresji: Am, C, Em, F. Często wykorzystywana w podkładach muzycznych.',
		'Na koniec nietypowa progresja, wykorzystująca pasaże septymowe.',
	],
	Mol_harmoniczny: [
		'Skali harmonicznej napewno nie będziesz stosować tak często jak modalnych, aczkolwiek przydadzą Ci się w pewnych momentach. Po co jest mol harmoniczny? Przede wszystkim harmoniczny mol służy budowaniu napięć. Budując jakiś podkład akordowy to tworząc kadencje V-I w zwykłej skali molowej masz akordy Em7 – Am7, jak wiadomo, w takim wypadku bardziej dobitne byłoby użycie akordu dominantowego (dominanty) E7, ale przeszkadza nam tercja, czyli właśnie G, dlatego z pomocą przychodzi nam skala molowa harmoniczna, która polega na podwyższeniu siódmego stopnia skali eolskiej. Ogrywając lokryckę skalę podnosisz o sekundę jej VI stopień, w jońskiej V itd. Poniżej znajdziesz wszystkie pozycje mola harmonicznego dla trybu three-notes-per-string (trzy dźwięki na strunę).',
		'Lokrycka #6',
		'Jońska #5',
		'Dorycka #4',
		'Frygijska dominantowa',
		'Lidyjska #2',
		'Skala alterowana - "superlokrycka"',
	],
	Melodyczny_mol: [
		'Skala melodyczna molowa jest bardzo użyteczną i wszechstronną skalą, którą improwizatorzy mogą poznać i nie tylko używać do solówek nad akordami molowymi lub tonacjami. Melodyczny mol przedstawia kilka fajnych opcji harmonicznych, gdy chcesz uciec od zwykłego grania diatonicznie nad zwykłymi progresjami akordów w swoich solówkach. W tej sekcji dowiesz się, jak wyglądają poszczególne pozycje melodic minor w tonacji A.',
		'II pozycja - skala dorycka z obniżoną noną lub jak kto woli - frygijska z sekstą zwiększoną',
		'III pozycja - lidyjska zwiększona (lydian augmented)',
		'IV pozycja - lidyjska dominantowa',
		'V pozycja - miksolidyjska z obniżoną sekstą',
		'VI pozycja - eolska b5 lub lokrycka #2',
		'VII pozycja - skala alterowana nazywana "superlokrycką"',
	],
};

/////////////////// Selectors

const toggler = document.querySelector('.toggler');
const hamburgerBtn = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.hamburger__menu');
const closeMenu = document.querySelector('.close-menu-btn');
const dropdown = document.getElementsByClassName('dropdown-responsive__btn');

const mainContent = document.querySelector('.main-content');
const homePage = document.getElementById('home');
const exercise = document.querySelectorAll('.training');
const currentResponsive = document.querySelectorAll('.active-exercise');
const footerYear = document.querySelector('.date__year');

/////// HIDE / SHOW Navigation Buttons

const toggleNavBtns = function () {
	navMenu.classList.toggle('hide-menu');
	hamburgerBtn.classList.toggle('hidden');
};

hamburgerBtn.addEventListener('click', function () {
	toggleNavBtns();
	if (closeMenu.classList.contains('hidden')) {
		closeMenu.classList.remove('hidden');
	}
});

closeMenu.addEventListener('click', function () {
	closeMenu.classList.toggle('hidden');
	toggleNavBtns();
});

////// Responsive Dropdown Menu

// i -> dropdown count

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function () {
		let dropdownContent = this.nextElementSibling;
		dropdownContent.classList.toggle('drp-down__active');
		this.classList.toggle('rotate');
	});
}

///////////////////////////////////////////

let flag = true;

// Render exercise function

exercise.forEach((item, index) => {
	item.addEventListener('click', function () {
		// Check if main div exists -> if yes, remove it and render exercise
		if (mainContent.childNodes[0] === homePage) {
			mainContent.removeChild(homePage);
		}

		let itemID = index; // Get index to another variable to not change the original index ! !

		// Must subtract 16 in case of clicking a responsive button to render exercises. Index is needed to get data from dataArray
		if (index >= 16) {
			itemID -= 16; // You cant subtract from index here. Otherwise, after clicking a responsive button, you couldn't close the responsive menu later, beacuse the index would never be near 16
			toggleNavBtns();
		}
		let insideText = exercise[index].textContent;

		mainContent.innerHTML = `
		<section class="exercise" id="exercise">	
			<div class="container" id="one">
				<h2 class="section-title">${insideText}</h2>
			</div>		
		</section>
				`;

		// Get certain key values from data object
		let keyValues = Object.values(dataArray)[itemID - 1];

		for (let i = 0; i < keyValues.length; i++) {
			const mainContainer = document.getElementById('one');

			mainContainer.innerHTML += `<p>${
				Object.values(dataArray)[itemID - 1][i]
			}</p`;
			mainContainer.innerHTML += `<img src="../img/cwiczenia/${insideText}/${i}.png" style="max-width: 1200px; width: 100%;">`;
		}

		// Alert users on small screens to read tabs more easily, alert only once per subpage
		if (window.innerWidth <= 750 && flag === true) {
			alert(
				'UWAGA: Jeśli zamierzasz korzystać z tabów, najlepiej obróć ekran do orientacji poziomej w celu ich lepszej widoczności.'
			);
			flag = false;
		}

		const current = document.getElementsByClassName(' active-exercise');
		current[0].className = current[0].className.replace(' active-exercise', '');
		current[0].className = current[0].className.replace(' active-exercise', '');
		exercise[itemID].className += ' active-exercise';
		exercise[itemID + 16].className += ' active-exercise';
	});
});

///// Update year in footer :)

const getCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}
getCurrentYear();

///////////////////////////////
