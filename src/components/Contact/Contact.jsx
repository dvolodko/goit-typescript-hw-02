import css from './Contact.module.css';
import { MdPerson, MdPersonRemove, MdPhone } from 'react-icons/md';

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.contactDetails}>
        <p className={css.contactText}>
          <MdPerson className={css.icon} /> {name}
        </p>
        <p className={css.contactText}>
          <MdPhone className={css.icon} /> {number}
        </p>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
        className={css.deleteButton}>
        <MdPersonRemove className={css.icon} />
      </button>
    </li>
  );
}

export default Contact;
