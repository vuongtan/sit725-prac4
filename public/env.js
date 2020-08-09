console.log("hello")

$(document).ready(function(){
$('#cal').click(function(){
    console.log("OK")
    var message=$('#message').val()
    var ms={
    message
    }
$.get("/message",ms,function(data){
    console.log(data)
})
})
})
setInterval(() => {
    $.get("/messages",function(messages){
        $('#messages').empty()

        messages.forEach((message) => {
            $('#messages').append('<div class="row">'+message.message+'</div>')
        });
    })
}, 1000);