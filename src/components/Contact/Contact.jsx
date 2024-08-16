import { MdPerson, MdPhone } from 'react-icons/md';

function Contact({ name, number }) {
  return (
    <li>
      <p>
        <MdPerson /> {name}
      </p>
      <p>
        <MdPhone /> {number}
      </p>
      <button>Delete</button>
    </li>
  );
}

export default Contact;
