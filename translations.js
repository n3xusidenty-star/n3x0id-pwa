<script>
  const lang = navigator.language.startsWith("es") ? "es" : "en";

  const t = {
    en: {
      welcome: { title:"Welcome to N3X0 ID!", setup:"Register your smart helmet in 3 steps:", create:"Create Account" },
      register: { title:"Register your helmet", name:"Name", email:"Email", phone:"Phone", secret:"Secret Code", submit:"Register" },
      login: { title:"Login", email:"Email", secret:"Secret Code", submit:"Login" },
      common: { registered:"Helmet Registered", token:"Helmet ID:", add:"Add to Contacts", emergency:"Emergency Mode", edit:"Edit / Update Info" }
    },
    es: {
      welcome: { title:"¡Bienvenido a N3X0 ID!", setup:"Registra tu casco inteligente en 3 pasos:", create:"Crear cuenta" },
      register: { title:"Registrar casco", name:"Nombre", email:"Correo", phone:"Teléfono", secret:"Código secreto", submit:"Registrar" },
      login: { title:"Iniciar sesión", email:"Correo", secret:"Código secreto", submit:"Entrar" },
      common: { registered:"Casco registrado", token:"ID del casco:", add:"Agregar a contactos", emergency:"Modo emergencia", edit:"Editar / Actualizar información" }
    }
  };

  const txt = t[lang];
</script>