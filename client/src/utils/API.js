import axios from 'axios';

export default {
  // get all menu items
  getMenuItems: () => {
    return axios.get('/api/menu')
  },
  
  // save menu item to database
  saveItem: itemData => {
    console.log("data to save: ", itemData);
    return axios.post('/api/menu', itemData);
  },

  //get specific menu item by id
  getItem: id => {
    return axios.get(`/api/menu/${id}`)
  },

  // delete specific menu item
  deleteItem: id => {
    return axios.delete(`/api/menu/${id}`)
  },

  // Post route to update menu item in database
  updateItem: (id, itemData) => {
    console.log("data to update: ", itemData);
    return axios.put(`/api/menu/${id}`, itemData)
  },
};
