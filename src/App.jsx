import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

function App () {
  // const categories = ['One Punch', 'Dragon Ball', 'One Piece']
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece']
  )

  const handleAdd = () => {
    setCategories([...categories, 'My Little Darling'])
  }
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => {
          return (
            <li key={category}>
              {category}
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default App
