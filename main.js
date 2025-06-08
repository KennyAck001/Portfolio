var type = new Typed(".auto-type",{
    strings : ["Ayush Sharma.", "a FrontEnd Developer.","a Freelancer.", "a UI/Ux Enthusiast."],
    typeSpeed : 120,
    backSpeed : 100, 
    loop : false

})


function scrollToPoint(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ✅ Make it globally accessible
window.scrollToPoint = scrollToPoint;
