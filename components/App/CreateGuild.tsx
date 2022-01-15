import React, { useState, useRef, FC } from "react";
import { connect } from "react-redux";
import generateID from "../../functions/generateID";
import { setCreatingGuild } from "../../actions/setCreatingGuild";
import { createGuild } from "../../actions/createGuild";
import socketIOClient from "socket.io-client";

interface ICreateGuild {
  creatingGuild: boolean,
  createGuild: Function,
  setCreatingGuild: Function
}

const CreateGuild: FC<ICreateGuild> = ({ createGuild, creatingGuild, setCreatingGuild }) => {
  let [ guildName, setGuildName ] = useState(""),
      [ icon, setIcon ] = useState("https://i.imgur.com/r2myvam.png");

  const guildIconRef = useRef(null);

  const io = socketIOClient("http://localhost:4000", { transports: ["websocket"] })

  return creatingGuild === true ? (
    <div
      id="guild-back"
      className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center filter backdrop-filter backdrop-blur-sm"
      onClick={close}
    >
      <div
        id="guild"
        className="w-1/2 h-3/5 rounded-2xl bg-dark-400 backdrop-filter backdrop-blur-sm flex flex-col items-center"
      >
          <h1 className="text-3xl text-white pt-4">Create Guild</h1>
          <img
            src={icon}
            className="rounded-full mt-3 object-cover select-none"
            style={{ width: "7rem", height: "7rem" }}
            ref={guildIconRef}
            onError={() => {
              guildIconRef.current!.src = "https://i.imgur.com/r2myvam.png";
              setIcon("https://i.imgur.com/r2myvam.png");
            }}
            alt="Icon Preview"
            id="icon-prew"
            draggable="false"
          />
          <div className="h-12 rounded-xl mt-5 bg-dark-700 w-3/4" id="icon-input">
            <div className="flex">
              <input
                type="file"
                id="choose-icon"
                onChange={(e) =>
                  setIcon(URL.createObjectURL(e.target.files![0]))
                }
                className="hidden"
                accept=".jpg, .png, .jpeg, .bmp, .tif, .tiff"
              />
              <label
                htmlFor="choose-icon"
                className="h-12 bg-blue-500 text-white font-semibold py-3 cursor-pointer w-1/4 rounded-l-xl"
              >
                Choose Icon
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Or Enter A URL"
                className="text-white h-12 pl-4 rounded-r-xl"
                onChange={controlImage}
                style={{ backgroundColor: "#1b1b1b" }}
              />
            </div>
          </div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter A Guild Name (eg. My Cool Server)"
            id="guild-name"
            className="mt-5 h-12 text-white rounded-xl m-auto pl-4 bg-dark-700"
            onChange={(e) => setGuildName(e.target.value)}
            onKeyUp={createNewGuild}
          />
      </div>
    </div>
  ) : (
    ""
  );

  function close(e) {
    if (e.target.id === "guild-back") {
      setIcon("https://i.imgur.com/r2myvam.png");
      return props.setCreatingGuild(false);
    } else {
      return;
    }
  }

  async function createNewGuild(e) {
    if (e.keyCode === 13) {
      props.createGuild({
        guildName,
        icon,
        id: generateID(),
        messages: [],
      });
      await props.setCreatingGuild(false);
      io.emit("guildCreate");
      await setIcon("https://i.imgur.com/r2myvam.png");
    }
  }

  function controlImage(e: any) {
    e.target.value.length === 0
      ? setIcon("https://i.imgur.com/r2myvam.png")
      : setIcon(e.target.value);
  }
}

function mapStateToProps(state: any) {
    return {
        creatingGuild: state.creatingGuild
    }
}

const mapActionsToProps = () => ({ setCreatingGuild, createGuild })

export default connect(mapStateToProps, mapActionsToProps())(CreateGuild)