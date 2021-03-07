import { BrowserRouter, Route } from 'react-router-dom';

import Question from './pages/question';
import Index from './pages/index';


function Routes(){
    const Home = function (){
        return (
            <h1>Hello</h1>
        );
    }
    return (
        <BrowserRouter>
            <Route path="/" exact component={Index}/>
            <Route path="/question" exact component={Question}/>
        </BrowserRouter>
    )
}

export default Routes;






