import React from 'react';

const Header = React.lazy(() => import('header/Header'));

const App = () => {
    return (
        <div>
            <React.Suspense fallback="Loading Header...">
                <Header />
            </React.Suspense>
            <p>Contenu du Shell</p>
        </div>
    );
};

export default App;