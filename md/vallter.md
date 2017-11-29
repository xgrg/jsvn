# SceneChoixLangues
## Qualities
return (vartable['sc']===undefined);

## Text
Choisissez une langue.
<br>
Tria una llengua.

## Choices
### Français
sc:0
lang:fr
### Catalan
sc:0
lang:ca
-----------------
# FrScene1
## Qualities
return (vartable['lang']=='fr' && vartable['sc']=='0');

## Image
vallter

## Text
<i>13 heures 30, route de Vallter, Pyrénées Catalanes</i>
<br>
Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.
<br>
Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.

## Choices
### J’enfile mon coupe-vent.
sc:1
equip:coupe-vent
### J’enfile polaire, doudoune et coupe-vent.
sc:1
equip:polaire
### Réflexion faite, je pars en t-shirt.
sc:1
equip:tshirt
-----------------------------------------------
# FrScene2
## Qualities
return (vartable['sc']==='1');

## Image
vallter2

## Text
<i>14 heures, départ de la station de Vallter</i>
<br>
Le chemin débute en montée suivant le tracé du GR10.
La station s’éloigne progressivement dans le dos.
<br>
Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.
La montée s’effectue sans encombres.

## Choices
### La montée donne chaud. Je retire ma polaire.
sc:Scene_croise_marcheurs
@if
function(){return (vartable['equip']=='polaire')}
### Continuer
sc:Scene_croise_marcheurs
-------
# FrScene_croise_marcheurs
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==='Scene_croise_marcheurs');

## Text
Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...  
<br>
L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :
<br>
<i>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</i>

## Choices
### Si, puja i baixa (mensonge)
sc:mensonge
### No, cap al refugi del Alemany (vérité)
sc:verite
### Ne pas répondre et poursuivre sa route.
sc:nepasrepondre
-----------------------------------------------
# FrScene_mensonge
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==='mensonge');

## Text
L'homme me lance un regard sceptique et poursuit sa descente.
<br>
Je poursuis la montée.

## Choices
### Continuer
sc:2
-----------------------------------------------
# FrScene_nepasrepondre
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==='nepasrepondre');

## Text
Je poursuis la montée sans daigner répondre à l'homme, qui ne peut refréner un sursaut de surprise.

## Choices
### Continuer
sc:2
-----------------------------------------------
# FrScene_verite
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==='verite');

## Text
<i>\"- Que tinguis bona ruta.\"</i>
<br>
Je poursuis la montée.

## Choices
### Continuer
sc:2
-----------------------------------------------
# FrScene3
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="2");

## Image
borne

## Text
A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.

## Choices
### Il est tard pour passer au Nord. Je redescends vers Vallter.
sc:back-to-vallter
### Je continue.
sc:3
### Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.
sc:3
@if
function(){return (vartable['equip']=='tshirt')}
-----------------------------------------------
# FrScene3b
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="back-to-vallter");

## Text
La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.
<br>
Mais une chose est sûre : je reviendrai.
<br>
Fin.

## Choices
### Recommencer
sc:0
-----------------------------------------------
# FrScene4
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="3");

## Image
vallee

## Text
Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.
<br>
A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.
Les taches éparses de neige sont à présent de fiers névés.
La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.
## Choices
### Continuer
sc:4
-----------------------------------------------
# FrScene5
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="4");

## Image
bois

## Text
Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.
<br>
Les balises se suivent le long du sentier.

## Choices
### Continuer
sc:5
-----------------------------------------------
# FrScene6
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="5");

## Image
berger

## Text
Une cabane apparaît au fond sur la gauche.

## Choices
### C’est hors du sentier. Je poursuis ma route sans y prêter attention.
sc:7
### Je me rapproche.
sc:6
-----------------------------------------------
# FrScene7
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="6");

## Image
berger2

## Text
Les volets sont fermés.
La cheminée ne fume pas.
<br>
Seul un crâne de vache accueille les randonneurs de passage.
<br>
Une serrure sur la porte.
Ce doit être la cabane du berger.
Fermée, sans surprise.
<br>
Quelques beaux morceaux de bois jonchent le sol devant la cabane.
<br>
A proximité, sur une large pierre plate, se lit l’inscription gravée <i>“Refuge à 250 m”</i>.

## Choices
### Je reprends ma route
sc:7
### Je ramasse un morceau de bois avant de poursuivre mon chemin
sc:7
-----------------------------------------------
# FrScene8
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="7");

## Image
alemany

## Text
Je tombe sur une nouvelle cabane, ouverte cette fois-ci. C’est le <i>refuge de l’Alemany</i>.

## Choices
### Continuer
sc:8
-----------------------------------------------
# FrScene9
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="8");

## Image
interieur

## Text
A l’intérieur, tout le confort d’un refuge libre.
Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.
Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.
<br>
Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.

## Choices
### J’ouvre les volets
sc:9
### Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.
sc:9
-----------------------------------------------
# FrScene10
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="9");

## Text
Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.
Ne restent que d’énormes troncs au sol.
<br>
J’entreprends de scier l’un d’entre eux à son extrémité.
<br>
La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.

