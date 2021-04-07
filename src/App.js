import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';
import ScrollToTop from './layout/ScrollToTop';
import routes from '../route';
import { Route } from 'react-router-dom'

import './assets/scss/main.scss'

const Layout = React.lazy(() => import('./components/Layout'))

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Route path="/" name="Main" component={Layout} />
        </Suspense>
    )
}

export default App
