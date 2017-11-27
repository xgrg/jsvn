Scene17 = {
  qualities:function(){
    return (vartable['sc']==="16");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vue-mantet")}, 1000],
    [function(){addDialog("Il s’agit du village de Mantet, baigné par la lumière du soleil automnal.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "17"}],]
}

Scene18 = {
  qualities:function(){
    return (vartable['sc']==="17");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("panneau")}, 1000],
    [function(){addDialog("Je poursuis la descente et parviens au village. Il est 12 heures 30.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "18"}],]
}

Scene19 = {
  qualities:function(){
    return (vartable['sc']==="18");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("mantet")}, 1000],
    [function(){addDialog("A suivre.", "fadeIn")}, 1000],
    [choice, 0]])
  },

}

Scene8 = {
  qualities:function(){
    return (vartable['sc']==="7");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("alemany")}, 1000],
    [function(){addDialog("Je tombe sur une nouvelle cabane, ouverte cette fois-ci. C’est le refuge de l’Alemany.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "8"}],]
}

Scene9 = {
  qualities:function(){
    return (vartable['sc']==="8");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("interieur")}, 1000],
    [function(){addDialog("A l’intérieur, tout le confort d’un refuge libre. Cheminée, table, bancs, scie, balai, pelle, et couchages superposés. Dans un coin de la cabane repose un tas de branches de pins aux aiguilles encore vertes.", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("Il n’est pas encore 17 heures mais la vallée est déjà plongée dans l’ombre.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.", {"sc": "9"}],["J’ouvre les volets", {"sc": "9"}],]
}

Scene6 = {
  qualities:function(){
    return (vartable['sc']==="5");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger")}, 1000],
    [function(){addDialog("Une cabane apparaît au fond sur la gauche.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["C’est hors du sentier. Je poursuis ma route sans y prêter attention.", {"sc": "6"}],["Je me rapproche.", {"sc": "6"}],]
}

Scene7 = {
  qualities:function(){
    return (vartable['sc']==="6");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger2")}, 1000],
    [function(){addDialog("Les volets sont fermés. La cheminée ne fume pas. Seul un crâne de vache accueille les randonneurs de passage. Une serrure sur la porte. Ce doit être la cabane du berger. Fermée, sans surprise. Quelques beaux morceaux de bois jonchent le sol devant la cabane. A proximité, sur une large pierre plate, se lit l’inscription gravée “Refuge à 250 m”.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Je ramasse un morceau de bois avant de poursuivre mon chemin", {"sc": "7"}],["Je reprends ma route", {"sc": "7"}],]
}

Scene4 = {
  qualities:function(){
    return (vartable['sc']==="3");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallee")}, 1000],
    [function(){addDialog("Le passage du col laisse entrevoir du côté Nord une vallée boisée tirant droit vers le petit village de Mantet. A mesure que l’ombre la recouvre, la température se fait de plus en plus fraîche. Les taches éparses de neige sont à présent de fiers névés. La descente est sans difficulté, le pas est sûr jusqu’à atteindre l’orée du bois.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "4"}],]
}

Scene5 = {
  qualities:function(){
    return (vartable['sc']==="4");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [function(){addDialog("Le chemin longe sagement un ruisseau portant également les premières marques de l’hiver approchant. Les balises se suivent le long du sentier.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "5"}],]
}

Scene2 = {
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
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("Je salue quelques marcheurs en les croisant dans leur descente.. C’est en effet davantage une heure de fin de parcours que de début...  ", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("L’un d’entre eux, vêtu d’un combinaison de secouriste rouge, s’adresse à moi :", "fadeIn")}, 1000],
    [function(){addDialog("<br>", "fadeIn")}, 1000],
    [function(){addDialog("\"- Bon dia, on aneu ?  Cap al pic de la Dona ?\"", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Si, puja i baixa (mensonge)", {"sc": "2"}],["Ne pas répondre et poursuivre sa route.", {"sc": "2"}],["No, cap al refugi del Alemany (vérité)", {"sc": "2"}],]
}

Scene3 = {
  qualities:function(){
    return (vartable['sc']==="2");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("borne")}, 1000],
    [function(){addDialog("A l’arrivée à la Porteille de Mantet, une borne indique la frontière avec la France. La montre indique 15 heures.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Je continue.", {"sc": "3"}],["Il est tard pour passer au Nord. Je redescends vers Vallter.", {"sc": "3"}],]
}

Scene12 = {
  qualities:function(){
    return (vartable['sc']==="11");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("feu")}, 1000],
    [function(){addDialog("Le feu finit par démarrer. J’insère le premier morceau de bûche et place le second à proximité, dans l’espoir de le faire sécher le plus possible. Le poêle dispense une chaleur agréable mais qui chute très rapidement dès lors qu’on s’en écarte.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "12"}],]
}

Scene1 = {
  qualities:function(){
    return (vartable['sc']===undefined);
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
choices:[["Réflexion faite, je pars en t-shirt.", {"sc": "1"}],["J’enfile mon coupe-vent.", {"sc": "1"}],["J’enfile polaire, doudoune et coupe-vent.", {"sc": "1"}],]
}

Scene14 = {
  qualities:function(){
    return (vartable['sc']==="13");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Avec le feu se consumant tranquillement, et les quelques couvertures du refuge en supplément, la nuit sera douce.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "14"}],]
}

Scene11 = {
  qualities:function(){
    return (vartable['sc']==="10");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("A 18 heures, il fait déjà nuit et le thermomètre à l’intérieur du refuge ne dépasse guère 0 degrés. Je démarre un feu avec des pommes de pins et quelques branches. Le bois est vert et peine à prendre feu. J’allume une bougie que je place au coeur du foyer. Les aiguilles crépitent, résistent...", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "11"}],]
}

Scene10 = {
  qualities:function(){
    return (vartable['sc']==="9");
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Pas de bois sec à proximité et la plupart des arbres aux alentours de la cabane présentent déjà des marques de prélèvement. Ne restent que d’énormes troncs au sol. J’entreprends de scier l’un d’entre eux à son extrémité. La pièce est lourde et demandera certainement à être débitée de nouveau à l’intérieur de la cabane.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "10"}],]
}

Scene15 = {
  qualities:function(){
    return (vartable['sc']==="14");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("neige")}, 1000],
    [function(){addDialog("Le lendemain, le feu est éteint, il fait 4 degrés à l’intérieur et il neige au dehors. Je rallume le feu et y place le dernier morceau de bûche, le temps du petit-déjeuner. J’éteins le feu avec de la neige, léguant la dernière bûche aux prochains occupants, rassemble les affaires et me prépare pour le départ.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "15"}],]
}

Scene13 = {
  qualities:function(){
    return (vartable['sc']==="12");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("tisane")}, 1000],
    [function(){addDialog("Une fois le dîner terminé, il n’est pas encore 21 heures mais je m’apprête à enfiler mon sac de couchage. Avant cela, je prends soin de ranger les affaires, en prévision d’éventuels visiteurs nocturnes.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.", {"sc": "13"}],["Je cache le sac-à-dos sous un banc.", {"sc": "13"}],["J’accroche le sac à l’un des clous plantés aux murs de la cabane", {"sc": "13"}],]
}

Scene16 = {
  qualities:function(){
    return (vartable['sc']==="15");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("presque-mantet")}, 1000],
    [function(){addDialog("La neige fait place au grand ciel bleu. En contrebas se devinent quelques maisons.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "16"}],]
}

$(document).ready(function(){
  storylets.push(Scene17);
  storylets.push(Scene18);
  storylets.push(Scene19);
  storylets.push(Scene8);
  storylets.push(Scene9);
  storylets.push(Scene6);
  storylets.push(Scene7);
  storylets.push(Scene4);
  storylets.push(Scene5);
  storylets.push(Scene2);
  storylets.push(Scene3);
  storylets.push(Scene12);
  storylets.push(Scene1);
  storylets.push(Scene14);
  storylets.push(Scene11);
  storylets.push(Scene10);
  storylets.push(Scene15);
  storylets.push(Scene13);
  storylets.push(Scene16);
});