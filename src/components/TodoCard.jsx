import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoPagination from "./TodoPagination";
import TodoSortBar from "./TodoSortBar";

function TodoCard() {
    return (
        <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden ring-1 ring-black/5">
            <TodoHeader
                title="My Todos"
            />

            <TodoInput />
            <TodoSortBar />
            <TodoList />
            <TodoPagination />
            <TodoFooter />
        </div>
    )
}

export default TodoCard;