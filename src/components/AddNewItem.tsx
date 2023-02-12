import {useState} from 'react'
import { AddItemButton } from '../styles'
import {NewItemForm} from './NewItemForm'
type AddNewItemProps = {
    onAdd(text: string): void;
    toggleButtonText: string
    dark?: Boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)
    const  {onAdd, toggleButtonText, dark} = props

    if (showForm) {
        //We show item creation from here
    }

    return (
        <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )

}

