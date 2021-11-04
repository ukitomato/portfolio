import * as React from "react"
import { ReactElement } from "react"

const ColoredLine = (props: {
  color: string
  className: string
}): ReactElement => (
  <hr
    className={props.className}
    style={{
      borderRadius: "2.5px",
      height: "5px",
      width: "100%",
      color: props.color,
      backgroundColor: props.color
    }}
  />
)

export default ColoredLine
