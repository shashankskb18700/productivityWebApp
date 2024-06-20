import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback, useEffect, useRef } from "react";

const Document = () => {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHtml = "";
    const editor = document.createElement("div");
    wrapper.append(editor);

    new Quill(editor, { theme: "snow" });
  });

  return <div id="container" ref={wrapperRef}></div>;
};

export default Document;
