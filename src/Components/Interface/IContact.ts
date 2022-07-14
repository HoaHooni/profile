interface IContact {
    name: string;
    address: IAddress;
    phone: string;
    message: string;
}

interface IAddress {
    state: string;
    city: string;
    street: string;
    zip: string;
    country: string;
}

export default IContact;