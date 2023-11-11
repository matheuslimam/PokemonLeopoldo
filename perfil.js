
const userId = localStorage.getItem('user_id');
const userName = localStorage.getItem('user_name');
const profilePicture = localStorage.getItem('user_pic');

fullname.textContent = userName;
pic.setAttribute("src", profilePicture);