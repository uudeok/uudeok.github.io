const quotes = [
  {
    quote:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author: "Leo Tolstoy",
  },
  {
    quote: "To thine own self be true.",
    author: "William Shakespear",
  },
  {
    quote:
      "Not all of us can do great things. But we can do small things with great love.",
    author: "Mother Teresa",
  },
  {
    quote:
      "I believe that if you show people the problems and you show them the solutions they will be moved to act.",
    author: "Bill Gates",
  },
  {
    quote: "The purpose of our lives is to be happy!",
    author: "Dalai Lama",
  },
  {
    quote: "All our dreams can be true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things you didn't to than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote:
      "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
  {
    quote:
      "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not she who does not feel afraid, but she who conquers that fear.",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
