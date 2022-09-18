import React from 'react';

function TaskList({ tasks, renderTodo }) {
  return (
    <div className='todo__tasks tasks'>
      {!tasks.length ? (
        <h2 className='tasks_title-notask'>There are no tasks. Add a task</h2>
      ) : (
        tasks.map((task) => renderTodo(task))
      )}
    </div>
  );
}

export default React.memo(TaskList);
