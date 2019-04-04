# nazar-list-manager

> list manager using reduxwrapper for test

[![NPM](https://img.shields.io/npm/v/nazar-list-manager.svg)](https://www.npmjs.com/package/nazar-list-manager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nazar-list-manager
```

## Usage

# App.tsx

```tsx
import React, { Component } from "react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import Listmanager from "nazar-list-manager";
import Home from "./Home";

//model user as example
import User from "./app/model/user";

// user.tsx
// export default interface User {
// id:number,
// name:string
// }
//
var a = new Listmanager<User>();
const store = createStore(a.rootReducer);

export default class Starter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
```

# Home.tsx

```tsx
import  Listmanager from 'nazar-list-manager';
import { connect } from "react-redux";
import User from './app/model/user'
var a = new Listmanager<User>();

class Home extends React.Component<Props, State> {
 constructor(props:any) {
    super(props);
  }

  render() {
    return (

    )
  }
}

export default connect(
  a.mapStateToProps,
  a.mapDispatchToProps
)(Home);
```
# how to read and use
```tsx
/// add
   let param:User =  {
      id: this.generateRandomNumber(),
      name: this.state.name,
    }

    this.props._additem(param);

//update
  let param:User =  {
      id: this.state.id,
      name: this.state.name,
    }

    this.props._updateItem(this.state);

//delete
 let param:User = {
      id : idSelected,
      name:textSelected,
    }

    this.props._deleteItem(param);

//clear
    this.props._clearData(null);
  

// read stored list

this.props.list as User[]
```



## License

MIT © [theodon](https://github.com/theodon)
