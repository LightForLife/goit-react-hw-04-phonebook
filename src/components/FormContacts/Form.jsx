import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormBox,
  AddContactBtn,
  FormInput,
  FormContainer,
  FormLabel,
  ErrorText,
} from './Form.styled';

const nameRules = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRules =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(24, 'Too Long!')
    .matches(nameRules, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    })
    .required('Name is a required field'),
  number: yup
    .string()
    .matches(numberRules, {
      message:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    })
    .required('Number is a required field'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({ contacts, addItemContact }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (value, actions) => {
    let formData = {
      id: nanoid(),
      name: value.name,
      number: value.number,
    };

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

    if (findName) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    addItemContact(formData);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormBox autoComplete="off">
        <FormContainer>
          <FormLabel
            style={{
              display: 'block',
            }}
            htmlFor={nameInputId}
          >
            Name
            <FormInput type="text" name="name" id={nameInputId} />
            <FormError name="name" />
          </FormLabel>

          <FormLabel
            style={{
              display: 'block',
            }}
            htmlFor={numberInputId}
          >
            Number
            <FormInput type="tel" name="number" id={numberInputId} />
            <FormError name="number" />
          </FormLabel>
        </FormContainer>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </FormBox>
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  addItemContact: PropTypes.func.isRequired,
};

//=============== var 2 =========================
// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handleChange = event => {
//     const { name, value, number } = event.currentTarget;
//     // const { number, value } = event.currentTarget;
//     // console.log(event.currentTarget);
//     // console.log(event.currentTarget.value);
//     this.setState({ [name]: value });
//     this.setState({ [number]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     const findName = this.props.contacts.find(
//       contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
//     );

//     if (findName) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     this.props.addItemContact(contact);

//     this.resetInputs();
//   };

//   resetInputs = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label
//           style={{
//             display: 'block',
//           }}
//           htmlFor={this.nameInputId}
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={this.nameInputId}
//         />

//         <label
//           style={{
//             display: 'block',
//           }}
//           htmlFor={this.numberInputId}
//         >
//           Number
//         </label>
//         <input
//           type="text"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChange}
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={this.numberInputId}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

//=============== var 3 =========================
// export const ContactForm = ({ contacts, addItemContact }) => {
//   const nameInputId = nanoid();
//   const numberInputId = nanoid();

//   const handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = event.target.elements;

//     let formData = {
//       id: nanoid(),
//       name: name.value,
//       number: number.value,
//     };

//     const findName = contacts.find(
//       contact => contact.name.toLowerCase() === formData.name.toLowerCase()
//     );

//     if (findName) {
//       alert(`${formData.name} is already in contacts`);
//       return;
//     }

//     addItemContact(formData);

//     event.currentTarget.reset();
//   };

//   return (
//     <Formik>
//       <form onSubmit={handleSubmit}>
//         <label
//           style={{
//             display: 'block',
//           }}
//           htmlFor={nameInputId}
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           // value={formData.name}
//           // onChange={handleSubmit}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={nameInputId}
//         />

//         <label
//           style={{
//             display: 'block',
//           }}
//           htmlFor={numberInputId}
//         >
//           Number
//         </label>
//         <input
//           type="text"
//           name="number"
//           // value={this.state.number}
//           // onChange={handleSubmit}
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={numberInputId}
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     </Formik>
//   );
// };
