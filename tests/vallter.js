SceneChoixLangues = {
  qualities:function(){
    

function a1(){return (vartable['sc']===undefined);};
return (a1());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Français", {"sc": "0", "lang": "fr"}],["Catalan", {"sc": "0", "lang": "ca"}],]
}

FrScene1 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="0"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter")}, 1000],
    [choice, 0]])
  },
choices:[["J’enfile mon coupe-vent.", {"sc": "1", "equip": "coupe-vent"}],["J’enfile polaire, doudoune et coupe-vent.", {"sc": "1", "equip": "polaire"}],["Réflexion faite, je pars en t-shirt.", {"sc": "1", "equip": "tshirt"}],]
}

FrScene2 = {
  qualities:function(){
    
function a1(){ return (vartable["sc"]=="1"); };return (a1());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter2")}, 1000],
    [choice, 0]])
  },
choices:[["La montée donne chaud. Je retire ma polaire.", {"sc": "scene_croise_marcheurs"}, 
function(){return (vartable['equip']=='polaire')}],["Continuer", {"sc": "scene_croise_marcheurs"}],]
}

FrScene_croise_marcheurs = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="scene_croise_marcheurs"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Si, puja i baixa (mensonge)", {"sc": "mensonge"}],["No, cap al refugi del Alemany (vérité)", {"sc": "verite"}],["Ne pas répondre et poursuivre sa route.", {"sc": "nepasrepondre"}],]
}

FrScene_mensonge = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="mensonge"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene_nepasrepondre = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="nepasrepondre"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene_verite = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="verite"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "2"}],]
}

FrScene3 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="2"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("borne")}, 1000],
    [choice, 0]])
  },
choices:[["Il est tard pour passer au Nord. Je redescends vers Vallter.", {"sc": "back-to-vallter"}],["Je continue.", {"sc": "3"}],["Le vent souffle au col. J'enfile mon coupe-vent pour poursuivre la route.", {"sc": "3"}, 
function(){return (vartable['equip']=='tshirt')}],]
}

FrScene3b = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="back-to-vallter"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Recommencer", {"sc": "0"}],]
}

FrScene4 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="3"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallee")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "4"}],]
}

FrScene5 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="4"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "5"}],]
}

FrScene6 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="5"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger")}, 1000],
    [choice, 0]])
  },
choices:[["C’est hors du sentier. Je poursuis ma route sans y prêter attention.", {"sc": "7"}],["Je me rapproche.", {"sc": "6"}],]
}

FrScene7 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="6"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger2")}, 1000],
    [choice, 0]])
  },
choices:[["Je reprends ma route", {"sc": "7"}],["Je ramasse un morceau de bois avant de poursuivre mon chemin", {"sc": "7"}],]
}

FrScene8 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="7"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("alemany")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "8"}],]
}

FrScene9 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="8"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("interieur")}, 1000],
    [choice, 0]])
  },
choices:[["J’ouvre les volets", {"sc": "9"}],["Pas de temps à perdre. Il faut couper du bois avant que la nuit ne tombe.", {"sc": "9"}],]
}

FrScene10 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="9"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "10"}],]
}

FrScene11 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="10"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "11"}],]
}

FrScene12 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="11"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("feu")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "12"}],]
}

FrScene13 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="12"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("tisane")}, 1000],
    [choice, 0]])
  },
choices:[["Je cache le sac-à-dos sous un banc.", {"sc": "13", "sac": "banc"}],["J’accroche le sac à l’un des clous plantés aux murs de la cabane", {"sc": "13", "sac": "clou"}],["Je retire la nourriture du sac et la suspends à l’un des fils traversant la pièce.", {"sc": "13", "sac": "nourriture"}],]
}

FrScene14nourrit = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="nourriture"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "14"}],]
}

FrScene14clou = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="clou"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "14"}],]
}

FrScene14banc = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="banc"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Continuer", {"sc": "15"}],]
}

FrScene15 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="14"); };
function a3(){return (vartable['sac']!='banc')};;
return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("neige")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "15"}],]
}

FrScene16 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="15"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("presque-mantet")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "16"}],]
}

FrScene17 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="16"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vue-mantet")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "17"}],]
}

FrScene18 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="17"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("panneau")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "18"}],]
}

FrScene19 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="fr"); };function a2(){ return (vartable["sc"]=="18"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("mantet")}, 1000],
    [choice, 0]])
  },
