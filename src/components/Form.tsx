interface FormProps {
  title: string
  content: string
  author: string
  handleClick: () => void
  [key: string]: any
}

function Form(props: FormProps) {
  return (
    <section className='wrapper'>
      <header className='title'>{props.title}</header>
      <div className='content'>
        <div className='quote-area'>
          <i className='fa fa-quote-left'></i>
          <p className='quote'>{props.content}</p>
          <i className='fa fa-quote-right'></i>
        </div>
        <div className='author'>
          <span>__</span>
          <span className='name'>{props.author}</span>
        </div>
      </div>
      <div className='button'>
        <button className='next-quote' onClick={props.handleClick}>
          Next Quote
        </button>
      </div>
    </section>
  )
}

export default Form
