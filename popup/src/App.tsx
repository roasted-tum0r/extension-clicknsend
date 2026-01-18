import "./App.css";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";
// import { MailComposer } from "./features/mail-composer/MailComposer";

function App() {
  return (
    <div className="w-[400px] min-h-[500px] p-6 bg-gray-900 text-white font-sans">
      <Header />
      <EmailForm />
    </div>
  );
}

export default App;
