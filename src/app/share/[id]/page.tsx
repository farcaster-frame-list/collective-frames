/* eslint-disable @next/next/no-img-element */
"use client";
import CopyFrameModal from "@/app/components/CopyModal";
import useGetFrameById from "@/hooks/useGetFrameById";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Share() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { frame, loading } = useGetFrameById();

  console.log("GOT HERE");

  const frameUrl = process.env.NEXT_PUBLIC_SERVER_URL + "frames-transaction/";

  console.log(frame, "wats frame?");

  const handleCopyClick = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Frame URL copied to clipboard, paste it in a cast!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };
  return (
    <div className="flex  flex-col mt-8  bg-violet-50 p-3 rounded-[10px] text-black">
      <div className="flex w-full  flex-col">
        <div className="flex flex-1 items-center">
          <div className="text-slate-900 text-3xl font-bold leading-loose mr-4">
            2
          </div>
          Get link to share
        </div>
        <div className="mt-1">
          Share this frame link and encourage others to mint your meme. More
          mints = more hype and profits for you and your community
        </div>

        <div className="flex flex-col mt-4 ">
          <p>{frame?.frame.name || ""}</p>
          <img
            src={frame?.frame.imageUrl || ""}
            alt="Uploaded meme"
            style={{ width: "60%" }}
            className="object-cover mt-3"
          />
        </div>
        <div className="flex mt-12 justify-center">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            style={{ width: 300 }}
            className="rounded-full text-center px-4 py-2 bg-purple-500 text-white focus:outline-none focus:ring-0"
          >
            Share on Warpcast
          </button>
        </div>
        <div className="flex mt-4 justify-center">
          <a
            target="_blank"
            href={frame?.zoraUrl}
            style={{ width: 300 }}
            className="rounded-full text-center px-4 py-2 bg-purple-500 text-white focus:outline-none focus:ring-0"
          >
            Check out on Zora.co
          </a>
        </div>
        <div className="flex mt-4 justify-center">
          <button
            onClick={() => handleCopyClick(frameUrl + frame?.frame?.slug)}
            style={{ width: 300 }}
            className="rounded-full px-4 py-2 border border-purple-500 text-purple-500 focus:outline-none focus:ring-0 mb-3"
          >
            Copy Link to share
          </button>
        </div>
      </div>
      {frame ? (
        <CopyFrameModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          frameData={frame}
        />
      ) : null}
    </div>
  );
}
