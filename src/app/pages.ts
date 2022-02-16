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
  { title: 'Unit 1 - Sport and fitness' },
  { title: 'Speaking & Listening' },
  { title: 'Reading: East African athletes (Part 1)' },
  { title: 'Reading: East African athletes (Part 2)' },
  { title: 'Language focus: Relative clauses' },
];

for (let i = pages.length + 1; i <= 258; i++) {
  pages.push({ title: `Page ${i}` });
}

export default pages;