choices:[["Recommencer", {"sc": "0"}],]
}

CaScene1 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };
function a2(){return (vartable['sc']==0);};
return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter")}, 1000],
    [choice, 0]])
  },
choices:[["Portaré la meva jaqueta tallavent.", {"sc": "1", "equip": "coupe-vent"}],["Portaré el forro polar, abric i jaqueta tallavent.", {"sc": "1", "equip": "polaire"}],["Ho he pensat, i finalment surto amb la samarreta.", {"sc": "1", "equip": "tshirt"}],]
}

CaScene2 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="1"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallter2")}, 1000],
    [choice, 0]])
  },
choices:[["La pujada dona calor. Trec el meu forro polar.", {"sc": "scene_croise_marcheurs"}, 
function(){return (vartable['equip']=='polaire')}],["Endavant", {"sc": "scene_croise_marcheurs"}],]
}

CaScene_croise_marcheurs = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="scene_croise_marcheurs"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Si, puja i baixa (mentida)", {"sc": "mensonge"}],["No, cap al refugi del Alemany (veritat)", {"sc": "verite"}],["No respondre i seguir el camí.", {"sc": "nepasrepondre"}],]
}

CaScene_mensonge = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="mensonge"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene_nepasrepondre = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="nepasrepondre"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene_verite = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="verite"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "2"}],]
}

CaScene3 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="2"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("borne")}, 1000],
    [choice, 0]])
  },
choices:[["Es massa tard per passar al Nord. Torno cap a Vallter.", {"sc": "back-to-vallter"}],["Segueixo.", {"sc": "3"}],["El vent bufa al coll. Em poso la meva jaqueta talla-vent per seguir el camí.", {"sc": "3"}, 
function(){return (vartable['equip']=='tshirt')}],]
}

CaScene3b = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="back-to-vallter"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Tornar al inici", {"sc": "0"}],]
}

CaScene4 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="3"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vallee")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "4"}],]
}

CaScene5 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="4"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("bois")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "5"}],]
}

CaScene6 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="5"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger")}, 1000],
    [choice, 0]])
  },
choices:[["Esta fora del sender. Segueixo el meu camí sense hi fer cas.", {"sc": "7"}],["M’hi apropo.", {"sc": "6"}],]
}

CaScene7 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="6"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("berger2")}, 1000],
    [choice, 0]])
  },
choices:[["Segueixo amb la meva ruta.", {"sc": "7"}],["Recullo un tros de fusta abans d’anar mes endavant.", {"sc": "7"}],]
}

CaScene8 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="7"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("alemany")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "8"}],]
}

CaScene9 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="8"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("interieur")}, 1000],
    [choice, 0]])
  },
choices:[["Obro les persianes.", {"sc": "9"}],["Cal no perdre temps. Cal tallar fusta abans de que la nit caigui.", {"sc": "9"}],]
}

CaScene10 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="9"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "10"}],]
}

CaScene11 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="10"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "11"}],]
}

CaScene12 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="11"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("feu")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "12"}],]
}

CaScene13 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="12"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("tisane")}, 1000],
    [choice, 0]])
  },
choices:[["Amago la motxilla sota el banc.", {"sc": "13", "sac": "banc"}],["Penjo la motxilla a un dels claus clavats dels murs de la cabana.", {"sc": "13", "sac": "clou"}],["Trec el menjar de la motxilla i el penjo d’un dels fils que creua la sala.", {"sc": "13", "sac": "nourriture"}],]
}

CaScene14nourrit = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="nourriture"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "14"}],]
}

CaScene14clou = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="clou"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "14"}],]
}

CaScene14banc = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="13"); };function a3(){ return (vartable["sac"]=="banc"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [choice, 0]])
  },
choices:[["Endavant", {"sc": "15"}],]
}

CaScene15 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="14"); };
function a3(){return (vartable['sac']!='banc')};;
return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("neige")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "15"}],]
}

CaScene16 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="15"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("presque-mantet")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "16"}],]
}

CaScene17 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="16"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("vue-mantet")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "17"}],]
}

CaScene18 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="17"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("panneau")}, 1000],
    [choice, 0]])
  },
choices:[["Endavant", {"sc": "18"}],]
}

CaScene19 = {
  qualities:function(){
    
function a1(){ return (vartable["lang"]=="ca"); };function a2(){ return (vartable["sc"]=="18"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("mantet")}, 1000],
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