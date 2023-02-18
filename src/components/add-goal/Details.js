import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { TYPES } from "../../actions/toDoActions";
import ToDoContext from "../../context/ToDoContext";
import { useForm } from "../../hooks/useForm";
import styles from "./details.module.css";

const frequencyOptions = [
  {
    value: "daily",
    option: "per day",
  },
  {
    value: "weekly",
    option: "per week",
  },
  {
    value: "monthly",
    option: "per month",
  },
  {
    value: "yearly",
    option: "per year",
  },
];
const iconOptions = [
  "🧑‍💻",
  "🧎",
  "🏃",
  "🧘",
  "🚴",
  "🎁",
  "🏀",
  "⚽",
  "📖",
  "🎮",
  "💊",
  "🥗",
];

const initialForm = {
  id: "",
  details: "",
  period: "per day",
  events: "",
  icon: "👨‍💻",
};

const Details = () => {
  const { form, setForm, errors, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm);
  const [state, dispatch] = useContext(ToDoContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const currentObject = state.objects[id];

  useEffect(() => {
    if (!id) return;

    if (!currentObject) {
      return navigate("/404");
    }

    setForm(currentObject);
  }, [id, currentObject, navigate, setForm]);

  const deleteGoal = () => {
    dispatch({ type: TYPES.DELETE_GOAL, payload: form.id });
    navigate("/");
  };

  return (
    <div className="card bg-slate-200">
      <form onSubmit={handleSubmit}>
        <label className="label pt-4" htmlFor="details">
          Describe your goal
          <input
            className="input"
            type="text"
            name="details"
            id="details"
            required
            value={form.details}
            placeholder="ej.walk for 30 minutes"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        {errors.details && <p className={styles.error}>{errors.details}</p>}
        <label className="label">
          How often do you want to meet your goal?
          <span className="font-normal lowercase">(ej. 1 per day)</span>
          <div className="flex">
            <input
              placeholder="1"
              className="input mr-4"
              type="number"
              name="events"
              id="events"
              required
              value={form.events}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              className="rounded-md input"
              name="period"
              value={form.period}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {frequencyOptions.map((frequency, index) => (
                <option key={index} value={frequency.value}>
                  {frequency.option}
                </option>
              ))}
            </select>
          </div>
        </label>
        {errors.events && <p className={styles.error}>{errors.events}</p>}
        <label className="label mb-4">
          Choose an icon for your goal
          <select
            className="input"
            name="icon"
            id="icon"
            value={form.icon}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {iconOptions.map((icon, index) => (
              <option key={index} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </label>
        <div className={styles.form_container_btn}>
          {!id && (
            <input
              type="submit"
              value="Create"
              className="btn btn_green cursor-pointer"
            />
          )}
          {id && (
            <button className="btn btn_red" onClick={deleteGoal}>
              Delete
            </button>
          )}
          {id && (
            <input
              type="submit"
              className="btn btn_green cursor-pointer"
              value="Update"
            />
          )}
          <button className="btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
