import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, text, onAdd, showAdd }) => {



  return (
    <header className='header'>
      <h1>{title} {text}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClickAs={onAdd} />

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
  text: 'for Vlad'
}

// const headerStyling = {
//   color: 'red', backgroundColor: 'black'
// }

export default Header