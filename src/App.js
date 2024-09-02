import "./App.css";
import Sidebars from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
function App() {
  return (
    <>
      <div className="app">
        <Sidebars />
        {/* sidebar */}
        <Feed />
        {/* feed */}
        <Widgets />
        {/* widgets */}
      </div>
    </>
  );
}

export default App;
