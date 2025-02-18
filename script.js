function navanimation(){
    // Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function() {
        // Only reset the y position and opacity, not the display property
        gsap.set(".nav2 h5 span", {
            y: 25,
            opacity: 1
        });

        const tl = gsap.timeline();
        
        tl.to("#navbot", {
            height: "21vh",
            duration: 0.4,
            ease: "power2.out"
        })
        .to(".nav2 h5", {
            display: "block",
            duration: 0
        })
        .from(".nav2 h5 span", {
            y: 25,
            duration: 0.4,
            stagger: {
                amount: 0.3,
                ease: "power2.out"
            },
            opacity: 0
        });
    });

    nav.addEventListener("mouseleave", function() {
        const tl = gsap.timeline();

        tl.to(".nav2 h5 span", {
            y: 25,
            duration: 0.3,
            stagger: {
                amount: 0.2,
                ease: "power2.in"
            },
            opacity: 0
        })
        .to(".nav2 h5", {
            display: "none",
            duration: 0
        })
        .to("#navbot", {
            height: "0vh",
            duration: 0.3,
            ease: "power2.inOut"
        });
    });
}); 
}
navanimation()

function animation(){
    var rightelems = document.querySelectorAll(".rightelem")
    rightelems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0 
            })
        })
        
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x: dets.x - elem.getBoundingClientRect().x - 150,  // Adjusted x offset
                y: dets.y - elem.getBoundingClientRect().y - 150,  // Adjusted y offset
                ease: "power2.out"
            })
        })
    }) 
}
animation();

function vidanimation(){
    var playreel = document.querySelector(".playreel")
var video = document.querySelector("#page3 video")
playreel.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
        zindex:900
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        opacity:0,
        transform:"scaleX(0) scaleY(0)",

    })
})

}
vidanimation();

function page5Animation() {
    var sections = document.querySelectorAll(".page5right");
    sections.forEach(function(elem) {
        // Get the video element more reliably using querySelector
        const video = elem.querySelector("video");
        
        elem.addEventListener("mouseenter", function() {
            if (video) {
                video.style.opacity = 1;
                video.play()
                    .catch(error => {
                        console.log("Video play failed:", error);
                    });
            }
        });

        elem.addEventListener("mouseleave", function() {
            if (video) {
                video.style.opacity = 0;
                video.load();
            }
        });
    });
}

page5Animation();

// First register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Then fix the selector and ScrollTrigger configuration
gsap.from(".btm7part2 h4", {  // Add dot for class selector
    x: -100,  // Start from -100px (off-screen left)
    opacity: 0,
    duration: 1,
    stagger: 0.2,  // Add stagger for sequential animation
    scrollTrigger: {
        trigger: ".btm7part2",
        start: "top 80%",  // Start animation when element is 80% from top of viewport
        end: "top 50%",
        // markers: true,  // Uncomment this to debug
        toggleActions: "play none none reverse",
        scroller: "body",
    }
});
gsap.from(".btm7part3 h4", {  // Add dot for class selector
    x: -100,  // Start from -100px (off-screen left)
    opacity: 0,
    duration: 1,
    stagger: 0.2,  // Add stagger for sequential animation
    scrollTrigger: {
        trigger: ".btm7part3",
        start: "top 80%",  // Start animation when element is 80% from top of viewport
        end: "top 50%",
        // markers: true,  // Uncomment this to debug
        toggleActions: "play none none reverse",
        scroller: "body",
    }
});
gsap.from(".btm7part4 h4", {  // Add dot for class selector
    x: -100,  // Start from -100px (off-screen left)
    opacity: 0,
    duration: 1,
    stagger: 0.2,  // Add stagger for sequential animation
    scrollTrigger: {
        trigger: ".btm7part4",
        start: "top 80%",  // Start animation when element is 80% from top of viewport
        end: "top 50%",
        // markers: true,  // Uncomment this to debug
        toggleActions: "play none none reverse",
        scroller: "body",
    }
});
function lastanimation(){
    var tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
    })
    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0)",
        borderRadius:"50%",
    })
    tl.from("nav",{
    opacity:0,
    })
    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
    })
}
lastanimation();