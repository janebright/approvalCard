import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Canan"
          date="Today 6:00pm"
          comment="Nice Blog!"
          imgSource={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Osman"
          date="Today 9:00pm"
          comment="Well done!"
          imgSource={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ahmet"
          date="Yesterday 2:00am"
          comment="I liked it!"
          imgSource={faker.image.sports()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
