# Reflection

Att välja bra namn i sin kod har inte föränn nu vart så självklart. Det är ett simpelt koncept som senare gör en stor skillnad i att förstå kod.
Det jag tar med mig från kapitel 2 i boken är att se namnet på variabeln/funktionen/klassen som mer än bara en 'placeholder' och ta tillfället i akt att vara beskrivande i min namngivning. 'intention-revealing names' och 'pronouncable names' använder jag nu alltid som utgångspunkt i namngivning. Detta för att det ökar förmågan att förstå min kod och att diskutera den med andra.
<details>
<summary>Exempel på beskrivande namngivning</summary>
<br>

````javascript
  #checkBallToGoalCollision () {}
````
</details>

Strukturering av funktioner har för mig också blivit tydligare. 'Do one thing' är koncept jag ofta har brutit tidigare. Jag lät funktioner göra mer än en sak vilket naturligt även gjorde de väldigt stora. Detta gjorde att kod blev onödigt komplex och svår att underhålla. Mindre funktioner som gör en sak skapar istället mer läsbar kod med högre kodkvalitét som även öppnar upp möjligheter för återanvändning. Något jag uppskattar extra mycket från kapitel 3 är 'one level of abstraction per function'. Strategin är nu att i klasser höja abstraktionsnivån i publika metoder genom att bryta ur kod och placera dessa i privata metoder för att sedan anropas. Detta ökar läsbarheten av kod som på sin tur underlättar att skriva kod med mindre beroenden (low coupling/high cohesion).
<details>
  <summary>Exempel på do one thing och höjandet av abstraktionsnivå:</summary> 

````javascript
drawField (field) {
    this.#drawGrass(field)
    this.#drawLines(field)
  }

#drawGrass (field) {}

#drawLines (field) {}
````

</details>

Många kommentarer man skrivit hamnar under kategorin 'bad comments' och kunnat tagits bort helt. Främst har det handlat om redundanta och noise comments som inte tillför någonting utan bara upprepar det uppenbara. Det jag tar med mig är främst att undvika kommentarer i de fall jag kan uttrycka mig tillräckligt tydligt i kod. Fall där kommentarer kan vara bra är TODO's, dokumentation av publika API:er och övriga fall där kommentarer faktiskt tillför något.
<details>
<summary>Exempel på kommentar som beskriver ansvaret hos en klass (givande).</summary>

````javascript
/**
 * Encapsulates game objects and rules.
 */
export class GameModel {}
````

</details>



Formattering är något jag inte reflekterat mycket över tidigare annat än att vara konsekvent i intendering av koden. Mycket tack vare djupare kunskap kring abstraktion och dess nivå kan jag nu lättare få en god vertikal formattering och uppmuntra 'the newspaper metaphor', där läsbar kod av högre abstraktionsnivå finnes i publika metoder högre upp i i filen samtidigt som funktionella detaljer finnes längre ner. Dessa sorteras även enligt 'vertical ordering' där t.ex funktion som anropar andra funktioner befinner sig nära varandra och i den ordning anropen sker. Beroende på hur stark associationen mellan koncept är formatteras kod även genom avstånd. Kod som är nära relaterat grupperas nära varandra, vilket förstärks extra i samband med borttagning av onödiga kommentarer.
<details>
  <summary>Exempel från [GameController.js](./src/controller/GameController.js) Där formatteringen ökar läsbarhet av koden. </summary>

````javascript
    const playerControllerRed = [
      { value: 'ArrowLeft', action: 'left', pressed: false },
      { value: 'ArrowRight', action: 'right', pressed: false },
      { value: 'ArrowUp', action: 'up', pressed: false },
      { value: 'ArrowDown', action: 'down', pressed: false }
    ]

    const playerControllerGreen = [
      { value: 'a', action: 'left', pressed: false },
      { value: 'd', action: 'right', pressed: false },
      { value: 'w', action: 'up', pressed: false },
      { value: 's', action: 'down', pressed: false }
    ]
````
</details>

En nyckelpunkt om objekt och datastrukturer jag tar med mig är att just kunna separera dessa (Data/Object antisymmetri). Inom objektorienterad programmering vill man exponera så lite som möjligt av objektets data och istället gömma dessa genom abstraktion.
Tillstånd av objekt bör istället för setters endast kunna ändras från sitt egna objekt, via metoder. Getters kan behållas i det fall man vill använda datan, t.ex presentera i en vy. Ingen fara om man inte kan ändra på objektet utifrån, då det blir 'read-only' attribut. Detta minimerar 'coupling' mellan objekt och ett objekts 'vetskap' om ett tredje objekts interna struktur (Law of demeter).
Tar med ett sämre exempel från L1 [Body.js](./src/SpriteJS/Physics/Body.js) som visar enligt boken, en hybrid. Klassen exponerar sin interna struktur genom "getters och setters" på enstaka attribut samtidigt som klassen har funktioner som utför förändring på attributen (positionX, positionY) som i sin tur är svåra att utöka med ny funktionalitet/datastruktur.

