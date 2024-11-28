"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import GenixJsLogo from "@/assets/images/Genix-Js.jpg";
import styles from "@/styles/pages.module/Dashboard/Youtube.module.css";
import YouTubeGrid from "./layout/YouTubeGrid";
import { Button } from "./form/Button/Button";

interface ChannelDetails {
  description: string;
  motivation: string;
  goal: string;
}

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID || "";

const fetchChannelDetails = async (): Promise<ChannelDetails | null> => {
  const url = `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=snippet`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const snippet = data.items[0]?.snippet;

    if (snippet) {
      return {
        description: snippet.description,
        motivation: "Sharing knowledge through Genix-Js",
        goal: "Inspiring developers globally with technology tips.",
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch channel details:", error);
    return null;
  }
};

export default function YouTube() {
  const [channelDetails, setChannelDetails] = useState<ChannelDetails | null>(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      const details = await fetchChannelDetails();
      setChannelDetails(details);
    };
    getChannelDetails();
  }, []);

  return (
    <div className={styles.youtube}>
      <h1 style={{ color: "whitesmoke", textAlign: "center" }}>My YouTube Channel</h1>

      <div className={styles.youtubeHeader}>
        <div className={styles.youtubeHeaderIntroduction}>
          <h2>Genix-Js</h2>
          <Image width={70} height={70} src={GenixJsLogo} alt={"GenixJs-Logo"} />
          <div className="g-ytsubscribe" data-channelid={CHANNEL_ID} data-layout="full" data-count="default">
            <Button body="Subscribe" />
          </div>
        </div>

        {channelDetails ? (
          <div className={styles.youtubeHeaderDescription}>
            <p>{channelDetails.description}</p>
            <p>{channelDetails.motivation}</p>
            <p>{channelDetails.goal}</p>
            <div className={styles.youtubeHeaderCallToAction}>
              <Button body={"Subscribe"} />
              <Button body={"View on YouTube"} />
            </div>
          </div>
        ) : (
          <p>Loading channel details...</p>
        )}
      </div>

      <div className={styles.youtubeBody}>
        <h2>Latest Videos</h2>
        <YouTubeGrid />
      </div>

      {/* <div className={styles.youtubeFooter}></div> */}
    </div>
  );
}
