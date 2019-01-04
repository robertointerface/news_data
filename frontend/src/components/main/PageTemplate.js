import React from 'react';
//import MainMenu from './MainMenu'
import {MainMenuContainer} from '../../containers/containers'

const PageTemplate = ({children}) =>
    <div className='page'>
        <div>
            <MainMenuContainer/>
            <div className='container'>
                {children}
            </div>
        </div>
    </div>

export default PageTemplate