Har inte några exempel på errorhandling i mitt projekt annat än för att skydda datatypen i attribut som kan sättas utifrån i Laboration 1*. Men det finns koncept ur kapitlet som jag fann givande och kommer ta med till framtiden. Första är användningen av exceptions istället för return codes. Implementationen blir då skymd av alla checks som måste göras för all error som metoden kan returnera. Kasta exceptions gör koden istället mer clean. 
Exceptions ska också förses med värdefull kontext, en programmerare ska kunna veta intentionen bakom operationen som misslyckades och typen av error i ett error-meddelande. Jag gillar även konceptet om 'define exceptions in terms of callers needs' där boken beskriver betydelsen av hur exceptions fångas. Exempelvis kan anrop till metod som kastar fler än en typ av exception skrivas om som en klass som hanterar dessa undantag som en typ.

Att integrera utomstående kod med din egna kan både lyfta och sänka ditt system. Boken lyfter betydelsen av att skapa få och små beroenden till 'third-party software' i syfte att skydda sin kod. Exmpelvis vill man att förändringar i eller byte av tredje-part kod ska innebära så få förändringar som möjligt i din egna. 'Using code that does not yet exist' är ett koncept jag fann intressant, där man i förväg skapar boundaries mot tredje-part kod i form av ett egetskapat interface/api som representerar tredje-partskoden i den form man som användare vill använda den. Exempel från min kod är [Player.js](./src/model/Player.js), en egenskapad klass som jag låter ärva från huvudklassen Sprite ur SpriteJS-modulen. Player-klassen har metoder med funktionalitet ur Sprite-klassen som önskas användas och blir således den enda klassen som kommunicerar direkt med Sprite-klassen. Detta uppfyller konceptet om 'clean boundaries' och är bra då det isolerar min övriga kod mot Sprite-klassen. Förändring i Sprite-klassens interface medför i detta fall att endast Player-klassen behöver ändras.

Testning har hållt väldigt simpelt i kursens projekt med manuella 'top-down' integrationstester. Därav har kapitlet om Unit tests inte påverkat min kod så mycket. Men något jag försökt tillämpa är 'single concept per test' där jag testar ett koncept med ett testfall och med ett förväntat utfall. Detta gör testerna lite mer oberoende och genom att hålla testerna kortfattade och distinkta på detta sättet ökar det även läsbarhet och enkelhet för andra att följa, något som lyfts upp i konceptet 'clean tests'. I övrigt var konceptet 'test enable the -ilities' extra intressant. De beskriver omfattande tester som det som sätter förutsättningen för kodens flexibilitet, underhållbarhet, återanvändbarhet och utan tester ger varenda förändring upphov till en potentiell bugg, något att tänka över och ta med till framtida projekt.

När det kommer till klasser strävar jag efter att klasser ska besitta på ett ansvar. Detta bygger på 'single responsibility principle' som säger att en klass endast ska ha en anledning till förändring i sitt tillstånd. Bokens del om 'maintaining cohesion results in many small classes' finner jag extra givande. Split av stora segment kod till mindre funktioner har nu även
gett mig möjligheter att skapa fler klasser, möjligheter som jag tidigare inte upptäckt. Detta är bra då kod cohesion i klasser kan upprätthållas på en hög nivå, samtidigt som koden blir bättre organiserad och en tydligare struktur. Ex. på bra skapad klass

Jag tar även till mig att separera på byggandet och användandet av min applikation, 'separation of main'. I index.js ligger ansvaret är att bara att bygga de objekt som behövs för att starta igång (model, view och controller) och sedan körs applikationen. Själva applikationen står sedan för användandet av dessa objekt. Detta ger en 'control flow' som är tydlig och enkel att följa, och enkelriktade beroenden (från index till övriga moduler). På så sätt delas ansvaret för konstruktion och användning av objekt till två. Detta bygger på 'separation of concerns' som handlar om att dela upp kod i mindre enheter och minimera överlappning mellan dess funktioner, enheterna får en egen 'concern'. Denna princip tar jag med mig genom att tydlig dela upp kod med egna ansvar, och vara konsekvent i kodarkitekturen. Detta underlättar även för utökning av funktionalitet har jag upplevt. Ex modulstruktur MVC-pattern:


TODO:
Screenshots till reflektion när kod är klar
fortsätta skriva om kod L1 + L2








<details>
<summary></summary>
<br>
</details>