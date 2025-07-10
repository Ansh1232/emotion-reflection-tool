import { useState } from 'react';
import './App.css';
type AnalysisResult = {
  emotion: string;
  confidence: number;
};

function App() {
   const[text,setText]=useState('');
  const[result,setResult]=useState<AnalysisResult | null>(null);
 const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState<string | null>(null);

  const handleSubmit=async(event:React.FormEvent) => {
    event.preventDefault();
      if (text==='') {
    setError('Write Something.');
  return;
  }
    setIsLoading(true);
   setResult(null);
    setError(null);

    try {
      const response= await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data= await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error while getting emotion:',err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Emotion Reflection</ h1>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="input-card">
          <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="How are you feeling today?"
     onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      (e.currentTarget.form as HTMLFormElement).requestSubmit();
    }
  }}
            
          ></textarea>
          <button type="Submit" disabled={isLoading}>
            {isLoading ? 'submitting...' : 'Submit'}
          </button>
        </form>

        {/*Emotion-feedback area */}
        <div className="result-card fixed-height">
          {isLoading ? (
            <p>Reflecting...</p>) : error? (<p style={{color:'red'}}>{error}</p>): result ?(
            <>
              <p  className="emotion-label">Detected Emotion:</p>
              <p className="emotion-value">{result.emotion}</p>
              <p   className="confidence-label">Confidence:</p>
              <p className="confidence-value">
                {(result.confidence*100).toFixed(0)}
              %</p>
            </>):
            (<p className="empty">Write something and submit</p>)}
        </div>
    </main>
    </div>
  );
}
export default App;
