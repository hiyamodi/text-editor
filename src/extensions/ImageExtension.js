import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),

      class: {
        default: "image-center",
        parseHTML: element => element.getAttribute("class"),
        renderHTML: attributes => ({
          class: attributes.class,
        }),
      },

      width: {
        default: null,
        parseHTML: element => element.getAttribute("width"),
        renderHTML: attributes => {
          if (!attributes.width) return {};
          return {
            style: `width: ${attributes.width}`,
          };
        },
      },
    };
  },
});

export default CustomImage;