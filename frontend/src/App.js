import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { config } from './config.ts';
import Profile from './pages/Profile.jsx';
import './assets/css/default.css'
import ProfilePerson from './pages/ProfilePerson.jsx'
import Posts from './pages/Posts.jsx';
import Post from './pages/Post.jsx';
import Challenges from './pages/Challenges.jsx';
import Challenge from './pages/Challenge.jsx';
import Auth from './pages/Auth.jsx';
import Mean from './pages/Mean.jsx';
import Chats from './pages/Chats.jsx';
import QAs from './pages/QAs.jsx';
import QAElement from './components/QAElement.jsx';
function App() {
  window.alert = console.log
  return <>
  <BrowserRouter>
    <Routes>

      <Route path={config.auth.auth} element={<Auth></Auth>}>
      </Route>



      <Route path={config.profile.way+config.profile.me} element={<Profile></Profile>}>
      </Route>
      <Route path={config.profile.way+config.profile.person} element={<ProfilePerson></ProfilePerson>}>
      </Route>
      <Route path={config.posts.posts} element={<Posts></Posts>}>
      </Route>
      <Route path={config.posts.post} element={<Post></Post>}>
      </Route>
      <Route path={config.posts.challenges} element={<Challenges></Challenges>}>
      </Route>
      <Route path={config.posts.challenge} element={<Challenge></Challenge>}>
      </Route>
      <Route path={config.chats.chats} element={<Chats></Chats>}>
      </Route>
      <Route path={config.qa.qa} element={<QAs></QAs>}>
      </Route>
      <Route path={config.qa.question} element={<QAElement></QAElement>}>
      </Route>
      <Route path={'/*'} element={<Mean></Mean>}>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  
}

export default App;
