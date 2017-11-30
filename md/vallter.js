SceneChoixLangues = {
  qualities:function(){
    return (vartable['sc']===undefined);
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Choisissez une langue.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Tria una llengua.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Français", {"sc": "0", "lang": "fr"}],["Catalan", {"sc": "0", "lang": "ca"}],]
}

FrScene1 = {
  qualities:function(){
    return (vartable['lang']=='fr' && vartable['sc']=='0');
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter")}, 1000],
    [function(){addDialog("<i>13 heures 30, route de Vallter, Pyrénées Catalanes</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Les degrés fondent à mesure que s’enchaînent les virages. A l’approche du parking quasi-vide de la station de Vallter 2000, le compteur indique 4 timides degrés.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Le temps d’enfiler quelques couches supplémentaires, d’une dernière vérification du sac et d’un rapide casse-croûte et je serai prêt(e) à partir.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["J’enfile mon coupe-vent.", {"sc": "1", "equip": "coupe-vent"}],["J’enfile polaire, doudoune et coupe-vent.", {"sc": "1", "equip": "polaire"}],["Réflexion faite, je pars en t-shirt.", {"sc": "1", "equip": "tshirt"}],]
}

FrScene2 = {
  qualities:function(){
    return (vartable['sc']==='1');
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter2")}, 1000],
    [function(){addDialog("<i>14 heures, départ de la station de Vallter</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Le chemin débute en montée suivant le tracé du GR10.", "fadeIn")}, 1000],
    [function(){addDialog("La station s’éloigne progressivement dans le dos.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Bien que les télésièges soient à l’arrêt, quelques tâches de neige semblent signaler que la saison de ski est en phase d’approche.", "fadeIn")}, 1000],
    [function(){addDialog("La montée s’effectue sans encombres.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["La montée donne chaud. Je retire ma polaire.", {"sc": "Scene_croise_marcheurs"},function(){return (vartable['equip']=='polaire')}],["Continuer", {"sc": "Scene_croise_marcheurs"}],]
}

FrScene_croise_marcheurs = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==='Scene_croise_marcheurs');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...  ", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("<i>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</i>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Si, puja i baixa (mensonge)", {"sc": "mensonge"}],["No, cap al refugi del Alemany (vérité)", {"sc": "verite"}],["Ne pas répondre et poursuivre sa route.", {"sc": "nepasrepondre"}],]
}

FrScene_mensonge = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==='mensonge');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("L'homme me lance un regard sceptique et poursuit sa descente.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je poursuis la montée.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene_nepasrepondre = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==='nepasrepondre');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene_verite = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==='verite');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<i>\"- Que tinguis bona ruta.\"</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je poursuis la montée.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene3 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="2");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("borne")}, 1000],
    [function(){addDialog("A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Il est tard pour passer au Nord. Je redescends vers Vallter.", {"sc": "back-to-vallter"}],["Je continue.", {"sc": "3"}],["Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.", {"sc": "3"},function(){return (vartable['equip']=='tshirt')}],]
}

FrScene3b = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="back-to-vallter");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("La sécurité avant tout. Je redescends vers Vallter et suis de retour à la voiture avant même le coucher du soleil.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Mais une chose est sûre : je reviendrai.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Fin.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Recommencer", {"sc": "0"}],]
}

FrScene4 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="3");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallee")}, 1000],
    [function(){addDialog("Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche.", "fadeIn")}, 1000],
    [function(){addDialog("Les taches éparses de neige sont à présent de fiers névés.", "fadeIn")}, 1000],
    [function(){addDialog("La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "4"}],]
}

FrScene5 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="4");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Les balises se suivent le long du sentier.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "5"}],]
}

