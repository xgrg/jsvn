Début = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Démarrer", {"sc": "0", "light": "no", "tried_switch": "false"}],]
}

Scene1 = {
  qualities:function(){
    
function a1(){ return (vartable["sc"]=="0"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Ils peuvent débarquer et me trouver ici d'une minute à l'autre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je devrais quitter les lieux <strong>au plus vite</strong>.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Toutefois je n'y reviendrai pas avant longtemps, alors...</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>...c'est le moment de savoir ce qui compte vraiment.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Savoir quoi laisser ou ne pas laisser.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"sc": "1"}],]
}

Scene2 = {
  qualities:function(){
    
function a1(){ return (vartable["sc"]=="1"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Faire un rapide tour des lieux.", {"sc": "-1", "look_around_the_room": "true"}],]
}

SceneLookAround = {
  qualities:function(){
    
function a1(){ return (vartable["light"]=="no"); };function a2(){ return (vartable["look_around_the_room"]=="true"); };function a3(){ return (vartable["tried_switch"]=="false"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>L'appartement est plongé dans la pénombre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je me tiens debout devant la porte d'entrée.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J'y verrais sensiblement mieux avec un peu de lumière.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Chercher l'interrupteur près de la porte d'entrée.", {"look_around_the_room": "false", "tried_switch": "true"}],]
}

SceneTrySwitch = {
  qualities:function(){
    
function a1(){ return (vartable["light"]=="no"); };function a2(){ return (vartable["look_around_the_room"]=="false"); };function a3(){ return (vartable["tried_switch"]=="true"); };return (a1() && a2() && a3());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Utiliser la lampe du téléphone portable", {"light": "phone", "just_switched_phonelight": "true"}],]
}

ScenePhone = {
  qualities:function(){
    
function a1(){ return (vartable["light"]=="phone"); };function a2(){ return (vartable["just_switched_phonelight"]=="true"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>La lumière du téléphone éclaire à courte distance.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je distingue le bureau sous la fenêtre avec les volets fermés.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Remonter les volets", {"just_switched_phonelight": "false", "remonter_volets": "true"}],["Explorer le reste de la pièce", {"look_around_the_room": "true", "just_switched_phonelight": "false"}],]
}

SceneExplorePhoneLight = {
  qualities:function(){
    
function a1(){ return (vartable["light"]=="phone"); };function a2(){ return (vartable["look_around_the_room"]=="true"); };return (a1() && a2());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Je m'avance dans l'appartement à la lumière du téléphone.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>C'est sans se préoccuper de la batterie de ce dernier qui se consomme à grande vitesse.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Si le courant n'est pas rétabli dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Retourner près de la fenêtre et remonter les volets.", {"look_around_the_room": "false", "remonter_volets": "true"}],]
}

SceneRemonterVolets = {
  qualities:function(){
    
function a1(){ return (vartable["remonter_volets"]=="true"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les rayons du crépuscule pénètrent dans la pièce, laissant voir la poussière en suspension.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {}],]
}

$(document).ready(function(){
  storylets.push(Début);
  storylets.push(Scene1);
  storylets.push(Scene2);
  storylets.push(SceneLookAround);
  storylets.push(SceneTrySwitch);
  storylets.push(ScenePhone);
  storylets.push(SceneExplorePhoneLight);
  storylets.push(SceneRemonterVolets);
});