import { createContext, useContext, FC } from "react";
type Task ={
    id: string
    text:string

}

type List ={
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

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
    lists: List[]
    getTasksByListId(id: string): Task[]
}

const AppContext = createContext<AppContextProps>(
    {} as AppContextProps
)

export const AppStateProvider  =  ({children}: Props) => {
    const { lists } = appData
    const getTasksByListId = (id:string)=> {
        return lists.find((list)=> list.id === id)?.tasks || []

    }
    return (
        <AppContext.Provider value={{lists, getTasksByListId}}>
            {children}
        </AppContext.Provider>
    )

}