import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ALL_ITEMS,
  INCREASE_QTY,
  DECREASE_QTY
} from "../actions/actionTypes";

const initialState = {
  items: []
};

// ------------------------------------------------------------ SHOPPING CART STATE ------------------------------------- //
export default function(state = initialState, action) {
  switch (action.type) {
    // ----------- ADD ITEM --------------------- ADD ITEM ------ //
    case ADD_ITEM:
      // helper function, returns bool. See if id exists in array
      function doesExist(array, id) {
        for (let i = 0; i < array.length; i++) {
          if (array[i].id === id) {
            return true;
          }
        }
        return false;
      }

      let newStateArray = [...state.items];
      // if element is not in the array, add the new item
      if (doesExist(newStateArray, action.payload.id) === false) {
        newStateArray.push(action.payload);
        return {
          ...state,
          items: newStateArray
        };
      } else {
        // otherwise, find and replace that array element
        let pos = newStateArray
          .map(function(e) {
            return e.id;
          })
          .indexOf(action.payload.id);
        newStateArray[pos] = action.payload;
        return {
          ...state,
          items: newStateArray
        };
      }


    // ----------- REMOVE ITEM --------------------- REMOVE ITEM ------ //
    case REMOVE_ITEM:
      let newItems = [
        ...state.items.slice(0, action.payload),
        ...state.items.slice(action.payload + 1)
      ];
      return {
        ...state,
        items: newItems
      };


    // -------------- EMPTY CART -------------- EMPTY CART ------- //
    case REMOVE_ALL_ITEMS:
      return {
        items: []
      };


    // ----------- INCREASE ITEM QTY --------------------- INCREASE ITEM QTY ------ //
    case INCREASE_QTY:
      var newItemArrayI = state.items.map((item, index) => {
        if(index === action.payload) {
          item.qty++
          return item
        }
        return item
      })
      return {...state, items: newItemArrayI}

    // ----------- INCREASE ITEM QTY --------------------- INCREASE ITEM QTY ------ //
    case DECREASE_QTY:
        var newItemArrayD = state.items.map((item, index) => {
          if(index === action.payload) {
            item.qty--
            if(item.qty < 1) {
              item.qty = 1;
            }
            return item
          }
          return item
        })
        return {...state, items: newItemArrayD}

    default:
      return state;
  }
}
