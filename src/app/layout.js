import "./globals.css";
import 'antd/dist/antd.min.css';

export const metadata = {
  title: "Amirouche DELMI",
  description: "Le portfolio d'Amirouche DELMI, ingénieur logiciel et développeur full stack.",
  keywords: "ingénierie logicielle, développeur full stack, JavaScript, React js, Node.js, Express js, MongoDB, développement web, API REST, Next js",
  author: "Amirouche DELMI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </body>
    </html>
  );
}
