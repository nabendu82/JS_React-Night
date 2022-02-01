import './App.css';
// import GrandParent from './components/GrandParent';
import PostForm from './components/PostForm';
// import { UserProvider } from './components/userContext';

function App() {
  
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <GrandParent />
      </UserProvider> */}
      <PostForm />
    </div>
  );
}

export default App;
