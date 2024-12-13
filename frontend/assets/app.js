document.addEventListener("DOMContentLoaded", () => {
    // Cargar el navbar
    fetch("../components/navbar.html")
      .then(response => {
        console.log("Cargando navbar...");
        if (!response.ok) {
          throw new Error(`Error al cargar el navbar: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(error => console.error(error));
  
    // Cargar el footer
    fetch("../components/footer.html")
      .then(response => {
        console.log("Cargando footer...");
        if (!response.ok) {
          throw new Error(`Error al cargar el footer: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error(error));
  
    // Validar formulario de login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        // Validación simple de credenciales
        if (username === "admin" && password === "1234") {
          alert("Inicio de sesión exitoso");
          window.location.href = "../pages/dashboard.html"; // Redirigir al dashboard
        } else {
          alert("Credenciales incorrectas");
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const generateReportButton = document.querySelector("button");
    if (generateReportButton) {
        generateReportButton.addEventListener("click", () => {
            const startDate = document.getElementById("startDate").value;
            const endDate = document.getElementById("endDate").value;
            const reportType = document.getElementById("reportType").value;

            alert(`Generando reporte de ${reportType} desde ${startDate} hasta ${endDate}.`);
            // Aquí puedes simular la generación del reporte
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Alertas cargadas correctamente.");
  // Aquí puedes añadir lógica para filtrar o actualizar las alertas
});

  
  