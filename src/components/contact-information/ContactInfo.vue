<template>
    <div class="contacts-container">
      <h2>Kontakt informationer</h2>
  
      <div class="contact-item">
        <h3>Email:</h3>
        <a href = "mailto: patrickbroehansenwork@gmail.com">patrickbroehansenwork@gmail.com</a>
      </div>
  
      <div class="contact-item">
        <h3>Phone:</h3>
        <a href="tel:+4531704479">+45 3170 4479</a>
      </div>
  
      <div class="contact-item">
        <h3>LinkedIn:</h3>
        <p><a href="https://www.linkedin.com/in/patrick-hansen-01460617a/" target="_blank">linkedin.com/in/patrick-hansen</a></p>
      </div>
  
      <div class="contact-item">
        <h3>Facebook:</h3>
        <p><a href="https://www.facebook.com/patrick.hansen.1690" target="_blank">facebook.com/patrick.hansen.1690</a></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // imageUrl: {
      //   type: String,
      //   required: true,
      // },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .contacts-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #333;
    text-align: center;
  }
  
  .contact-item {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #555;
  }
  
  p {
    color: #777;
    line-height: 1.5;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>