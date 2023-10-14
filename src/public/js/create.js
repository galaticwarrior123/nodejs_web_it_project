post_news=document.querySelector(".nav-item.post_news_btn");
manage_post=document.querySelector(".nav-item.manage_post_btn");
change_password=document.querySelector(".nav-item.change_password_btn");
fix_information_author=document.querySelector(".nav-item.fix_info_author_btn");


form=document.querySelector(".create_form");
post=document.querySelector(".manage_post");
password=document.querySelector(".change_password");
information_author=document.querySelector(".fix_information_author");

post_news.addEventListener("click",()=>{
    if(form.style.display="none"){
        if(post.style.display="block"){
            post.style.display="none";
        }
        if(password.style.display="block"){
                password.style.display="none";
        }
        if(information_author.style.display="block"){
            information_author.style.display="none";
        }
        form.style.display="block";
    }
});
manage_post.addEventListener("click",()=>{
    if(post.style.display="none"){
        if(form.style.display="block"){
            form.style.display="none";
        }
        if(password.style.display="block"){
                password.style.display="none";
        }
        if(information_author.style.display="block"){
            information_author.style.display="none";
        }
        post.style.display="block";
        manage_post.style.color="red";
    }   
});

change_password.addEventListener("click",()=>{
    if(password.style.display="none"){
        if(form.style.display="block"){
            form.style.display="none";
        }
        if(post.style.display="block"){
            post.style.display="none";
        }
        if(information_author.style.display="block"){
            information_author.style.display="none";
        }
        password.style.display="block";
    }
});
fix_information_author.addEventListener("click",()=>{
    if(information_author.style.display="none"){
        if(form.style.display="block"){
            form.style.display="none";
        }
        if(post.style.display="block"){
            post.style.display="none";
        }
        if(password.style.display="block"){
            password.style.display="none";
        }
        information_author.style.display="block";
    }
});



