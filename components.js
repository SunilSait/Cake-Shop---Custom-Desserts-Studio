/* ===== CAKE SHOP & CUSTOM DESSERTS STUDIO — SHARED COMPONENTS ===== */
'use strict';

/* ─── Monochrome SVG Icons ────────────────────────────── */
const ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    cake: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    pinterest: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="9" x2="12" y2="21"/><path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 5-4 5a2.5 2.5 0 0 1-2.5-2.5"/><path d="M10.5 16.5L8 21"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
};

/* Luxury Monogram Logo SVG */
const LOGO_SVG = `<svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="58" width="56" height="22" rx="6" fill="#C47C48"/>
    <rect x="25" y="60" width="50" height="3" rx="1.5" fill="#FAF7F2" opacity="0.6"/>
    <rect x="30" y="40" width="40" height="20" rx="5" fill="#FAF7F2"/>
    <rect x="33" y="42" width="34" height="2.5" rx="1.2" fill="#C47C48" opacity="0.5"/>
    <rect x="37" y="26" width="26" height="16" rx="4" fill="#C47C48"/>
    <circle cx="50" cy="20" r="5" fill="#FAF7F2"/>
    <path d="M50 11C48.5 14 47 16 50 19C53 16 51.5 14 50 11Z" fill="#E5A862"/>
</svg>`;

/* Font Awesome Social Login Icons */
const GOOGLE_SVG = `<i class="fa-brands fa-google" style="font-size:18px;"></i>`;

const APPLE_SVG = `<i class="fa-brands fa-apple" style="font-size:19px;"></i>`;

