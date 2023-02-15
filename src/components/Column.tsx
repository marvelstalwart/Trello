import { ColumnContainer,ColumnTitle, CardContainer } from "../styles";
import { addTask } from "../state/actions";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppContext";
type ColumnProps = {
    text: string
    id:string
}
export const Column = ({text, id}: ColumnProps) => {

    const {getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map((task)=> (

                    <Card  text={task.text} id={task.id}/>
                ))
            }
            
            <AddNewItem 
                toggleButtonText="+Add another card"
                onAdd={(text)=> dispatch(addTask(text,id))}
                dark={true}
                />
        </ColumnContainer>
    )
}