
const menu_btn = document.querySelector('.burger-menu')
 const menu_wrapper = document.querySelector('.hamburger-menu')
 const dismiss_btn = document.querySelector('.btn-close')
 const closeCheckInModalNo = document.querySelector('.prompt-btn-no')
 const closeCheckInModalYes = document.querySelector('.prompt-btn-yes')
 const closePromtBtn = document.querySelector('.check-in-prompt')
 const promptOverlay = document.querySelector('#overlay')
 const openCheckInBtn = document.querySelector('.feedback-btn-y')
 const open_Loader = document.querySelector('.feedback-btn-n')
 const burgerOverlay = document.querySelector('.burger-overlay')
 const loaderWrapper = document.querySelector('.loader-wrapper')

 console.log(open_Loader);
 
 
 
    menu_btn.addEventListener('click', function () {

     menu_wrapper.classList.add('is-active');
     promptOverlay.classList.add('active');
    } );
    
     dismiss_btn.addEventListener('click', function () {
     menu_wrapper.classList.remove('is-active');
     promptOverlay.classList.remove('active');
    } );
    
    const openCheckinModal = function () {
        closePromtBtn.classList.add('active');
        promptOverlay.classList.add('active');
    };
    
    const closeCheckinModal = function() {
        closePromtBtn.classList.remove('active');
        promptOverlay.classList.remove('active');
    };
    
    const openLoader = function() {
        loaderWrapper.classList.add('active');
        promptOverlay.classList.add('active');
        console.log('neo');
        
    }

    const closeLoader = function() {

    }
    
    open_Loader.addEventListener('click', function () {
        openLoader()
    })
    
    openCheckInBtn.addEventListener('click', function () {
        openCheckinModal()
    })

    promptOverlay.addEventListener('click', function () {
        closeCheckinModal()
        menu_wrapper.classList.remove('is-active');
        loaderWrapper.classList.remove('active');

    })

    closeCheckInModalNo.addEventListener('click', function () {
        window.location.href = "https://www.rain.co.za/";
    })
    
    closeCheckInModalYes.addEventListener('click', function () {
        closeCheckinModal()
    })