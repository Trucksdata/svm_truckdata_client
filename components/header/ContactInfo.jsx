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
    <>
      {contactContent.map((item) => (
        <div className="mb-20" key={item.id}>
          <div className={"text-14"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-dark-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
