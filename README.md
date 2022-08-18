## Deployment
* https://linda-94-andersson.github.io/Kunskapskontroll-3/

## Skills used for this project
* HTML
* CSS
* JavaScript

## Requirements

Ni ska bygga ett spel med HTML, CSS och JS.

Spelet som byggs är upp till er. Ni får gärna använda er av arbetet ni gjorde i Kunskapskontroll 2 och lägga till en “frontend” i form av HTML och CSS, men ni får även gärna börja om och bygga något helt annat. 

Förslag på nya idéer skulle kunna vara:
* Memory
* Yatzy
* Snake
* Tic Tac Toe (tre i rad)

Spelet ska vara uppbyggt med HTML, CSS och JS.

Uppgiften kommer att träna er i att använda verktygen inuti DOM. Tanken är att det som vi tidigare gjort med alert, prompt och console.log nu ska visualiseras i HTML och CSS. Detta kommer även träna er i att skilja på vad som visualiseras, och vad som är “data” i programmet. 

Slutligen så kommer det få er att tänka kring program som är mer “event-drivna”, dvs. har funktionalitet som sker pga events som inträffar, exempelvis click och keypress. När vi använde oss av prompt så stannade programmet vid den tidpunkten fram tills att spelaren matade in något. Detta är faktiskt inte fallet längre. Spelets gång kommer att drivas av events och dess listeners.

Precis som tidigare så kommer detta även kräva en del från er vad gäller tolkandet av en kravspecifikation.

### För att uppnå Godkänt är kraven att:

* All inmatning eller input från användaren ska ske via DOM events eller formulär som är skrivna i HTML/CSS. Dvs. ingen användning av alert, prompt eller liknande funktioner.

* Spelet ska spelas på ej mer än en HTML-sida.

* Spelet ska spelas av en person åt gången (inget krav på mer än en). För VG kommer detta utökas till att vara två.

* Spelet ska kunna uppvisa att spelet är färdigt/vunnet, exempelvis via en popup/modal, ett ljud, eller en text som dyker upp.

* När spelet är klart behövs en refresh för att starta om det.

* Hur CSS skrivs är helt upp till er, men en rekommendation är fortfarande att strukturera projektet enligt “funktioner” som vi lärde oss i Kunskapskontroll 1.

* Koden ska skrivas i minst en extern JS-fil. Denna/dessa filer kan vara ESM eller “traditionella” externa JS-filer.

* Canvas som teknologi skall ej användas (även fast det mycket riktigt är ett bra val för att bygga vissa typer av spel) då det ej berör DOM.

* Inga externa JS-bibliotek som jQuery, lodash eller liknande får lov att användas.

* Leverans av projektet sker via .zip i Canvas. Länk till GitHub kommer ej att tillåtas, men det uppmuntras att ni använder av det som ett verktyg under tiden nu utvecklar. Versionshantering är alltid en bra sak.

### För att uppnå Väl Godkänt är kraven (utöver ovan nämnda krav för Godkänt):

* Spelet ska nu kunna spelas av två spelare åt gången. Vad detta innebär beror på vilket spel du bygger. Ett exempel är att för Snake skulle båda spelarna förmodligen spela samtidigt, medan för något som Yatzy och Memory så skulle spelarna gissningsvis turas om. Detta kommer kräva lite kring hur du implementerar koncept som “rundor”, “spelare” osv.

Ingenting som ej är skrivet i kraven ovan skall göras. Se till att följa kravspecifikationen och ingenting annat. Om ni vill bygga vidare på det får ni gärna göra det, men lämna det utanför leveransen.

### Övriga rekommendationer

* Försök bygga lösningen responsivt och accessible, så att den fungerar för så många användare som möjligt. Detta inkluderar device viewports och rem som font-size.

* Försök att se om du kan skapa fler externa JS-filer. Vad dessa innehåller är upp till dig, men en struktur skulle kunna vara main.js, game.js och render.js, där main startar spelet, game innehåller huvudlogiken för spelet, och render innehåller funktionalitet som använder DOM. Detta tänk är snarlikt uppdelningen vi lärde oss om i Kunskapskontroll 1 för CSS.

* När du märker att du upprepar dig i koden, se vad du kan göra för att återanvända det du har skrivit. Loopar eller funktioner är bra verktyg för att underlätta i dessa situationer.

* Spendera ej mer än måndagen den 6 december på att välja vilket spel du tänker bygga. Resten av tiden kommer att behövas för att bryta ner problem och lösa dem.

* Fortsätt att tänka på semantisk användning av HTML.

* Använd debuggern!

* Försök att verkligen bryta ner problemen som du har framför dig, så att du kan tackla dem en och en.

* Försök att få en förståelse för när/i vilke ordning saker måste i programmet.