import type { APIRoute } from "astro";
import ReactPDF from "@react-pdf/renderer";
import Resume from "../components/Resume";

const resumeFileName = "Alex James Malcolm.pdf";

export const GET: APIRoute = async () => {
  const body = await ReactPDF.renderToStream(Resume());
  const response = new Response(body);
  response.headers.set(
    "Content-Disposition",
    `inline; filename="${resumeFileName}"`
  );
  return response;
};
