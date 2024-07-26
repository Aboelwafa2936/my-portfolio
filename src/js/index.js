$(window).on('DOMContentLoaded', ()=>{
    
    // dark mode function
    $(".toggleMode .fa-sun").on('click', ()=>{
        $(".toggleMode .fa-sun").toggleClass('fa-moon');
        $("body").toggleClass('dark-mode');
    })

    // tabs
    $(".tab-link").on('mouseenter', function(){
        $(this).attr("data-dark", true);
    })

    $(".tab-link").on('mouseleave', function(){
        $(this).removeAttr("data-dark")
    })

    $(".tab-link").on('click', function() {
        $(".tab-link").removeClass('active');
        $(this).addClass('active');

        let el = $(this).attr('data-target');
        console.log($(`#${el}`));

        $('.tab-pane').fadeOut(250, function() {
            $('.tab-pane').addClass('d-none');
        });

        $(`#${el}`).fadeIn(250, function() {
            $(`#${el}`).removeClass('d-none');
        });
    });

    // typewriter
    const textContainer = document.getElementById('typeWriter');
    const textList = [
        'Turning Ideas into Interactive Web Solutions',
        'Frontend Developer with a Passion for Design', 
        'Crafting Engaging User Experiences'
    ];
    const typeSpeed = 50;
    let textIndex = 0;
    let charIndex = 0;

    function type(){
        if(charIndex < textList[textIndex].length){
            const currentText = textList[textIndex].charAt(charIndex);
            textContainer.textContent += currentText
            charIndex++;
            setTimeout(type , typeSpeed)
        }else {
            charIndex = 0;
            textIndex = (textIndex + 1) % textList.length;
            setTimeout(() => {
                textContainer.innerText = '';
                type();
            }, 2000); // Wait 2 seconds before starting the next sentence
        }
    }
    setTimeout(()=>{
        type()
    }, 2000)

    /* ==> tilt element effect */
    $('[data-move]').on('mousemove', function(e) {
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const tiltPosX = ((offsetY - centerY) / centerY) * 10;
        const tiltPosY = ((offsetX - centerX) / centerX) * 10;

        $(this).css('transform', `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY}deg)`);
    });

    $('[data-move]').on('mouseleave', function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg)');
        const project = $(this).attr('id');
        $(`[data-${project}]`).removeClass('show');
    });

    $('[data-move]').on('mouseenter', function(){
        const project = $(this).attr('id');
        $(`[data-${project}]`).addClass('show');
    })
    $('.fa-github').on('mouseenter mousemove', function(e) {
        e.stopPropagation();
    });

    // loader
    setTimeout(()=>{
        $('.loader .left-half').css('width', '0')
        $('.loader .right-half').css('width', '0')
    }, 1000)

    setTimeout(()=>{
        $('.loader').addClass('d-none');
        $('.content').removeClass('d-none');
    }, 2000)

    // fake mouse
    $(document).on('mousemove', function(e){
        const clientX = e.clientX;
        const clientY = e.clientY;
        console.log(clientX);
        console.log(clientY);
        $(".outer-shape").css('top', `${clientY}px`)
        $(".outer-shape").css('left', `${clientX}px`)
    })
})