import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Document = () => {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  useEffect(() => {
    const sockt = io("http://localhost:5000");
    setSocket(sockt);
    return () => {
      sockt.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-change", delta);
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta, oldDelta, source) => {
      quill.updateContents(delta);
    };

    socket.on("recevied-change", handler);

    return () => {
      quill.off("recevied-change", handler);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHtml = "";
    const editor = document.createElement("div");
    wrapper.append(editor);

    const q = new Quill(editor, { theme: "snow" });
    setQuill(q);
  }, []);

  return <div id="container" ref={wrapperRef}></div>;
};

export default Document;
