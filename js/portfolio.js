function formatName(user) {
    return user.firstName + ' ' + user.middleName + ' ';
}

const user = {
    firstName: 'Iram',
    middleName: 'Fazil',
    lastName: 'Khan'
};

const element = (
	<div id="nameContainer">
	    <span id="firstName">{formatName(user)}</span>
	    <span id="lastName">{user.lastName}</span>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('react-container')
);