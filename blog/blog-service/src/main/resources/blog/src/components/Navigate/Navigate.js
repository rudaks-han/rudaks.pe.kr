import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({onClick, disabled}) => (
    <nav className="Navigate">
      <ul className="pager">
        <li className="previous">
            <a href="#"
                onClick={(e) => {e.preventDefault(); onClick('PREV')}}
                disabled={disabled}
                ><span aria-hidden="true">&larr;</span> Older</a>
        </li>
        <li className="next">
            <a href="#"
                onClick={(e) => {e.preventDefault(); onClick('NEXT')}}
                disabled={disabled}
                >Newer <span aria-hidden="true">&rarr;</span></a>
        </li>
      </ul>
    </nav>

);

export default Navigate;
