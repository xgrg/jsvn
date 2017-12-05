Début = {
  name: 'Début',
  qualities:function(){
    

function a1(){
return(vartable['sc']==undefined)};;
return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Démarrer", {"sc": "0", "light": "no", "anxiety": "0", "tried_switch": "false", "@action": "Scene1"}],]
}

Scene1 = {
  name: 'Scene1',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="Scene1"); };return (a1());

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
choices:[["Continuer", {"@action": "Scene2"}],]
}

Scene2 = {
  name: 'Scene2',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="Scene2"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Faire un rapide tour des lieux.", {"@action": "RapideTourDesLieux"}],]
}

SceneLookAround = {
  name: 'SceneLookAround',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="RapideTourDesLieux"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>L'appartement est plongé dans la pénombre.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je me tiens debout devant la porte d'entrée.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>J'y verrais sensiblement mieux avec un peu de lumière.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Chercher l'interrupteur près de la porte d'entrée.", {"@action": "tryswitch"}],]
}

SceneTrySwitch = {
  name: 'SceneTrySwitch',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="tryswitch"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>En tâtonnant à gauche de la porte je parviens à trouver l'interrupteur.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je l'actionne sans aucun effet et la pièce reste telle qu'elle est dans l'obscurité.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Utiliser la lampe du téléphone portable", {"@action": "ScenePhone"}],]
}

ScenePhone = {
  name: 'ScenePhone',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ScenePhone"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>La lumière du téléphone éclaire à courte distance.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Je distingue le bureau sous la fenêtre avec les volets fermés.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Remonter les volets", {"@action": "SceneRemonterVolets"}],["Explorer le reste de la pièce", {"@action": "ExplorePhone"}],]
}

SceneExplorePhoneLight = {
  name: 'SceneExplorePhoneLight',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ExplorePhone"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Je m'avance dans l'appartement à la lumière du téléphone.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>C'est sans se préoccuper de la batterie de ce dernier qui se consomme à vue d'oeil.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>A ce rythme il sera bientôt totalement déchargé.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>S'il n'y a pas de courant dans l'appartement, alors vaudrait-il sans doute mieux chercher à l'économiser.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Retourner près de la fenêtre et remonter les volets.", {"@action": "SceneRemonterVolets"}],]
}

SceneRemonterVolets = {
  name: 'SceneRemonterVolets',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="SceneRemonterVolets"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>J'actionne non sans difficulté la manivelle à droite de la fenêtre et les volets remontent.</p>", "fadeIn")}, 1000],
    [function(){addDialog("", "fadeIn")}, 1000],
    [function(){addDialog("<p>Les rayons du crépuscule pénètrent dans l'appartement, laissant voir le reste de la pièce à travers la poussière en suspension.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Explorer la pièce", {"@action": "exploreroom"}],]
}

ExplorerAvecVoletsRemontés = {
  name: 'ExplorerAvecVoletsRemontés',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="exploreroom"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Je suis à présent dans la pièce à vivre. On y distingue le coin cuisine, un coin salon avec un canapé, une table basse, une table à manger, et le coin bureau sous la fenêtre.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Explorer d'autres pièces", {"exam_autrespieces": "true", "@action": "ExplorerAutresPi\u00e8ces"}],["S'approcher du coin cuisine", {"@action": "ApprocherCuisine", "exam_cuisine": "true"}],["S'approcher du coin bureau", {"@action": "ApprocherBureau", "exam_bureau": "true"}],["S'approcher du coin salon", {"exam_salon": "true", "@action": "ApprocherSalon"}],["Inspecter les assiettes", {}, function(){ return (vartable['exam_salon'])}],["Aller dans la salle de bains", {}, function(){ return (vartable['exam_autrespieces']=='true')}],["Aller dans la chambre", {}, function(){ return (vartable['exam_autrespieces']=='true')}],]
}

ApprocherSalon = {
  name: 'ApprocherSalon',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ApprocherSalon"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Salon.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"@action": "exploreroom"}],]
}

ApprocherCuisine = {
  name: 'ApprocherCuisine',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ApprocherCuisine"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Cuisine</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"@action": "exploreroom"}],]
}

ApprocherBureau = {
  name: 'ApprocherBureau',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ApprocherBureau"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Bureau</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"@action": "exploreroom"}],]
}

ApprocherAutresPièces = {
  name: 'ApprocherAutresPièces',
  qualities:function(){
    
function a1(){ return (vartable["@action"]=="ExplorerAutresPièces"); };return (a1());

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Autres Pièces.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Continuer", {"@action": "exploreroom"}],]
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
  storylets.push(ExplorerAvecVoletsRemontés);
  storylets.push(ApprocherSalon);
  storylets.push(ApprocherCuisine);
  storylets.push(ApprocherBureau);
  storylets.push(ApprocherAutresPièces);
});