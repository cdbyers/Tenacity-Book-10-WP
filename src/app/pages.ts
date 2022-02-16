import { Page } from './types';

const pages: Page[] = [
  {
    title: 'Cover',
  },
  {
    title: 'Take Good Care of This Textbook',
  },
  { title: 'Authors' },
  { title: 'Table of Contents' },
];

let pageNumber = 1;
for (let i = pages.length + 1; i <= 258; i++) {
  pages.push({ title: `Page ${pageNumber}` });
  pageNumber++;
}

export default pages;
