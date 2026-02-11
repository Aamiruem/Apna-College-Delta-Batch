// Page Navigation Techniques in JavaScript
// There are several ways to handle navigation within a single page application (SPA) or between different sections of a webpage. Here are the most common approaches:

// 1. Anchor Link Navigation (Traditional HTML)
// html
// <!-- HTML links to page sections -->
// <nav>
//   <a href="#section1">Section 1</a>
//   <a href="#section2">Section 2</a>
// </nav>

// <section id="section1">...</section>
// <section id="section2">...</section>
// 2. Programmatic Scroll Navigation
// javascript
// // Smooth scroll to element
// function scrollToElement(elementId) {
//   const element = document.getElementById(elementId);
//   element.scrollIntoView({ behavior: 'smooth' });
// }

// // Usage
// scrollToElement('section2');
// 3. History API (SPA Navigation)
// javascript
// // Handle navigation without page reload
// function navigateTo(page) {
//   history.pushState({}, '', page);
//   loadContent(page); // Your content loading function
// }

// // Listen for back/forward buttons
// window.addEventListener('popstate', () => {
//   loadContent(location.pathname);
// });
// 4. Router Libraries (For Complex SPAs)
// Popular routing libraries:

// React: React Router

// Vue: Vue Router

// Angular: Angular Router

// Basic vanilla JS router example:

// javascript
// const routes = {
//   '/': homePage,
//   '/about': aboutPage,
//   '/contact': contactPage
// };

// function router() {
//   const path = window.location.pathname;
//   routes[path] ? routes[path]() : notFoundPage();
// }
// 5. Tab-Based Navigation
// html
// <div class="tabs">
//   <button class="tab-btn active" data-tab="tab1">Tab 1</button>
//   <button class="tab-btn" data-tab="tab2">Tab 2</button>
// </div>

// <div class="tab-content" id="tab1">Content 1</div>
// <div class="tab-content" id="tab2" style="display:none">Content 2</div>

// <script>
// document.querySelectorAll('.tab-btn').forEach(btn => {
//   btn.addEventListener('click', () => {
//     // Hide all tab contents
//     document.querySelectorAll('.tab-content').forEach(content => {
//       content.style.display = 'none';
//     });
    
//     // Remove active class from all buttons
//     document.querySelectorAll('.tab-btn').forEach(b => {
//       b.classList.remove('active');
//     });
    
//     // Show selected tab
//     const tabId = btn.dataset.tab;
//     document.getElementById(tabId).style.display = 'block';
//     btn.classList.add('active');
//   });
// });
// </script>
// Best Practices
// Accessibility: Ensure navigation works with keyboard and screen readers

// Visual Feedback: Highlight current active section/tab

// Smooth Transitions: Use CSS transitions for pleasant UX

// Fallbacks: Provide server-side fallbacks for JS-disabled browsers

// History Management: Properly handle browser back/forward buttons

// Would you like me to elaborate on any specific navigation technique?







document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        updateActiveNavLink(currentSection);
    });
    
    // Function to update active navigation link
    function updateActiveNavLink(targetId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize - check which section is visible on page load
    const firstSection = document.querySelector('section');
    if (firstSection) {
        updateActiveNavLink('#' + firstSection.getAttribute('id'));
    }
});













document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for active link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = '#' + entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});














const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const align = div1.getAttribute("align");
// null
