export const getConnects = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://development.2geda.net/users/connect/",
      requestOptions
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (token, userId) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://development.2geda.net/users-list/" + userId,
      requestOptions
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sortConnects = (
  token,
  start_age = 18,
  end_age = 100,
  location,
  gender = "male",
  verified_account = true
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token " + token);

  // var raw =
  //   '{\n        "start_age": 10,\n        "end_age": 100,\n        "location": "Ibadan",\n        "gender": "Male",\n        "verified_account": true\n}';

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      start_age,
      end_age,
      location,
      gender,
      verified_account,
    }),
    redirect: "follow",
  };

  fetch("https://development.2geda.net/users/connect/sort/", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};
