
/* var nome = "Sidney Mayo";
var idade = 27;
var profissao = "Estudante e aspirante a empreendedor digital"
alert("Meu nome é " + nome + ", tenho " + idade + " anos e trabalho na " + profissao) */

/*
var idade = prompt ("Qual  a sua idade")
if (idade >=18 ){
    alert("maior de idade");
}else{
    alert("menor de idade");
} */

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
}; 
*/
/*
var count;
for(count = 0; count < 5; count ++){
    alert(count)
}*/

/*
var d = new Date();
alert(d.getDate()+1);
alert(d.getHours());
alert(d.getMonth());
''
*/
/*
function soma(n1, n2){
return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(novo, novo-nome)
} */

function clicou(){
 document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
 //console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://github.com/SidneyMayo/aulas_javascript") //a função "window.open" abre o link em outra janela
    //window.location.href="https://github.com/SidneyMayo/aulas_javascript" a função "window.location.href" abre o link na mesma página
}

function trocar(elemento){
    elemento.innerHTML = "boooa";
    //document.getElementById("mouse").innerHTML = "Tu é o cara";
    //alert("boooa");
}
function voltar(elemento){
   // document.getElementById("mouse").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}
function load(){
    alert("página carregada!")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
