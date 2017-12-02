scene1 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>Hey there.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>We know little from each other.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>But I do care about you.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {"sc": "1"}],]
}

scene2 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("guitar")}, 1000],
    [function(){addDialog("<p>All these moments just being by your side...</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>You probably ignore it but I could not live without them.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>You are my oxygen. My reason to be here.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Without knowing you make me a better person.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Hey je m'appelle Greg", {"sc": "2", "name": "Greg"}],["Hey je m'appelle Christophe", {"sc": "2", "name": "Christophe"}],]
}

scene3 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("girl")}, 1000],
    [function(){addDialog("<p>Please believe what I am going to say.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>You probably already know what this is about. You are so smart.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>Then since you know, just don\'t do this.</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {"sc": "3"}],["Salut Christophe", {"sc": "1"},function(){
return (vartable['name']=='Christophe')
}],]
}

scene4 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([[function(){displayImage("thinking")}, 1000],
    [function(){addDialog("<p>No matter the circumstances. Just don\'t do it.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>I will be here to protect you.</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>&nbsp;</p>", "fadeIn")}, 1000],
    [function(){addDialog("<p>I am not sure...</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["Do it.", {"decision": "doit"}],["Do not do it.", {"decision": "dontdoit"}],]
}

scene5 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>All right. Well, I will always be here.'</p>", "fadeIn")}, 1000],
    [choice, 0]])
  },
choices:[["OK.", {}],]
}

scene6 = {
  qualities:function(){
    
return ();

  },
  storylet:function(choice){
  playSequence([    [function(){addDialog("<p>You made the right choice.'</p>", "fadeIn")}, 1000],
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