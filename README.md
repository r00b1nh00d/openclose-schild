# OpenClose-Schild
## ~avatar avatar @unplugged

Hier lernst du mit  deinem @boardname@ Variablen zu verwenden.
Dafür programmieren wir ein Open bzw. Close Schild. 
So kannst du dein @boardname@ an deine Zimmertür hängen und es soll entweder den Text open oder den Text close angezeigt werden.

## ~ @unplugged

Wird einfach nur der  Block ``||basic:Zeige Text||`` verwendet müsste man den @boardname@ immer wieder neu programmieren, wenn man die Anzeige von "open" auf "close" sellen möchte.


## Schritt 1: Erstelle eine Variable mit dem Namen Schild.
Unter ``||variables:Variablen||`` kannst du eine neue Variable erstellen. 
Erstelle die Variable ``||variables:Schild||``
Eine Variable kannst du dir wie ein Gefäß vorstellen in das du einzelne Buchstaben, Zahlen, Folgen von Buchstamen oder Zahlen oder ganze Listen (dazu später mehr) hinein legen kannst.
Mit dem Block ``||variables: ändere um (__) ||`` kannst du z.B. den Zahlenwert deiner Variable um 1 erhöhen. 


Mit dem Block ``||variables: setze auf (__) ||`` kannst du der Variable einen Wert oder Wort zuweisen. In unserem Fall soll das Wort "Open" auf der Variable anzeige gespeichert werden.
In MakeCode ist eine Variable standardmäßig eine Zahl. Um auf ihr ein Wort zu Speichern benötigst du noch aus dem Bereich ``||Text: Text ||`` das kleine Weiße Feld mit den Anführungszeichen ("_"). Ziehe dieses auf das passende Feld im Block   ``||variables: setze auf (__) ||`` und schreibe zwischen die Anführungszeichen "open"

```blocks
let Schild = "open"
```

## Schritt 2: Variable mit Tastendruck festlegen
Nehme nun einen Block mit ``||variables: setze auf (__) ||`` und schiebe ihn in den Block ``||input: Wenn Knopf A gedrückt ||`` aus dem Bereich ``||input: Eingaben ||``
Der Block ``||variables: setze auf (__) ||`` soll wieder so wie im vorherigen Schritt ausgefüllt werden.
```blocks
let Schild = "open"
input.onButtonPressed(Button.A, function () {
    Schild = "Open"
})
```
## Schritt 3: Inhalt der Variablen ausgeben.
Um das, auf unserer Variable ``||variables:Schild||`` gespeicherte Wort auf dem Calliope anzeigen zu lassen. Benötigen wir wieder ``||basic:Zeige Text||`` aus dem Bereich ``||basic:Grundlagen|`` dieser Block soll Dauerhaft bearbeitet werden, also kommt er in die ``||basic:Dauerhaft||`` Schleife, welche ebenfalls im Bereich ``||basic:Grundlagen||`` zu finden ist. In den Block ``||basic:Zeige Text||`` kommt nun unsere Variable ``||variables:Schild||``. Nach dem Drücken von Knopf A sollte der Calliope im Simulator open anzeigen.

```blocks
basic.forever(function () {
    basic.showString(Schild)
    })
input.onButtonPressed(Button.A, function () {
    Schild = "Open"
})
let Schild = "open"
})
```
## Schritt 4 Das Schild umschalten
Im letzten Schritt benötigen wir nochmals den Block ``||input: Wenn Knopf A gedrückt ||`` aus dem Bereich ``||input: Eingaben ||`` ändern hier aber das ``||input: A ||`` zu einem ``||input: B ||``
Schieben wieden den Block ``||variables: setze auf (__) ||`` hinein und lassen mit dem Knopfdruck auf unserer Variable ``||variables:Schild||`` das Wort "close" speichern.
Nun zeigt dein Callipe immer an ob dein Zimmer für Besucher geöffnet oder geschlossen sein soll. Mit den Knopfen A oder B kannst du zwischen "open" und "close" wechseln.

```blocks
let Schild = ""
input.onButtonPressed(Button.A, function () {
    Schild = "Open"
})
input.onButtonPressed(Button.B, function () {
    Schild = "Close"
})
basic.forever(function () {
    basic.showString(Schild)
})
```
## ~ @unplugged
Ich hoffe das Tutorial hat dir geholfen und dein Open Close Schild funktioniert. Um noch mehr zu lernen schau doch gerne in die weiteren Übungen.


> Diese Seite bei [https://r00b1nh00d.github.io/openclose-schild/](https://r00b1nh00d.github.io/openclose-schild/) öffnen


#### Dieses Tutorial verwenden
Um dieses Tutorial zu verwenden muss der link [https://makecode.calliope.cc/#tutorial:https://github.com/r00b1nh00d/openclose-schild] in das Adressfeld des Browsers kopiert werden.

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
