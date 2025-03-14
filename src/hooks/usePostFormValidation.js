import { useState } from "react";

const usePostFormValidation = () => {
  const [errors, setErrors] = useState({})

  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "title":
        if (value.length < 4) error = "Title must be at least 4 characters"
        break;
      case "body":
        if (value.length < 10) error = "Body must be at least 10 characters"
        break;
      case "userId":
        if (!/^[1-9]\d*$/.test(value)) error = "User ID must be a positive number"
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (formData) => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      validate(key, formData[key]);
      newErrors[key] = errors[key];
    });

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  return { errors, validate, validateForm };
};

export default usePostFormValidation;
