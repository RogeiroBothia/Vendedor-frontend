//Alertas Bonitas
import toast from "react-hot-toast";

export function alert_success(success, message) {
  toast.success(success + "\n" + message, {
    duration: 1500,
    position: "bottom-right",
  });
}

export function alert_error(error, message) {
  toast.error(error + "\n" + message, {
    position: "bottom-right",
  });
}

export function generateClick() {
  let element = document.getElementById("btn_register");
  element.click();
}
