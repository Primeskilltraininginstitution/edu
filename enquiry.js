document.addEventListener('DOMContentLoaded', function() {
  
  const firstname = document.getElementById('firstname');
  const middlename = document.getElementById('middlename');
  const lastname = document.getElementById('lastname');
  const ID = document.getElementById('ID');
  const mail = document.getElementById('mail');
  const phone = document.getElementById('phone');
  const selectOption = document.getElementById('selectOption');
  const selectOption1 = document.getElementById('selectOption1');
  const address = document.getElementById('address');
  const message = document.getElementById('message');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clicked');

      let ebody = `
      <br>Name: <br>${firstname.value}
      <br>
      <br>Middlename: <br>${middlename.value}
      <br>
      <br>Last name: <br>${lastname.value}
      <br>
      <br>ID: <br>${ID.value}
      <br>
      <br>Email: <br>${mail.value}
      <br>
      <br>phone: <br>${phone.value}
      <br>
      <br>Short Course: <br>${selectOption.value}
      <br>
      <br>Province: <br>${selectOption1.value}
      <br>
      <br>Address: <br>${address.value}
      <br>
      <br>${message.value}
      <br>
      `;

      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "primeskilltraining@outlook.com",
          Password : "C4C36F8657C0BE5881366034554FAC6DF0CA",
          To : 'primeskilltraining@outlook.com',
          From : "primeskilltraining@outlook.com",
          Subject : "New Application notification",
          Body : ebody
      }).then(
        message => {
          if (message == "OK"){
            Swal.fire({
              title: "Submitted",
              text: "Prime Skill has recieved your application",
              icon: "success"
            });
            // reset to default after i submit my quote
            message.value = "";
            firstname.value = "";
            middlename.value = "";
            lastname.value = "";
            ID.value = "";
            mail.value = "";
            phone.value = "";
            selectOption.value = "";
            selectOption1.value = "";
            address.value = "";
          }
        }
      );
  });
});




// C4C36F8657C0BE5881366034554FAC6DF0CA

