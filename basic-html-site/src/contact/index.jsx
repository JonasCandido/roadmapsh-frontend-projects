const Contact = () => {
      return (
      <section>
        <h1>Contact Me</h1>
          <form action="#" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" autocomplete="name"  required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" autocomplete="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
      </section>
      );
};

export { Contact };