FrScene6 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="5");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger")}, 1000],
    [function(){addDialog("Une cabane apparaît au fond sur la gauche.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["C’est hors du sentier. Je poursuis ma route sans y prêter attention.", {"sc": "7"}],["Je me rapproche.", {"sc": "6"}],]
}

FrScene7 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="6");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger2")}, 1000],
    [function(){addDialog("Les volets sont fermés.", "fadeIn")}, 1000],
    [function(){addDialog("La cheminée ne fume pas.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Seul un crâne de vache accueille les randonneurs de passage.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Une serrure sur la porte.", "fadeIn")}, 1000],
    [function(){addDialog("Ce doit être la cabane du berger.", "fadeIn")}, 1000],
    [function(){addDialog("Fermée, sans surprise.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Quelques beaux morceaux de bois jonchent le sol devant la cabane.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("A proximité, sur une large pierre plate, se lit l’inscription gravée <i>“Refuge à 250 m”</i>.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Je reprends ma route", {"sc": "7"}],["Je ramasse un morceau de bois avant de poursuivre mon chemin", {"sc": "7"}],]
}

FrScene8 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="7");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("alemany")}, 1000],
    [function(){addDialog("Je tombe sur une nouvelle cabane, ouverte. C’est le <i>refuge de l’Alemany</i>.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "8"}],]
}

FrScene9 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="8");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("interieur")}, 1000],
    [function(){addDialog("A l’intérieur, tout le confort d’un refuge libre.", "fadeIn")}, 1000],
    [function(){addDialog("Cheminée, table, bancs, scie, balai, pelle, et couchages superposés.", "fadeIn")}, 1000],
    [function(){addDialog("Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["J’ouvre les volets", {"sc": "9"}],["Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.", {"sc": "9"}],]
}

FrScene10 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="9");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement.", "fadeIn")}, 1000],
    [function(){addDialog("Ne restent que d’énormes troncs au sol.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J’entreprends de scier l’un d’entre eux à son extrémité.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "10"}],]
}

FrScene11 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="10");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0°C.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "11"}],]
}

FrScene12 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="11");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("feu")}, 1000],
    [function(){addDialog("Le feu finit par démarrer.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible.", "fadeIn")}, 1000],
    [function(){addDialog("Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "12"}],]
}

FrScene13 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="12");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("tisane")}, 1000],
    [function(){addDialog("Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Je cache le sac-à-dos sous un banc.", {"sc": "13", "sac": "banc"}],["J’accroche le sac à l’un des clous plantés aux murs de la cabane", {"sc": "13", "sac": "clou"}],["Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.", {"sc": "13", "sac": "nourriture"}],]
}

FrScene14nourrit = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='nourriture');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit passera en étant protégé du froid.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "14"}],]
}

FrScene14clou = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='clou');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Au milieu de la nuit, de petits bruits perturbent mon sommeil.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J'ouvre l'oeil et inspecte les lieux.", "fadeIn")}, 1000],
    [function(){addDialog("Une souris est affairée autour de mon sac pendu et grignote une de mes barres énergétiques à travers l'une des poches !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je chasse la voleuse et entreprends de suspendre la nourriture hors du sac au bout d'un fil.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Le reste de la nuit sera d'une tranquilité absolue.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "14"}],]
}

FrScene14banc = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="13" && vartable['sac']=='banc');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J'entreprends de rassembler mes affaires et... HORREUR !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Les poches de mon sac ont été rongées de toutes parts par des visiteurs nocturnes !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Une bonne partie de mes réserves en nourriture est bonne à être jetée.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Tout en pestant contre cette mésaventure, je finis de me préparer pour le départ.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "15"}],]
}

FrScene15 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="14" && vartable['sac']!='banc');
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("neige")}, 1000],
    [function(){addDialog("Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "15"}],]
}

FrScene16 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="15");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("presque-mantet")}, 1000],
    [function(){addDialog("La neige fait place au grand ciel bleu.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("En contrebas se devinent quelques maisons.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "16"}],]
}

