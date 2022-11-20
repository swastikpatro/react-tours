import { useState } from 'react';
import Loading from './Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <div className='App'></div>;
}

export default App;
