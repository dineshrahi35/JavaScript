const { useState, useEffect } = React;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <p><strong>{post.username}</strong></p>
          <p>{post.content}</p>
          <p>{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