FrScene17 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="16");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vue-mantet")}, 1000],
    [function(){addDialog("Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "17"}],]
}

FrScene18 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="17");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("panneau")}, 1000],
    [function(){addDialog("Je poursuis la descente et parviens au village.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Il est 12 heures 30.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "18"}],]
}

FrScene19 = {
  qualities:function(){
    return (vartable['lang']==='fr' && vartable['sc']==="18");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("mantet")}, 1000],
    [function(){addDialog("A suivre.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Recommencer", {"sc": "0"}],]
}

CaScene1 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==0);
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter")}, 1000],
    [function(){addDialog("<i>Dos quarts de un, carretera de Vallter, Pirineus Catalans</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Els graus devallen a mesura que es segueixin les corbes. A prop del parquing casi buit de la estació de Vallter 2000, el termometre indica 4 petits graus.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Desprès de que em posi unes capes més, que faci una ultima verificació de la motxilla i un ràpid entrepà, i estaré llest per sortir.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Portaré la meva jaqueta tallavent.", {"sc": "1", "equip": "coupe-vent"}],["Portaré el forro polar, abric i jaqueta tallavent.", {"sc": "1", "equip": "polaire"}],["Ho he pensat, i finalment surto amb la samarreta.", {"sc": "1", "equip": "tshirt"}],]
}

CaScene2 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==='1');
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter2")}, 1000],
    [function(){addDialog("<i>Son les dues de la tarda, hora de la sortida de Vallter.</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("El camí comença amb una pujada seguint el GR10.", "fadeIn")}, 1000],
    [function(){addDialog("L'estació s’allunya poc a poc darrere.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Encara que les remuntades mecàniques fossin apagades, unes manxes de neu semblen avisar que la temporada de esqui s’està apropant.", "fadeIn")}, 1000],
    [function(){addDialog("La pujada es fa sense cap dificultat.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["La pujada dona calor. Trec el meu forro polar.", {"sc": "Scene_croise_marcheurs"},function(){return (vartable['equip']=='polaire')}],["Endavant", {"sc": "Scene_croise_marcheurs"}],]
}

CaScene_croise_marcheurs = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==='Scene_croise_marcheurs');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Saludo a uns excursionistes que ja estan baixant. Efectivament sembla més una hora per baixar que per pujar.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Un d’ells, que portava un vestit vermell de socorrista, es dirigeix a mi:", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("<i>\"- Bon dia, on vas ?  Cap al pic de la Dona ?\"</i>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Si, puja i baixa (mentida)", {"sc": "mensonge"}],["No, cap al refugi del Alemany (veritat)", {"sc": "verite"}],["No respondre i seguir el camí.", {"sc": "nepasrepondre"}],]
}

CaScene_mensonge = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==='mensonge');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("L’home em dirigeix una mirada escèptica i continua la seva baixada.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Continuo la pujada.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene_nepasrepondre = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==='nepasrepondre');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Segueixo amb la pujada ni sense respondre al home, que no pot impedir una reacció de sorpresa.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene_verite = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==='verite');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<i>\"- Que tinguis bona ruta.\"</i>", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Segueixo amb la pujada.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene3 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="2");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("borne")}, 1000],
    [function(){addDialog("Arribant a la Porteille de Mentet, una fita senyala la frontera amb França. El rellotge marca les 3.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Es massa tard per passar al Nord. Torno cap a Vallter.", {"sc": "back-to-vallter"}],["Segueixo.", {"sc": "3"}],["El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.", {"sc": "3"},function(){return (vartable['equip']=='tshirt')}],]
}

CaScene3b = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="back-to-vallter");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Seguretat abans de tot. Baixo cap a Vallter i torno al cotxe fins i tot abans la posta del sol.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Però sé una cosa : ja hi tornaré.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Fi.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Tornar al inici", {"sc": "0"}],]
}

