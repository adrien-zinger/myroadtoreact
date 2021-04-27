import { Component } from 'react';
import './App.css';
import MyList from './List';
import Search from './SearchInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentList: null,
      searchTerm:''
    }
    this.onSearchTermChange = this.onSearchTermChange.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.fetchWiki = this.fetchWiki.bind(this)
  }

  onSearchTermChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  onDismiss(value) {
    this.setState({contentList: this.state.contentList.filter(item => item.title !== value)})
  }

  onSearchSubmit(event) {
    this.fetchWiki()
    event.preventDefault()
  }

  render() {
    const {contentList, searchTerm} = this.state
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchTermChange} onSubmit={this.onSearchSubmit}>fetch</Search>
        <MyList list={contentList} searchTerm={searchTerm} onDismiss={this.onDismiss}/>
      </div>
    )
  }

  fetchWiki() {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${this.state.searchTerm}&utf8=&format=json`
    console.log('url', url, this.state.searchTerm)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({contentList: response.query.search})
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchWiki()
  }
}

export default App;
