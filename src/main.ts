import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as AOS from 'aos';

import { AppModule } from './app/app.module';
import { Html5QrcodeScanner } from 'html5-qrcode/esm/html5-qrcode-scanner';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  (function() {
    "use strict";
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if(selectHeader)
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      if(selectBody)
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body')?.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    }
    mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
      navmenu.addEventListener('click', (e) => {
        if (document.querySelector('.mobile-nav-active')) {
          e.preventDefault();
          (<HTMLElement>navmenu.parentNode)?.classList.toggle('active');
          (<HTMLElement>navmenu.parentNode)?.nextElementSibling?.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        }
      });
    });
    
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Initiate glightbox
     */
    // const glightbox = GLightbox({
    //   selector: '.glightbox'
    // });
  
    /**
     * Initiate Pure Counter
     */
  
  
    //new PureCounter();
  
    /**
     * Init swiper sliders
     */
    // function initSwiper() {
    //   document.querySelectorAll('.swiper').forEach(function(swiper) {
    //     let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
    //     new Swiper(swiper, config);
    //   });
    // }
    //window.addEventListener('load', initSwiper);
  
  })();

 
  