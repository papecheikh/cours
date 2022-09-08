Algoritme elemDistinc;
var i:integer;
    j:integer;
    som:integer:=0;
tab tab1[];
    tab2[];
    BEGIN 
    
    for (i=0;i<length.tab1[],i++){
        for(j=0,j<length.tab2;j++){
            if (tab1[i]<>tab2[j])
            {
              som:= som+tab1[i];
            }
        }
    }

end 

//2em methode

Algoritme elemDistinc;
var i:integer;
    j:integer;
    som:integer:=0;
tab tab1[];
    tab2[];
    BEGIN 
    while(tab1[i]<>tab2[j]){
        som:= som + tab1;
        i:=i+1;
        j:=j+1;
    }
end
// somme des elements qui se chevauchent 
Algoritme elemDistinc;
var i:integer;
    j:integer;
    som:integer:=0;
tab tab1[];
    tab2[];
    BEGIN
   
    for (i=0;i<length.tab1[],i++){
        for(j=0,j<length.tab2;j++){
            if (tab1[i]:=tab2[j])
            {
              som:= som+tab1[i];
            }
        }
    }
        som:=som*2;
end