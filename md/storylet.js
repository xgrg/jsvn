scene4 = {
  qualities:function(){
    return (vartable['decision']=='dontdoit');
  },
  storylet:function(choice){
addDialog('You made the right choice.')

  },
  choices:[["OK.", {}]]
}

Scene5 = {
  qualities:function(){
    return (vartable['sc']===undefined);
  },
  storylet:function(choice){
addDialog("Bonjour. Comment vous appelez-vous ?");
displayImage("guitar")
choice()

  },
  choices:[["Toto", {"sc": "1", "name": "Toto"}], ["Titi", {"sc": "1", "name": "Titi"}], ["Tata", {"sc": "1", "name": "Tata"}], ["T'es gole ou quoi? Je t'ai d\u00c3\u00a9j\u00c3\u00a0 r\u00c3\u00a9pondu.", {"sc": "1", "name": "Gog"}, function(){return (vartable['name']!==undefined);}]]
}

scene2 = {
  qualities:function(){
    return (vartable['sc']=="1" && vartable['decision']===undefined);
  },
  storylet:function(choice){
  playSequence([    [function(){displayImage('girl') }, 2000],
    [function(){addDialog('Please believe what I am going to say.') }, 1000],
    [function(){addDialog('You probably already know what this is about. You are so smart.', 'fadeIn', true) }, 1000],
    [function(){addDialog('Then since you know, just don\'t do this.', 'fadeIn') }, 1000],
    [function(){displayImage('thinking') }, 2000],
    [function(){addDialog('No matter the circumstances. Just don\'t do it.', 'fadeIn', true) }, 1000],
    [function(){addDialog('I will be here to protect you.') }, 1000],
    [function(){addDialog('&nbsp;') }, 1000],
    [function(){addDialog('- I am not sure...') }, 1000],
    [choice, 0]])
  },
  choices:[["Do it.", {"decision": "doit"}], ["Do not do it.", {"decision": "dontdoit"}]]
}

scene3 = {
  qualities:function(){
    return (vartable['decision']=='doit');
  },
  storylet:function(choice){
addDialog('All right. Well, I will always be here.')

  },
  choices:[["OK.", {}]]
}

scene1 = {
  qualities:function(){
    return (vartable['sc']===undefined);
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog('Hey there') }, 5000],
    [function(){addDialog('We know little from each other.', 'fadeIn', true) }, 1000],
    [function(){addDialog('But I do care about you.', 'fadeIn', true) }, 1000],
    [function(){displayImage('guitar') }, 2000],
    [function(){addDialog('All these moments just being by your side...', 'fadeIn', true) }, 1000],
    [function(){addDialog('You probably ignore it but I could not live without them.') }, 1000],
    [function(){addDialog('You are my oxygen. My reason to be here.', "fadeIn", true) }, 1000],
    [function(){addDialog('Without knowing you make me a better person.', "fadeIn", true) }, 1000],
    [choice, 0]])
  },
  choices:[["Hey", {"sc": "1", "name": "Greg"}]]
}

$(document).ready(function(){
  storylets.push(scene4);
  storylets.push(Scene5);
  storylets.push(scene2);
  storylets.push(scene3);
  storylets.push(scene1);
});