/* ─── THEME & DIRECTION ─────────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('cake_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('cake_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('cake_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('cake_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const icon = btn.querySelector('.pw-icon');
    if (input.type === 'password') {
        input.type = 'text';
        if (icon) icon.innerHTML = ICONS.eyeOff;
    } else {
        input.type = 'password';
        if (icon) icon.innerHTML = ICONS.eye;
    }
}

/* ─── NAVBAR INJECTION ───────────────────────────────── */
function injectNav() {
    const el = document.getElementById('main-nav');
    if (!el) return;
    const page = location.pathname.split('/').pop() || 'index.html';
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'menu.html', label: 'Menu' },
        { href: 'custom-orders.html', label: 'Custom Orders' },
        { href: 'flavors.html', label: 'Flavors & Fillings' },
        { href: 'pricing.html', label: 'Pricing Guide' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    el.innerHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <!-- Brand Logo -->
            <a href="index.html" class="nav-logo" aria-label="Dessert Cake Studio Home">
                <div class="nav-logo-icon">${LOGO_SVG}</div>
                <div class="nav-logo-text">
                    <span class="brand-top">DESSERT</span>
                    <span class="brand-bottom">Cake Studio</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="nav-links">
                ${navLinksHTML}
            </div>

            <!-- Right Actions -->
            <div class="nav-actions">
                <!-- RTL Toggle -->
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Text Direction" aria-label="Toggle text direction">
                    <span class="dir-label" style="font-size:0.65rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <!-- Theme Toggle -->
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <!-- CTA -->
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <!-- Mobile Hamburger -->
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Open menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <!-- Mobile Menu Dropdown -->
        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction">
                    <span class="dir-label" style="font-size:0.65rem;font-weight:700;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;

    // Sticky Scroll Shadow
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;

    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (e.composedPath && e.composedPath().includes(menu)) return;
    if (menu.contains(e.target)) return;

    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER INJECTION ───────────────────────────────── */
function injectFooter() {
    const el = document.getElementById('main-footer');
    if (!el) return;

    el.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Column 1: Brand & Socials -->
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Dessert Cake Studio Home" style="margin-bottom:1rem;">
                        <div class="nav-logo-icon">${LOGO_SVG}</div>
                        <div class="nav-logo-text">
                            <span class="brand-top" style="color:#FAF7F2;">DESSERT</span>
                            <span class="brand-bottom">Cake Studio</span>
                        </div>
                    </a>
                    <p class="footer-brand-text">Handcrafted celebration cakes, bespoke wedding tiers, and luxury confectionery collections created with artisanal mastery.</p>
                    <div class="footer-social">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link" aria-label="Pinterest">${ICONS.pinterest}</a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <div class="footer-links">
                        <a href="index.html">Home</a>
                        <a href="home2.html">Home 2 — Premium</a>
                        <a href="menu.html">Confectionery Menu</a>
                        <a href="custom-orders.html">Custom Orders</a>
                        <a href="flavors.html">Flavors & Fillings</a>
                        <a href="pricing.html">Pricing Guide</a>
                        <a href="contact.html">Contact & Studio</a>
                    </div>
                </div>

                <!-- Column 3: Studio Access & Resources -->
                <div class="footer-col">
                    <h4 class="footer-col-title">STUDIO ACCESS</h4>
                    <div class="footer-links">
                        <a href="login.html">Client Sign In</a>
                        <a href="signup.html">Create Account</a>
                        <a href="coming-soon.html">Coming Soon</a>
                        <a href="404.html">404 Error Page</a>
                        <a href="custom-orders.html#lead-times">Lead Times & Booking</a>
                        <a href="flavors.html#tasting">Tasting Lounge</a>
                    </div>
                </div>

                <!-- Column 4: Stay Updated Card -->
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Connected</h4>
                        <p class="footer-newsletter-desc">Receive secret seasonal menus, private tasting invites, and pastry masterclasses.</p>
                        <form onsubmit="event.preventDefault(); alert('Thank you for subscribing to Dessert Cake Studio!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} DESSERT CAKE STUDIO. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy</a>
                    <a href="coming-soon.html">Terms</a>
                    <a href="coming-soon.html">Cookies</a>
                </div>
            </div>
        </div>
    </footer>`;
}

/* ─── SCROLL TO TOP ────────────────────────────────── */
function injectScrollTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL REVEAL ────────────────────────────────── */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

/* ─── ACCORDION ────────────────────────────────────── */
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isOpen = item.classList.contains('open');

            // Close all items in accordion
            item.closest('.accordion').querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('open');
                const b = i.querySelector('.accordion-body');
                if (b) b.style.maxHeight = '0';
            });

            // Open clicked if was not open
            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });
}

/* ─── MENU TABS ────────────────────────────────────── */
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    const items = document.querySelectorAll('.menu-items-grid .menu-item-card');
    const legacyCategories = document.querySelectorAll('.menu-category');

    function selectCategory(target) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.category === target));

        // Legacy support if present
        if (legacyCategories.length) {
            if (target === 'all' || !target) {
                legacyCategories.forEach(cat => cat.classList.add('active'));
            } else {
                legacyCategories.forEach(cat => cat.classList.toggle('active', cat.dataset.category === target));
            }
        }

        // Unified grid support
        if (items.length) {
            let visibleCount = 0;
            let lastVisibleItem = null;

            items.forEach(item => {
                item.classList.remove('is-last-centered');
                if (target === 'all' || !target || item.dataset.category === target) {
                    item.style.display = 'flex';
                    visibleCount++;
                    lastVisibleItem = item;
                } else {
                    item.style.display = 'none';
                }
            });

            // Center the trailing item if odd count (e.g. 15th item in 'all' or 3rd item in 3-item categories)
            if (visibleCount % 2 === 1 && lastVisibleItem) {
                lastVisibleItem.classList.add('is-last-centered');
            }
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            selectCategory(tab.dataset.category);
        });
    });

    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('category') || window.location.hash.replace('#', '');
    if (catParam) {
        const matchingTab = Array.from(tabs).find(t => t.dataset.category === catParam);
        if (matchingTab) {
            selectCategory(catParam);
        } else {
            selectCategory('all');
        }
    } else {
        selectCategory('all');
    }
}

/* ─── COUNTER ANIMATION ────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll('.counter-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 2200;
                const start = performance.now();

                function animate(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased) + suffix;
                    if (progress < 1) requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

/* ─── AUTH PAGE INIT ─────────────────────────────────── */
function initAuthPage() {
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'RTL' : 'LTR';
    });
}

/* ─── MAIN INIT ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    injectNav();
    injectFooter();
    injectScrollTop();
    initScrollReveal();
    initAccordion();
    initMenuTabs();
    initCounters();
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
});
