import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js Boilerplate",
  url: "https://next-boilerplate.vercel.app/",
  image: "https://next-boilerplate.vercel.app/logo.png",
  twitterUsername: "@next_boilerplate",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
