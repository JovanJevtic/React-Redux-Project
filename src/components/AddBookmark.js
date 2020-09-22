import React from 'react'
import { connect } from 'react-redux'
import { addBookmark } from '../redux/actions'

class AddBookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "" }
  }

  updateInput = input => {
    this.setState({ input })
  };

  handleAddBookmark = () => {
    this.props.addBookmark(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-bookmark" onClick={this.handleAddBookmark}>
          Add Bookmark
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { addBookmark }
)(AddBookmark)
// export default AddBookmark
