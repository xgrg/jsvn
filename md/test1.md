# scene1
## Qualities
return (vartable['sc']===undefined);

## Text
Hey there.
We know little from each other.
But I do care about you.

## Choices
### OK.
sc:1
-------------------------------------------------------------------------------
# scene2
## Qualities
return (vartable['sc']=="1");

## Image
guitar

## Text
All these moments just being by your side...
You probably ignore it but I could not live without them.
You are my oxygen. My reason to be here.
Without knowing you make me a better person.

## Choices
### Hey je m'appelle Greg
name:Greg
sc:2
### Hey je m'appelle Christophe
name:Christophe
sc:2


-------------------------------------------------------------------------------
# scene3
## Qualities
return (vartable['sc']=="2" && vartable['decision']===undefined);

## Image
girl

## Text
Please believe what I am going to say.
You probably already know what this is about. You are so smart.
Then since you know, just don\'t do this.

## Choices
### OK.
sc:3

### Salut Christophe
sc:1
@if
function(){
  return (vartable['name']=='Christophe')
}

-------------------------------------------------------------------------------
# scene4
## Qualities
return (vartable['sc']=="3" && vartable['decision']===undefined);

## Image
thinking

## Text
No matter the circumstances. Just don\'t do it.
I will be here to protect you.
&nbsp;
I am not sure...

## Choices

### Do it.
decision:doit
### Do not do it.
decision:dontdoit

-------------------------------------------------------------------------------
# scene5
## Qualities
return (vartable['decision']=='doit');

## Text
All right. Well, I will always be here.'

## Choices
### OK.

-------------------------------------------------------------------------------
# scene6
## Qualities
return (vartable['decision']=='dontdoit');

## Text
You made the right choice.'

## Choices
### OK.
