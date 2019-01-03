// @flow

import React from 'react'
import type { MilestoneMap } from '../constants'

type Props = {
  // milestoneByTrack: MilestoneMap,
  // currentTitle: String,
  // setTitleFn: (string) => void
}

class Exempl extends React.Component {
  render() {
    return <form>
      <label>Explain and exemplify your level:</label> <br />
      <textarea placeholder="Provide concrete evidence that supports the level you have chosen. Which tasks/projects/behaviours have you demonstrated?"></textarea>
    </form>
  }
}

export default Exempl
