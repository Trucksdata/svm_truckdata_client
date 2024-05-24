import { useEffect, useState } from "react";

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    contact_number: "",
  });

  useEffect(() => {
    const isClient = typeof window !== "undefined";

    if (isClient) {
      const generalData = localStorage.getItem("general-data");
      const general = JSON.parse(generalData) || {};
      const { email, contact_number } = general;
      setContactInfo({ email, contact_number });
    }
  }, []);

  const contactContent = [
    ...(contactInfo?.contact_number
      ? [
          {
            id: 1,
            title: "Feel free to connect.",
            action: `tel:${contactInfo?.contact_number}`,
            text: `${contactInfo?.contact_number}`,
          },
        ]
      : []),
    {
      id: 2,
      title: "Need live support?",
      action: `mailto:${contactInfo?.email}`,
      text: `${contactInfo?.email}`,
    },
  ];

  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <p className="text-18 fw-500 text-blue-1 mt-5">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
