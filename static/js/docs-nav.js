/**
 * Documentation Sidebar Navigation
 * Automatically generates a table of contents from h2 and h3 headings
 * and highlights the current section as you scroll
 */

document.addEventListener('DOMContentLoaded', function() {
  const docsContent = document.querySelector('.docs-content');
  const docsNav = document.getElementById('docs-nav');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  if (!docsContent || !docsNav) return;

  // Generate section navigation (links to other docs pages)
  function generateSectionNav() {
    const currentPath = window.location.pathname;
    
    // Get base path from current URL (handles subdirectory deployments)
    const pathParts = currentPath.split('/').filter(p => p);
    const baseIndex = pathParts.indexOf('documentation');
    const basePath = baseIndex > 0 ? '/' + pathParts.slice(0, baseIndex).join('/') + '/' : '/';
    
    const docsSections = [
      { title: 'Documentation Home', url: basePath + 'documentation/' },
      { title: 'Getting Started', url: basePath + 'documentation/getting-started/' },
      { title: 'Layouts & Shortcodes', url: basePath + 'documentation/layouts-shortcodes/' },
      { title: 'Working with Images', url: basePath + 'documentation/images/' },
      { title: 'SEO & Social Sharing', url: basePath + 'documentation/seo/' }
    ];

    const sectionNav = document.createElement('div');
    sectionNav.className = 'docs-section-nav';
    
    const sectionTitle = document.createElement('h4');
    sectionTitle.textContent = 'Documentation';
    sectionTitle.className = 'docs-section-title';
    sectionNav.appendChild(sectionTitle);

    const sectionList = document.createElement('ul');
    sectionList.className = 'docs-nav__list docs-section-list';

    docsSections.forEach(section => {
      const item = document.createElement('li');
      item.className = 'docs-nav__item';

      const link = document.createElement('a');
      link.href = section.url;
      link.textContent = section.title;
      link.className = 'docs-nav__link';

      // Highlight current page
      if (currentPath.includes(section.url) || (section.url === '/documentation/' && currentPath.endsWith('/documentation/'))) {
        link.classList.add('docs-nav__link--active');
      }

      item.appendChild(link);
      sectionList.appendChild(item);
    });

    sectionNav.appendChild(sectionList);
    docsNav.appendChild(sectionNav);

    // Add separator
    const separator = document.createElement('div');
    separator.className = 'docs-nav-separator';
    docsNav.appendChild(separator);
  }

  // Generate page navigation from headings
  function generatePageNav() {
    const headings = docsContent.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const pageNavTitle = document.createElement('h4');
    pageNavTitle.textContent = 'On This Page';
    pageNavTitle.className = 'docs-section-title';
    docsNav.appendChild(pageNavTitle);

    const nav = document.createElement('ul');
    nav.className = 'docs-nav__list';

    let currentH2Item = null;
    let currentH3List = null;

    headings.forEach((heading, index) => {
      // Add ID to heading if it doesn't have one
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = 'docs-nav__link';

      const listItem = document.createElement('li');
      listItem.className = 'docs-nav__item';
      listItem.appendChild(link);

      if (heading.tagName === 'H2') {
        // Top level item
        nav.appendChild(listItem);
        currentH2Item = listItem;
        currentH3List = null;
      } else if (heading.tagName === 'H3' && currentH2Item) {
        // Nested item under h2
        if (!currentH3List) {
          currentH3List = document.createElement('ul');
          currentH3List.className = 'docs-nav__sublist';
          currentH2Item.appendChild(currentH3List);
        }
        listItem.className = 'docs-nav__item docs-nav__item--sub';
        currentH3List.appendChild(listItem);
      }

      // Smooth scroll on click
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(heading.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without jumping
          history.pushState(null, null, `#${heading.id}`);
          // Update active state
          updateActiveLink(link);
        }
      });
    });

    docsNav.appendChild(nav);
  }

  // Update active link based on scroll position
  function updateActiveLink(activeLink = null) {
    const links = docsNav.querySelectorAll('.docs-nav__link');

    if (activeLink) {
      // Manually set active link
      links.forEach(link => link.classList.remove('docs-nav__link--active'));
      activeLink.classList.add('docs-nav__link--active');
      return;
    }

    // Auto-detect based on scroll position
    const headings = docsContent.querySelectorAll('h2, h3');
    let currentHeading = null;

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 100) {
        currentHeading = heading;
      }
    });

    links.forEach(link => {
      link.classList.remove('docs-nav__link--active');
      if (currentHeading && link.getAttribute('href') === `#${currentHeading.id}`) {
        link.classList.add('docs-nav__link--active');
      }
    });
  }

  // Show/hide scroll to top button
  function toggleScrollButton() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('docs-scroll-btn--visible');
    } else {
      scrollToTopBtn.classList.remove('docs-scroll-btn--visible');
    }
  }

  // Scroll to top functionality
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize
  generateSectionNav();
  generatePageNav();
  updateActiveLink();

  // Update on scroll (throttled)
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
      updateActiveLink();
      toggleScrollButton();
    });
  });

  // Handle initial hash in URL
  if (window.location.hash) {
    setTimeout(function() {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});

