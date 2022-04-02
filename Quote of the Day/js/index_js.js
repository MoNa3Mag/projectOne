const arrayOfQuotes = [
    {quote: 'Be yourself; everyone else is already taken.',
     author: 'Oscar Wilde-1' 
     
    },
    { quote: 'It\'s not what happens to you, but how you react to it that matters.',
      author: 'Epictetus-2' 
     
    },
    {quote: 'Two things are infinite: the universe and human stupidity.',
      author: 'Albert Einstein-3' 
     
    },
    {quote: 'So many books, so little time.',
     author: 'Frank Zappa-4'
    },
    {quote: 'A room without books is like a body without a soul.',
     author: 'Marcus Tullius Cicero-5'
     
    },
    {quote: 'You only live once, but if you do it right, once is enough.',
     author: 'Mae West-6'
    },
    {quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi-7'
    },
    {quote: 'A friend is someone who knows all about you and still loves you.',
    author: 'Elbert Hubbard-8'
    }, 
    {quote: ' Always forgive your enemies; nothing annoys them so much.',
      author: ' Oscar Wilde-9'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-10'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-11'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-12'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-13'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-14'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-15'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-16'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-17'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-18'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-19'
    },
    {quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi-20'
    },
  ];





function generateQuote()
{
    // const random = Number.parseInt(Math.random()*arrayOfQuotes.length); wo de
    const random = Math.floor(Math.random()*arrayOfQuotes.length);
    document.getElementById('QuoteOutput').innerHTML= `\"${arrayOfQuotes[random].quote}\"`;   
    document.getElementById('authorOutput').innerHTML= `\"${arrayOfQuotes[random].author}\"`; 
}


