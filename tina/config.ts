import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "investment",
        label: "Inwestycje",
        path: "_investments",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nazwa inwestycji",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "investment_number",
            label: "Numer inwestycji",
            required: true,
            indexed: true,
          },
          {
            type: "number",
            name: "properties_count",
            label: "Łączna liczba mieszkań",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Krótki opis",
            isTitle: false,
            required: true,
          },
          {
            type: "boolean",
            name: "availability",
            label: "Jeszcze dostępne?",
            required: true,
          },
          {
            type: "string",
            name: "images",
            label: "Zdjęcia",
            required: false,
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Zawartość strony",
            isBody: true,
          },
        ],
      },
      {
        name: "properties",
        label: "Nieruchomości",
        path: "_properties",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nazwa nieruchomości",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "investment_number",
            label: "Numer inwestycji do której należy nieruchomość",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Typ nieruchomości (np. mieszkanie, garaż, dom, miejsce parkingowe)",
            required: true,
          },
          {
            type: "number",
            name: "square_meters",
            label: "Metraż w m2",
            required: true,
          },
          {
            type: "number",
            name: "plot_square_meters",
            label: "Metraż działki w m2",
            required: true,
          },
          {
            type: "boolean",
            name: "availability",
            label: "Jeszcze dostępne?",
            required: true,
          },
          {
            type: "boolean",
            name: "reservation",
            label: "Wstępna rezerwacja?",
            required: true,
          },
          {
            type: "number",
            name: "price",
            label: "Cena w zł",
            required: true,
          },
          {
            type: "string",
            name: "images",
            label: "Zdjęcia",
            required: false,
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Zawartość strony",
            isBody: true,
          },
        ],
      },
    ],
  },
});
