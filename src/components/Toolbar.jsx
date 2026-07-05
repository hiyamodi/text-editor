import { exportPDF } from "../utils/exportPdf";
import { exportDocx } from "../utils/exportDocx";

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaTable,
  FaTrash,
  FaFilePdf,
  FaFileWord,
  FaImage,
  FaCompressArrowsAlt,
  FaExpandArrowsAlt,
} from "react-icons/fa";

function Toolbar({ editor }) {
  if (!editor) return null;
const addImage = () => {
  const input = document.createElement("input");

  input.type = "file";
  input.accept = "image/*";

  input.onchange = () => {
    const file = input.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      editor
        .chain()
        .focus()
        .setImage({
          src: reader.result,
        })
        .run();
    };

    reader.readAsDataURL(file);
  };

  input.click();
};
  return (
    <div className="toolbar">

      {/* Format */}
      <div className="toolbar-section">
        <strong>Format</strong>
        <button
  title="Undo"
  onClick={() => editor.chain().focus().undo().run()}
>
  ↶
</button>

<button
  title="Redo"
  onClick={() => editor.chain().focus().redo().run()}
>
  ↷
</button>
        <button
          className={editor.isActive("bold") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </button>

        <button
          className={editor.isActive("italic") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </button>

        <button
          className={editor.isActive("underline") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </button>

        <button
          className={editor.isActive("heading", { level: 1 }) ? "active" : ""}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button
          className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
      </div>

      {/* Lists */}
      <div className="toolbar-section">
        <strong>Lists</strong>

        <button
          className={editor.isActive("bulletList") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <FaListUl />
        </button>

        <button
          className={editor.isActive("orderedList") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <FaListOl />
        </button>
      </div>

      {/* Alignment */}
      <div className="toolbar-section">
        <strong>Align</strong>

        <button
  className={editor.isActive({ textAlign: "left" }) ? "active" : ""}
  onClick={() => editor.chain().focus().setTextAlign("left").run()}
>
  <FaAlignLeft />
</button>

        <button
  className={editor.isActive({ textAlign: "center" }) ? "active" : ""}
  onClick={() => editor.chain().focus().setTextAlign("center").run()}
>
  <FaAlignCenter />
</button>

       <button
  className={editor.isActive({ textAlign: "right" }) ? "active" : ""}
  onClick={() => editor.chain().focus().setTextAlign("right").run()}
>
  <FaAlignRight />
</button>
      </div>

      {/* Tables */}
      <div className="toolbar-section">

        <strong>Table</strong>

        <button
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({
                rows: 3,
                cols: 3,
                withHeaderRow: true,
              })
              .run()
          }
        >
          <FaTable />
        </button>

        <button
          onClick={() => editor.chain().focus().addRowAfter().run()}
        >
          Row+
        </button>

        <button
          onClick={() => editor.chain().focus().addColumnAfter().run()}
        >
          Col+
        </button>

        <button
          onClick={() => editor.chain().focus().deleteRow().run()}
        >
          <FaTrash />
        </button>

        <button
          onClick={() => editor.chain().focus().deleteColumn().run()}
        >
          Col-
        </button>

        <button
          onClick={() => editor.chain().focus().deleteTable().run()}
        >
          Table-
        </button>
        <button
  title="Merge Cells"
  onClick={() => editor.chain().focus().mergeCells().run()}
>
  Merge
</button>

<button
  title="Split Cell"
  onClick={() => editor.chain().focus().splitCell().run()}
>
  Split
</button>
      </div>

      {/* Templates */}
      <div className="toolbar-section templates">
        <strong>Templates</strong>

        <button
          onClick={() =>
            editor.commands.setContent(`
              <h1>Resume</h1>

              <h2>Your Name</h2>

              <p><strong>Email:</strong> your@email.com</p>

              <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>

              <h2>Education</h2>

              <ul>
                <li>Bachelor of Engineering</li>
              </ul>

              <h2>Skills</h2>

              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

              <h2>Projects</h2>

              <p>Document Editor using React and Tiptap</p>
            `)
          }
        >
          Resume
        </button>

        <button
          onClick={() =>
            editor.commands.setContent(`
              <h1>Invoice</h1>

              <p><strong>Invoice No:</strong> 001</p>

              <p><strong>Date:</strong> 01/01/2026</p>

              <table>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>

                <tr>
                  <td>Product</td>
                  <td>1</td>
                  <td>₹1000</td>
                </tr>
              </table>

              <h2>Total: ₹1000</h2>
            `)
          }
        >
          Invoice
        </button>

        <button
          onClick={() =>
            editor.commands.setContent(`
              <h1>Project Report</h1>

              <h2>Introduction</h2>

              <p>Write your introduction here...</p>

              <h2>Objectives</h2>

              <ul>
                <li>Objective 1</li>
                <li>Objective 2</li>
              </ul>

              <h2>Conclusion</h2>

              <p>Write your conclusion here...</p>
            `)
          }
        >
          Report
        </button>
        <button onClick={() => exportPDF(editor)}>
  <FaFilePdf /> PDF
</button>
<button onClick={() => exportDocx(editor)}>
  <FaFileWord /> DOCX
</button>
<div className="toolbar-section">
  

  <strong>Image</strong>

<button onClick={addImage}>
  <FaImage />
</button>

<button
  title="Image Left"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        class: "image-left",
      })
      .run()
  }
>
  ⬅
</button>

<button
  title="Image Center"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        class: "image-center",
      })
      .run()
  }
>
  ↔
</button>

<button
  title="Image Right"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        class: "image-right",
      })
      .run()
  }
>
  ➡
</button>
<button
  title="Small"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        width: "180px",
      })
      .run()
  }
>
  S
</button>

<button
  title="Medium"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        width: "300px",
      })
      .run()
  }
>
  M
</button>

<button
  title="Large"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        width: "450px",
      })
      .run()
  }
>
  L
</button>

<button
  title="Full Width"
  onClick={() =>
    editor
      .chain()
      .focus()
      .updateAttributes("image", {
        width: "100%",
      })
      .run()
  }
>
  Full
</button>
</div>
      </div>

    </div>
  );
}

export default Toolbar;