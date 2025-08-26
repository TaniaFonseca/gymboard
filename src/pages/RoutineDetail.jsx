import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import CompletionTracker from "../components/CompletionTracker";

export default function RoutineDetail() {
  const { id } = useParams();

  const comments = ["Muy buena rutina 💪", "Me costó mucho pero la terminé"];
  const total = 5;
  const completed = 3;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Detalle de Rutina #{id}</h2>
      <CompletionTracker completed={completed} total={total} />
      <div className="mt-6">
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
