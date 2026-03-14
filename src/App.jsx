import { useState } from "react";
import TodoDeleteModal from "./components/TodoDeleteModal";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TodoContainer />
  );
}

export default App;