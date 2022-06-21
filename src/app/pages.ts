import { Page, Section } from './types';

const sections: Section[] = [
  { name: 'Cover', start: 1 },
  { name: 'Authors', start: 2 },
  { name: 'Dedication', start: 3 },
  { name: 'Introduction', start: 4 },
  { name: 'Table of Contents', start: 5 },
  { name: 'Unit 1', start: 6, end: 21 },
  { name: 'Unit 2', start: 22, end: 37 },
  { name: 'Unit 3', start: 38, end: 58 },
  { name: 'Revision 1', start: 59, end: 62 },
  { name: 'Unit 4', start: 63, end: 80 },
  { name: 'Unit 5', start: 81, end: 98 },
  { name: 'Unit 6', start: 99, end: 117 },
  { name: 'Revision 2', start: 118, end: 122 },
  { name: 'Unit 7', start: 123, end: 144 },
  { name: 'Unit 8', start: 145, end: 158 },
  { name: 'Unit 9', start: 159, end: 174 },
  { name: 'Revision 3', start: 175, end: 179 },
  { name: 'Unit 10', start: 180, end: 196 },
  { name: 'Unit 11', start: 197, end: 212 },
  { name: 'Unit 12', start: 213, end: 229 },
  { name: 'Revision 4', start: 230, end: 235 },
  { name: 'Appendix 1', start: 236, end: 238 },
  { name: 'Appendix 2', start: 239, end: 241 },
  { name: 'Appendix 3', start: 242, end: 243 },
  { name: 'Appendix 4', start: 244, end: 254 },
  { name: 'Appendix 5', start: 255, end: 256 },
  { name: 'Acknowledgements', start: 257 },
];

const pages: Page[] = [];

sections.forEach((section) => {
  if (!section.end) {
    pages.push({ title: section.name, index: section.start });
    return;
  }

  for (let i = section.start; i <= section.end; i++) {
    pages.push({
      index: i,
      title: `${section.name} - p. ${i - 4}`,
    });
  }

  section.name += ` - p. ${section.start - 4}`;
});

export default { sections, pages };
