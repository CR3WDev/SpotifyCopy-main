import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/Home/Home";
import Premium from "./pages/Premium/Premium";
import Download from "./pages/Download/Download";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Playlists from "./pages/Playlists/Playlists";
import PlaylistMusics from "./pages/PlaylistMusics/PlaylistMusics";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/Playlist/" component={PlaylistMusics} />
        <Route path="/Playlists" component={Playlists} />
        <Route path="/Download" component={Download} />
        <Route path="/Premium" component={Premium} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
