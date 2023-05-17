import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../context/quiz";
import { UserAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
import { useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { user } = UserAuth();
  const [row,setRow] = useState([])
  const [l,setl] = useState(true)
  const [showq,setShowq] = useState(true)
 

  const getdata = () => {
    const q = query(collection(db,"quiz" ));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setRow(list);
      setl(false)
    });
  };
  useEffect(() => {
    getdata();
  }, []);
console.log(row)
  return (
    <>
     <div className="topnav">
        <p>Resources</p>
        <div className="account">
          <p>{user?.email.slice(0, 1).toUpperCase()}</p>
        </div>
      </div>

{showq ? <div className="qui">
  {row.map(i => {
 return <div onClick={() => {
setShowq(!showq)
 }}>
<p>{i.type}</p>
   
   
    </div>

})}

</div>

: <div className="quiz">
      
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>

}


    
   
    <div className="hh"></div>
    <NavBar />
    </>
  );
};

export default Quiz;
