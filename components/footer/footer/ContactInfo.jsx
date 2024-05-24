import { Fragment } from "react";

const ContactInfo = ({ contact }) => {
  const { contact_number, email } = contact || {};

  const contactContent = [
    ...(contact_number
      ? [
          {
            id: 1,
            title: "Feel free to connect.",
            action: `tel:${contact_number}`,
            text: `${contact_number}`,
          },
        ]
      : []),
    {
      id: 2,
      title: "Need live support?",
      action: `mailto:${email}`,
      text: `${email}`,
    },
  ];
  return (
    <Fragment>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <div className="text-18 fw-500 mt-5 contact_text">
              {item.text ?? ""}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ContactInfo;
