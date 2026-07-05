# 📝Text Editor

A modern **Web Text Editor** built using **React** and **Tiptap** that provides rich text editing, image handling, advanced table operations, document templates, and export functionality.

---

## 📌 Project Overview

This project is a browser-based document editor designed to provide an experience similar to a simplified Microsoft Word or Google Docs. Users can create, edit, format, and export documents with an intuitive interface.

---

## ✨ Features

### 🖋 Rich Text Editing
- Bold
- Italic
- Underline
- Heading 1 & Heading 2
- Bullet Lists
- Numbered Lists
- Text Alignment (Left, Center, Right)

### 🖼 Image Support
- Insert Images
- Image Alignment
  - Left
  - Center
  - Right
- Image Resizing
  - Small
  - Medium
  - Large
  - Full Width
- Images inside Table Cells

### 📊 Table Features
- Insert Table
- Add/Delete Rows
- Add/Delete Columns
- Merge Cells
- Split Cells
- Delete Table

### 📄 Templates
- Resume Template
- Invoice Template
- Project Report Template

### 📤 Export
- Export to PDF
- Export to DOCX (Microsoft Word)

### 📈 Additional Features
- Word Count
- Character Count
- Sticky Toolbar
- A4 Document Layout
- Clean and Responsive User Interface

---

## 🛠 Technologies Used

- React.js
- Vite
- Tiptap Editor
- JavaScript (ES6+)
- CSS3
- React Icons
- html-to-docx
- jsPDF
- html2canvas
- file-saver

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── TextEditor.jsx
│   └── Toolbar.jsx
│
├── extensions/
│   └── ImageExtension.js
│
├── utils/
│   ├── exportDocx.js
│   └── exportPdf.js
│
├── styles/
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/hiyamodi/text-editor.git
```

Go to the project folder

```bash
cd web-text-editor
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

## 💻 Usage

1. Create or edit a document.
2. Format text using the toolbar.
3. Insert and resize images.
4. Create and edit tables.
5. Use predefined templates.
6. Export the document as PDF or DOCX.

---



## 🎯 Future Enhancements

- Drag-and-drop image resizing
- Hyperlink support
- Text highlighting
- Font family selection
- Font size selection
- Text color picker
- Multi-page document support
- Auto-save functionality

---

## 👩‍💻 Author

**Hiya Modi**

Computer Engineering Student

---

## 📜 License

This project is developed for educational purposes.