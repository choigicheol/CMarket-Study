import Todolist from './Todo/Todolist';
import { list } from './Todo/db';

function App () {
 
  return (
    <div>
      <h1 className="header">To Do List</h1>
      <ul>
        {list.map((eachList) =>
          <li key={eachList.id} className="eachList">
            <Todolist todo={eachList} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
