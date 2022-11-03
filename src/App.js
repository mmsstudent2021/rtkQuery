import Form from "./components/Form";
import { useGetTodoQuery } from "./store/service/todoService";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "./store/service/todoService";

const App = () => {
  const { isLoading, data, error } = useGetTodoQuery("todo");
  const [drop, reponse] = useDeleteTodoMutation();
  const [update, res] = useUpdateTodoMutation();

  if (error) {
    return <h1>i am error</h1>;
  }

  const handleDelete = (id) => {
    console.log(id);
    drop(id);
  };

  const handleCheck = (id, text, done) => {
    const data = {
      id: id,
      isDone: !done,
    };
    update(data);
  };

  if (isLoading) {
    return <h1>I am Loading</h1>;
  } else {
    return (
      <>
        <Form />
        {data.map((i) => (
          <div key={i.id} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={i.isDone}
              onChange={handleCheck.bind(i, i.id, i.forDo, i.isDone)}
            />
            <p>{i.forDo}</p>
            <button onClick={handleDelete.bind(null, i.id)}>Delete</button>
          </div>
        ))}
      </>
    );
  }
};

export default App;