CaScene4 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="3");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallee")}, 1000],
    [function(){addDialog("Al passar el coll es pot veure pel canto Nord un vall amb bosc tirant recta cap al poble de Mentet.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("A mesura que l’ombra l’invadeixi, la temperatura es fa més fresca.", "fadeIn")}, 1000],
    [function(){addDialog("Les poques manxes de neu ara son geleres orgulloses.", "fadeIn")}, 1000],
    [function(){addDialog("La baixada es fa sense dificultat, els passos es segueixen amb seguretat fins l’entrada del bosc.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "4"}],]
}

CaScene5 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="4");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("El camí segueix tranquil·lament una riera que porta igualment les primeres marques del proper invern.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Les marques es segueixen al llarg del sender.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "5"}],]
}

CaScene6 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="5");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger")}, 1000],
    [function(){addDialog("Una cabana apareix al fons a ma esquerra.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Esta fora del sender. Segueixo el meu camí sense hi fer cas.", {"sc": "7"}],["M’hi apropo.", {"sc": "6"}],]
}

CaScene7 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="6");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger2")}, 1000],
    [function(){addDialog("Les persianes estan tancades.", "fadeIn")}, 1000],
    [function(){addDialog("La xemeneia no fa fum.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Només un crani de vaca aculleix els senderistes que passen.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Una serradura sobre la porta.", "fadeIn")}, 1000],
    [function(){addDialog("Sembla la cabana del pastor.", "fadeIn")}, 1000],
    [function(){addDialog("Tancada, que no fa sorpresa.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Uns trossos bonics de llenya estan per la terra davant la cabana.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("A prop, sobre una gran pedra plana, es llegeix l’inscripciò gravada “Refugi a 250 m”", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Segueixo amb la meva ruta.", {"sc": "7"}],["Recullo un tros de fusta abans d’anar mes endavant.", {"sc": "7"}],]
}

CaScene8 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="7");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("alemany")}, 1000],
    [function(){addDialog("Trobo una nova cabana, oberta. Es el refugi de l’Alemany.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "8"}],]
}

CaScene9 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="8");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("interieur")}, 1000],
    [function(){addDialog("A dins, tota la comoditat d’un refugi lliure.", "fadeIn")}, 1000],
    [function(){addDialog("Xemeneia, taula, bancs, serra, escombra, pala, i lliteres.", "fadeIn")}, 1000],
    [function(){addDialog("En un racó de la cabana es troben rams de pins amb agulles encara verdes.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Encara no son les 5 de la tarda, però el vall ja esta totalment en l’ombra.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Obro les persianes.", {"sc": "9"}],["Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.", {"sc": "9"}],]
}

CaScene10 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="9");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Cap fusta seca a prop, i la majoria dels arbres al voltant de la cabana ja mostren marques de destral.", "fadeIn")}, 1000],
    [function(){addDialog("Només queden troncs enormes per la terra.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Començo a serrar un d’ells.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Aquest tros es pesat i necessitara segurament ser tallat de nou a dins la cabana.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "10"}],]
}

CaScene11 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="10");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("A les 6 de la tarda, ja es fa fosc i et termòmetre a dins el refugi ronda els 0°C.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Començo un foc amb pinyes i unes branques. La fusta esta verda i té dificultat per encendre’s.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Encenc una espelma que poso en mig de la llar del foc. Les agulles de pins crepiten, resisteixen...", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "11"}],]
}

CaScene12 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="11");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("feu")}, 1000],
    [function(){addDialog("El foc finalment s’ha encès.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Introdueixo el primer tros de fusta i poso el segon a prop, amb l’esperança de fer-ho secar el mes aviat possible.", "fadeIn")}, 1000],
    [function(){addDialog("La llar del foc distribueix una calor agradable però que devalla molt ràpid a mesura que t’en allunyes.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "12"}],]
}

CaScene13 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="12");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("tisane")}, 1000],
    [function(){addDialog("Un cop el sopar ha acabat, encara no son les 9 del vespre però em preparo per entrar en el sac de dormir", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Abans d’això, tinc cura d’arreglar les coses, en previsió de possibles visitants nocturns.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Amago la motxilla sota el banc.", {"sc": "13", "sac": "banc"}],["Penjo la motxilla a un dels claus clavats dels murs de la cabana.", {"sc": "13", "sac": "clou"}],["Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.", {"sc": "13", "sac": "nourriture"}],]
}

CaScene14nourrit = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='nourriture');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Amb el foc que es va consumint poc a poc, i unes mantes del refugi de sobres, la nit tindrà lloc sense cap problema de fred.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "14"}],]
}

