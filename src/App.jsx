import React from 'react';
import { GlobalStyle, Content } from "./global";
import Header from "./components/Header";
import Items from "./components/Items";
import Menu from "./components/Menu";
import { createStore, combineReducers } from "redux";
import categoriesReducer from "./components/reducers/categoriesReducer";
import itemsReducer from "./components/reducers/itemsReducer";
import selectedCategoriesReducer from "./components/reducers/selectedCategoriesReducer";
import hideTasksDoneReducer from "./components/reducers/hideTasksDoneReducer";
import { Provider } from "react-redux";
import { Fragment } from 'react';

export default function App() {
  
  const allReducers = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    selected: selectedCategoriesReducer,
    hide: hideTasksDoneReducer,
  });
  const store = createStore(allReducers);

  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Content>
          <Menu />
          <Items />
        </Content>
      </Provider>
    </Fragment>

  );
}