import {
    AppContainer,
    ColumnContainer,
    ColumnTitle,
    CardContainer
} from "./styles"
import { addList} from "./state/actions"
import { AddNewItem } from "./components/AddNewItem"
import { Column } from "./components/Column"
import { useAppState } from "./state/AppContext"

export const App = ()=> {
    const {lists, dispatch} = useAppState()

    return (
        <AppContainer>
           
           {lists.map((list)=> (

               <Column text={list.text} key={list.id} id={list.id}/>

           ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={(text=> dispatch(addList(text)))}
                />
        </AppContainer>
)

}
