import {carousel} from './carousels(js)/carousel.js';
import { carousel as carousel1} from './carousels(js)/carousel1.js';
carousel();
carousel1();

//Search
const searchDropdown = document.querySelector('.search-dropdown'); //dropdown

const searchLink = document.getElementById('search-icon'); //link

const searchInput = document.querySelector('.search-input'); //input

const closeSearch = document.querySelector('.close-search-menu'); //close

//Bag
const bagLink = document.getElementById('bag-icon'); //link
const bagDropdown = document.querySelector('.bag-dropdown');
const closeBag = document.querySelector('.close-bag-menu');

// Menu
const menu = document.querySelector('.menu-icon');

// Left chevron
const leftChevron = document.querySelector('.nav-left-chevron')

// sub contents
const menuUl = document.querySelector('.menu-ul');

function openDropdown(link, dropdown, input) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('open-search-active');
        input ? input.focus(): null;
    });
}

function closeDropdown(close, dropdown) {
    close.addEventListener('click', () => {
        dropdown.classList.toggle('open-search-active');

        // setTimeout(() => {
        //     searchDropdown.style.opacity = 0;
        // }, 500);
    })
}

// search
openDropdown(searchLink, searchDropdown, searchInput);
closeDropdown(closeSearch, searchDropdown);

// bag
openDropdown(bagLink, bagDropdown);
closeDropdown(closeBag, bagDropdown)

// menu
menu.addEventListener('click', () => {
    document.querySelectorAll('.nav-search-icon, .nav-bag-icon, .nav-apple-img, .menu-dropdown')
  .forEach(el => el.classList.toggle('active'));
    document.querySelector('nav').classList.toggle('active');
    const isOpen = menu.classList.toggle('open');

    if (isOpen) {
        document.getElementById('globalnav-anim-menutrigger-bread-top-open').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-open').beginElement(); 
    } else {
        document.getElementById('globalnav-anim-menutrigger-bread-top-close').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-close').beginElement();
    }
})

// Left Chevron
leftChevron.addEventListener('click', (e) => {
    leftChevron.classList.toggle('active');
    // Close all first
    menuUl.querySelectorAll('li .sub-item1, li .sub-item2').forEach(child => child.classList.remove('active'));
})

//sub Content
menuUl.addEventListener('click', e => {
    const li = e.target.closest('.a');
    if (!li) return;
    
    // Close all first
    menuUl.querySelectorAll('li .sub-item1, li .sub-item2').forEach(child => child.classList.remove('active'));
    
    // Open only the clicked one
    li.querySelectorAll('.sub-item1, .nav-left-chevron, .sub-item2').forEach(item => item.classList.toggle('active'));

    // for left-chevron
    document.querySelector('.nav-left-chevron').classList.add('active');
})
// Note to self: When I'm turning everything to js i should not forget to fix the li issues. Would probably just turn them to div

// document.querySelector('.footer-chevron').addEventListener('click', () => {
//     document.querySelector('.footer-chevron').classList.toggle('active');
// })

// document.querySelector('.footer-nav').addEventListener('click', e => {
//     const p = e.target.closest('p');
//     if (!p) return;

//     p.querySelectorAll('.footer-nav div').forEach( item => {
//         if(!(item.classList.contains('active'))) {
//             item.classList.remove('active');
//         } else {
//             item.classList.add('active');
//         }
//     })
// })
const container = document.querySelector('.footer-nav');

container.addEventListener('click', e => {
  const p = e.target.closest('p');
  if (!p || !container.contains(p)) return;

  const parentDiv = p.parentElement;

  // toggle active on parent div
  parentDiv.classList.toggle('active');

  // update aria-expanded on the <p>
  const expanded = parentDiv.classList.contains('active');
  p.setAttribute('aria-expanded', expanded ? 'true' : 'false');

  // optional: close other sections when one opens
  document.querySelectorAll('.footer-nav > div').forEach(item => {
    if (item !== parentDiv) {
      item.classList.remove('active');
      const otherP = item.querySelector('p');
      if (otherP) otherP.setAttribute('aria-expanded', 'false');
    }
  });
});
