import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';
const App = () => {
if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
         height= "100vh"
         projectID="dbdb279e-9ef8-44e7-81b7-cb94591c363f"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed= {(chatAppProps) => <ChatFeed {... chatAppProps}/>}
         />
    );
}

export default App;