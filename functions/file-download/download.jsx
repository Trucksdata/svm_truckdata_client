import toast from "react-hot-toast";

export function downloadFile(url, handleClose) {
  url.forEach((file) => {
    const newTab = window.open(file.original, '_blank');
    if (newTab) {
      newTab.focus();
    }

    handleClose();
    localStorage.setItem("hasUserData", true);
  });
}
