// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';


// https://github.com/ai/nanoid/issues/363
jest.mock("nanoid", () => { return {
    nanoid : ()=>{}
  } });