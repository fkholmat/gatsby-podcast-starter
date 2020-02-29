import React from "react";
import AudioPlayer from "react-h5-audio-player";
import { css } from "@emotion/core";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const episodeTitle = css`
  flex: 1 0 auto;
  margin: auto;
  padding-left: 15px;
  display: block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

class PodcastPlayer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom-player">
        <div className="container">
          <div className="columns is-vcentered is-mobile mobile-margin">
            <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop mobile-padding">
              <div css={css`display: flex;`}>
                <IconContext.Provider value={{ size: "2.5rem" }}>
                  <span className="icon has-text-primary">
                    <FaHeadphonesAlt />
                  </span>
                </IconContext.Provider>
                <span className="subtitle is-6 has-text-weight-semibold" css={episodeTitle}>
                  Ep 21: Anxiety management through minimalism.
                </span>
              </div>
            </div>
            <div className="column">
              <AudioPlayer
                src="https://anchor.fm/s/decf9fc/podcast/play/9004223/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2019-12-20%2Fb59892d1803a298a2bf90a0f97de61b6.m4a"
                showLoopControl={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PodcastPlayer;
