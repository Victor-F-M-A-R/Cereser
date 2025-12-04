/*
 * Casa Cereser - Main App Controller
 */

import { initScrollReveal } from './modules/scrollReveal.js';
import { initCartSystem } from './modules/cartSystem.js';
import { initProductRenderer } from './modules/productRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Modules
    initProductRenderer(); // Must run before ScrollReveal to create elements
    initScrollReveal();
    initCartSystem();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navDesktop = document.querySelector('.nav-desktop');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Simple toggle for mobile menu - in a real app this would be more robust
            // For now, we'll just log it or add a class if we had a mobile menu container
            // Since the design didn't specify a separate mobile menu container, 
            // we assume the nav-desktop might transform or a new drawer would open.
            // For this MVP, let's alert or just toggle a class on body
            document.body.classList.toggle('menu-open');
            alert('Menu Mobile would open here (Design TBD)');
        });
    }

    console.log('Casa Cereser: Fluid Quiet Luxury Loaded');
});
