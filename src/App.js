import "./App.css";
import Comment from "./components/Comment/Comment";

const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

const generatorId = (function () {
  let id = 0;
  return function () {
    if (comment[0] === 0) id = 0;
    return id++;
  };
})();

function App() {
  return (
    <div className="App">
      {comment.map((el) => {
        return (
          <Comment
            key={generatorId()}
            date={el.date}
            text={el.text}
            author={el.author}
          />
        );
      })}
    </div>
  );
}

export default App;
