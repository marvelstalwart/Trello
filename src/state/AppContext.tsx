import { useImmerReducer } from "use-immer";
import { createContext, useContext, FC, Dispatch } from "react";
import {
    appStateReducer,
    AppState,
    Task,
    List
   
} from "./appStateReducer"
import { Action } from "./actions";


const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{id: "c2", text: "Learn typescript"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c3", text: "Begin to use static typing"}]
        },
    ]
}
interface Props {
    children: React.ReactNode
}

type AppContextProps = {
    lists:List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const AppContext = createContext<AppContextProps>(
    {} as AppContextProps
)

export const useAppState = () => {
    return useContext(AppContext)
}

export const AppStateProvider  =  ({children}: Props) => {
    const { lists } = appData
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const getTasksByListId = (id:string)=> {
        return lists.find((list)=> list.id === id)?.tasks || []

    }
    return (
        <AppContext.Provider value={{lists, getTasksByListId, dispatch}}>
            {children}
        </AppContext.Provider>
    )

}