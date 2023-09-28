const Header = (props) => {
  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: 'white' }} className="title bg-dark mt-3">
        {props.title}
      </h1>
    </div>
  )
}

Header.defaultProps = {
  title: '',
}

export default Header;
