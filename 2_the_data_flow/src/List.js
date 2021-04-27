import { Component } from "react";
import MyButton from './MyButton'

function isSearched(searchTerm) {
    return item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
}

class MyList extends Component {
    render() {
        const {list, searchTerm, onDismiss} = this.props
        console.log(list)
        return (
            list &&
            <div className="table">
                {list.filter(isSearched(searchTerm)).map(item =>
                    <div key={item.title} className="table-row">
                        <span><a href={`https://en.wikipedia.org/wiki/${item.title}`}>{item.title}</a></span>
                        <MyButton onClick={() => onDismiss(item)}>
                            dismiss
                        </MyButton>
                    </div>
                )}
            </div>
            )
    }
}

export default MyList;