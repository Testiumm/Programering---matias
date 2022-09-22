console.log(2 == 2 && 2 == "2");
/*
Efter som dde begge de bolske udtryk er sande vil den samlede linje også være sand
*/
console.log(2 == 2 && 2 == "2" && 2 === "2");
/*
False efter som det sidste udtryk i linjen ikke er korrekrt
*/
console.log((2 == 2 && 2 == "2") || 2 != 2);
/*
Så længe der er noget i udsagnet der er sand vil det samlede udsagn være sandt
*/
console.log("hello" != "Hello" && "hello" !== "Hello");
/*
True
*/
console.log("hello" != "Hello" || ("hello" !== "hello" && "hello" !== "heLLo"));
/*
true        
*/
console.log(2 === 2 || 2 != 3);
/*
true
*/
console.log(2 === 2 || (2 != "2" && (true || false)));
/*
true
*/
