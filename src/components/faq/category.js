import React from "react"
import style from "./../../styles/faqs.module.sass"
import PropTypes from "prop-types"
import { Collapse } from "react-collapse"

import { Question } from "./../../schema.js"

export default class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: true,
      class: "fa fa-angle-down",
    }
  }

  render() {
    const self = this
    const updateClass = () => {
      this.setState((state, props) => {
        const newClass = !this.state.clicked
          ? "fa fa-angle-up"
          : "fa fa-angle-down"
        return {
          class: newClass,
          clicked: !this.state.clicked,
        }
      })
    }
    return (
      <div className={style.category} key={this.props.title}>
        <div id={style.categoryTitle}>
          <span>{this.props.title}</span>
          <span className={style.titleUnderBar} />
        </div>
        <a
          role="button"
          data-toggle="collapse"
          aria-controls={collapseId}
          aria-expanded="false"
          href={`#${collapseId}`}
        >
          <i className={this.state.class} onClick={updateClass} />
        </a>
      <Collapse isOpened={this.state.isOpened}>
          <div className={style.faqs} id={collapseId}>
            {this.props.questions.map((question, i) => (
              <div className={style.faq} key={style.question + i}>
                <div className={style.question} key={style.question}>
                  <span className={style.Q}>Q:</span>
                  <span> {question.question}</span>
                </div>
                <div className={style.answer} key={style.answer}>
                  <span className={style.A}>A:</span>
                  <span> {question.answer}</span>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.exact(Question)).isRequired,
}
