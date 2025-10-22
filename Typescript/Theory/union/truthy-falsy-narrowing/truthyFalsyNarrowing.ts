let geneticist = Math.random()>0.5 ? "Gregor Mendel" : undefined;

if(geneticist){
    geneticist.toUpperCase(); // OK
}

// geneticist.toUpperCase(); // Error: Object is possibly 'undefined'.

geneticist&&geneticist.toUpperCase(); // OK
geneticist?.toUpperCase(); // OK