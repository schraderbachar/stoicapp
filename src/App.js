import "./App.css";
import React, { useState } from "react";

function App() {
  const quotes = [
    "The happiness of your life depends upon the quality of your thoughts. -Marcus Aurelius",
    "If it is not right do not do it; if it is not true do not say it. -Marcus Aurelius",
    "You have power over your mind - not outside events. Realize this, and you will find strength. -Marcus Aurelius",
    "The impediment to action advances action. What stands in the way becomes the way. -Marcus Aurelius",
    "The soul becomes dyed with the color of its thoughts. -Marcus Aurelius",
    "The things you think about determine the quality of your mind. -Epictetus",
    "Man is not affected by events but by the view he takes of them. -Epictetus",
    "It is not that we have a short time to live, but that we waste a lot of it. -Seneca",
    "Luck is what happens when preparation meets opportunity. -Seneca",
    "It is the power of the mind to be unconquerable. -Seneca",
    "It is not that we have a short time to live, but that we waste a lot of it. -Seneca",
    "We are more often frightened than hurt; and we suffer more from imagination than from reality. -Seneca",
    "Difficulties strengthen the mind, as labor does the body. -Seneca",
    "He who fears death will never do anything worth of a man who is alive. -Seneca",
    "We suffer more often in imagination than in reality. -Seneca",
    "Wealth is the slave of a wise man. The master of a fool. -Seneca",
    "It is not that we have a short time to live, but that we waste a lot of it. -Seneca",
    "Wealth consists not in having great possessions, but in having few wants. -Epictetus",
    "Curb your desire - don't set your heart on so many things and you will get what you need. -Epictetus",
    "Freedom is not procured by a full enjoyment of what is desired, but by controlling the desire. -Epictetus",
    "First say to yourself what you would be; and then do what you have to do. -Epictetus",
    "The greater the difficulty, the more glory in surmounting it. -Epictetus",
    "Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not. -Epictetus",
    "It is impossible for a man to learn what he thinks he already knows. -Epictetus",
    "If you want to improve, be content to be thought foolish and stupid. -Epictetus",
    "Men are disturbed not by things, but by the view which they take of them. -Epictetus",
    "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. -Epictetus",
    "No man is free who is not a master of himself. -Epictetus",
    "What would have become of Hercules do you think if there had been no lion, hydra, stag or boar - and no savage criminals to rid the world of? What would he have done in the absence of such challenges? Obviously he would have just rolled over in bed and gone back to sleep. So by snoring his life away in luxury",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="App">
      <div className="image">
        <h2>{quote}</h2>
        <div className="hide">{setTimeout(() => getQuote(), 10000)}</div>
      </div>
    </div>
  );
}

export default App;
