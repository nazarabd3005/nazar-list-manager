//types
export const todos = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  CLEAR: "CLEAR"
};

class Listmanager<T> {
  initialState = {
    list: [] as T[]
  };
  constructor() {}

  rootReducer = (state = this.initialState, action: any) => {
    switch (action.type) {
      case todos.ADD:
        return {
          ...state,
          list: state.list.concat(action.payload)
        };
      case todos.UPDATE:
        return {
          ...state,
          list: state.list.map((item: any) => {
            if (item.id == action.payload.id) {
              item = action.payload;
            }
            return item;
          })
        };
      case todos.DELETE:
        return {
          ...state,
          list: state.list.filter((item: any) => item.id !== action.payload.id)
        };
      case todos.CLEAR:
        return {
          ...state,
          list: []
        };
      default:
        return state;
    }
  };

  mapStateToProps = (state = this.initialState) => {
    var list = state.list;
    return {
      list
    };
  };

  mapDispatchToProps = (dispatch: any) => {
    return {
      _additem: (value: any) =>
        dispatch({
          type: todos.ADD,
          payload: {
            id: value.id,
            name: value.name
          }
        }),
      _updateItem: (value: any) =>
        dispatch({
          type: todos.UPDATE,
          payload: {
            id: value.id,
            name: value.name
          }
        }),
      _deleteItem: (value: any) =>
        dispatch({
          type: todos.DELETE,
          payload: {
            id: value.id
          }
        }),
      _clearData: () =>
        dispatch({
          type: todos.CLEAR
        })
    };
  };
}

export default Listmanager;
