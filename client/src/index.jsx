import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import ReviewsContainer from './Reviews/ReviewsContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 71697
    }
  }

  handleItemClick(productId) {
    this.setState({
      currentProductId: productId
    }, () => {
      console.log('updated state: ', this.state.currentProductId)
    })
    /* We also need a click handler in the RelatedItems component to pass the the clicked product id to the App component and update id
    something like this:
      handleClick (e) {
        return this.props.handleItemClick(e.target.value);
      }
    */
  }
  render() {
    console.log(this.state.productList);
    return(
      <div data-testid="test_app">
        {/* Make sure to comment out components that are not built yet to avoid errors*/}
        {/* <ProductOverview /> */}
        <ReviewsContainer product_id={this.state.currentProductId}/>
        {/* <Questions currentProductId={this.state.currentProductId} /> */}
        {/* <RelatedItems handleItemClick={this.handleItemClick.bind(this)} /> */}
      </div>
    )
  }
}

const container = document.getElementById('app') || document.createElement('div');
const root = createRoot(container);
root.render(<App />);

export default App;