## Choices
### Continuer
sc:10
-----------------------------------------------
# FrScene11
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="10");

## Text
A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.
<br>
Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.
<br>
J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...

## Choices
### Continuer
sc:11
-----------------------------------------------
# FrScene12
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="11");

## Image
feu

## Text
Le feu finit par démarrer.
<br>
J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.
Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.

## Choices
### Continuer
sc:12
-----------------------------------------------
# FrScene13
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="12");

## Image
tisane

## Text
Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.
<br>
Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.

## Choices
### Je cache le sac-à-dos sous un banc.
sc:13
sac:banc
### J’accroche le sac à l’un des clous plantés aux murs de la cabane
sc:13
sac:clou
### Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.
sc:13
sac:nourriture
-----------------------------------------------
# FrScene14nourrit
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='nourriture');

## Text
Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.

## Choices
### Continuer
sc:14
-----------------------------------------------
# FrScene14clou
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='clou');

## Text
Au milieu de la nuit, de petits bruits perturbent mon sommeil.
<br>
J'ouvre l'oeil et inspecte les lieux.
Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !
<br>
Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.
<br>
Le reste de la nuit sera d'une tranquilité absolue.
## Choices
### Continuer
sc:14
-----------------------------------------------
# FrScene14banc
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='banc');

## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
<br>
J'entreprends de rassembler mes affaires et... HORREUR !
<br>
Les poches de mon sac ont été rongées de toutes parts par des visiteurs nocturnes !
<br>
Une bonne partie de mes réserves en nourriture est bonne à être jetée.
<br>
Tout en pestant de cette mésaventure, je finis de me préparer pour le départ.

## Choices
### Continuer
sc:15
-----------------------------------------------
# FrScene15
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="14" && vartable['sac']!='banc');

## Image
neige

## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
<br>
Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.
<br>
J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.

## Choices
### Continuer
sc:15
-----------------------------------------------
# FrScene16
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="15");

## Image
presque-mantet

## Text
La neige fait place au grand ciel bleu.
<br>
En contrebas se devinent quelques maisons.

## Choices
### Continuer
sc:16
-----------------------------------------------
# FrScene17
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="16");

## Image
vue-mantet

## Text
Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.

## Choices
### Continuer
sc:17
-----------------------------------------------
# FrScene18
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="17");

## Image
panneau

## Text
Je poursuis la descente et parviens au village.
<br>
Il est 12 heures 30.

## Choices
### Continuer
sc:18
-----------------------------------------------
# FrScene19
## Qualities
return (vartable['lang']==='fr' && vartable['sc']==="18");

## Image
mantet

## Text
A suivre.

## Choices
### Recommencer
sc:0
-----------------
# CaScene1
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==0);

## Image
vallter

## Text
<i>Dos quarts de un, carretera de Vallter, Pirineus Catalans</i>
<br>
Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.
<br>
Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.

## Choices
### J’enfile mon coupe-vent.
sc:1
equip:coupe-vent
### J’enfile polaire, doudoune et coupe-vent.
sc:1
equip:polaire
### Réflexion faite, je pars en t-shirt.
sc:1
equip:tshirt
-----------------------------------------------
# CaScene2
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==='1');

## Image
vallter2

## Text
<i>14 heures, départ de la station de Vallter</i>
<br>
Le chemin débute en montée suivant le tracé du GR10.
La station s’éloigne progressivement dans le dos.
<br>
Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.
La montée s’effectue sans encombres.

## Choices
### La montée donne chaud. Je retire ma polaire.
sc:Scene_croise_marcheurs
@if
function(){return (vartable['equip']=='polaire')}
### Continuer
sc:Scene_croise_marcheurs
-------
# CaScene_croise_marcheurs
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==='Scene_croise_marcheurs');

## Text
Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...  
<br>
L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :
<br>
<i>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</i>

## Choices
### Si, puja i baixa (mensonge)
sc:mensonge
### No, cap al refugi del Alemany (vérité)
sc:verite
### Ne pas répondre et poursuivre sa route.
sc:nepasrepondre
-----------------------------------------------
# CaScene_mensonge
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==='mensonge');

## Text
L'homme me lance un regard sceptique et poursuit sa descente.
<br>
Je poursuis la montée.

## Choices
### Continuer
sc:2
-----------------------------------------------
# CaScene_nepasrepondre
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==='nepasrepondre');

## Text
Je poursuis la montée sans daigner répondre à l'homme, qui ne peut refréner un sursaut de surprise.

## Choices
### Continuer
sc:2
-----------------------------------------------
# CaScene_verite
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==='verite');

## Text
<i>\"- Que tinguis bona ruta.\"</i>
<br>
Je poursuis la montée.

## Choices
### Continuer
sc:2
-----------------------------------------------
# CaScene3
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="2");

## Image
borne

## Text
A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.

