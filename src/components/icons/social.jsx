import React from "react";
import Email from "./email";
import Twitter from "./twitter";
import Facebook from "./facebook";
import Whatsapp from "./whatsapp";
import Instagram from "./instagram";
//import { useGeneral } from "../../services/useGeneral";
//const [{ facebook, instagram, whatsapp, twitter, email }] = useGeneral("es");

const whatsappUrl = "https://api.whatsapp.com/send?phone=+";
const facebbokUrl = "https://www.facebook.com/";
const instagramUrl = "https://www.instagram.com/";
const twitterUrl = "https://twitter.com/";
const emailUrl = "mailto:";
const emailMsg = "?Subject=Interesado%20en%20el%20curso";
const whatsappMiddle = "&text=";
let whatsappMsg = "Hola Mundo";

export default () => {
  const { facebook, instagram, whatsapp, twitter, email } = {
    facebook: "magdielh",
    instagram: "magdielmarquez",
    whatsapp: 3222488957,
    twitter: "mmagdielh",
    email: "magdielmarquezhernandez@gmail.com"
  };
  return (
    <div className="box_icons m-3">
      <Facebook
        size="32"
        fill="#fff"
        url={facebbokUrl + facebook}
        className="mr-5 inline-block hover:bg-blue-900"
      />
      <Instagram
        size="32"
        fill="#fff"
        className="mr-5 rounded inline-block instagram"
        url={instagramUrl + instagram}
      />
      <Twitter
        size="32"
        fill="#fff"
        url={twitterUrl + twitter}
        className="mr-5 rounded inline-block hover:bg-blue-400"
      />
      <Whatsapp
        size="32"
        fill="#fff"
        className="mr-5 rounded inline-block hover:bg-green-400"
        url={whatsappUrl + whatsapp + whatsappMiddle + whatsappMsg}
      />
      <Email
        size="32"
        fill="#fff"
        url={emailUrl + email + emailMsg}
        className="rounded inline-block hover:bg-teal-700"
      />
    </div>
  );
};
