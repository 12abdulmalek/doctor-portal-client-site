export const uploadToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const loadFromLocalstorage = (e) => {
    const getUser = localStorage.getItem('user');
    const getUserData = JSON.parse(getUser);
    return getUserData;
}
export const removeFromLocalStorage = () => {
    localStorage.removeItem('user');
}