## Choices
### Il est tard pour passer au Nord. Je redescends vers Vallter.
sc:back-to-vallter
### Je continue.
sc:3
### Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.
sc:3
@if
function(){return (vartable['equip']=='tshirt')}
-----------------------------------------------
# CaScene3b
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="back-to-vallter");

## Text
La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.
<br>
Mais une chose est sûre : je reviendrai.
<br>
Fin.

## Choices
### Recommencer
sc:0
-----------------------------------------------
# CaScene4
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="3");

## Image
vallee

## Text
Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.
<br>
A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.
Les taches éparses de neige sont à présent de fiers névés.
La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.
## Choices
### Continuer
sc:4
-----------------------------------------------
# CaScene5
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="4");

## Image
bois

## Text
Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.
<br>
Les balises se suivent le long du sentier.

## Choices
### Continuer
sc:5
-----------------------------------------------
# CaScene6
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="5");

## Image
berger

## Text
Une cabane apparaît au fond sur la gauche.

## Choices
### C’est hors du sentier. Je poursuis ma route sans y prêter attention.
sc:7
### Je me rapproche.
sc:6
-----------------------------------------------
# CaScene7
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="6");

## Image
berger2

## Text
Les volets sont fermés.
La cheminée ne fume pas.
<br>
Seul un crâne de vache accueille les randonneurs de passage.
<br>
Une serrure sur la porte.
Ce doit être la cabane du berger.
Fermée, sans surprise.
<br>
Quelques beaux morceaux de bois jonchent le sol devant la cabane.
<br>
A proximité, sur une large pierre plate, se lit l’inscription gravée <i>“Refuge à 250 m”</i>.

## Choices
### Je reprends ma route
sc:7
### Je ramasse un morceau de bois avant de poursuivre mon chemin
sc:7
-----------------------------------------------
# CaScene8
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="7");

## Image
alemany

## Text
Je tombe sur une nouvelle cabane, ouverte. C’est le <i>refuge de l’Alemany</i>.

## Choices
### Continuer
sc:8
-----------------------------------------------
# CaScene9
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="8");

## Image
interieur

## Text
A l’intérieur, tout le confort d’un refuge libre.
Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.
Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.
<br>
Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.

## Choices
### J’ouvre les volets
sc:9
### Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.
sc:9
-----------------------------------------------
# CaScene10
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="9");

## Text
Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.
Ne restent que d’énormes troncs au sol.
<br>
J’entreprends de scier l’un d’entre eux à son extrémité.
<br>
La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.

## Choices
### Continuer
sc:10
-----------------------------------------------
# CaScene11
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="10");

## Text
A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.
<br>
Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.
<br>
J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...

## Choices
### Continuer
sc:11
-----------------------------------------------
# CaScene12
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="11");

## Image
feu

## Text
Le feu finit par démarrer.
<br>
J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.
Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.

## Choices
### Continuer
sc:12
-----------------------------------------------
# CaScene13
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="12");

## Image
tisane

## Text
Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.
<br>
Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.

## Choices
### Je cache le sac-à-dos sous un banc.
sc:13
sac:banc
### J’accroche le sac à l’un des clous plantés aux murs de la cabane
sc:13
sac:clou
### Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.
sc:13
sac:nourriture
-----------------------------------------------
# CaScene14nourrit
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='nourriture');

## Text
Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.

## Choices
### Continuer
sc:14
-----------------------------------------------
# CaScene14clou
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='clou');

## Text
Au milieu de la nuit, de petits bruits perturbent mon sommeil.
<br>
J'ouvre l'oeil et inspecte les lieux.
Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !
<br>
Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.
<br>
Le reste de la nuit sera d'une tranquilité absolue.
## Choices
### Continuer
sc:14
-----------------------------------------------
# CaScene14banc
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='banc');

## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
<br>
J'entreprends de rassembler mes affaires et... HORREUR !
<br>
Les poches de mon sac ont été rongées de toutes parts pendant la nuit par des visiteurs nocturnes !
<br>
Une partie considérable de mes réserves en nourriture est bonne à être jetée.
<br>
Tout en pestant de cette mésaventure, je finis de me préparer pour le départ.

## Choices
### Continuer
sc:15
-----------------------------------------------
# CaScene15
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="14" && vartable['sac']!='banc');

## Image
neige

## Text
Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.
<br>
Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.
<br>
J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.

## Choices
### Continuer
sc:15
-----------------------------------------------
# CaScene16
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="15");

## Image
presque-mantet

## Text
La neige fait place au grand ciel bleu.
<br>
En contrebas se devinent quelques maisons.

## Choices
### Continuer
sc:16
-----------------------------------------------
# CaScene17
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="16");

## Image
vue-mantet

## Text
Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.

## Choices
### Continuer
sc:17
-----------------------------------------------
# CaScene18
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="17");

## Image
panneau

## Text
Je poursuis la descente et parviens au village.
<br>
Il est 12 heures 30.

## Choices
### Continuer
sc:18
-----------------------------------------------
# CaScene19
## Qualities
return (vartable['lang']==='ca' && vartable['sc']==="18");

## Image
mantet

## Text
A suivre.

## Choices
### Recommencer
sc:0
