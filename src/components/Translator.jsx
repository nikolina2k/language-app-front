import axios from 'axios';
import { unescape } from 'html-entities';

async function translateWord(inputWord, translationDirection) {
  try {
    const response = await axios.get(
      translationDirection === 'tat2rus'
        ? `https://translate.tatar/translate?lang=1&text=${encodeURIComponent(inputWord)}`
        : `https://translate.tatar/translate?lang=0&text=${encodeURIComponent(inputWord)}`
    );

    const parsedText = unescape(response.data);
    return parsedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}


// Example usage:
async function translateExample() {
  try {
    const translatedText = await translateWord('example', 'tat2rus');
    console.log('Translated Text:', translatedText);
  } catch (error) {
    console.error('Translation error:', error);
  }
}

translateExample();
