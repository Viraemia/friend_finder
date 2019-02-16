$(document).ready(function(){
    $("form").on("submit", function(event){
        event.preventDefault();
        console.log(event);
        console.log($("#ques1").val());
        console.log(axios);
        axios({
            method: 'post',
            url: '/',
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone'
            }
          }).then(function(res){
            console.log(res);
          }).catch(function(error){
              console.log(error);
          })
    });
    
});