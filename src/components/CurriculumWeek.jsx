import React from 'react'

const styles = [
    "week-default",
    "week-launch",
    "week-rest"
]


export default function CurriculumWeek(props) {

const {week, title, text, task, weekStyle} = props

const checkWeekStyle = styles.includes(weekStyle) ? weekStyle : styles[0]

  return (
    <div className={`curriculum-week ${checkWeekStyle}`}>
      {week != null && 
        <div className='typography-body2'>{week}</div>
      }
      {title != null && 
        <h4>{title}</h4>
      }
      {text != null && 
        <p className='typography-body'>{text}</p>
      }
      {task != null && 
        <p className='typography-body2'>{task}</p>
      }
    </div>
  )
}
