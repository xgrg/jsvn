Version: 1.1

Qualities:
| variable   | value   |
|:-----------|:--------|
| toto       | test    |

Extensions: test1.md,test2.md

# SceneChoixLangues
## Qualities
@function
function(){vartable['toto'] = 'test'; return (vartable['sc']===undefined);}
## Text
Choisissez une langue.

Tria una llengua.
## Choices
### Français
| variable   | value   |
|:-----------|:--------|
| sc         | 0       |
| lang       | fr      |
### Catalan
| variable   | value   |
|:-----------|:--------|
| sc         | 0       |
| lang       | ca      |

#####
# FrScene1
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 0       |
## Image
vallter
## Text
_13 heures 30, route de Vallter, Pyrénées Catalanes_

Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.

Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.
## Choices
### J’enfile mon coupe-vent.
| variable   | value      |
|:-----------|:-----------|
| sc         | 1          |
| equip      | coupe-vent |
### J’enfile polaire, doudoune et coupe-vent.
| variable   | value   |
|:-----------|:--------|
| sc         | 1       |
| equip      | polaire |
### Réflexion faite, je pars en t-shirt.
| variable   | value   |
|:-----------|:--------|
| sc         | 1       |
| equip      | tshirt  |

#####
# FrScene2
## Qualities
| variable   |   value |
|:-----------|--------:|
| sc         |       1 |
## Image
vallter2
## Text
_14 heures, départ de la station de Vallter_

Le chemin débute en montée suivant le tracé du GR10.
La station s’éloigne progressivement dans le dos.

Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.
La montée s’effectue sans encombres.
## Choices
### La montée donne chaud. Je retire ma polaire.
| variable   | value                  |
|:-----------|:-----------------------|
| sc         | scene_croise_marcheurs |
@if
function(){return (vartable['equip']=='polaire')}
### Continuer
| variable   | value                  |
|:-----------|:-----------------------|
| sc         | scene_croise_marcheurs |

#####
# FrScene_croise_marcheurs
## Qualities
| variable   | value                  |
|:-----------|:-----------------------|
| lang       | fr                     |
| sc         | scene_croise_marcheurs |
## Text
Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...  

L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :

_\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"_
## Choices
### Si, puja i baixa (mensonge)
| variable   | value    |
|:-----------|:---------|
| sc         | mensonge |
### No, cap al refugi del Alemany (vérité)
| variable   | value   |
|:-----------|:--------|
| sc         | verite  |
### Ne pas répondre et poursuivre sa route.
| variable   | value         |
|:-----------|:--------------|
| sc         | nepasrepondre |

#####
# FrScene_mensonge
## Qualities
| variable   | value    |
|:-----------|:---------|
| lang       | fr       |
| sc         | mensonge |
## Text
L'homme me lance un regard sceptique et poursuit sa descente.

Je poursuis la montée.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# FrScene_nepasrepondre
## Qualities
| variable   | value         |
|:-----------|:--------------|
| lang       | fr            |
| sc         | nepasrepondre |
## Text
Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# FrScene_verite
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | verite  |
## Text
_\"- Que tinguis bona ruta.\"_

Je poursuis la montée.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# FrScene3
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 2       |
## Image
borne
## Text
A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.
## Choices
### Il est tard pour passer au Nord. Je redescends vers Vallter.
| variable   | value           |
|:-----------|:----------------|
| sc         | back-to-vallter |
### Je continue.
| variable   |   value |
|:-----------|--------:|
| sc         |       3 |
### Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.
| variable   |   value |
|:-----------|--------:|
| sc         |       3 |
@if
function(){return (vartable['equip']=='tshirt')}

#####
# FrScene3b
## Qualities
| variable   | value           |
|:-----------|:----------------|
| lang       | fr              |
| sc         | back-to-vallter |
## Text
La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.

Mais une chose est sûre : je reviendrai.

Fin.
## Choices
### Recommencer
| variable   |   value |
|:-----------|--------:|
| sc         |       0 |

#####
# FrScene4
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 3       |
## Image
vallee
## Text
Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.

A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.
Les taches éparses de neige sont à présent de fiers névés.
La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       4 |

#####
# FrScene5
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 4       |
## Image
bois
## Text
Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.

Les balises se suivent le long du sentier.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       5 |

#####
# FrScene6
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 5       |
## Image
berger
## Text
Une cabane apparaît au fond sur la gauche.
## Choices
### C’est hors du sentier. Je poursuis ma route sans y prêter attention.
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |
### Je me rapproche.
| variable   |   value |
|:-----------|--------:|
| sc         |       6 |

#####
# FrScene7
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 6       |
## Image
berger2
## Text
Les volets sont fermés.
La cheminée ne fume pas.

Seul un crâne de vache accueille les randonneurs de passage.

