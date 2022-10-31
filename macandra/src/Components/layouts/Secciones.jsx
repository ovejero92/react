import { memo } from 'react';
import {Link} from 'react-router-dom'

const Secciones = () => {
    return (
        <div className='Section'>
            <li className="nav-item">
              <Link className="nav-link active" to="/"><i class="fas fa-home"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/contacto'><i class="fas fa-mobile-alt"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about'><i class="fas fa-id-card"></i></Link>
        </li>
        </div>
    );
}

export default memo(Secciones);
