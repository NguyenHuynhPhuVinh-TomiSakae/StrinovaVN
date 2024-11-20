"use client";

import Image from "next/image";
import { useState } from "react";

const characters = [
    {
        name: "MICHELE",
        image: "/char1.png",
        icon: "/sentinel.svg",
        type: "SENTINEL",
        iconColor: "#2C4C9C"
    },
    {
        name: "KOKONA",
        image: "/char2.png",
        icon: "/support.svg",
        type: "SUPPORT",
        iconColor: "#2C4C9C"
    },
    {
        name: "NOBUNAGA",
        image: "/char3.png",
        icon: "/sentinel.svg",
        type: "SENTINEL",
        iconColor: "#2C4C9C"
    },
    {
        name: "YVETTE",
        image: "/char4.png",
        icon: "/controller.svg",
        type: "CONTROLLER",
        iconColor: "#2C4C9C"
    },
    {
        name: "FLAVIA",
        image: "/char5.png",
        icon: "/duelist.svg",
        type: "DUELIST",
        iconColor: "#2C4C9C"
    },
    {
        name: "MEREDITH",
        image: "/char6.png",
        icon: "/controller.svg",
        type: "CONTROLLER",
        iconColor: "#FD383F"
    },
    {
        name: "MING",
        image: "/char7.png",
        icon: "/duelist.svg",
        type: "DUELIST",
        iconColor: "#FD383F"
    },
    {
        name: "KANAMI",
        image: "/char8.png",
        icon: "/initiator.svg",
        type: "INITIATOR",
        iconColor: "#FD383F"
    },
    {
        name: "LAWINE",
        image: "/char9.png",
        icon: "/initiator.svg",
        type: "INITIATOR",
        iconColor: "#FD383F"
    },
    {
        name: "REIICHI",
        image: "/char10.png",
        icon: "/controller.svg",
        type: "CONTROLLER",
        iconColor: "#FD383F"
    },
    {
        name: "CELESTIA",
        image: "/char11.png",
        icon: "/support.svg",
        type: "SUPPORT",
        iconColor: "#FFB526"
    },
    {
        name: "AUDREY",
        image: "/char12.png",
        icon: "/sentinel.svg",
        type: "SENTINEL",
        iconColor: "#FFB526"
    },
    {
        name: "BAI MO",
        image: "/char13.png",
        icon: "/duelist.svg",
        type: "DUELIST",
        iconColor: "#FFB526"
    },
    {
        name: "FUCHSIA",
        image: "/char14.png",
        icon: "/duelist.svg",
        type: "DUELIST",
        iconColor: "#FFB526"
    },
    {
        name: "MADDELENA",
        image: "/char15.png",
        icon: "/controller.svg",
        type: "CONTROLLER",
        iconColor: "#FFB526"
    }
];

const types = ["ALL", "SENTINEL", "DUELIST", "CONTROLLER", "SUPPORT", "INITIATOR"];

export default function CharacterPage() {
    const [selectedType, setSelectedType] = useState("ALL");

    const filteredCharacters = selectedType === "ALL"
        ? characters
        : characters.filter(char => char.type === selectedType);

    return (
        <div className="relative min-h-[100%] w-full bg-[#111113] bg-[length:1920px_1080px] bg-left-top bg-no-repeat px-[20px] sm:px-[40px] md:px-[60px] lg:px-[90px] xl:px-[120px] py-[260px]"
            style={{ backgroundImage: "url(/background-char.jpg)" }}>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1] text-[#FFFFFF]">
                DANH SÁCH NHÂN VẬT
            </div>

            <div className="mt-[35px] sm:mt-[45px] md:mt-[55px] lg:mt-[65px] flex flex-wrap items-center justify-start gap-[15px] sm:gap-[25px] md:gap-[35px]">
                {types.map(type => (
                    <div key={type}
                        className={`cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-[1] transition-all hover:text-[#FFFFFF] ${selectedType === type ? "!text-primary" : "text-[#C1BFBF]"
                            }`}
                        onClick={() => setSelectedType(type)}>
                        {type}
                    </div>
                ))}
            </div>

            <div className="mt-[55px] flex flex-wrap justify-start gap-[22px]">
                {filteredCharacters.map(char => (
                    <CharacterCard key={char.name} character={char} />
                ))}
            </div>
        </div>
    );
}

function CharacterCard({ character }: {
    character: {
        name: string,
        image: string,
        icon: string,
        type: string,
        iconColor: string
    }
}) {
    return (
        <div className="group mb-[32px] cursor-pointer overflow-hidden rounded-[3px] w-[290px]">
            <div
                className="h-[360px] w-[290px] bg-[length:100%_100%] bg-center bg-no-repeat transition-all group-hover:bg-[length:102%_102%]"
                style={{ backgroundImage: `url(${character.image})` }}
            />
            <div className="h-[42px] bg-[#EAE8EB] px-[13px] py-[9px] text-[23px] font-semibold leading-[16px] text-[#665D61] group-hover:bg-primary group-hover:text-[#FFFFFF]">
                <div className="relative inline-block h-[25px] w-[25px] overflow-hidden align-middle">
                    <div className="absolute left-[-25px] top-0 h-[25px] w-[25px] group-hover:!drop-shadow-[25px_0_0_#FFFFFF]"
                        style={{ filter: `drop-shadow(25px 0 0 ${character.iconColor})` }}>
                        <Image
                            src={character.icon}
                            alt=""
                            fill
                        />
                    </div>
                </div>
                <div className="ml-[13px] inline-block w-[225px] overflow-hidden text-ellipsis align-middle leading-[1]">
                    {character.name}
                </div>
            </div>
        </div>
    );
}