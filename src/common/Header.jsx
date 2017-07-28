 
import React from 'react'; 
import { Link } from 'react-router-dom';
const Header = () => ( <header>
                            <img src="/img/chat.png" alt="Chat"/> 
                            <nav className="navbar">
                                 <Link to="/">Home</Link> 
                                 <Link to="/chat">Chat</Link>
                                 <Link to="/about">About</Link>
                                 <a href="https://github.com/kamiloc/react-chat" target="_blank">GitHub</a> 
                            </nav> 
                        </header> ); 
export default Header;
 