import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdInfoOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div>
      {" "}
      <table className="w-full border-seprate border-spacing-2  border-separate">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            const { _id, title, author, publishYear } = book;
            return (
              <tr key={_id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <MdInfoOutline className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdDeleteForever className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
