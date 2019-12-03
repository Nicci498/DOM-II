// Your code goes here
/*Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive.
Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

Nest two similar events somewhere in the site and prevent the event propagation properly

 Stop the navigation items from refreshing the page by using preventDefault()*/

 const header = document.querySelector('.logo-heading');
 header.addEventListener("mouseenter", () => {
     header.style.transform = "scale(2.2)";
     header.style.transition = "transform 0.3s"
 })
 header.addEventListener("mouseleave", () => {
    header.style.transform = "scale(1)";
})


 const busPic = document.querySelector('img');
 busPic.addEventListener("dblclick", () => {
     busPic.src = "img/newbus.jpg";
 })

 const funPic = document.querySelector('.inverse-content .img-content img');
 funPic.addEventListener('click', () => {
     funPic.src = "img/fun2.jpg";
 })

 const welcome = document.querySelector('h2');
 welcome.addEventListener("mouseover", () => {
     welcome.style.color = "blue";
 })

 const intro = document.querySelector('p');
 intro.addEventListener('copy', () => {
     intro.style.color = "darkBlue";
 })

 const body = document.querySelector('body');
 window.addEventListener("resize", () => {
     body.style.backgroundColor = "lightGray";
 })

 const footer = document.querySelector('footer');
 footer.addEventListener("mousemove", () => {
     footer.style.backgroundColor = "lightBlue";
 })

 const nav = document.querySelectorAll('a');
 nav.forEach((links, i) => {
    links.addEventListener('mouseover', () => {
        links.style.color = "#242582";
        links.style.transform = "scale(1.3)";
        links.style.transition = "transform 0.8s";
    })
    document.addEventListener('keyup', () => {
        links.style.color = 'white';
    })
   
 })

 const introText = document.querySelector('.intro p')
 document.addEventListener('scroll',()=>{
  introText.style.backgroundColor='slateblue';
  introText.stlye.color = "lightGray";
     })

 const backTop = document.querySelector('header');
 document.addEventListener('keypress', () => {
     backTop.style.backgroundColor = "#3500D3";
     links.style.color = "white";
 })


 

 