Une serrure sur la porte.
Ce doit être la cabane du berger.
Fermée, sans surprise.

Quelques beaux morceaux de bois jonchent le sol devant la cabane.

A proximité, sur une large pierre plate, se lit l’inscription gravée _“Refuge à 250 m”_.
## Choices
### Je reprends ma route
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |
### Je ramasse un morceau de bois avant de poursuivre mon chemin
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |

#####
# FrScene8
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 7       |
## Image
alemany
## Text
Je tombe sur une nouvelle cabane, ouverte. C’est le _refuge de l’Alemany_.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |       8 |

#####
# FrScene9
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 8       |
## Image
interieur
## Text
A l’intérieur, tout le confort d’un refuge libre.
Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.
Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.

Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.
## Choices
### J’ouvre les volets
| variable   |   value |
|:-----------|--------:|
| sc         |       9 |
### Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.
| variable   |   value |
|:-----------|--------:|
| sc         |       9 |

#####
# FrScene10
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 9       |
## Text
Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.
Ne restent que d’énormes troncs au sol.

J’entreprends de scier l’un d’entre eux à son extrémité.

La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      10 |

#####
# FrScene11
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 10      |
## Text
A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.

Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.

J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      11 |

#####
# FrScene12
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 11      |
## Image
feu
## Text
Le feu finit par démarrer.

J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.
Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      12 |

#####
# FrScene13
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 12      |
## Image
tisane
## Text
Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.

Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.
## Choices
### Je cache le sac-à-dos sous un banc.
| variable   | value   |
|:-----------|:--------|
| sc         | 13      |
| sac        | banc    |
### J’accroche le sac à l’un des clous plantés aux murs de la cabane
| variable   | value   |
|:-----------|:--------|
| sc         | 13      |
| sac        | clou    |
### Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.
| variable   | value      |
|:-----------|:-----------|
| sc         | 13         |
| sac        | nourriture |

#####
# FrScene14nourrit
## Qualities
| variable   | value      |
|:-----------|:-----------|
| lang       | fr         |
| sc         | 13         |
| sac        | nourriture |
## Text
Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      14 |

#####
# FrScene14clou
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 13      |
| sac        | clou    |
## Text
Au milieu de la nuit, de petits bruits perturbent mon sommeil.

J'ouvre l'oeil et inspecte les lieux.
Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !

Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.

Le reste de la nuit sera d'une tranquilité absolue.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      14 |

#####
# FrScene14banc
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 13      |
| sac        | banc    |
## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.

J'entreprends de rassembler mes affaires et... HORREUR !

Les poches de mon sac ont été rongées de toutes parts par des visiteurs nocturnes !

Une bonne partie de mes réserves en nourriture est bonne à être jetée.

Tout en pestant contre cette mésaventure, je finis de me préparer pour le départ.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      15 |

#####
# FrScene15
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 14      |
@function
function(){return (vartable['sac']!='banc')};
## Image
neige
## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.

Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.

J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      15 |

#####
# FrScene16
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 15      |
## Image
presque-mantet
## Text
La neige fait place au grand ciel bleu.

En contrebas se devinent quelques maisons.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      16 |

#####
# FrScene17
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 16      |
## Image
vue-mantet
## Text
Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      17 |

#####
# FrScene18
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 17      |
## Image
panneau
## Text
Je poursuis la descente et parviens au village.

Il est 12 heures 30.
## Choices
### Continuer
| variable   |   value |
|:-----------|--------:|
| sc         |      18 |

#####
# FrScene19
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | fr      |
| sc         | 18      |
## Image
mantet
## Text
A suivre.
## Choices
### Recommencer
| variable   |   value |
|:-----------|--------:|
| sc         |       0 |

#####
# CaScene1
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 0       |
## Image
vallter
## Text
_Dos quarts de un, carretera de Vallter, Pirineus Catalans_

Els graus devallen a mesura que es segueixin les corbes. A prop del parquing casi buit de la estació de Vallter 2000, el termometre indica 4 petits graus.

Desprès de que em posés unes capes més, que fes una ultima verificació de la motxilla i un ràpid entrepà, i estaré llest per sortir.
## Choices
### Portaré la meva jaqueta tallavent.
| variable   | value      |
|:-----------|:-----------|
| sc         | 1          |
| equip      | coupe-vent |
### Portaré el forro polar, abric i jaqueta tallavent.
| variable   | value   |
|:-----------|:--------|
| sc         | 1       |
| equip      | polaire |
### Ho he pensat, i finalment surto amb la samarreta.
| variable   | value   |
|:-----------|:--------|
| sc         | 1       |
| equip      | tshirt  |

#####
# CaScene2
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 1       |
## Image
vallter2
## Text
_Son les dues de la tarda, hora de la sortida de Vallter._

El camí comença amb una pujada seguint el GR10.
L'estació s’allunya poc a poc darrere.

