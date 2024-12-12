import { useTester } from "../context/testerContext";

function Tester({latitude, longitude}) {
    const { testData } = useTester();

    return (
        <div className="bg-yellow-600 p-4 border-8 border-red-700 text-red-900 font-exp text-exp col-span-full">
            <div>{latitude}, {longitude}</div>
            <div style={{
                whiteSpace: 'pre-wrap', // This ensures the JSON formatting is preserved
                fontFamily: 'monospace', // Makes it look more like code
                }}>{testData ? JSON.stringify(testData, null, 2) : "No data"}
            </div>
        </div>
    );
};

export default Tester;
