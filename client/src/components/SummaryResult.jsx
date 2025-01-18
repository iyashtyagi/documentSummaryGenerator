const SummaryResult = ({ summary }) => {
    if (!summary) return null;

    const displaySummary = typeof summary === 'string' ? summary : JSON.stringify(summary);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Generated Summary</h2>
            <p className="text-gray-600 leading-relaxed">{displaySummary}</p>
        </div>
    );
};

export default SummaryResult;
