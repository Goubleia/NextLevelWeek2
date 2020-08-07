import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
        {/* "exact" serve para fazer o React router do React buscar exatamente o path determinado */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;