CaScene14clou = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='clou');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("En mig de la nit, uns sorollets es posen a molestar el meu son.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Obro un ull i vigilo el lloc.", "fadeIn")}, 1000],
    [function(){addDialog("Un ratolí esta al voltant de la meva motxilla penjada i esta rosegant una de les meves barretes energètiques a traves d’una butxaca !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Persegueixo la lladra i començo a penjar el menjar fora de la motxilla amb un fil.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("La resta de la nit serà amb una tranquil·litat perfecta.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "14"}],]
}

CaScene14banc = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="13" && vartable['sac']=='banc');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Començo per recollir les meves coses i… quin HORROR !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Les butxaques de la meva motxilla han sigut rosegades per totes bandes per visitors nocturns !", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Ara una bona part de les meves reserves de menjar pot treure’s.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Mentre em queixo de aquest accident, acabo de preparar-me per la sortida.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "15"}],]
}

CaScene15 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="14" && vartable['sac']!='banc');
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("neige")}, 1000],
    [function(){addDialog("Al dia següent, el foc esta apagat, fan 4 graus a dintre i neva fora.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Encenc el foc de nou i hi poso l’ultim tros de fusta, mentre el esmorzar", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Apago el foc amb neu, oferint l’ultim tros de fusta als propers inquilins, recullo les coses i em preparo per la sortida.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "15"}],]
}

CaScene16 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="15");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("presque-mantet")}, 1000],
    [function(){addDialog("La neu deixa de caure i deixa pas a un cel blau.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Cap a baix s’endivinen unes cases.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "16"}],]
}

CaScene17 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="16");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vue-mantet")}, 1000],
    [function(){addDialog("Es el poble de Mentet, banyat per la llum del sol de tardor.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "17"}],]
}

CaScene18 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="17");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("panneau")}, 1000],
    [function(){addDialog("Segueixo amb la baixada i arribo al poble.", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Son les 12 i mitja.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "18"}],]
}

CaScene19 = {
  qualities:function(){
    return (vartable['lang']==='ca' && vartable['sc']==="18");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("mantet")}, 1000],
    [function(){addDialog("To be continued.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Tornar al inici", {"sc": "0"}],]
}

$(document).ready(function(){
  storylets.push(SceneChoixLangues);
  storylets.push(FrScene1);
  storylets.push(FrScene2);
  storylets.push(FrScene_croise_marcheurs);
  storylets.push(FrScene_mensonge);
  storylets.push(FrScene_nepasrepondre);
  storylets.push(FrScene_verite);
  storylets.push(FrScene3);
  storylets.push(FrScene3b);
  storylets.push(FrScene4);
  storylets.push(FrScene5);
  storylets.push(FrScene6);
  storylets.push(FrScene7);
  storylets.push(FrScene8);
  storylets.push(FrScene9);
  storylets.push(FrScene10);
  storylets.push(FrScene11);
  storylets.push(FrScene12);
  storylets.push(FrScene13);
  storylets.push(FrScene14nourrit);
  storylets.push(FrScene14clou);
  storylets.push(FrScene14banc);
  storylets.push(FrScene15);
  storylets.push(FrScene16);
  storylets.push(FrScene17);
  storylets.push(FrScene18);
  storylets.push(FrScene19);
  storylets.push(CaScene1);
  storylets.push(CaScene2);
  storylets.push(CaScene_croise_marcheurs);
  storylets.push(CaScene_mensonge);
  storylets.push(CaScene_nepasrepondre);
  storylets.push(CaScene_verite);
  storylets.push(CaScene3);
  storylets.push(CaScene3b);
  storylets.push(CaScene4);
  storylets.push(CaScene5);
  storylets.push(CaScene6);
  storylets.push(CaScene7);
  storylets.push(CaScene8);
  storylets.push(CaScene9);
  storylets.push(CaScene10);
  storylets.push(CaScene11);
  storylets.push(CaScene12);
  storylets.push(CaScene13);
  storylets.push(CaScene14nourrit);
  storylets.push(CaScene14clou);
  storylets.push(CaScene14banc);
  storylets.push(CaScene15);
  storylets.push(CaScene16);
  storylets.push(CaScene17);
  storylets.push(CaScene18);
  storylets.push(CaScene19);
});