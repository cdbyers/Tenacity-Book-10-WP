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
  { title: 'Unit 1: Sport and fitness' },
  { title: 'Speaking & Listening' },
  { title: 'Reading: East African athletes' },
  { title: 'Reading: East African athletes (Part 2)' },
  { title: 'Language focus: Relative clauses' },
  { title: 'Language focus: The present perfect tense' },
  { title: 'Study skills: Using English in the classroom' },
  { title: 'Reading: A newspaper extract' },
  { title: 'Reading: A newspaper extract (Part 2)' },
  { title: 'Language focus: Adverbs of frequency' },
  { title: 'Language focus: Giving good advice' },
  { title: 'Writing: The African Nations Cup' },
  { title: 'Reading: Basketball' },
  { title: 'Writing: Learning a new sport' },
  { title: 'Fun with words: A word snake' },
  { title: 'Unit 2: Health - First Aid' },
  { title: 'Speaking: Accidents' },
  { title: 'Reading: First Aid' },
  { title: 'Speaking: Asking questions' },
  { title: 'Reading: Ayantu to the rescue' },
  { title: 'Listening: A nose bleed' },
  { title: 'Increase your word power: Remembering and reminiscing' },
  { title: 'Listening: Accidents at home' },
  { title: 'Speaking: Talk about the pictures' },
  { title: 'Language focus: More about verbs' },
  { title: 'Writing: A conversation at the clinic' },
  { title: 'Language focus: Sense verbs' },
  { title: 'Language focus: The lost watch' },
  { title: 'Writing: Making sentences' },
  { title: 'Study skills: Organising your work' },
  { title: 'Organise your study time' },
  { title: 'Unit 3: I like reading!' },
  { title: 'Listening: Talking about stories' },
  { title: 'Increase your word power: What do you read?' },
  { title: 'Speaking: Re-tell the story' },
  { title: 'Language focus: Reported speech' },
  { title: 'What do you like to read?' },
  { title: 'An extract from Nelson Mandela’s autobiography' },
];

for (let i = pages.length + 1; i <= 258; i++) {
  pages.push({ title: `Page ${i}` });
}

export default pages;
