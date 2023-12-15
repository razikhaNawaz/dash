
import './App.css';
import Head from './component/Dashboard Components/Head';
import ListContainer from './component/Dashboard Components/ListContainer';


import './index.css'
import Routing from './Routing/Routing';
import Sidebar from './Sidebar/Sidebar';

function App() {
    return (
     <div className='main'>
      <Sidebar />
      {/* <Routing />
      <div className='w-screen p-6'>
      <Head />
      <ListContainer />
      </div> */}
    
     </div>
    );
  }

export default App;



