import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
function Share() {
  const shareUrl = typeof window !== undefined && window.location.href;

  return (
    <div className="d-flex justify-content-between ps-5 pe-5 pb-5">
      <FacebookShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
        title="Title"
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton hashtag={"truck"} url={shareUrl}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      {/* <PinterestShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
      >
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton> */}

      <TelegramShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
    </div>
  );
}

export default Share;
