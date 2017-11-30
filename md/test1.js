scene1 = {
  qualities:function(){
    return (vartable['sc']===undefined);
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("Hey there.", "fadeIn")}, 1000],
    [function(){addDialog("We know little from each other.", "fadeIn")}, 1000],
    [function(){addDialog("But I do care about you.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {"sc": "1"}],]
}

scene2 = {
  qualities:function(){
    return (vartable['sc']=="1");
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("guitar")}, 1000],
    [function(){addDialog("All these moments just being by your side...", "fadeIn")}, 1000],
    [function(){addDialog("You probably ignore it but I could not live without them.", "fadeIn")}, 1000],
    [function(){addDialog("You are my oxygen. My reason to be here.", "fadeIn")}, 1000],
    [function(){addDialog("Without knowing you make me a better person.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Hey je m'appelle Greg", {"sc": "2", "name": "Greg"}],["Hey je m'appelle Christophe", {"sc": "2", "name": "Christophe"}],]
}

scene3 = {
  qualities:function(){
    return (vartable['sc']=="2" && vartable['decision']===undefined);
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("girl")}, 1000],
    [function(){addDialog("Please believe what I am going to say.", "fadeIn")}, 1000],
    [function(){addDialog("You probably already know what this is about. You are so smart.", "fadeIn")}, 1000],
    [function(){addDialog("Then since you know, just don\'t do this.", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {"sc": "3"}],["Salut Christophe", {"sc": "1"},function(){
return (vartable['name']=='Christophe')
}],]
}

scene4 = {
  qualities:function(){
    return (vartable['sc']=="3" && vartable['decision']===undefined);
  },
  storylet:function(choice){
  playSequence([[function(){displayImage("thinking")}, 1000],
    [function(){addDialog("No matter the circumstances. Just don\'t do it.", "fadeIn")}, 1000],
    [function(){addDialog("I will be here to protect you.", "fadeIn")}, 1000],
    [function(){addDialog("&nbsp;", "fadeIn")}, 1000],
    [function(){addDialog("I am not sure...", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Do it.", {"decision": "doit"}],["Do not do it.", {"decision": "dontdoit"}],]
}

scene5 = {
  qualities:function(){
    return (vartable['decision']=='doit');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("All right. Well, I will always be here.'", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {}],]
}

scene6 = {
  qualities:function(){
    return (vartable['decision']=='dontdoit');
  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("You made the right choice.'", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {}],]
}

$(document).ready(function(){
  storylets.push(scene1);
  storylets.push(scene2);
  storylets.push(scene3);
  storylets.push(scene4);
  storylets.push(scene5);
  storylets.push(scene6);
});