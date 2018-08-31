import commentsReducers from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = commentsReducers([], action);

  expect(newState).toEqual(["New comment"]);
});

it("handles action with unknow type", () => {
  const newState = commentsReducers([], { type: "THIS_IS_AN_UNKNOWN_TYPE" });

  expect(newState).toEqual([]);
});
