import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const IframeYoutube = ({ src, image }) => {
    return (
        <LiteYouTubeEmbed
            id={`${src}`}
            title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
            poster="sddefault"
            activeClass="lyt-activated"
            iframeClass="lyt-iframe"
            playerClass="lty-playbtn"
            as="image"
            onIframeAdded={(event) => console.log("iframe added", event)}
        ></LiteYouTubeEmbed>
    );
};

export default IframeYoutube;
