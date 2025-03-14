import { useEffect, useState } from "react";
import { GET_POSTS, DELETE_POST } from "../utils/constants";
import ConfirmationModal from "./ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setEditingPost, deletePost, setMessage } from "../redux/postSlice";
import { Link } from 'react-router-dom'
import Shimmer from "./Shimmer";



const List = () => {
  const posts = useSelector((state) => state.currentPost.posts);
  const message = useSelector((state) => state.currentPost.message);
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const fetchPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(GET_POSTS);
      if (response.ok) {
        const result = await response.json();
        dispatch(setPosts(result));
      }
    } catch (error) {
      console.error("Error occurred while fetching data!", error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, [posts, fetchPosts])

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        dispatch(setMessage(""))
      }, 2000)
      
      return () => clearTimeout(timeout)
    }
  }, [message, dispatch])

  const [selectedPost, setSelectedPost] = useState(null);
  const [modalType, setModalType] = useState("");

  const confirmEdit = (post) => {
    setSelectedPost(post);
    setModalType("edit");
  };

  const confirmDelete = (post) => {
    setSelectedPost(post);
    setModalType("delete");
  };

  const handleEditConfirm = () => {
    dispatch(setEditingPost(selectedPost));
    navigate(`/update/${selectedPost.id}`);
    setModalType("");
  };

  const handleDeleteConfirm = async () => {
    const deleteUrl = DELETE_POST(selectedPost.id);
    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        dispatch(deletePost(selectedPost.id));
        dispatch(setMessage("Post deleted successfully."));
      }
    } catch (error) {
      console.error("Error occurred while deleting the post!", error);
    }
    setModalType("");
  };


  return (
    <div className="flex flex-col items-center bg-gray-100 h-[calc(100vh-7.5rem)] mt-16 mb-10">
      <div className="bg-white p-3 rounded-lg w-full h-full flex-1">
        
        <div className="flex justify-between my-4">
        <h1 className="text-3xl font-bold">Posts</h1>
        {message && <div className="text-green-600">{message}</div>}
        <Link to="/create" className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Add New Post
        </Link>
        </div>

        {/* Scrollable List Container */}
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto p-2 border border-gray-300 rounded-lg">
          {isLoading ? <Shimmer /> : posts.length > 0 ? posts.map((post) => (
            <div key={post?.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-3">
              <h3 className="font-semibold text-lg">{post?.id}. {post?.title}</h3>
              <p className="text-gray-700">{post?.body}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => confirmEdit(post)}
                  className="text-sm/6 font-semibold bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 px-3 py-1.5 rounded-md cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => confirmDelete(post)}
                  className="text-sm/6 font-semibold bg-red-600 text-white hover:bg-white hover:text-red-600 border hover:border-red-600 px-3 py-1.5 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          )) : (
            <p className="text-gray-500 text-center mt-4">No posts available</p>
          )}
        </div>
      </div>
      <ConfirmationModal
        isOpen={modalType !== ""}
        title={modalType === "edit" ? "Edit Post" : "Delete Post"}
        message={
          modalType === "edit"
            ? `Are you sure you want to edit "${selectedPost?.title}"?`
            : `Are you sure you want to delete "${selectedPost?.title}"?`
        }
        onConfirm={modalType === "edit" ? handleEditConfirm : handleDeleteConfirm}
        onCancel={() => setModalType("")}
      />
    </div>
  );
};

export default List
