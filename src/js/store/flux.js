const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      username: "",
      dataCard: {
        name: "",
        email: "",
        phone: "",
        adress: "",
      },
    },
    actions: {
      // Use getActions to call a function within a fuction
      //const actions = getActions();
      // loadContactList: async () => {
      //   try {
      //     const response = await fetch(
      //       //"https://playground.4geeks.com/contact/agendas?offset=0&limit=100",
      //       {
      //         method: "GET",
      //         headers: { accept: "aplication/json" },
      //       }
      //     );
      //     const data = await response.json();
      //     console.log(data);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      //Actualizando la info del flux

      uploadData: (data) => {
        const store = getStore();
        const actions = getActions();
        setStore({ contacts: [...store.contacts, data] });
        //actions.createNewContact(data);
      },

      //Volcando lista de contactos

      consultContactList: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.username}`,
            {
              method: "GET",
              headers: { accept: "aplication/json" },
            }
          );
          const data = await response.json();
          console.log(data);
          if (!data) return;
          setStore({ contacts: data.contacts });
        } catch (error) {
          console.log(error);
        }
      },

      //Creando nueva agenda con nombre de usuario

      createUser: async (slug) => {
        console.log(slug);

        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`,
            {
              method: "POST",
              headers: { accept: "application/json" },
            }
          );
          const data = await response.json();
          setStore("");
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },

      //Almacenamos el user(agenda) creado en la store

      addUserToStore: (user) => {
        const store = getStore();
        setStore({ username: user });
        console.log(store.username);
      },

      //Añadiendo nuevo contacto a la agenda

      createNewContact: async (list) => {
        const store = getStore();
        const actions = getActions();
        console.log(store);
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.username}/contacts`,
            {
              method: "POST",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },

              body: JSON.stringify(list),
            }
          );
          const data = await response.json();
          getStore("");
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },

      //Editando contacto

      editContact: async (id, editedCard) => {
        const store = getStore();
        const actions = getActions();

        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.username}/contacts/${id}`,
            {
              method: "PUT",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editedCard),
            }
          );
          console.log(editedCard);
          const updatedCard = await response.json();
          console.log(updatedCard);
          const editList = store.contacts.map((contact) =>
            contact.id === id ? updatedCard : contact
          );
          setStore({ contacts: editList });
          actions.consultContactList();
        } catch (error) {
          console.log(error);
          alert("No se ha podido editar el contacto");
        }
      },

      //Borrando contacto de la agenda

      deleteContact: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${store.username}/contacts/${id}`,
            {
              method: "DELETE",
              headers: {
                accept: "application/json",
              },
            }
          );
          if (response.ok) {
            const newListContacts = store.contacts.filter(
              (contact) => contact.id !== id
            );
            setStore({
              contacts: newListContacts,
            });
            console.log(store.listContacts);
            alert("Se ha eliminado el contacto de tu agenda");
          }
        } catch (error) {
          console.log(error);
          alert("No se ha podido eliminar el contacto");
        }
      },

      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //   //reset the global store
      //   setStore({ demo: demo });
      // },
    },
  };
};

export default getState;
