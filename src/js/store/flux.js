const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          name: "name",
          email: "email",
          phone: "phone",
          adress: "adress",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      loadContactList: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas?offset=0&limit=100",
            {
              method: "GET",
              headers: { accept: "aplication/json" },
            }
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        const createUser = async () => {
          try {
            const response = await fetch(
              "https://playground.4geeks.com/contact/agendas/VeroMT",
              {
                method: "POST",
                headers: { accept: "application/json" },
              }
            );
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        const consultContactList = async () => {
          try {
            const response = await fetch(
              "https://playground.4geeks.com/contact/agendas?offset=0&limit=100",
              {
                method: "GET",
                headers: { accept: "aplication/json" },
              }
            );
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
