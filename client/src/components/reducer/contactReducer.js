import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../action/types";
const initialState = {
  contactsList: null,
  current: null,
  filtered: null,
  error: null,
  loading: null
};
const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contactsList: action.payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contactsList: [...state.contactsList, action.payload],
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.filter(
          item => item._id !== action.payload
        ),
        loading: false
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contactsList.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
        loading: false
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
export default ContactReducer;
