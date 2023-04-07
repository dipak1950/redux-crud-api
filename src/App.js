import './App.css';
import { useSelector } from 'react-redux';
import CreateUser from './Components/Users/CreateUser';
import ViewUser from './Components/Users/ViewUser'
import UpdateUser from './Components/Users/UpdateUser';

function App() {

  const { isEdit } = useSelector(state => state.UserReducer)

  return (
    <>
      {
        isEdit
          ?
          <UpdateUser />
          :
          <CreateUser />
      }
      <ViewUser />
    </>
  )
}

export default App;