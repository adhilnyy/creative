import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_POST } from "../utils/constants";
import { updatePost, setMessage } from "../redux/postSlice";
import usePostFormValidation from "../hooks/usePostFormValidation";

const EditPostPage = () => {
  const editingPost = useSelector((state) => state.currentPost.editingPost)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: editingPost?.title || "",
    body: editingPost?.body || "",
    userId: editingPost?.userId || "",
  })

  const { errors, validate, validateForm } = usePostFormValidation(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return
    }

    const updateUrl = UPDATE_POST(editingPost.id);
    try {
      const response = await fetch(updateUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedPostData = await response.json();
        dispatch(updatePost(updatedPostData));
        dispatch(setMessage("Post Updated successfully."));
      }
    } catch (error) {
      console.error("Error occurred while updating the post!", error);
    }
    navigate("/list");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Update Post
      </h2>
      <PostForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} errors={errors} validate={validate} />
    </div>
  );
};

export default EditPostPage
