// Component
function Contacts({ type }) {

  const contactsData = ['Burger Factory', 'Pl. de la Riponne 10', '1005 Lausanne', '021 800 00 00'];

  const contacts = contactsData.map((item, index) => {
    if (!index) {
      return (
        <li key={item} className={`${type}_contacts_heading`}>{item}</li>
      );
    }

    return (
      <li key={item}>{item}</li>
    );
  });

  return (
    <ul className={`${type}_contacts`}>
      {contacts}
    </ul>
  );
}

export default Contacts;