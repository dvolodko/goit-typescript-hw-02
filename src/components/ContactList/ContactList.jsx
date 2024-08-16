import Contact from '../Contact/Contact';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
