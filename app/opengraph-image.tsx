import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Significanz";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://significanz.dk/images/logo/significanz%20navnetr%C3%A6k%20-%20warm%20charcoal.png"
          alt="Significanz"
          style={{
            maxWidth: "80%",
            maxHeight: "60%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
