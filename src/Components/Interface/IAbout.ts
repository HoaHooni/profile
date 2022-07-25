interface IAbout {
    name: string;
    image: string;
    bio: string;
    address: IAddress;
    street: string;
    city: string;
    phone: string;
    email: string;
}
interface IAddress {
    street: string,
    city: string,
    country: string
}
export default IAbout;