Encara que les remuntades mecàniques fossin apagades, unes manxes de neu semblen avisar que la temporada de esqui s’està apropant.
La pujada es fa sense cap dificultat.
## Choices
### La pujada dona calor. Trec el meu forro polar.
| variable   | value                  |
|:-----------|:-----------------------|
| sc         | scene_croise_marcheurs |
@if
function(){return (vartable['equip']=='polaire')}
### Endavant
| variable   | value                  |
|:-----------|:-----------------------|
| sc         | scene_croise_marcheurs |

#####
# CaScene_croise_marcheurs
## Qualities
| variable   | value                  |
|:-----------|:-----------------------|
| lang       | ca                     |
| sc         | scene_croise_marcheurs |
## Text
Saludo a uns excursionistes que ja estan baixant. Efectivament sembla més una hora per baixar que per pujar.

Un d’ells, que portava un vestit vermell de socorrista, es dirigeix a mi:

_\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"_
## Choices
### Si, puja i baixa (mentida)
| variable   | value    |
|:-----------|:---------|
| sc         | mensonge |
### No, cap al refugi del Alemany (veritat)
| variable   | value   |
|:-----------|:--------|
| sc         | verite  |
### No respondre i seguir el camí.
| variable   | value         |
|:-----------|:--------------|
| sc         | nepasrepondre |

#####
# CaScene_mensonge
## Qualities
| variable   | value    |
|:-----------|:---------|
| lang       | ca       |
| sc         | mensonge |
## Text
L’home em dirigeix una mirada escèptica i continua la seva baixada.

Continuo la pujada.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# CaScene_nepasrepondre
## Qualities
| variable   | value         |
|:-----------|:--------------|
| lang       | ca            |
| sc         | nepasrepondre |
## Text
Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# CaScene_verite
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | verite  |
## Text
_\"- Que tinguis bona ruta.\"_

Segueixo amb la pujada.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       2 |

#####
# CaScene3
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 2       |
## Image
borne
## Text
Arribant a la Porteille de Mentet, una fita senyala la frontera amb França. El rellotge marca les 3.
## Choices
### Es massa tard per passar al Nord. Torno cap a Vallter.
| variable   | value           |
|:-----------|:----------------|
| sc         | back-to-vallter |
### Segueixo.
| variable   |   value |
|:-----------|--------:|
| sc         |       3 |
### El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.
| variable   |   value |
|:-----------|--------:|
| sc         |       3 |
@if
function(){return (vartable['equip']=='tshirt')}

#####
# CaScene3b
## Qualities
| variable   | value           |
|:-----------|:----------------|
| lang       | ca              |
| sc         | back-to-vallter |
## Text
Seguretat abans de tot. Baixo cap a Vallter i torno al cotxe fins i tot abans la posta del sol.

Però sé una cosa : ja hi tornaré.

Fi.
## Choices
### Tornar al inici
| variable   |   value |
|:-----------|--------:|
| sc         |       0 |

#####
# CaScene4
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 3       |
## Image
vallee
## Text
Al passar el coll es pot veure pel canto Nord un vall amb bosc tirant recta cap al poble de Mentet.

A mesura que l’ombra l’invadeixi, la temperatura es fa més fresca.
Les poques manxes de neu ara son geleres orgulloses.
La baixada es fa sense dificultat, els passos es segueixen amb seguretat fins l’entrada del bosc.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       4 |

#####
# CaScene5
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 4       |
## Image
bois
## Text
El camí segueix tranquil·lament una riera que porta igualment les primeres marques del proper invern.

Les marques es segueixen al llarg del sender.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       5 |

#####
# CaScene6
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 5       |
## Image
berger
## Text
Una cabana apareix al fons a ma esquerra.
## Choices
### Esta fora del sender. Segueixo el meu camí sense hi fer cas.
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |
### M’hi apropo.
| variable   |   value |
|:-----------|--------:|
| sc         |       6 |

#####
# CaScene7
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 6       |
## Image
berger2
## Text
Les persianes estan tancades.
La xemeneia no fa fum.

Només un crani de vaca aculleix els senderistes que passen.

Una serradura sobre la porta.
Sembla la cabana del pastor.
Tancada, que no fa sorpresa.

Uns trossos bonics de llenya estan per la terra davant la cabana.

A prop, sobre una gran pedra plana, es llegeix l’inscripciò gravada “Refugi a 250 m”
## Choices
### Segueixo amb la meva ruta.
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |
### Recullo un tros de fusta abans d’anar mes endavant.
| variable   |   value |
|:-----------|--------:|
| sc         |       7 |

#####
# CaScene8
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 7       |
## Image
alemany
## Text
Trobo una nova cabana, oberta. Es el refugi de l’Alemany.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |       8 |

