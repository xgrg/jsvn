
scene1 = {
  qualities:
  function(){
    return (vartable['sc']===undefined);
    }
  ,
  storylet:
  function(){
    addDialog("Bonjour. Comment vous appelez-vous ?");
    displayImage("guitar")
  },

  choices:[ ["Toto", {name: "Toto", sc:"1"}],
            ["Titi", {name:"Titi", sc:"1"}],
            ["Tata", {name: 'Tata', sc:"1"}],
            ["T'es gole ou quoi? Je t'ai déjà répondu.",
              {name:'Gogol', sc:"1"}, function(){return (vartable['name']!==undefined);}]
  ]
}

scene2 = {
  qualities:
    function() {
      return (vartable['sc']=="1");
    }
  ,
  storylet:
    function(){
    addDialog("Bonjour " + vartable['name'] + " !")
    displayImage("girl")
  },
  choices:[
    ["Je vais oublier ce prénom.", {sc:undefined}],
    ["Rien d'autre.", {sc:2}]
  ]
}

$(document).ready(function(){
  storylets.push(scene1);
  storylets.push(scene2);
});
