
scene1 = {
  qualities:
  function(){
    return (vartable['sc']===undefined);
    }
  ,
  storylet:
  function(choice){
    addDialog("Bonjour. Comment vous appelez-vous ?");
    displayImage("guitar")
    choice();
  },

  choices:[ ["Toto", {name: "Toto", sc:"1"}],
            ["Titi", {name:"Titi", sc:"1"}],
            ["Tata", {name: 'Tata', sc:"1"}],
            ["T'es gole ou quoi? Je t'ai déjà répondu.",
              {name:'Gog', sc:"1"}, function(){return (vartable['name']!==undefined);}]
  ]
}

scene1 = {
  qualities:
  function(){
    return (vartable['sc']===undefined);
    }
  ,
  storylet:
  function(choice){
    playSequence([[function(){addDialog('Hey there.')}, 5000],
      [function(){addDialog('Please listen to me. Carefully.', "fadeIn", true)}, 4000],
      [function(){addDialog('We know little from each other.', 'fadeIn', true)}, 3000],
      [function(){addDialog('But I do care about you.', 'fadeIn')}, 3000],
      [function(){displayImage('guitar')}, 2000],
      [function(){addDialog('All these moments just being by your side...', 'fadeIn', true)}, 4000],
      [function(){addDialog('You probably ignore it but I could not live without them.')}, 4000],
      [function(){addDialog('You are my oxygen. My reason to be here.', "fadeIn", true)}, 4000],
      [function(){addDialog('Without knowing you make me a better person.', "fadeIn", true)}, 4000],
      [choice,0]]
    )},

  choices:[ ["Hey.", {name:"Greg", sc:"1"}]]
}

scene2 = {
  qualities:
  function(){
    return (vartable['sc']=="1" && vartable['decision']===undefined);
    }
  ,
  storylet:
  function(choice){
    playSequence([[function(){displayImage('girl')}, 2000],
      [function(){addDialog('Please believe what I am going to say.')}, 4000],
      [function(){addDialog('You probably already know what this is about. You are so smart.', 'fadeIn', true)}, 3000],
      [function(){addDialog('Then since you know, just don\'t do this.', 'fadeIn')}, 3000],
      [function(){displayImage('thinking')}, 2000],
      [function(){addDialog('No matter the circumstances. Just don\'t do it.', 'fadeIn', true)}, 4000],
      [function(){addDialog('I will be here to protect you.')}, 4000],
      [function(){addDialog('&nbsp;')}, 4000],
      [function(){addDialog('- I am not sure...')}, 4000],
      [choice,0]]
    )},

  choices:[ ["Do it.", {decision:"doit"}],
            ["Do not do it.", {decision:"dontdoit"}],
          ]
  }
scene3 = {
  qualities:
  function(){
    return (vartable['decision']=='doit');
    }
  ,
  storylet:
  function(choice){
    addDialog('All right. Well, I will always be here.')
    choice();
  },
  choices:[['OK.', {}]]
}


scene4 = {
    qualities:
    function(){
      return (vartable['decision']=='dontdoit');
      }
    ,
    storylet:
    function(choice){
      addDialog('You made the right choice.')
      choice();
    },
    choices:[['OK.', {}]]
  }

$(document).ready(function(){
  storylets.push(scene1);
  storylets.push(scene2);
  storylets.push(scene3);
  storylets.push(scene4);
});
