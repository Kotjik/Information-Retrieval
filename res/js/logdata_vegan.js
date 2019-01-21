function getFormattedDate(){
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
              + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
              // + ":" + date.getMilliseconds();

    return str;
}


function printInfo(elem, value){
  console.log(
    elem.parentNode.parentNode.parentNode.id + ", " + value + ", " + getFormattedDate()
  );
}

function printLink(elem){
  console.log(
    elem.parentNode.parentNode.id + ", " + getFormattedDate()
  );
}



function writeLikertToLog(elem, value){
  document.getElementById("689994586").innerHTML += elem.parentNode.parentNode.parentNode.id + ", " + value + ", " + getFormattedDate(); + "\n"
}

function writeLinkToLog(elem){
  document.getElementById("689994586").innerHTML += elem.parentNode.parentNode.id + ", " + getFormattedDate() + "\n";
}
