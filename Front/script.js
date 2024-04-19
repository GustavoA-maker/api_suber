document.getElementById('start-ride-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var phoneNumber = document.getElementById('phone-number').value;
    console.log('Número de telefone fornecido:', phoneNumber);
});

function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()",1)
    }
    
    function execmask(){
    v_obj.value=v_fun(v_obj.value)
    }
    
    function masktel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
    }
    
    
    function idcss( el ){
        return document.getElementById( el );
    }
    
    window.onload = function(){

        idcss('phone-number').setAttribute('maxlength', 15);
        idcss('phone-number').onkeypress = function(){
            mask( this, masktel );
        }
        
    }
    
    let button = document.getElementById("handleSubmit");
 
    button.onclick= async function() {
        let phoneNumber = document.getElementById("phone-number").value;
        let data = {phoneNumber}


    const response = await fetch('http://localhost:3003/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
});
 
    let content = await response.json();
 
    if(content.sucess){
        alert("Sucesso")
    }else{
        alert("Não")
    }
}