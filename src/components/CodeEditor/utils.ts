export const LANGUAGE = 'wesly';

export const DEMO = `\
object Address {
    number int
    zip string
}

object User {
    id int
    username, password string
    address Address
}

func NewUser(id int, username, password string, address Address) User {
    return User{
        id: id,
        username: username,
        password: password,
        address: address,
    };
}

func NewAddress(number int, zip string) Address {
    return Address{
        number: number,
        zip: zip,
    };
}

var alex = NewUser(1, "alex", "12345", NewAddress(145, "12444-777"));
`;
