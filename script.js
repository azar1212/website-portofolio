const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const phone = document.querySelector('#Phone').value;
      const subject = document.querySelector('#subject').value;
      const message = document.querySelector('#Message').value;

      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aziziarsyad1212@gmail.com",
        Password: "794CD32F260A50C9E30F7C88A7A0CC897C7B",
        To: "aziziarsyad1212@gmail.com",
        From: "aziziarsyad1212@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Phone: ${phone} <br> Message: ${message}`
      }).then(
        message => alert("Message sent successfully!")
      );
    });