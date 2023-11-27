/*
    소맨텀 메인에 뜨는 명언
    랜덤으로 나오게 한다.
*/

const quotes = [
    {
        quote : "If you want to achieve a big goal, don't ask for permission.",
        author : "Unknown"
    },
    {
        quote : "The person who maximizes their situation is the one who fits in the best situation.",
        author : "John Wooden"
    },
    {
        quote : "To live a creative life, one must let go of the fear of being wrong.",
        author : "Unknown"
    },
    {
        quote : "If you're not willing to risk the usual, you will have to settle for the ordinary.",
        author : "Jim Rohn"
    },
    {
        quote : "The reason for trust is not because it's safe or certain, but because there's a willingness to take risks.",
        author : "Unknown"
    }, 
    {
        quote : "Life is not a series of pains but an opportunity for change.",
        author : "Karl Young"
    },
    {
        quote : "The greatest obstacle to living is expectation.",
        author : "Socrates"
    },
    {
        quote : "The secret of success is simply to work harder a little more each day.",
        author : "John R. Wooden"
    },
    {
        quote : "Unhappiness stems from within. It depends upon your attitude within your mind.",
        author : "Aristotle"
    },
    {
        quote : "The best prophet of the future is the one who creates it.",
        author : "Peter Drucker"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todatQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;
