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
        fix_information_author.classList.remove("highLight");
        change_password.classList.remove("highLight");
        manage_post.classList.remove("highLight");
        post_news.classList.add("highLight");
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
        fix_information_author.classList.remove("highLight");
        change_password.classList.remove("highLight");
        manage_post.classList.add("highLight");
        post_news.classList.remove("highLight");
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
        fix_information_author.classList.remove("highLight");
        change_password.classList.add("highLight");
        manage_post.classList.remove("highLight");
        post_news.classList.remove("highLight");
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
        fix_information_author.classList.add("highLight");
        change_password.classList.remove("highLight");
        manage_post.classList.remove("highLight");
        post_news.classList.remove("highLight");

    }
});



let list_post=document.querySelectorAll(".manage_post_body_item");
let btn_post_prev=document.querySelector(".manage_post_list_pagination_btn_action.prev");
let btn_post_next=document.querySelector(".manage_post_list_pagination_btn_action.next");


let thisPost=1;
let limitPost=2;

btn_post_prev.addEventListener('click',()=>{
    if(thisPost>1){
        thisPost--;
        loadPost();
    }
});
btn_post_next.addEventListener('click',()=>{
    if(thisPost<Math.ceil(list_post.length/limitPost)){
        thisPost++;
        loadPost();
    }
});

function loadPost(){
    let begin= (thisPost-1)*limitPost;
    let end= thisPost*limitPost -1;
    list_post.forEach((post,index)=>{
        if(index>=begin && index<=end){
            post.style.display="block";
        }
        else{
            post.style.display="none";
        }
    })
    listPost();
}
loadPost();
function listPost() {
    let count = Math.ceil(list_post.length / limitPost);
    document.querySelector(".manage_post_list_pagination_btn").innerHTML = "";

    for (i = 1; i <= count; i++) {
        let newPost = document.createElement("li");
        newPost.innerText = i;
        if (i == thisPost) {
            newPost.classList.add("highLight");
            
        }
        newPost.setAttribute("onclick", "changePost(" + i + ")");
        document.querySelector(".manage_post_list_pagination_btn").appendChild(newPost);
    }

}
function changePost(page) {
    thisPost = page;
    loadPost();
}

