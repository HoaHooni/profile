interface IContact {
    name: string;
    address: IAddress;
    phone: string;
    message: string;
}

interface IAddress {
    city: string;
    street: string;
    country: string;
}

export default IContact;