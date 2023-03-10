import { useState, useEffect } from 'react'
import Form from 'components/Form'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((result) => {
        setAuthor(result.author)
        setContent(result.content)
      })
      .catch((err) => console.log('fetch api failed:', err))
  }, [isClick])

  const handleClick = () => setIsClick(!isClick)

  return (
    <div className='App'>
      <Form
        author={author}
        content={content}
        title='Random Quote App'
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
