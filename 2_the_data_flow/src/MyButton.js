// This is an exemple of a reusable stateless component..

const MyButton = ({onClick, children}) => {
    return (<button onClick={onClick}>{children}</button>)
}

export default MyButton