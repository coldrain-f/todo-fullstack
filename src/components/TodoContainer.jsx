import TodoCard from "./TodoCard";

function TodoContainer() {
    return (
        <div className="bg-[#f5f7f8] min-h-screen flex flex-col items-center justify-center p-4 font-['Pretendard',-apple-system,BlinkMacSystemFont,system-ui,Roboto,'Helvetica_Neue','Segoe_UI','Apple_SD_Gothic_Neo','Noto_Sans_KR','Malgun_Gothic',sans-serif] tracking-tight">
            <TodoCard />
        </div>
    )
}

export default TodoContainer;