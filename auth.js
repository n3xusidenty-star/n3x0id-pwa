// Obtener UID del chip desde URL
const params = new URLSearchParams(window.location.search);
const uid = params.get("uid");
const firstTimeFlag = params.get("firstTime") === "true";

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const chip = data.chips.find(c => c.uid === uid);
    const user = data.users.find(u => u.uid === uid);
    const content = document.getElementById('content');

    if (!chip || firstTimeFlag) {
      content.innerHTML = `
        <h2>¡Bienvenido a N3X0 ID!</h2>
        <p>Configura tu casco inteligente en 3 pasos:</p>
        <video controls src="tutorial.mp4" style="max-width:100%; border-radius:10px; margin-bottom:20px;"></video>
        <form id="registerForm">
          <input type="text" placeholder="Nombre completo" id="name" required />
          <input type="email" placeholder="Email" id="email" required />
          <input type="tel" placeholder="Teléfono" id="phone" required />
          <input type="text" placeholder="Código secreto" id="secret" required />
          <button type="submit">Registrar</button>
        </form>
      `;

      document.getElementById('registerForm').onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const secret = document.getElementById('secret').value;

        data.chips.push({ uid, secret });
        data.users.push({ uid, name, email, phone, emergency: "" });
        alert('Casco registrado con éxito!');
      };

    } else {
      content.innerHTML = `
        <h2>Casco registrado</h2>
        <p>ID del casco: </p>
        <p>Nombre: </p>
        <p>Email: </p>
        <p>Teléfono: </p>
        <button onclick="alert('Agregar a contactos')">Agregar a contactos</button>
        <button onclick="alert('Modo emergencia')">Modo emergencia</button>
        <button onclick="editarInfo('')">Editar / Actualizar info</button>
      `;
    }
  });

function editarInfo(uid) {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const chip = data.chips.find(c => c.uid === uid);
      if (!chip) return alert('Chip no encontrado.');
      const code = prompt('Ingrese código secreto:');
      if (code !== chip.secret) return alert('Código incorrecto.');
      const user = data.users.find(u => u.uid === uid);
      const content = document.getElementById('content');
      content.innerHTML = `
        <h2>Editar información</h2>
        <form id="editForm">
          <input type="text" id="name" value="" required />
          <input type="email" id="email" value="" required />
          <input type="tel" id="phone" value="" required />
          <input type="text" id="emergency" value="" placeholder="Info médica" />
          <button type="submit">Guardar cambios</button>
        </form>
      `;
      document.getElementById('editForm').onsubmit = (e) => {
        e.preventDefault();
        user.name = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        user.phone = document.getElementById('phone').value;
        user.emergency = document.getElementById('emergency').value;
        alert('Información actualizada!');
        location.reload();
      };
    });
}