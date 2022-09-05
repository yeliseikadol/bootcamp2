import React from 'react'

const colors = [
    "schedule-green",
    "schedule-blue",
    "schedule-red",
    "schedule-gray"
]

const sizes = [
    "schedule-big",
    "schedule-small"
]

export default function ScheduleItem(props) {

const {dayColor, children, daySize} = props

const checkStyles = colors.includes(dayColor) ? dayColor : colors[0]
const checkSizes = sizes.includes(daySize) ? daySize : sizes[0]

    return (
        <div className={`schedule-item ${checkStyles} ${checkSizes}`}>
            { children }
        </div>
    )
}
