let tl = gsap.timeline({delay: 2})
gsap.registerPlugin(ScrollTrigger)


tl.from('.s1', 1, {
    x: -20,
    opacity: 0,
    stagger: 0.2
})

.from('.b', 1, {
    x: "-100px",
    opacity: 0,
})

.from('section img', 1, {
    x: '130%'
}, '-=0.7');

gsap.from('.hs', 1, {
    scrollTrigger: {
        trigger: '#section_two',
        toggleActions: 'restart'
    },
    x: -20,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('#section_two img', 1, {
    scrollTrigger: {
        trigger: '#section_two',
        toggleActions: 'restart',
    },
    x: '120%'
});

gsap.from('.s3 h1, .peed', 1, {
    scrollTrigger: {
        trigger: '.section_three',
        toggleActions: 'restart'
    },
    x: 20,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('.section_three img', 1, {
    scrollTrigger: {
        trigger: '.section_three',
        toggleActions: 'restart',
    },
    x: '-120%'
});

gsap.from('.img_cont img', 1, {
    y: -50,
    scrollTrigger: {
        trigger:'.section_four',
        toggleActions: 'restart'
    },
    stagger: 0.4,
    ease: "bounce.out"
})

gsap.from('.section_51, .poop', 1, {
    scrollTrigger: {
        trigger: '.section_five',
        toggleActions: 'restart'
    },
    x: -20,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('.section_five img', 1, {
    scrollTrigger: {
        trigger: '.section_five',
        toggleActions: 'restart',
    },
    x: '120%'
});


gsap.from('.section_six img', 1, {
    scrollTrigger: {
        trigger: '.section_six',
        toggleActions: 'restart'
    },
    y: -50,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('.section_six h1, p', 1, {
    scrollTrigger: {
        trigger: '.section_six',
        toggleActions: 'restart',
    },
    y: 50,
    stagger: 0.1,
    opacity: 0,
});

gsap.from('.section_seven h1', 1, {
    scrollTrigger: {
        trigger: '.section_seven',
        toggleActions: 'restart'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('.section_seven img', 1, {
    scrollTrigger: {
        trigger: '.section_seven',
        toggleActions: 'restart',
    },
    y: -50,
    stagger: 0.1,
    opacity: 0,
});


gsap.from('.signup h1', 1, {
    scrollTrigger: {
        trigger: '.signup',
        toggleActions: 'restart'
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
})

gsap.from('form, input, label', 1, {
    scrollTrigger: {
        trigger: '.signup',
        toggleActions: 'restart',
    },
    y: -50,
    stagger: 0.1,
    opacity: 0,
});

gsap.from('form button', 1, {
    scrollTrigger: {
        trigger: '.signup',
        toggleActions: 'restart',
    },
    y: -50,
    stagger: 0.1,
    repeat: -1,
    ease: 'bounce.out',
});


$(document).ready(function(){
    $('#pop1').on('click', function() {
        $('#popup1').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup1').on('click', function() {
        $(this).removeClass('wide')
    })
})


$(document).ready(function(){
    $('#pop2').on('click', function() {
        $('#popup2').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup2').on('click', function() {
        $(this).removeClass('wide')
    })
})

$(document).ready(function(){
    $('#pop3').on('click', function() {
        $('#popup3').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup3').on('click', function() {
        $(this).removeClass('wide')
    })
})

$(document).ready(function(){
    $('#pop4').on('click', function() {
        $('#popup4').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup4').on('click', function() {
        $(this).removeClass('wide')
    })
})

$(document).ready(function(){
    $('#pop5').on('click', function() {
        $('#popup5').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup5').on('click', function() {
        $(this).removeClass('wide')
    })
})

$(document).ready(function(){
    $('#pop6').on('click', function() {
        $('#popup6').toggleClass('wide')
    })
})
$(document).ready(function(){
    $('#popup6').on('click', function() {
        $(this).removeClass('wide')
    })
})
