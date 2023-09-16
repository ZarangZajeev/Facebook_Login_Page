$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                minlength:8
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            },
            messages:{
                fname:{
                    required: "Enter First Name",
                    minlenght:"Enter atleast 4 characters"
                },
                sname:{
                    required:"Enter Surname",
                    minlenght:"Enter atleast 4 characters"
                },
                emailAddress:{
                    required:"Enter email address",
                    email:"Enter proper email address"
                },
                password:{
                    minlenght:"Enter atleast 8 characters"
                },
                day:{
                    required:"Enter day"
                },
                month:{
                    required:"Enter month"
                },
                year:{
                    required:"Enter year"
                },
                gender:{
                    required:"Select any of one"
                }
            }
        }
    })
})