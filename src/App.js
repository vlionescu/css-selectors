import React, { useState } from 'react';
import exercises from './exercises';
import Playground from './components/playground';

import './App.css';

const App = () => {
    const [crtExercise, updateCrtExercise] = useState(0);
    const goNext = () => updateCrtExercise(crtExercise + 1);
    return (
        <main>
            {exercises[crtExercise] && <Playground exercise={exercises[crtExercise]} next={goNext}/>}
        </main>
    );
};

export default App;
