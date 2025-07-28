
import { useState } from "react"
import { AppHeader, GifGrid, SearchButton, SearchInput, GifForm } from "./components"

export function App() {

  const [category, setCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    if(!inputValue.trim()) return;
    setCategory(inputValue)
    setInputValue('')
    setHasSearched(true)
  }

  return (
    <>
      <AppHeader appName='Gif Downloader'>
        <GifForm onSearch={onSearch} >
          <SearchInput setValue={ setInputValue } value={inputValue} />
          <SearchButton />
        </GifForm>
      </AppHeader>

      <GifGrid category={ category } hasSearched={ hasSearched } setCategory={setCategory}/>
    </>
  )
}
