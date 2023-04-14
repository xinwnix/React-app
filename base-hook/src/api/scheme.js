export const limit = 5
export const API_SCHEME = {
    GET_STUDENT: {
      url: `http://localhost:3001/student`,
      method: 'GET',
    },
    ADD_STUDENT: {
      url: `http://localhost:3001/student`,
      method: 'POST',
    },
    DELETE_STUDENT: {
      url: `http://localhost:3001/student/:id`,
      method: 'DELETE'
    }
    // DELETE_STUDENT: {
    //   url: `${BASE_URL}/`,
    //   method: METHOD.DELETE,
    // },
    // UPDATE_STUDENT: {
    //   url: `${BASE_URL}/`,
    //   method: METHOD.PUT,
    // },

};

