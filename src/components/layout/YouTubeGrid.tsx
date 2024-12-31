"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/component.module/YouTubeGrid.module.css";

interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}


const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID || ""; 
const MAX_RESULTS = 6;

const fetchYouTubeVideos = async (): Promise<VideoItem[]> => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map((item: VideoItem) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
  } catch (error) {
    console.error("Failed to fetch YouTube videos:", error);
    return [];
  }
};

export default function YouTubeGrid() {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchYouTubeVideos();
      setVideos(videoData);
    };
    getVideos();
  }, []);

  return (
    <div className={styles.youtubeGrid}>
    {videos.length > 0 ? (
        videos.map((video) => (
        <div key={video.id} className={styles.youtubeItem}>
            <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
            <Image src={video.thumbnail} alt={video.title} className={styles.youtubeThumbnail} />
            <p className={styles.youtubeTitle}>{video.title}</p>
            </a>
        </div>
        ))
    ) : (
        <p>Loading videos...</p>
    )}
</div>

  );
}
