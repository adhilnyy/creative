import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useDispatch } from "react-redux";
import { ADD_POST } from "../utils/constants";
import { createPost, setMessage } from "../redux/postSlice";
import usePostFormValidation from "../hooks/usePostFormValidation";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const { errors, validate, validateForm } = usePostFormValidation(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return
    }

    try {
      const response = await fetch(ADD_POST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newPostData = await response.json();
        dispatch(createPost(newPostData));
        dispatch(setMessage("Post Added successfully."));
        navigate("/list");
      }
    } catch (error) {
      console.error("Error occurred while adding a new post!", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="mt-20 text-center text-2xl font-bold tracking-tight text-gray-900">
        Create Post
      </h2>
      <PostForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} errors={errors} validate={validate} />
    </div>
  );
};

export default CreatePostPage;
