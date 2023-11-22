export function loadContact() {
    const contentDiv = document.getElementById("content");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = ` <div id="textContent">
    <h1>Where to find us: </h1>
    <div id="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM0JzIwLjYiTiA4OMKwNDcnMTcuMCJF!5e0!3m2!1sen!2sus!4v1234567890123"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    
    <h1>Contact us: </h1>
    <form action="#" method="post" id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <input type="submit" value="Submit" />
    </form>
  </div>
</div>`;
    contentDiv.appendChild(newDiv);
  }
  