# Début
## Qualities
@function
function(){
return(vartable['sc']==undefined)};

## Text

## Choices
### Démarrer
| variable     | value   |
|:-------------|:--------|
| sc           | 0       |
| light        | no      |
| @action      | Scene1  |
| anxiety      | 0       |
| tried_switch | false   |

#####
# Scene1
## Qualities
| variable   | value   |
|:-----------|:--------|
| @action    | Scene1  |

## Text
Ils peuvent débarquer et me trouver ici d'une minute à l'autre.

Je devrais quitter les lieux **au plus vite**.

Toutefois je n'y reviendrai pas avant longtemps, alors...

...c'est le moment de savoir ce qui compte vraiment.

Savoir quoi laisser ou ne pas laisser.
## Choices
### Continuer
| variable   | value   |
|:-----------|:--------|
| @action    | Scene2  |

#####
# Scene2
## Qualities
| variable   | value   |
|:-----------|:--------|
| @action    | Scene2  |

## Text

## Choices
### Faire un rapide tour des lieux.
| variable   | value              |
|:-----------|:-------------------|
| @action    | RapideTourDesLieux |

#####
# SceneLookAround
## Qualities
| variable   | value              |
|:-----------|:-------------------|
| @action    | RapideTourDesLieux |

## Text
L'appartement est plongé dans la pénombre.
Je me tiens debout devant la porte d'entrée.

J'y verrais sensiblement mieux avec un peu de lumière.
## Choices
### Chercher l'interrupteur près de la porte d'entrée.
| variable   | value     |
|:-----------|:----------|
| @action    | tryswitch |

#####
# SceneTrySwitch
## Qualities
| variable   | value     |
|:-----------|:----------|
| @action    | tryswitch |

## Text
En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.

Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.
## Choices
### Utiliser la lampe du téléphone portable
| variable   | value      |
|:-----------|:-----------|
| @action    | ScenePhone |

#####
# ScenePhone
## Qualities
| variable   | value      |
|:-----------|:-----------|
| @action    | ScenePhone |

## Text
La lumière du téléphone éclaire à courte distance.

Je distingue le bureau sous la fenêtre avec les volets fermés.
## Choices
### Remonter les volets
| variable   | value               |
|:-----------|:--------------------|
| @action    | SceneRemonterVolets |
### Explorer le reste de la pièce
| variable   | value        |
|:-----------|:-------------|
| @action    | ExplorePhone |

#####
# SceneExplorePhoneLight
## Qualities
| variable   | value        |
|:-----------|:-------------|
| @action    | ExplorePhone |

## Text
Je m'avance dans l'appartement à la lumière du téléphone.

C'est sans se préoccuper de la batterie de ce dernier qui se consomme à vue d'oeil.
A ce rythme il sera bientôt totalement déchargé.

S'il n'y a pas de courant dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.
## Choices
### Retourner près de la fenêtre et remonter les volets.
| variable   | value               |
|:-----------|:--------------------|
| @action    | SceneRemonterVolets |

#####
# SceneRemonterVolets
## Qualities
| variable   | value               |
|:-----------|:--------------------|
| @action    | SceneRemonterVolets |

## Text
J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.

Les rayons du crépuscule pénètrent dans l'appartement, laissant voir le reste de la pièce à travers la poussière en suspension.
## Choices
### Explorer la pièce

#####
# ExplorerAvecVoletsRemontés
## Qualities
| variable   | value       |
|:-----------|:------------|
| @action    | exploreroom |

## Text
Je suis à présent dans la pièce à vivre. On y distingue le coin cuisine, un coin salon avec un canapé, une table basse, une table à manger, et le coin bureau sous la fenêtre.
## Choices
### Explorer d'autres pièces
| variable          | value                |
|:------------------|:---------------------|
| exam_autrespieces | true                 |
| @action           | ExplorerAutresPièces |
### S'approcher du coin cuisine
| variable     | value            |
|:-------------|:-----------------|
| @action      | ApprocherCuisine |
| exam_cuisine | true             |
### S'approcher du coin bureau
| variable    | value           |
|:------------|:----------------|
| @action     | ApprocherBureau |
| exam_bureau | true            |
### S'approcher du coin salon
| variable   | value          |
|:-----------|:---------------|
| exam_salon | true           |
| @action    | ApprocherSalon |
### Inspecter les assiettes
@if
function(){ return (vartable['exam_salon'])}

### Aller dans la salle de bains
@if
function(){ return (vartable['exam_autrespieces']=='true')}

### Aller dans la chambre
@if
function(){ return (vartable['exam_autrespieces']=='true')}


#####
# ApprocherSalon
## Qualities
| variable   | value          |
|:-----------|:---------------|
| @action    | ApprocherSalon |

## Text
Salon.
## Choices
### Continuer
| variable   | value       |
|:-----------|:------------|
| @action    | exploreroom |

#####
# ApprocherCuisine
## Qualities
| variable   | value            |
|:-----------|:-----------------|
| @action    | ApprocherCuisine |

## Text
Cuisine
## Choices
### Continuer
| variable   | value       |
|:-----------|:------------|
| @action    | exploreroom |

#####
# ApprocherBureau
## Qualities
| variable   | value           |
|:-----------|:----------------|
| @action    | ApprocherBureau |

## Text
Bureau
## Choices
### Continuer
| variable   | value       |
|:-----------|:------------|
| @action    | exploreroom |

#####
# ApprocherAutresPièces
## Qualities
| variable   | value                |
|:-----------|:---------------------|
| @action    | ExplorerAutresPièces |

## Text
Autres Pièces.
## Choices
### Continuer
| variable   | value       |
|:-----------|:------------|
| @action    | exploreroom |

#####
