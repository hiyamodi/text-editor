import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export async function exportDocx(editor) {
  if (!editor) return;

  const text = editor.getText();

  const paragraphs = text
    .split("\n")
    .map((line) => new Paragraph(line));

  const doc = new Document({
    sections: [
      {
        children: paragraphs,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);

  saveAs(blob, "Document.docx");
}