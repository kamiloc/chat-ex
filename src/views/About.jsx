import React from 'react';
import Header from '../common/Header';

class IconContact extends React.Component {
    render() {
        return <ul className="contact">
            {this.props.images.map((image) => <li key={image.key}><a href={image.redir} target="_blank"><img className="iconContact" src={image.local} alt="Contact" /></a></li>)}
        </ul>;
    }
}

const images = [{ key: 1, local: '/img/email.png', redir: 'mailto:kamilo.sniper@gmail.com' },
{ key: 2, local: '/img/github.png', redir: 'https://github.com/kamiloC' },
{ key: 3, local: '/img/instagram.png', redir: 'https://instagram.com/kamilo.cortes' },
{ key: 4, local: '/img/twitter.png', redir: 'https://twitter.com/@k4miloC' }];

const About = () => (
    <div>
        <Header />
        <script src='/index.js'></script>
        <div className="about">
            <h1>Cristian Camilo Barreto Cortes</h1>
            <IconContact images={images} />
            <h3>Web Developer, Servicio Nacional de Aprendizaje SENA</h3>
            <h4>Bogotá, Colombia - 2016</h4>
        </div>
    </div>);
export default About;