#####
# CaScene9
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 8       |
## Image
interieur
## Text
A dins, tota la comoditat d’un refugi lliure.
Xemeneia, taula, bancs, serra, escombra, pala, i lliteres.
En un racó de la cabana es troben rams de pins amb agulles encara verdes.

Encara no son les 5 de la tarda, però el vall ja esta totalment en l’ombra.
## Choices
### Obro les persianes.
| variable   |   value |
|:-----------|--------:|
| sc         |       9 |
### Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.
| variable   |   value |
|:-----------|--------:|
| sc         |       9 |

#####
# CaScene10
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 9       |
## Text
Cap fusta seca a prop, i la majoria dels arbres al voltant de la cabana ja mostren marques de destral.
Només queden troncs enormes per la terra.

Començo a serrar un d’ells.

Aquest tros es pesat i necessitara segurament ser tallat de nou a dins la cabana.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      10 |

#####
# CaScene11
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 10      |
## Text
A les 6 de la tarda, ja es fa fosc i et termòmetre a dins el refugi ronda els 0°C.

Començo un foc amb pinyes i unes branques. La fusta esta verda i té dificultat per encendre’s.

Encenc una espelma que poso en mig de la llar del foc. Les agulles de pins crepiten, resisteixen...
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      11 |

#####
# CaScene12
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 11      |
## Image
feu
## Text
El foc finalment s’ha encès.

Introdueixo el primer tros de fusta i poso el segon a prop, amb l’esperança de fer-ho secar el mes aviat possible.
La llar del foc distribueix una calor agradable però que devalla molt ràpid a mesura que t’en allunyes.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      12 |

#####
# CaScene13
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 12      |
## Image
tisane
## Text
Un cop el sopar ha acabat, encara no son les 9 del vespre però em preparo per entrar en el sac de dormir

Abans d’això, tinc cura d’arreglar les coses, en previsió de possibles visitants nocturns.
## Choices
### Amago la motxilla sota el banc.
| variable   | value   |
|:-----------|:--------|
| sc         | 13      |
| sac        | banc    |
### Penjo la motxilla a un dels claus clavats dels murs de la cabana.
| variable   | value   |
|:-----------|:--------|
| sc         | 13      |
| sac        | clou    |
### Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.
| variable   | value      |
|:-----------|:-----------|
| sc         | 13         |
| sac        | nourriture |

#####
# CaScene14nourrit
## Qualities
| variable   | value      |
|:-----------|:-----------|
| lang       | ca         |
| sc         | 13         |
| sac        | nourriture |
## Text
Amb el foc que es va consumint poc a poc, i unes mantes del refugi de sobres, la nit tindrà lloc sense cap problema de fred.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      14 |

#####
# CaScene14clou
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 13      |
| sac        | clou    |
## Text
En mig de la nit, uns sorollets es posen a molestar el meu son.

Obro un ull i vigilo el lloc.
Un ratolí esta al voltant de la meva motxilla penjada i esta rosegant una de les meves barretes energètiques a traves d’una butxaca !

Persegueixo la lladra i començo a penjar el menjar fora de la motxilla amb un fil.

La resta de la nit serà amb una tranquil·litat perfecta.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      14 |

#####
# CaScene14banc
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 13      |
| sac        | banc    |
## Text
Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.

Començo per recollir les meves coses i… quin HORROR !

Les butxaques de la meva motxilla han sigut rosegades per totes bandes per visitors nocturns !

Ara una bona part de les meves reserves de menjar pot treure’s.

Mentre em queixo de aquest accident, acabo de preparar-me per la sortida.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      15 |

#####
# CaScene15
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 14      |
@function
function(){return(vartable['sac']!='banc')}
## Image
neige
## Text
Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.

Encenc el foc de nou i hi poso l’ultim tros de fusta, mentre el esmorzar

Apago el foc amb neu, oferint l’ultim tros de fusta als propers inquilins, recullo les coses i em preparo per la sortida.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      15 |

#####
# CaScene16
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 15      |
## Image
presque-mantet
## Text
La neu deixa de caure i deixa pas a un cel blau.

Cap a baix s’endivinen unes cases.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      16 |

#####
# CaScene17
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 16      |
## Image
vue-mantet
## Text
Es el poble de Mentet, banyat per la llum del sol de tardor.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      17 |

#####
# CaScene18
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 17      |
## Image
panneau
## Text
Segueixo amb la baixada i arribo al poble.

Son les 12 i mitja.
## Choices
### Endavant
| variable   |   value |
|:-----------|--------:|
| sc         |      18 |

#####
# CaScene19
## Qualities
| variable   | value   |
|:-----------|:--------|
| lang       | ca      |
| sc         | 18      |
## Image
mantet
## Text
To be continued.
## Choices
### Tornar al inici
| variable   |   value |
|:-----------|--------:|
| sc         |       0 |

#####
