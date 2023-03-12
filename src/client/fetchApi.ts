const apiUrl = 'api/boosters';

export const fetchData = async () => {
  const res = await fetch(apiUrl);
  const json = await res.json();
  return json;
};

//create booster
export const createBooster = async (newBooster) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBooster),
  });
  const json = await res.json();
  return json;
};

// update booster
export const updateBooster = async (id, newBooster) => {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBooster),
  });
  const json = await res.json();
  return json;
};

//delete booster
export const deleteBooster = async (id) => {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });

  const json = await res.json();
  return json;
};
