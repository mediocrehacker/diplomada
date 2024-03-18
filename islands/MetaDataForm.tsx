import { useReducer } from "preact/hooks";

type PKH = string;

type Student = {
  name?: string;
  image?: string;
  document?: string;
  address?: Email | PKH;
};

type State = {
  orgName: string;
  orgDesc: string;
  courseName: string;
  courseDesc: string;
  startDate: Date | null;
  endDate: Date | null;
  students: Array<Students>;
  isModal: bool;
};

const testAppState: State = {
  orgName: "TU Delft",
  orgDesc: "The Delft University of Technology",
  courseName: "MSc Education: Blockchain Technology Certificate",
  courseDesc:
    "Blockchain technology represents a fundamental change in the way we think about computing. Economic incentives, security by design, and smart contracts are just some of the ideas that underpin this new and disruptive technology.",
  startDate: null,
  endDate: null,
  students: [],
  isModal: false,
};

const initialAppState: State = {
  orgName: "",
  orgDesc: "",
  courseName: "",
  courseDesc: "",
  startDate: null,
  endDate: null,
  students: [],
  isModal: false,
};

const reducer = (state, action) => {
  console.log(state.students);
  console.log(action.payload);

  switch (action.type) {
    case "toggleModal":
      return { ...state, isModal: !state.isModal };
    case "addStudent":
      return {
        ...state,
        students: state.students.concat(action.payload),
        isModal: true,
      };
    case "removeStudent":
      return state;
    case "reset":
      return state;
    default:
      throw new Error("Unexpected action");
  }
};

export default function Connect(props: { blockfrost: string }) {
  const [state, dispatch] = useReducer<State>(reducer, testAppState);
  const student = {};
  const toggle = () => dispatch({ type: "toggleModal" });
  // const addStudent = (student) =>
  //   dispatch({ type: "addStudent", payload: student });

  return (
    <>
      <div class="flex w-full">
        <div class="w-1/2 flex flex-col gap-8">
          <div class="">
            <Input label="Organization Name" />
            <Input label="Organization Description" />
            <Input label="Course Name" />
            <Input label="Course Description" />
          </div>
          <div class="">
            <div class="flex gap-8 justify-contest-start">
              <p class="m-auto mx-4 text-lg">Students</p>
              <button
                onClick={() => dispatch({ type: "toggleModal" })}
                className="btn btn-square btn-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                  />
                </svg>
              </button>
            </div>
            <Table students={state.students} />
          </div>
        </div>
        <div class="w-1/2">MetaData Ouptut</div>
      </div>
      <div>
        <Modal isLoading={state.isModal} toggle={toggle} dispatch={dispatch} />
      </div>
    </>
  );
}

const Table = (props: { students: Student[] }) => (
  <div className="overflow-x-auto">
    <table className="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>image</th>
          <th>document</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student, index) => (
          <Row index={(index = index + 1)} student={student} />
        ))}
      </tbody>
    </table>
  </div>
);

const Row = ({ index, name, thumbnail, document, pkh }) => (
  <tr key={index}>
    <th>{index}</th>
    <td>{name}</td>
    <td>{thumbnail}</td>
    <td>{document}</td>
    <td>{pkh}</td>
  </tr>
);
const Input = ({ label }) => (
  <div class="w-11/12">
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input type="text" className="input input-bordered w-full" />
    </label>
  </div>
);
const Modal = ({ isLoading, toggle, dispatch }) => {
  const addStudent = () => dispatch({ type: "addStudent", payload: [{}] });
  return (
    <dialog id="modal_student" className="modal" open={isLoading}>
      <div className="modal-box">
        <button
          onClick={toggle}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Student</h3>
        <Input label="Student Name" />
        <Input label="Image IPFS Link" />
        <Input label="Document Image IPFS Link" />
        <Input label="Cardano Address or Email Address" />
        <div className="modal-action">
          <button onClick={addStudent} className="btn">
            Add Student
          </button>
        </div>
      </div>
    </dialog>
  );
};
