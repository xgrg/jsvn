# scene1

## Qualities

return (vartable['sc']===undefined);

## Storylet

* playSequence
  * addDialog('Hey there') (5000)
  * addDialog('We know little from each other.', 'fadeIn', true) (1000)
  * addDialog('But I do care about you.', 'fadeIn', true) (1000)
  * displayImage('guitar') (2000)
  * addDialog('All these moments just being by your side...', 'fadeIn', true) (1000)
  * addDialog('You probably ignore it but I could not live without them.') (1000)
  * addDialog('You are my oxygen. My reason to be here.', "fadeIn", true) (1000)
  * addDialog('Without knowing you make me a better person.', "fadeIn", true) (1000)

## Choices

* Hey
  * name:Greg
  * sc:1

# scene2
## Qualities

return (vartable['sc']=="1" && vartable['decision']===undefined);

## Storylet

* playSequence
  * displayImage('girl') (2000)
  * addDialog('Please believe what I am going to say.') (1000)
  * addDialog('You probably already know what this is about. You are so smart.', 'fadeIn', true) (1000)
  * addDialog('Then since you know, just don\'t do this.', 'fadeIn') (1000)
  * displayImage('thinking') (2000)
  * addDialog('No matter the circumstances. Just don\'t do it.', 'fadeIn', true) (1000)
  * addDialog('I will be here to protect you.') (1000)
  * addDialog('&nbsp;') (1000)
  * addDialog('- I am not sure...') (1000)

## Choices

* Do it.
   * decision:doit
* Do not do it.
   * decision:dontdoit


# Scene5
## Qualities
return (vartable['sc']===undefined);

## Storylet
* addDialog("Bonjour. Comment vous appelez-vous ?");
* displayImage("guitar")
* choice()

## Choices
* Toto
   * name:Toto
   * sc:1
* Titi
   * name:Titi
   * sc:1
* Tata
   * name:Tata
   * sc:1
* T'es gole ou quoi? Je t'ai déjà répondu.
   * name:Gog
   * sc:1
   * function(){return (vartable['name']!==undefined);}


# scene3
## Qualities

return (vartable['decision']=='doit');

## Storylet

* addDialog('All right. Well, I will always be here.')

## Choices

* OK.

# scene4
## Qualities

return (vartable['decision']=='dontdoit');

## Storylet

* addDialog('You made the right choice.')


## Choices
* OK.
