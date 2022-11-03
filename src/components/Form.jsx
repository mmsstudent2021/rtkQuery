import { useState } from "react";
import { v4 as id } from "uuid";
import {
  usePostTodoMutation,
  
} from "../store/service/todoService";

const Form = () => {
  const [text, setText] = useState("");
  const [post, response] = usePostTodoMutation();
  

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      forDo: text,
      id: id(),
      isDone: false,
    };
    post(data);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>Click</button>
    </form>
  );
};

export default Form;
