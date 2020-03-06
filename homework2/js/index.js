var proName = "";
var proVersion = "";
var proAuth = "";
function pageOnload(){
    initPage(proName?proName:"第1周作业",proVersion?proVersion:"1.0",proAuth?proAuth:"chenggang");
}

function initPage(proName,proVersion,proAuth){
    $("projectName").innerHTML = proName;
    $("projectVersion").innerHTML = proVersion;
    $("projectAuth").innerHTML = proAuth;
}

function $(id){
    return document.getElementById(id);
}