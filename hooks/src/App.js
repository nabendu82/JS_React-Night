import React from 'react';
import './App.css';
import HookTimer from './components/HookTimer';
// import Grandparent from './components/Grandparent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='TWD'>
          <Grandparent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <HookTimer />
    </div>
  );
}

export default App;
