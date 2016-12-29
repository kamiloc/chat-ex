 
import React, { Component, PropTypes } from 'react'; 
import Header from '../common/Header.jsx';

class Layout extends Component { 
    render() { 
        return ( 
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="./favicon.png" />
                <link rel="stylesheet" href="./styles.css" />
                <title>React Chat</title>
            </head>
            <body>
                <div> 
                    <Header /> 
                    {this.props.children} 
                </div>
            <script src='/bundle.js'></script>
            </body>
      </html>
      );
             }
}

Layout.propTypes = { 
    children: PropTypes.object.isRequired 
}; 

export default Layout;