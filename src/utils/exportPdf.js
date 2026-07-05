import jsPDF from "jspdf";

export function exportPDF(editor) {
  if (!editor) return;

  const doc = new jsPDF();

  const text = editor.getText();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);

  const lines = doc.splitTextToSize(text, 180);

  doc.text(lines, 15, 20);

  doc.save("Document.pdf");
}