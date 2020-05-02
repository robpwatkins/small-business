export const removeBusiness = (index) => {
  return {
    type: 'REMOVE_BUSINESS',
    value: index
  }
}

export const addBusiness = (business) => {
  return {
    type: 'ADD_BUSINESS',
    value: business
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    value: user
  }
}