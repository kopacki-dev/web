// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: ".",
    basePath: "building-investments-website"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "."
    }
  },
  schema: {
    collections: [
      {
        name: "investment",
        label: "Inwestycje",
        path: "_investments",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nazwa inwestycji",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "number",
            label: "Numer inwestycji",
            required: true,
            indexed: true
          },
          {
            type: "number",
            name: "properties_count",
            label: "\u0141\u0105czna liczba mieszka\u0144",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Kr\xF3tki opis",
            isTitle: false,
            required: true
          },
          {
            type: "boolean",
            name: "availability",
            label: "Jeszcze dost\u0119pne?",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Zawarto\u015B\u0107 strony",
            isBody: true
          }
        ]
      },
      {
        name: "properties",
        label: "Nieruchomo\u015Bci",
        path: "_properties",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nazwa nieruchomo\u015Bci",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "investment_number",
            label: "Numer inwestycji do kt\xF3rej nale\u017Cy nieruchomo\u015B\u0107",
            required: true
          },
          {
            type: "string",
            name: "type",
            label: "Typ nieruchomo\u015Bci (np. mieszkanie, gara\u017C, dom, miejsce parkingowe)",
            required: true
          },
          {
            type: "number",
            name: "square_meters",
            label: "Metra\u017C w m2",
            required: true
          },
          {
            type: "number",
            name: "plot_square_meters",
            label: "Metra\u017C dzia\u0142ki w m2",
            required: true
          },
          {
            type: "boolean",
            name: "availability",
            label: "Jeszcze dost\u0119pne?",
            required: true
          },
          {
            type: "boolean",
            name: "reservation",
            label: "Wst\u0119pna rezerwacja?",
            required: true
          },
          {
            type: "number",
            name: "price",
            label: "Cena w z\u0142",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Zawarto\u015B\u0107 strony",
            isBody: true
          }
        ]
      },
      {
        name: "news",
        label: "Aktualno\u015Bci",
        path: "_news",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nazwa aktualno\u015Bci",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Kr\xF3tki opis",
            required: true,
            indexed: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Zawarto\u015B\u0107 strony",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
