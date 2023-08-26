import React from "react";
import IAbout from './Interface/IAbout'

interface Props {
  data: IAbout | {};
}

const About: React.FC<Props> = (props) => {

  if (!props.data) return null;

  const { name, image, bio, address, phone, email } = props.data as IAbout;
  const { street, country, city } = address;
  const streetComponent = () => {
    return (
      street !== null && street !== "" ?
        <>
          {street}
          <br />
        </> : null
    )
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={image}
            alt="Nordic Giant Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {/* {street !== null ? street : null} */}
                  {streetComponent()}
                  {city} - {country}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
About.defaultProps = {
  data: {
    name: "",
    image: "",
    bio: "",
    address: {},
    phone: "",
    email: ""
  }
}

export default About;
