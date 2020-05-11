function btnClick(val){
  document.getElementById('screen').value=document.getElementById('screen').value+val;
}

function btnClear(){
  document.getElementById('screen').value="";
}
  function result(){
  var text =  document.getElementById('screen').value;
  var result=eval(text);
  document.getElementById('screen').value=result;
  }
