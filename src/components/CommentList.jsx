export default function CommentList({ comments }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="font-bold mb-2">Comentarios</h3>
      <ul className="space-y-2">
        {comments.map((c, i) => (
          <li key={i} className="border-b pb-1">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
