const Social = ({ socials }) => {
  const { facebook_url, instagram_url, twitter, youtube_url } = socials || {};

  const socialContent = [
    { id: 1, icon: "icon-facebook", link: facebook_url },
    { id: 2, icon: "icon-twitter", link: twitter },
    { id: 3, icon: "icon-instagram", link: instagram_url },
    // { id: 4, icon: "icon-youtube", link: youtube_url },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={`http://${item.link}`}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
