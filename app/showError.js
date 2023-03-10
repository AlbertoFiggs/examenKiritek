export function showErrorMessage (mensaje, tipo) {
    Toastify({
        text: mensaje,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: tipo === "success" ? "green" : "red"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}