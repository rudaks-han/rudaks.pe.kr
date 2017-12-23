import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({onClick}) => (
    <nav>
      <ul className="pager">
        <li className="previous"><a href="#" onClick={(e) => {e.preventDefault(); onClick('PREV')}}><span aria-hidden="true">&larr;</span> Older</a></li>
        <li className="next"><a href="#" onClick={(e) => {e.preventDefault(); onClick('NEXT')}}>Newer <span aria-hidden="true">&rarr;</span></a></li>
      </ul>
    </nav>

);

export default Navigate;
