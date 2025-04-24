import { useState } from "react";
import Button from "./componente/Button";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.name; 
    const firstLetter = buttonName.charAt(0).toUpperCase();
    const nameNotification = firstLetter+buttonName.substring(1);
    console.log(nameNotification);
    

    switch (buttonName) {
      case "success":
        toast.success(`${nameNotification} toast notification`);
        break;
      case "info":
        toast.info(`${nameNotification} toast notification`);
        break;
      case "warning":
        toast.warning(`${nameNotification} toast notification`);
        break;
      case "error":
        toast.error(`${nameNotification} toast notification`);
        break;
      default:
        toast(`Success toast notification`);
    }
  };

  return (
    <main
      className="has-background-white-ter"
      style={{ width: "100vw", height: "100vh", paddingTop: "20vh" }}
    >
      <section
        className="is-flex is-justify-content-center is-flex-wrap-wrap is-align-items-center has-background-white pt-6 pb-6"
        style={{
          width: "22vw",
          maxHeight: "60vh",
          margin: "auto",
        }}
      >
        <Button
          key={uuidv4()}
          props={{ bg: "success", txt: "success", color: "white" }}
          onclick={handleClick}
        />
        <Button
          key={uuidv4()}
          props={{ bg: "link", txt: "info", color: "white" }}
          onclick={handleClick}
        />
        <Button
          key={uuidv4()}
          props={{ bg: "warning", txt: "warning", color: "white" }}
          onclick={handleClick}
        />
        <Button
          key={uuidv4()}
          props={{ bg: "danger", txt: "error", color: "white" }}
          onclick={handleClick}
        />
      </section>

      <ToastContainer />
    </main>
  );
}

export default App;
