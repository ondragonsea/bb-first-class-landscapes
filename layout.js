export const metadata = {
  title: "B&B First Class Landscapes",
  description:
    "Vermont landscaping and property services including mowing, spring cleanups, driveway clearing, and general outdoor maintenance.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
