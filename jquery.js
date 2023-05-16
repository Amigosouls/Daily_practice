$(document).ready(function(){
    $('#reg').validate({
        rules:{
            'uname':{
                required:true,
                pattern:/^[a-z]/
            },
        },
        messages:{
            'uname':{
                required:"This is a required one",
                pattern:"please follow patttern"
            }
        }
    })
})