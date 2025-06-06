var type = new Typed(".auto-type",{
    strings : ["Ayush Sharma.", "a FrontEnd Developer.","a Freelancer.", "a UI/Ux Enthusiast."],
    typeSpeed : 120,
    backSpeed : 100, 
    loop : true

})

function scrollToSection(id){
  const target = document.getElementById(id);
  if(target){
    
    target.scrollIntoView({behavior:'smooth',
      block:'start'
    });
  }

}
  