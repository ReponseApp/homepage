/* MODULES */
import React, { useState, useEffect } from "react";
import moment from "moment";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
/* COMPONENTS */
import ImageView from "./ImageView";
/* FILES */
import searchGif from "../../functions/Message/searchGif";
import fetchCategory from "../../functions/Message/fetchCategory";
import generateID from "../../functions/generateID";
import getCategories from "../../functions/Message/getCategories";
import "../../reducers/index";

// U9B534PUXTQW Tenor API Key

function Message(props) {
  /* STATE'LER */
  let [messages, setMessages] = useState([]), // Mesajlar
    [gifCategories, setGifCategories] = useState([]),
    [currentCategory, setCurrentCategory] = useState("General"),
    [fetchedGifs, setFetchedGifs] = useState([]),
    [gifScreenIsOpen, setGifScreen] = useState(false),
    [imageView, setImageView] = useState(false),
    [lastEvent, setLastEvent] = useState(""),
    [chosenImage, setChosenImage] = useState(),
    [message, setMessage] = useState("");

  const io = socketIOClient("http://localhost:4000", { transports: ["websocket"] })

  useEffect(() => {
    /* Uygulama Yüklenince En Aşağı Mesajlara Gider */
    scrollToBottom();

    /* GIF Kategorilerini Çeker */
    getCategories()
    .then(category => setGifCategories(category.tags))
  }, [messages, lastEvent]);

  return (
    <div className="grid h-screen w-[80%] bg-dark-50">
      <div className="overflow-y-auto  h-[88vh]" id="messages">
        <div className="ml-5 mt-5 w-[90%]" id="channel-start">
          <h1 className="text-3xl text-white font-semibold select-none">
            Welcome!
          </h1>
          <p className="text-xl text-gray-300 pb-3 select-none">
            Start of The Channel
          </p>
          <hr style={{ borderColor: "rgb(50, 50, 50)" }} />
        </div>
        {messages.map((message, i) => (
          <div
            key={i}
            className="text-white mt-3 pl-3 transition duration-200 hover:bg-dark-100"
            id="any-message"
          >
            <div className="flex h-full py-2 relative">
              <img
                src={message.author.avatarURL}
                className="w-12 h-12 object-cover rounded-full select-none cursor-pointer"
                click="openInfo"
                alt=""
              />
              <div className="pl-2" style={{ width: "90%" }}>
                <p className="select-none">
                  <strong
                    className="cursor-pointer"
                    id="username"
                    click="openInfo"
                  >
                    {message.author.username}
                  </strong>
                  <span className="text-xs text-gray-400 ml-1">
                    {message.createdTimestamp}
                  </span>
                </p>
                <div id="message-content">
                  <input
                    type="text"
                    className="bg-dark-200 text-white h-8 pl-2 rounded-lg outline-none w-full edit-message"
                    defaultValue={message.content}
                  />
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          />
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                  {message.images && // Eğer Mesaj Foto İçeriyorsa Resimi Gösterir
                    message.images.map(
                      (
                        image,
                        index // Kaç Tane Foto Varsa O Kadar Döngüye Sokar
                      ) => (
                        <div key={index}>
                          <button onClick={() => openImage(image.src)}>
                            <img
                              src={image.src}
                              alt="Attachement"
                              className="rounded-lg max-w-lg max-h-96 mt-2"
                            />
                          </button>
                        </div>
                      )
                    )}
                  {message.gif && ( // Mesaj Gif İçeriyorsa Gif'i Gösterir
                    <button onClick={() => openImage(message.gif)}>
                      <img
                        src={message.gif}
                        alt=""
                        className="rounded-lg w-auto h-60 mt-2"
                      />
                    </button>
                  )}
                </div>
              </div>
              <div
                id="message-tools"
                className="absolute top-2 right-5 space-x-2"
              >
                <button className="text-white message-edit">
                  <i className="fas fa-pen-square text-xl" />
                </button>
                <button
                  id={message.id}
                  className="text-red-500"
                  onClick={() => {
                    deleteMessage(message.id);
                  }}
                >
                  <i className="fas fa-trash-alt text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {gifScreenIsOpen === true && ( // Gif Ekranı Açıksa
          <div
            className="w-80 h-96 bg-dark-200 fixed right-72 bottom-20 rounded-xl"
            id="gif-box"
          >
            <div
              className="flex justify-center"
            >
              <input
                type="text"
                onChange={(e) => searchGif(e.target.value)}
                className="rounded-lg w-full outline-none h-8 bg-dark-400 text-white m-2 px-2"
                placeholder="Search GIF"
              />
            </div>
            <div
              className="overflow-y-scroll h-80 m-2 grid grid-cols-2 place-content-start gap-2"
              id="gifs"
            >
              {currentCategory === "General" &&
                gifCategories.map((category, index) => (
                  <div
                    key={index}
                    className="text-center grid h-max text-center"
                  >
                    <button
                      onClick={() => {
                        fetchCategory(category.searchterm)
                        .then(gifs => setFetchedGifs(gifs.results));
                        setCurrentCategory("GIFs");
                      }}
                      id="gif-category"
                    >
                      <img
                        src={category.image}
                        alt="Category Prew"
                        className="hover:border-green-400 w-auto h-full object-cover rounded-lg"
                      />
                    </button>
                    <p className="text-center w-full font-semibold text-white">
                      {category.searchterm}
                    </p>
                  </div>
                ))
              }
              {(currentCategory === "GIFs" || currentCategory.length === 0) &&
              <div className="grid grid-cols-2 place-content-start w-72 gap-2 h-full">
                {fetchedGifs.map((gifs, index) => (
                  <div
                    key={index}
                    className="text-center h-max grid"
                  >
                    <button
                      onClick={() => sendGifMessage(gifs.media[0].gif)}
                      className="gif"
                    >
                      <img
                        src={gifs.media[0].gif.url}
                        alt="GIF"
                        className="hover:ring-green-400 hover:ring-1 w-40 h-full rounded-lg gif-image"
                      />
                    </button>
                  </div>
                ))}</div>}
            </div>
          </div>
        )}
      </div>

      <div
        className="h-12 mb-2 bottom-3 rounded-xl justify-self-center"
        id="message-bar"
        style={{ width: "90%", backgroundColor: "#323232" }}
      >
        <div className="flex items-center justify-between">
          <textarea
            onInput={() => autoGrow}
            onChange={async (e) => {
              await setMessage(e.target.value);
            }}
            autoComplete="off"
            onKeyDown={sendMessage}
            type="text"
            className="overflow-y-auto rounded-l-2xl outline-none h-12 bg-dark-200 pt-3 text-white pl-4 justify-center resize-none flex items-center"
            placeholder="Text A Message"
            id="message-input"
            style={{ width: "90%", backgroundColor: "#323232" }}
          >
            {message}
          </textarea>
          <button
            data-tip
            data-for="speak-tip"
            id="speak"
            onClick={voiceMessage}
            className="material-icons md-36 md-light"
          >
            mic
          </button>
          <ReactTooltip
            id="speak-tip"
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#111"
          >
            Speech To Text
          </ReactTooltip>
          <input
            multiple
            type="file"
            className="hidden"
            id="add-file"
            onChange={sendAttachementMessage}
            accept=".jpg, .png, .jpeg, .bmp, .tif, .tiff, .gif"
          />
          <label
            data-tip
            data-for="image-tip"
            htmlFor="add-file"
            className="cursor-pointer"
          >
            <i className="fas fa-paperclip text-3xl text-[#b9bbbe]" />
          </label>
          <ReactTooltip
            id="image-tip"
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#111"
          >
            Add Image
          </ReactTooltip>
          <button
            data-tip
            data-for="gif-tip"
            id="speak"
            className="material-icons md-48 md-light"
            onClick={() => setGifScreen(!gifScreenIsOpen)}
          >
            gif
          </button>
          <ReactTooltip
            id="gif-tip"
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#111"
          >
            Find Some GIFs
          </ReactTooltip>
        </div>
      </div>
      {imageView === true && (
        <ImageView src={chosenImage} closeImage={closeImage} />
      )}
    </div>
  );

  async function sendMessage(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      if (message.replace(/\s/g, "") === "") {
        return;
      } else {
        if(message.split('').includes('\n')) {
          message = message.split('').map((letter) => { 
            return letter === '\n' ? letter+'\n' : letter;
          }).join('')
        }
        let data = {
          content: message.trim(),
          createdTimestamp: moment().calendar(),
          id: generateID(),
          author: {
            avatarURL: props.user.avatarURL,
            id: props.user.id,
            username: props.user.username
          }
        };
        setMessages([...messages, data]);
        io.emit("messageCreate");
        setMessage("");
        e.target.value = "";
      }
    } else {
      setMessage(e.target.value);
    }
  }

  function voiceMessage() {
    document.getElementById("speak").classList.add("md-red");
    document.getElementById("speak").classList.remove("md-light");
    var message = document.querySelector("#message");

    var SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    var SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;

    var grammar = "#JSGF V1.0;";

    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = navigator.language;
    recognition.interimResults = false;

    recognition.onresult = async function (event) {
      var last = event.results.length - 1;
      var command = event.results[last][0].transcript;
      message.value = command;
      document.getElementById("speak").classList.remove("md-red");
      document.getElementById("speak").classList.add("md-light");
    };

    recognition.onspeechend = function () {
      recognition.stop();
      document.getElementById("speak").classList.remove("md-red");
      document.getElementById("speak").classList.add("md-light");
    };

    recognition.onerror = async function (event) {
      if (event.error === "aborted") {
        recognition.stop();
        document.getElementById("speak").classList.remove("md-red");
        document.getElementById("speak").classList.add("md-light");
      } else if (event.error === "no-speech") {
        document.getElementById("speak").classList.remove("md-red");
        await document.getElementById("speak").classList.add("md-light");
        await alert("No Speak!");
      }
    };

    recognition.start();
  }

  function scrollToBottom() {
    var el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  }

  function autoGrow() {
    const element = document.getElementById("message-input");
    element.style.height = element.scrollHeight + "px";
  }

  async function sendAttachementMessage(e) {
    const message = document.getElementById("message-input");
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push({ src: URL.createObjectURL(e.target.files[i]) });
    }

    if (message.value.replace(/\s/g, "") === "") {
      message.value = "";
      const contentvalue = message.value.trim();
      let data = {
        content: contentvalue,
        createdTimestamp: moment().locale("fr-FR").calendar(),
        id: generateID(),
        images,
      };
      setMessages([...messages, data]);
      message.value = "";
    } else {
      const contentvalue = message.value.trim();
      let data = {
        content: contentvalue,
        createdTimestamp: moment().locale("fr-FR").calendar(),
        id: generateID(),
        images,
      };
      setMessages([...messages, data]);
      message.value = "";
    }
  }

  async function sendGifMessage(e) {
    const message = document.getElementById("message-input");

    if (message.value.replace(/\s/g, "") === "") {
      message.value = "";
      const contentvalue = message.value.trim();
      let data = {
        content: contentvalue,
        createdTimestamp: moment().locale("fr-FR").calendar(),
        id: generateID(),
        gif: e.url,
      };
      setMessages([...messages, data]);
      setGifScreen(false);
      setCurrentCategory("General");
      message.value = "";
    } else {
      const contentvalue = message.value.trim();
      let data = {
        content: contentvalue,
        createdTimestamp: moment().locale("fr-FR").calendar(),
        id: generateID(),
        gif: e.url,
      };
      setMessages([...messages, data]);
      setGifScreen(false);
      setCurrentCategory("General");
      message.value = "";
    }
  }

  function deleteMessage(e) {
    setMessages(messages.filter((msg) => msg.id !== e));
    setLastEvent("messageDelete");
    io.emit("messageDelete");
  }

  function openImage(data) {
    if (!imageView) {
      setImageView(true);
      setChosenImage(data);
    }
  }

  function closeImage(e) {
    if (e.target.id === "image-back") {
      setImageView(false);
      setChosenImage(null)
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Message);