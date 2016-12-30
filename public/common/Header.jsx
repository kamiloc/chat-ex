 
import React from 'react'; 
import { Link, IndexLink } from 'react-router';
const Header = () => ( <header>
                            <img src="/img/chat.png" alt="Chat"/> 
                            <nav className="navbar">
                                 <IndexLink to="/">Home</IndexLink> 
                                 <Link to="chat">Chat</Link>
                                 <Link to="about">About</Link>
                                 <a href="https://bitbucket.org/cristianBarreto/excercise-3" target="_blank">Bitbucket</a> 
                            </nav> 
                        </header> ); 
export default Header;
 