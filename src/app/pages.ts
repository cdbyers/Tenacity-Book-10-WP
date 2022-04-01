import { Page, Section } from './types';

const sections: Section[] = [
  { name: 'Cover', start: 1 },
  { name: 'Introduction', start: 2 },
  { name: 'Authors', start: 3 },
  { name: 'Table of Contents', start: 4 },
  { name: 'Unit 1', start: 5, end: 20 },
  { name: 'Unit 2', start: 21, end: 36 },
  { name: 'Unit 3', start: 37, end: 57 },
  { name: 'Revision 1', start: 58, end: 61 },
  { name: 'Unit 4', start: 62, end: 79 },
  { name: 'Unit 5', start: 80, end: 97 },
  { name: 'Unit 6', start: 98, end: 116 },
  { name: 'Revision 2', start: 117, end: 121 },
  { name: 'Unit 7', start: 122, end: 143 },
  { name: 'Unit 8', start: 144, end: 157 },
  { name: 'Unit 9', start: 158, end: 173 },
  { name: 'Revision 3', start: 174, end: 178 },
  { name: 'Unit 10', start: 179, end: 195 },
  { name: 'Unit 11', start: 196, end: 211 },
  { name: 'Unit 12', start: 212, end: 228 },
  { name: 'Revision 4', start: 229, end: 234 },
  { name: 'Appendix 1', start: 235, end: 237 },
  { name: 'Appendix 2', start: 238, end: 240 },
  { name: 'Appendix 3', start: 241, end: 242 },
  { name: 'Appendix 4', start: 243, end: 253 },
  { name: 'Appendix 5', start: 254, end: 255 },
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
