var n1,n2,simbolo;

n1=prompt("Digite o primeiro número:");
n2=prompt("Digite o segundo número:");

n1=parseInt(n1);
n2=parseInt(n2);

simbolo=prompt("Digite uma operação:");

if(simbolo=="+"){
    document.write(n1+n2);
}
if(simbolo=="/"){
    document.write(n1/n2);
}
if(simbolo=="-"){
    document.write(n1-n2);
}
if(simbolo=="*"){
    document.write(n1*n2);
}