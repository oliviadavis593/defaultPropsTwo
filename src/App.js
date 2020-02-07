import React, { Component } from "react";
import List from "./List/List";
import "./styles.css";

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

//Explaining the code (#3):
// App component accepts 1 prop = store (store is imported inside index.js file - so we don't have to import it inside this file)
//  The store object is an object with 2 keys = lists & allCards
// lists = an array of objects
// allCards = is an object where each key is a card ID & the value is the card object with a title and content
// The app renders a component instance of List
// It also iterates through each of the items in the store.lists array
// The instance of List component passes in 2 props = header & cards (+ a key)
// Header prop = a string for the List's header
// cards prop = an array of card objects
//Lines 25: we combined cardIds array for list with allCards object

//Note: The code should resemble the design html
