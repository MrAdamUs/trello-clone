import { AppContainer } from "./styles"

import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"

export const App = () => {
  return (
    <AppContainer>
      <Column text='Todo:' />
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={() => console.log("Add List")}
        dark
      />
    </AppContainer>
  )
}
