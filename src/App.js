import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';
import CustomNavbar from './components/CustomNavbar';
import { Home as Ex22Home, About as Ex22About, Contact as Ex22Contact, Profile as Ex22Profile } from './components/ex22/Pages';
import './App.css';

const App = () => {
  const [activeExercise, setActiveExercise] = useState('ex22');

  return (
    <Router>
      <div className="app-container">
        {/* Top Header bar to switch between Exercise 20, 21, 22 */}
        <header className="exercise-switcher-bar">
          <div className="switcher-content">
            <div className="switcher-info">
              <span className="badge bg-warning text-dark fw-bold me-2">FER202</span>
              <span className="switcher-label">Chọn bài thực hành để xem:</span>
            </div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn btn-sm ${activeExercise === 'ex20' ? 'btn-primary active' : 'btn-outline-light'}`}
                onClick={() => setActiveExercise('ex20')}
              >
                Ex 20: Decoupling Route
              </button>
              <button
                type="button"
                className={`btn btn-sm ${activeExercise === 'ex21' ? 'btn-primary active' : 'btn-outline-light'}`}
                onClick={() => setActiveExercise('ex21')}
              >
                Ex 21: Route ResourceID
              </button>
              <button
                type="button"
                className={`btn btn-sm ${activeExercise === 'ex22' ? 'btn-primary active' : 'btn-outline-light'}`}
                onClick={() => setActiveExercise('ex22')}
              >
                Ex 22: Optional Params & Reactstrap
              </button>
            </div>
          </div>
        </header>

        {/* View render based on selected exercise */}
        {activeExercise === 'ex22' ? (
          <div>
            {/* Exercise 22 CustomNavbar using reactstrap */}
            <CustomNavbar />
            <main className="container my-4">
              <Routes>
                <Route path="/" exact element={<Ex22Home />} />
                <Route path="/about" element={<Ex22About />} />
                <Route path="/contact" element={<Ex22Contact />} />
                <Route path="/profile" element={<Ex22Profile />} />
                <Route path="/profile/:id" element={<Ex22Profile />} />
                {/* Fallback to render other routes if accessed */}
                {renderRoutes()}
              </Routes>
            </main>
          </div>
        ) : (
          <div>
            {/* Exercise 20 & 21 Navigation Menu */}
            <NavigationMenu />
            <main className="content-container">
              <Routes>
                {renderRoutes()}
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
