import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const deleteItem = (arr, iD) => {
  const indexOfID = arr.findIndex((single) => single.id === iD);
  return [...arr.slice(0, indexOfID), ...arr.slice(indexOfID + 1, arr.length)];
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [tours, setTours] = useState([]);

  function handleDeleteClick(clickedID) {
    const filteredTours = deleteItem(tours, clickedID);
    setTours((prevTours) => filteredTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (err) {
      setIsLoading(false);
      // setShowErrorMsg(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <button className='btn refresh-btn' onClick={() => fetchTours()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={handleDeleteClick} />
    </main>
  );
}

export default App;
