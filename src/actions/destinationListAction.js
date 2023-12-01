const getAll = async () => {
    let data = {};
    try {
      console.log(`${process.env.REACT_APP_API}/api/states?pagination[pageSize]=50`)
      const rest = await fetch(`${process.env.REACT_APP_API}/api/states?pagination[pageSize]=50`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      data = await rest.json();
      if (data.error) {
        data = { message: "Error al recuperar los datos", data: [] };
      }
    } catch (e) {
      data = { message: e, data: [] };
    }
  
    return data;
  }

const destinationListAction = {
    getAll
}

export default destinationListAction;