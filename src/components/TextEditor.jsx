import { useEditor, EditorContent } from "@tiptap/react";
import { useState } from "react";

import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import CustomImage from "../extensions/ImageExtension";

import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";

import Toolbar from "./Toolbar";

function TextEditor() {
  const [, forceUpdate] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      CustomImage,

      Table.configure({
        resizable: true,
      }),

      TableRow,
      TableHeader,
      TableCell,
    ],

    content: "<p>Start typing here...</p>",

    onUpdate: () => {
      forceUpdate((v) => v + 1);
    },
  });

  if (!editor) return null;

  const text = editor.getText();

  const words =
    text.trim() === ""
      ? 0
      : text
          .trim()
          .split(/\s+/)
          .filter(Boolean).length;

  const characters = text.replace(/\n/g, "").length;

  return (
    <div className="text-editor">
      <Toolbar editor={editor} />

      <EditorContent editor={editor} />

      <div className="status">
        Words: {words} &nbsp; | &nbsp; Characters: {characters}
      </div>
    </div>
  );
}

export default TextEditor;