// get user object from local storage
const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return undefined;
  }
  
  export default getUser;