function showUserList() {
  fetch('https://reqres.in/api/users', {
    method: 'GET',
    // trả
  })
    .then(function (response) {
      return response.json();
      // nhận
    })
    .then(function (userRes) {
      let htmls = userRes.data.map(
        (user) =>
          `
              <div class="col-md-3 mb-3">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="${user.avatar}"
                    alt=""
                  />
                  <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">${user.email}</p>
                  </div>
                  <div class='card-footer'>
                  <button class='btn btn-sm btn-dark' onclick='showDetailUser(${user.id})'>View</button>
                  </div>
                </div>
              </div>
              `
      );
      document.getElementById('userList').innerHTML = htmls.join('');
    });
}

// async - await
async function showDetailUser(userId) {
  // chờ
  let response = await fetch(`https://reqres.in/api/users/${userId}`, {
    method: 'GET',
  });
  let userRes = await response.json();

  $('#user-avatar').attr('src', userRes.data.avatar);
  $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
  $('#user-email').html(userRes.data.email);
  $('#user-detail').modal('show');
}
