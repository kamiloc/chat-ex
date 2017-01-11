import React, { Component, PropTypes } from 'react'; 
import Header from '../common/Header.jsx';

class Layout extends Component { 
    render() { 
        return ( 
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="./favicon.png" />
                <link rel="stylesheet" href="./styles.css" />
                <script src='/js/jquery.js'></script>
                <script src='/js/index.js'></script>
                <title>React Chat</title>
            </head>
            <body>
                <div> 
                    <Header /> 
                    {this.props.children} 
                </div>
            <script src='/bundle.js'></script>
            <script src="/socket.io/socket.io.js"></script>
            <script src="/js/socketReact.js"></script>
            </body>
      </html>
      );
             }
}

Layout.propTypes = { 
    children: PropTypes.object.isRequired 
}; 

export default Layout;