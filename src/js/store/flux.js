const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          name: "name",
          email: "email",
          phone: "phone",
          adress: "adress",
          rrss: "rrss",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadContactList: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
	  }*/
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
