import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[],
  selectTodo: (id: number) => void,
  selectedTodo: Todo | undefined,
}

export const TodoList: React.FC<Props> = ({
  todos,
  selectTodo,
  selectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(({ id, title, completed }) => (
        <tr
          data-cy="todo"
          className=""
          key={id}
        >
          <td className="is-vcentered">{id}</td>
          <td className="is-vcentered">
            {
              completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )
            }
          </td>
          <td className="is-vcentered is-expanded">
            <p
              className={completed ? 'has-text-success' : 'has-text-danger'}
            >
              {title}

            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => selectTodo(id)}
            >
              <span className="icon">
                <i className={`far ${selectedTodo?.id === id ? 'fa-eye-slash' : 'fa-eye'}`} />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
