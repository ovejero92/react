import {memo} from 'react';

const Footer = () => {
    return (
        <>
        
       <footer className="redes-container">
  <ul>
    <li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
    <li><a href="#" className="instagram"><i className="fab fa-instagram" /></a></li>
    <li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
    <li><a href="#" className="pinterest"><i className="fab fa-pinterest-p" /></a></li>
    <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
  </ul>
</footer>

        </>
    );
}

export default memo(Footer);
