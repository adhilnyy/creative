import { Link } from "react-router-dom";

const PostForm = ({ formData, setFormData, handleSubmit, errors, validate }) => {
    
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validate(name, value)
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-[calc(100vh-7.5rem)]">
      <form onSubmit={handleSubmit} className="space-y-4 h-full overflow-y-auto">
        <div>
          <label htmlFor="title"  className="block text-sm/6 font-medium text-gray-900">Title<span className="text-red-500">*</span></label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            required
          />
          { errors.title && <p className="text-sm/6 text-red-500">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="body"  className="block text-sm/6 font-medium text-gray-900"><span className="text-red-500">*</span>Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            required
          />
          { errors.body && <p className="text-sm/6 text-red-500">{errors.body}</p>}
        </div>
        <div>
          <label htmlFor="userId"  className="block text-sm/6 font-medium text-gray-900"><span className="text-red-500">*</span>User ID</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            required
          />
          { errors.userId && <p className="text-sm/6 text-red-500">{errors.userId}</p>}
        </div>
        <div className="flex gap-2">
            <Link to='/list' className="flex justify-center text-sm/6 font-semibold bg-white text-indigo-600 hover:bg-indigo-600
            hover:text-white border hover:border-white px-3 py-1.5 rounded-md cursor-pointer">Back</Link>

          <button type="submit" className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm
