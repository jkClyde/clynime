"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { MotionDiv } from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
  status: string;
  aired_on: string;
  released_on: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard({ anime, index }: Prop) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <MotionDiv 
        className="max-w-sm rounded relative w-full cursor-pointer"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.25,
          ease: 'easeInOut',
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        onClick={openModal}
      >
        <div className="relative w-full pt-[150%]">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
            </div>
          </div>
        </div>
      </MotionDiv>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-[#161921] p-6 rounded-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">{anime.name}</h2>
              <button onClick={closeModal} className="text-white text-xl">&times;</button>
            </div>
            <div className="relative w-full pt-[100%] mb-4">
              <Image
                src={`https://shikimori.one${anime.image.original}`}
                alt={anime.name}
                fill
                className="rounded-xl object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text-white text-sm md:text-base">
              <p><strong>Type:</strong> {anime.kind}</p>
              <p><strong>Episodes:</strong> {anime.episodes || anime.episodes_aired}</p>
              <p><strong>Score:</strong> {anime.score}</p>
              <p><strong>Status:</strong> {anime.status}</p>
              <p><strong>Aired on:</strong> {anime.aired_on}</p>
              <p><strong>Released on:</strong> {anime.released_on}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimeCard;