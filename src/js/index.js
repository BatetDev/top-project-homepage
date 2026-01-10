import '../styles/input.css';
import { createIcons, icons } from 'lucide';

const greetBabel = (name) => {
  console.log(`Hello, ${name}!`);
};

greetBabel('World');

const iconSpan = document.getElementById('icon');
if (iconSpan) {
  iconSpan.innerHTML =
    '<i data-lucide="landmark" width="40" height="40" class="inline"></i>';
  createIcons({ icons });
} else {
  console.warn('No element with id="icon" found.');
}

createIcons({ icons });
