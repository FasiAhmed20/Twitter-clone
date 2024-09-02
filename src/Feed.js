import Tweetbox from "./Tweetbox";
import Post from "./Post";
import "./feed.css";
const Feed = () => {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {/* tweetbox */}

      <Post
        displayname="Elone Mask"
        username="@elonemask"
        verified={true}
        text="#Tesla "
        avatar="https://images.unsplash.com/photo-1585011650347-c59dbef5a823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxvbiUyMG11c2slMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D"
        image="https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsb24lMjBtdXNrfGVufDB8fDB8fHww"
      />
      <Post
        displayname="Driving empire"
        username="@_drivingEmpire"
        verified={true}
        text="#porche"
        avatar="https://images.unsplash.com/photo-1709724051158-751ca272d070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9yY2hlfGVufDB8fDB8fHww"
        image="https://images.unsplash.com/photo-1697418797721-15b8ce03aae2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9yY2hlfGVufDB8fDB8fHww"
      />
      <Post
        displayname="car-collection"
        username="@Col2vintage"
        verified={true}
        text="#Vintage"
        avatar="https://images.unsplash.com/photo-1579762593251-07c01abb6599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D"
        image="https://images.unsplash.com/photo-1521657142174-c7353dc830cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbnRhZ2UlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
      />
      <Post
        displayname="Rolls-Royce Motor Cars"
        username="@rollsroycecars"
        verified={true}
        text="Rolls--Royce"
        avatar="https://plus.unsplash.com/premium_photo-1669075651967-d2518f4c6e15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9sbHMlMjByb3ljZXxlbnwwfHwwfHx8MA%3D%3D"
        image="https://images.unsplash.com/photo-1560195919-db01654dd115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9sbHMlMjByb3ljZXxlbnwwfHwwfHx8MA%3D%3D"
      />

      {/* post */}
    </div>
  );
};

export default Feed;
