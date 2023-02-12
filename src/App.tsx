import {
    AppContainer,
    ColumnContainer,
    ColumnTitle,
    CardContainer
} from "./styles"
import { AddNewItem } from "./components/AddNewItem"
import { Column } from "./components/Column"

export const App = ()=> {

    return (
        <AppContainer>
            <Column text="Todo"/>
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={console.log}
                />
        </AppContainer>
)

}
