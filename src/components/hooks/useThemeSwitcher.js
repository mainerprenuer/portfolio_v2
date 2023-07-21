import React from 'react'
import { MoonIcon, SunIcon } from '../Icons';

const useThemeSwitcher = () => {
    const <MoonIcon/> = document.getElementById('theme-toggle-dark-icon');
    const SunIcon = document.getElementById('theme-toggle-light-icon');
    
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        MoonIcon.classList.remove('hidden');
    } else {
        SunIcon.classList.remove('hidden');
    }
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', function() {
    
        // toggle icons inside button
        <MoonIcon/>;classList.toggle('hidden');
        SunIcon.classList.toggle('hidden');
    
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
    
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
    });
}

export default useThemeSwitcher