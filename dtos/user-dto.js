export default class UserDto {
    email;
    id;
    userName;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.userName = model.userName;
        this.isActivated = model.isActivated;
    }
}