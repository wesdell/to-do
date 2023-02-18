import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { TYPES } from "../actions/toDoActions";
import ToDoContext from "../context/ToDoContext";
import { formValidations } from "../helpers/formValidations";

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [, dispatch] = useContext(ToDoContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(formValidations(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(formValidations(form));

    if (Object.keys(errors).length === 0) {
      if (!id) {
        dispatch({ type: TYPES.CREATE_GOAL, payload: form });
        navigate("/");
      } else {
        dispatch({ type: TYPES.UPDATE_GOAL, payload: form });
        navigate("/");
      }
    } else {
      return;
    }
  };

  return {
    form,
    setForm,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
