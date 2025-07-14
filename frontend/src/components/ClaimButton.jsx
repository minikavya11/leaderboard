export default function ClaimButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Claim Points
    </button>
  );
}
