const mobileNav= document.querySelector('.mobile-nav-links')

function toggleMobileNav(){
    if(mobileNav.classList.contains('active')){
        
        mobileNav.classList.remove('active')
        mobileNav.classList.add('hidden')
    }else{
        mobileNav.classList.remove('hidden')
        mobileNav.classList.add('active')
    }
}

