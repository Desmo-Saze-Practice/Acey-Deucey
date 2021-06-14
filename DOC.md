## Documentation

Voici la documentation concernant notre super jeu de Acey Ducey :boom: !\
Ici sont listées toutes les méthodes accessibles de l'objet `core`.

:warning: Vous aurez besoin de ces fonctions au fur et à mesure du code, tout sera écrit dans l'énnoncé :see_no_evil:

( Tu peux ausssi `console.log` l'objet `core` si tu veux voir ce qu'il y a dedans )

<a name="core"></a>


* [core](#core) : <code>object</code>
    * [.getRandomNumber(minValue, maxValue)](#core.getRandomNumber) ⇒ <code>Number</code>
    * [.getTwoNumbers(minValue, maxValue)](#core.getTwoNumbers) ⇒ [<code>MinMaxObj</code>](#MinMaxObj)
    * [.showResults(message)](#core.showResults)

<a name="core.getRandomNumber"></a>

### core.getRandomNumber(minValue, maxValue) ⇒ <code>Number</code>
Génère un nombre aléatoire entre minValue et maxValue (inclus) et renvoie le résultat

**Returns**: <code>Number</code> - randomNumber  

<a name="core.getTwoNumbers"></a>

### core.getTwoNumbers(minValue, maxValue) ⇒ [<code>MinMaxObj</code>](#MinMaxObj)
Génère deux nombres aléatoires entre minValue et maxValue (inclus) et renvoie le résultat sous forme d'objet

**Returns**: [<code>MinMaxObj</code>](#MinMaxObj) - Un objet avec les clefs min et max  

<a name="core.showResults"></a>

### core.showResults(message)
Ecrit et affiche le message dans #resultMessage et masque le pot


| Param | Type |
| --- | --- |
| message | <code>String</code> | 

----

<a name="MinMaxObj"></a>

## MinMaxObj
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Min number |
| max | <code>number</code> | Max Number |

