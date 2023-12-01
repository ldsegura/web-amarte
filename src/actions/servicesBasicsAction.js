const getAllDestinations = async () => {
  let data = {};
  try {
    console.log(
      `${process.env.REACT_APP_API}/api/states?pagination[pageSize]=50`
    );
    const rest = await fetch(
      `${process.env.REACT_APP_API}/api/states?pagination[pageSize]=50`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    data = await rest.json();
    if (data.error) {
      data = { message: "Error al recuperar los datos", data: [] };
    } else {
      data = {
        ...data,
        complete: true,
      };
    }
  } catch (e) {
    data = { message: e, data: [] };
  }

  return data;
};

const getAllCategories = async () => {
  let data = {};
  try {
    const rest = await fetch(
      `${process.env.REACT_APP_API}/api/state-categories?pagination[pageSize]=500&populate[picture][populate]=*`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    data = await rest.json();
    if (data.error) {
      data = { message: "Error al recuperar los datos", data: [] };
    } else {
      data = {
        ...data,
        complete: true,
      };
    }
  } catch (e) {
    data = { message: e, data: [] };
  }

  return data;
};
const getSellPageInformation = async (request) => {
  let data = {};
  try {
    const rest = await fetch(
      `${process.env.REACT_APP_API}/api/sell-pages?filters[slug][$eq]=${request.slug}&populate=*`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    data = await rest.json();
    if (data.error) {
      data = { message: "Error al recuperar los datos", data: [] };
    } else {
      data = {
        ...data,
        complete: true,
      };
    }
  } catch (e) {
    data = { message: e, data: [] };
  }

  return data;
};

const servicesBasicsAction = {
  getAllDestinations,
  getAllCategories,
  getSellPageInformation
};

export default servicesBasicsAction;
