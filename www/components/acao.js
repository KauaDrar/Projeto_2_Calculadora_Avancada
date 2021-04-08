var td = "";
var v1 = 0;
var o = "";

function zd(){
  td = "";
  $(".display").val("");
}

$(document).on("click", ".d", function(){
  td += $(this).val();
  $(".display").val(td);
});

$(document).on("click", "#C", function(){
  zd();
  v1 = 0;
});

$(document).on("click", "#A", function (){
  var td1 = td.split('').reverse().join('');

  td = td1.substr(1);
  td1 = td.split('').reverse().join('');
  td = td1;
});

$(document).on("click", ".op", function(){
  o = $(this).html();
  v1 = td;
  zd();
});

$(document).on("click", "#i", function(){
  var v2 = td;
  zd();

  if(o == "+"){
    td = parseFloat(v1) + parseFloat(v2);
  }
  if(o == "−"){
    td = parseFloat(v1) - parseFloat(v2);
  }
  if(o == "×"){
    td = parseFloat(v1) * parseFloat(v2);
  }
  if(o == "÷"){
    td = parseFloat(v1) / parseFloat(v2);
  }
  if(o == "%"){
    td = (parseFloat(v1) / 100) * parseFloat(v2);
  }
  $(".display").val(td);
});