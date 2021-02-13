import "./main.scss";
import "./test.css";

// typical import
import gsap from "gsap";

const timeline = gsap.timeline(
    {
        defaults: {
            duration:1
        }
    }
   
);

timeline.from('.header',{

        y: "-100%",
        ease: "bounce"
})
.from('.link', {
    opacity:0,
    stagger: .5 //.. makes links come in one after the other rather than all at the same time.

})
.from('.right', { 
    x:'100%',
    ease:'power2.in'
},1) // this is saying start right after the header has finished and do not wait for the links to finish
.from('.left',{
    x:"-100%"
},'<.5') // this is saying come in half a second after the right comes in
.to('.footer',{
    y:0,
    ease:"elastic"
})
.fromTo('.button', {
    opacity: 0,
    scale:0, 
    rotation: 720
},
{
    opacity:1,
    scale:1,
    rotation:0
});

const button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    timeline.timeScale(3); // heres how we speed things up

    timeline.reverse(); // here is how we play a timeline in reverse.
});

const player = document.querySelector('lottie-player');
player.load('https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json');

if(module.hot){module.hot.accept();} 