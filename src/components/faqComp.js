import React,{Fragment} from 'react'

import styled from 'styled-components'
import media from 'utils/media-queries'
import {color, fontSize } from 'styles/theme'

const Big = styled.span`
font-size: ${fontSize.f6};
color: ${color.grey900};
font-weight: 700;
letter-spacing: -0.4px;
line-height: 1.35;
${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
`}
${media.sm`
    font-size: ${fontSize.f5};
`}
`

function FaqComp(props) {
    return (
        <Fragment>
            <Big>{props.ques}</Big>
            <p>{props.ans}</p>
            <p>{props.link}</p>
        </Fragment>
    )
}

export default FaqComp