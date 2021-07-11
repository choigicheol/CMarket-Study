import './Todolist.css'
import { useState } from 'react'

function Todolist ({todo}) {
  const [isCheck, changeCheck] = useState(false);
  const finishTodo = (event) => {
    changeCheck(event.target.checked);  // event.target.checked 대신에 !isCheck 로 써도 되나??? 매개변수 event도 지우고; 동작은 되던데
  }
  return(
    <div>
        <input type="checkbox" className="checkbox" onClick={finishTodo}></input>
        <span className={isCheck ? "checkboxOn" : "checkboxOff"}>{todo.content}</span>
    </div>
  );
}


export default Todolist;