 window.addEventListener("scroll",()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
 })

 //show/hide faq questions
 const faqs = document.querySelectorAll('.faqs');
 faqs.forEach(faqs=>{
    faqs.addEventListener('click',()=>{
        faqs.classList.toggle('open');
        //change icon
        const icon = faqs.querySelector('.faqs_icon i');
        if(icon.className==='uil uil-plus'){
            icon.className= 'uil uil-minus';}
            else{
                icon.className= 'uil uil-plus';
            }

    })
    

 })

 //show/hide nav menu
 const menu=document.querySelector(".nav_menu")
 const menuBtn=document.querySelector("#open_menu_btn")
 const closeBtn =document.querySelector("#close_menu_btn")
 menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
 })
 //close nav menu
 const closeNav=()=>{
    menu.style.display = "none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
 }
 closeBtn.addEventListener('click',closeNav)