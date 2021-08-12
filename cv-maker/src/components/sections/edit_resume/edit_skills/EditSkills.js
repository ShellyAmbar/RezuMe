import { colors } from "@material-ui/core";
import React, { Component } from "react";
import "./EditSkills.css";

class EditSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coclors: [
        colors.red[900],
        colors.cyan[900],
        colors.amber[900],
        colors.common.black,
        colors.green[900],
        colors.indigo[900],
        colors.lightBlue[900],
        colors.grey[900],
        colors.brown[900],
        colors.cyan[900],
        colors.deepOrange[900],
        colors.deepPurple[900],
      ],
      skills: [
        "React",
        "Node js",
        "C",
        "C#",
        "C++",
        "Java",
        "Kotlin",
        "MongoDB",
        "AWS",
      ],
    };
    this.inputRef = React.createRef();
  }
  removeSkill = (i) => {
    const skills = this.state.skills;
    skills.splice(i, 1);
    this.setState({
      skills: skills,
    });
  };

  addSkill = (e) => {
    const skills = this.state.skills;
    const value = e.target.value;
    if (e.key == "Enter" && value) {
      if (skills.find((skill) => skill.toLowerCase() === value.toLowerCase())) {
        return alert("There is allready skill like this.");
      }
      skills.push(value);
      this.setState({
        skills: skills,
      });
      this.inputRef.current.value = null;
    } else if (e.key == "Backspace" && !value) {
      this.removeSkill(skills.length - 1);
    }
  };

  render() {
    const { skills } = this.state;
    return (
      <div className="skills-container">
        <h1> Edit your skills</h1>
        <div className="skill">
          <ul>
            {skills.map((skill, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "start",
                  }}
                >
                  <li
                    style={{
                      background: this.state.coclors[
                        (skills.length - 1) % index
                      ],
                    }}
                    key={index}
                  >
                    {skill}{" "}
                  </li>
                  <button
                    className="button"
                    onClick={() => this.removeSkill(index)}
                  >
                    +
                  </button>
                </div>
              );
            })}
            <li
              style={{
                background: this.state.coclors[skills.length - 1],
              }}
              className="input-skill"
            >
              <input
                style={{
                  background: this.state.coclors[skills.length - 1],
                }}
                placeholder="Enter new skill"
                onKeyDown={this.addSkill}
                type="text"
                size="4"
                ref={this.inputRef}
              ></input>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default EditSkills;
