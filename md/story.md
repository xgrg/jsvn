# Début
## Qualities
@function
function(){
  return(vartable['sc']==undefined)};
## Text
## Choices
### Démarrer
sc:0
light:no
tried_switch:false
******************************


# Scene1
## Qualities
sc:0
## Text
Ils peuvent débarquer et me trouver ici d'une minute à l'autre.

Je devrais quitter les lieux **au plus vite**.

Toutefois je n'y reviendrai pas avant longtemps, alors...

...c'est le moment de savoir ce qui compte vraiment.

Savoir quoi laisser ou ne pas laisser.

## Choices
### Continuer
sc:1

********************************
# Scene2
## Qualities
sc:1
## Text

## Choices
### Faire un rapide tour des lieux.
look_around_the_room:true
sc:-1

***************
# SceneLookAround
## Qualities
look_around_the_room:true
light:no
tried_switch:false

## Text
L'appartement est plongé dans la pénombre.
Je me tiens debout devant la porte d'entrée.

J'y verrais sensiblement mieux avec un peu de lumière.

## Choices
### Chercher l'interrupteur près de la porte d'entrée.
tried_switch:true
look_around_the_room:false

*******
# SceneTrySwitch
## Qualities
look_around_the_room:false
tried_switch:true
light:no

## Text
En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.

Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.

## Choices
### Utiliser la lampe du téléphone portable
light:phone
just_switched_phonelight:true

*******
# ScenePhone
## Qualities
light:phone
just_switched_phonelight:true

## Text
La lumière du téléphone éclaire à courte distance.

Je distingue le bureau sous la fenêtre avec les volets fermés.

## Choices
### Remonter les volets
remonter_volets:true
just_switched_phonelight:false

### Explorer le reste de la pièce
look_around_the_room:true
just_switched_phonelight:false

*********
# SceneExplorePhoneLight
## Qualities
look_around_the_room:true
light:phone

## Text

Je m'avance dans l'appartement à la lumière du téléphone.

C'est sans se préoccuper de la batterie de ce dernier qui se consomme à grande vitesse.

Si le courant n'est pas rétabli dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.

## Choices
### Retourner près de la fenêtre et remonter les volets.
look_around_the_room:false
remonter_volets:true

************************
# SceneRemonterVolets
## Qualities
remonter_volets:true

## Text

J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.

Les rayons du crépuscule pénètrent dans la pièce, laissant voir la poussière en suspension.

## Choices
### Continuer
@action
Test
